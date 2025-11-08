// app/(tabs)/explore.tsx - COMPLETO COM SQLITE
import React, { useState, useEffect } from 'react';
import { 
  ScrollView, 
  TouchableOpacity, 
  View, 
  TextInput,
  Alert,
  Modal,
  FlatList,
  AppState,
  AppStateStatus
} from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { exploreStyles as styles } from '../../style/exploreStyles';
import { produtos as produtosData, Produto } from '../../data/produtos';
import { 
  Promocao, 
  HistoricoPromocao,
  inicializarBanco,
  criarPromocao, 
  buscarTodasPromocoes,
  buscarHistoricoCompleto,
  atualizarPromocao,
  excluirPromocao,
  atualizarStatusPromocoes,
  obterEstatisticasPromocoes
} from '../../services/promocaoService';

export default function PromocoesScreen() {
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null);
  const [desconto, setDesconto] = useState('');
  const [dataInicio, setDataInicio] = useState('');
  const [dataFim, setDataFim] = useState('');
  const [modalProdutos, setModalProdutos] = useState(false);
  const [termoBusca, setTermoBusca] = useState('');
  const [promocoes, setPromocoes] = useState<Promocao[]>([]);
  const [historico, setHistorico] = useState<HistoricoPromocao[]>([]);
  const [abaAtiva, setAbaAtiva] = useState<'ativas' | 'expiradas' | 'historico' | 'estatisticas'>('ativas');
  const [estatisticas, setEstatisticas] = useState({
    total: 0,
    ativas: 0,
    expiradas: 0,
    canceladas: 0
  });
  const [appState, setAppState] = useState(AppState.currentState);

  // Configurar listener do AppState
  useEffect(() => {
    const subscription = AppState.addEventListener('change', handleAppStateChange);
    return () => subscription.remove();
  }, []);

  const handleAppStateChange = async (nextAppState: AppStateStatus) => {
    if (appState.match(/inactive|background/) && nextAppState === 'active') {
      await carregarDados();
    }
    setAppState(nextAppState);
  };

  // Carregar todos os dados
  const carregarDados = async () => {
    try {
      await atualizarStatusPromocoes();
      
      const [todasPromocoes, historicoCompleto, stats] = await Promise.all([
        buscarTodasPromocoes(),
        buscarHistoricoCompleto(),
        obterEstatisticasPromocoes()
      ]);
      
      setPromocoes(todasPromocoes);
      setHistorico(historicoCompleto);
      setEstatisticas(stats);
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    }
  };

  // Inicializar banco e carregar dados
  useEffect(() => {
    const inicializar = async () => {
      try {
        await inicializarBanco();
        await carregarDados();
        
        // Configurar atualização automática de status a cada 5 minutos
        const interval = setInterval(async () => {
          if (appState === 'active') {
            await carregarDados();
          }
        }, 300000); // 5 minutos
        
        return () => clearInterval(interval);
      } catch (error) {
        console.error('Erro ao inicializar banco:', error);
        Alert.alert('Erro', 'Não foi possível inicializar o banco de dados.');
      }
    };

    inicializar();
  }, [appState]);

  // Filtrar produtos para busca
  const produtosFiltrados = produtosData.filter(produto =>
    produto.nome.toLowerCase().includes(termoBusca.toLowerCase()) ||
    produto.marca?.toLowerCase().includes(termoBusca.toLowerCase())
  );

  // Validar e formatar desconto
  const handleDescontoChange = (text: string) => {
    const numeros = text.replace(/[^0-9]/g, '');
    if (numeros && parseInt(numeros) > 100) {
      setDesconto('100');
    } else {
      setDesconto(numeros);
    }
  };

  // Validar data no formato DD/MM/AAAA
  const validarData = (data: string) => {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!regex.test(data)) return false;

    const [dia, mes, ano] = data.split('/').map(Number);
    const dataObj = new Date(ano, mes - 1, dia);
    
    return dataObj.getDate() === dia && 
           dataObj.getMonth() === mes - 1 && 
           dataObj.getFullYear() === ano;
  };

  // Formatar data para exibição
  const formatarData = (data: string) => {
    const [ano, mes, dia] = data.split('-');
    return `${dia}/${mes}/${ano}`;
  };

  // Calcular dias restantes para promoção acabar
  const calcularDiasRestantes = (dataFim: string) => {
    const hoje = new Date();
    const fim = new Date(dataFim);
    const diffTime = fim.getTime() - hoje.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // Criar nova promoção
  const handleCriarPromocao = async () => {
    if (!produtoSelecionado || !desconto) {
      Alert.alert('Atenção', 'Preencha todos os campos obrigatórios');
      return;
    }

    if (parseInt(desconto) < 1 || parseInt(desconto) > 100) {
      Alert.alert('Atenção', 'O desconto deve ser entre 1% e 100%');
      return;
    }

    if (dataInicio && !validarData(dataInicio)) {
      Alert.alert('Atenção', 'Data de início inválida. Use o formato DD/MM/AAAA');
      return;
    }

    if (dataFim && !validarData(dataFim)) {
      Alert.alert('Atenção', 'Data de fim inválida. Use o formato DD/MM/AAAA');
      return;
    }

    try {
      // Converter datas para formato YYYY-MM-DD
      const dataInicioFormatada = dataInicio ? 
        dataInicio.split('/').reverse().join('-') : 
        new Date().toISOString().split('T')[0];
      
      const dataFimFormatada = dataFim ? 
        dataFim.split('/').reverse().join('-') : 
        new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

      await criarPromocao({
        produtoId: produtoSelecionado.id,
        produtoNome: produtoSelecionado.nome,
        desconto: parseInt(desconto),
        dataInicio: dataInicioFormatada,
        dataFim: dataFimFormatada,
        dataCriacao: new Date().toISOString().split('T')[0]
      });

      await carregarDados();

      Alert.alert(
        'Promoção Criada!',
        `Promoção de ${desconto}% criada para ${produtoSelecionado.nome}.`,
        [{ text: 'OK', style: 'default' }]
      );

      // Limpar formulário
      setProdutoSelecionado(null);
      setDesconto('');
      setDataInicio('');
      setDataFim('');
    } catch (error) {
      console.error('Erro ao criar promoção:', error);
      Alert.alert('Erro', 'Não foi possível criar a promoção. Tente novamente.');
    }
  };

  // Excluir promoção
  const handleExcluirPromocao = async (promocao: Promocao) => {
    Alert.alert(
      'Excluir Promoção',
      `Deseja excluir a promoção de ${promocao.desconto}% para ${promocao.produtoNome}?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: async () => {
            try {
              await excluirPromocao(promocao.id);
              await carregarDados();
              Alert.alert('Sucesso', 'Promoção excluída!');
            } catch (error) {
              console.error('Erro ao excluir promoção:', error);
              Alert.alert('Erro', 'Não foi possível excluir a promoção.');
            }
          }
        }
      ]
    );
  };

  // Editar promoção - CORRIGIDO: parâmetro com tipo
  const handleEditarPromocao = async (promocao: Promocao) => {
    Alert.prompt(
      'Editar Desconto',
      `Digite o novo percentual de desconto para ${promocao.produtoNome}:`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Salvar',
          onPress: async (novoDesconto: string | undefined) => { // CORREÇÃO: tipo definido
            if (novoDesconto && !isNaN(parseInt(novoDesconto)) && parseInt(novoDesconto) >= 1 && parseInt(novoDesconto) <= 100) {
              try {
                await atualizarPromocao(promocao.id, {
                  desconto: parseInt(novoDesconto)
                });
                await carregarDados();
                Alert.alert('Sucesso', 'Promoção atualizada!');
              } catch (error) {
                console.error('Erro ao atualizar promoção:', error);
                Alert.alert('Erro', 'Não foi possível atualizar a promoção.');
              }
            } else {
              Alert.alert('Erro', 'Digite um valor válido entre 1 e 100.');
            }
          }
        }
      ],
      'plain-text',
      promocao.desconto.toString()
    );
  };

  // Componente de item de produto - CORRIGIDO: usando estilos inline
  const ProdutoItem = ({ produto }: { produto: Produto }) => (
    <TouchableOpacity 
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 8,
        borderWidth: 1,
        borderColor: '#e9ecef'
      }}
      onPress={() => {
        setProdutoSelecionado(produto);
        setModalProdutos(false);
        setTermoBusca('');
      }}
    >
      <MaterialIcons name="shopping-basket" size={24} color="#28a745" />
      <View style={{ marginLeft: 12, flex: 1 }}>
        <ThemedText style={{ fontSize: 16, fontWeight: '600' }}>{produto.nome}</ThemedText>
        {produto.marca && (
          <ThemedText style={{ fontSize: 12, color: '#6c757d', marginTop: 2 }}>
            {produto.marca} • {produto.categoria}
          </ThemedText>
        )}
      </View>
    </TouchableOpacity>
  );

  // Componente de item de promoção - CORRIGIDO: usando estilos inline
  const PromocaoItem = ({ promocao }: { promocao: Promocao }) => {
    const diasRestantes = calcularDiasRestantes(promocao.dataFim);
    const estaAtiva = promocao.status === 'ativa';
    
    return (
      <ThemedView style={[
        {
          backgroundColor: '#fff',
          padding: 16,
          borderRadius: 12,
          marginBottom: 12,
          borderWidth: 2,
          borderColor: estaAtiva ? '#28a745' : '#dc3545'
        },
        estaAtiva ? { borderColor: '#28a745' } : { borderColor: '#dc3545' }
      ]}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
          <View style={{ flex: 1 }}>
            <ThemedText type="defaultSemiBold">
              {promocao.produtoNome}
              <View style={{
                backgroundColor: estaAtiva ? '#28a745' : '#dc3545',
                paddingHorizontal: 8,
                paddingVertical: 2,
                borderRadius: 10,
                marginLeft: 8
              }}>
                <ThemedText style={{ color: '#fff', fontSize: 10, fontWeight: '600' }}>
                  {estaAtiva ? 
                    (diasRestantes <= 3 ? `⏰ ${diasRestantes}d` : 'ATIVA') : 
                    'EXPIRADA'}
                </ThemedText>
              </View>
            </ThemedText>
            <ThemedText style={{ fontSize: 14, color: '#495057', marginTop: 4 }}>
              Desconto: {promocao.desconto}%
            </ThemedText>
          </View>
          
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <TouchableOpacity 
              style={{
                backgroundColor: '#fff3cd',
                padding: 6,
                borderRadius: 6,
                borderWidth: 1,
                borderColor: '#ffc107'
              }}
              onPress={() => handleEditarPromocao(promocao)}
            >
              <MaterialIcons name="edit" size={18} color="#ffc107" />
            </TouchableOpacity>
            <TouchableOpacity 
              style={{
                backgroundColor: '#f8d7da',
                padding: 6,
                borderRadius: 6,
                borderWidth: 1,
                borderColor: '#dc3545'
              }}
              onPress={() => handleExcluirPromocao(promocao)}
            >
              <MaterialIcons name="delete" size={18} color="#dc3545" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ borderTopWidth: 1, borderTopColor: '#e9ecef', paddingTop: 12 }}>
          <ThemedText style={{ fontSize: 14, color: '#495057', marginBottom: 4 }}>
            Início: {formatarData(promocao.dataInicio)}
          </ThemedText>
          <ThemedText style={{ fontSize: 14, color: '#495057', marginBottom: 4 }}>
            Fim: {formatarData(promocao.dataFim)} 
            {estaAtiva && diasRestantes > 0 && (
              <ThemedText style={{ color: '#dc3545', fontWeight: '600' }}>
                {' '}({diasRestantes} dia{diasRestantes !== 1 ? 's' : ''} restante{diasRestantes !== 1 ? 's' : ''})
              </ThemedText>
            )}
          </ThemedText>
          <ThemedText style={{ fontSize: 11, color: '#6c757d' }}>
            Criada em: {formatarData(promocao.dataCriacao)}
          </ThemedText>
        </View>
      </ThemedView>
    );
  };

  // Componente de item do histórico - CORRIGIDO: usando estilos inline
  const HistoricoItem = ({ item }: { item: HistoricoPromocao }) => (
    <ThemedView style={{
      backgroundColor: '#fff',
      padding: 16,
      borderRadius: 12,
      marginBottom: 12,
      borderWidth: 1,
      borderColor: '#e9ecef'
    }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
        <View style={{ flex: 1 }}>
          <ThemedText type="defaultSemiBold">{item.produtoNome}</ThemedText>
          <ThemedText style={{ fontSize: 14, color: '#495057', marginTop: 4 }}>
            Desconto: {item.desconto}%
          </ThemedText>
        </View>
        <View style={{
          backgroundColor: 
            item.acao === 'criada' ? '#28a745' :
            item.acao === 'expirada' ? '#dc3545' : '#6c757d',
          paddingHorizontal: 8,
          paddingVertical: 2,
          borderRadius: 10
        }}>
          <ThemedText style={{ color: '#fff', fontSize: 10, fontWeight: '600' }}>
            {item.acao.toUpperCase()}
          </ThemedText>
        </View>
      </View>

      <View style={{ borderTopWidth: 1, borderTopColor: '#e9ecef', paddingTop: 12 }}>
        <ThemedText style={{ fontSize: 14, color: '#495057', marginBottom: 4 }}>
          Período: {formatarData(item.dataInicio)} até {formatarData(item.dataFim)}
        </ThemedText>
        <ThemedText style={{ fontSize: 11, color: '#6c757d' }}>
          {item.acao} em: {formatarData(item.dataAcao)}
        </ThemedText>
      </View>
    </ThemedView>
  );

  return (
    <ThemedView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <ThemedText style={{ fontSize: 24, fontWeight: 'bold', color: '#fff', marginBottom: 4 }}>
          <MaterialIcons name="local-offer" size={28} color="#fff" /> Gerenciar Promoções
        </ThemedText>
        <ThemedText style={{ fontSize: 14, opacity: 0.8, color: '#fff', marginTop: 4 }}>
          Crie e acompanhe suas promoções
        </ThemedText>
      </View>

      <ScrollView style={{ flex: 1, padding: 16 }}>
        {/* Formulário de Criação */}
        <ThemedView style={{
          backgroundColor: '#fff',
          padding: 20,
          borderRadius: 12,
          marginBottom: 20,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3
        }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
            <MaterialIcons name="add-business" size={20} color="#28a745" />
            <ThemedText type="subtitle" style={{ marginLeft: 8 }}>Nova Promoção</ThemedText>
          </View>

          {/* Seleção de Produto */}
          <View style={{ marginBottom: 16 }}>
            <ThemedText style={{ fontSize: 14, fontWeight: '600', marginBottom: 8, color: '#28a745' }}>
              <MaterialIcons name="inventory" size={14} color="#28a745" /> Selecione o Produto *
            </ThemedText>
            <TouchableOpacity 
              style={{
                borderWidth: 1,
                borderColor: '#ced4da',
                borderRadius: 8,
                padding: 12,
                backgroundColor: '#f8f9fa'
              }}
              onPress={() => setModalProdutos(true)}
            >
              <ThemedText style={
                produtoSelecionado ? 
                { color: '#495057' } : 
                { color: '#6c757d' }
              }>
                {produtoSelecionado ? produtoSelecionado.nome : 'Toque para selecionar um produto...'}
              </ThemedText>
            </TouchableOpacity>
          </View>

          {/* Percentual de Desconto */}
          <View style={{ marginBottom: 16 }}>
            <ThemedText style={{ fontSize: 14, fontWeight: '600', marginBottom: 8, color: '#28a745' }}>
              <MaterialIcons name="percent" size={14} color="#28a745" /> Percentual de Desconto *
            </ThemedText>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: '#ced4da',
                borderRadius: 8,
                padding: 12,
                backgroundColor: '#fff',
                fontSize: 16
              }}
              placeholder="Ex: 15"
              value={desconto}
              onChangeText={handleDescontoChange}
              keyboardType="numeric"
              placeholderTextColor="#6c757d"
              maxLength={3}
            />
            <ThemedText style={{ fontSize: 12, color: '#6c757d', marginTop: 4 }}>
              Digite um valor entre 1 e 100 (apenas números)
            </ThemedText>
          </View>

          {/* Datas da Promoção */}
          <View style={{ flexDirection: 'row', gap: 12 }}>
            <View style={{ flex: 1 }}>
              <ThemedText style={{ fontSize: 14, fontWeight: '600', marginBottom: 8, color: '#28a745' }}>
                <MaterialIcons name="calendar-today" size={14} color="#28a745" /> Data Início
              </ThemedText>
              <TextInput
                style={{
                  borderWidth: 1,
                  borderColor: '#ced4da',
                  borderRadius: 8,
                  padding: 12,
                  backgroundColor: '#fff',
                  fontSize: 16
                }}
                placeholder="DD/MM/AAAA"
                value={dataInicio}
                onChangeText={setDataInicio}
                placeholderTextColor="#6c757d"
              />
              <ThemedText style={{ fontSize: 12, color: '#6c757d', marginTop: 4 }}>
                Deixe em branco para hoje
              </ThemedText>
            </View>

            <View style={{ flex: 1 }}>
              <ThemedText style={{ fontSize: 14, fontWeight: '600', marginBottom: 8, color: '#28a745' }}>
                <MaterialIcons name="event-available" size={14} color="#28a745" /> Data Fim
              </ThemedText>
              <TextInput
                style={{
                  borderWidth: 1,
                  borderColor: '#ced4da',
                  borderRadius: 8,
                  padding: 12,
                  backgroundColor: '#fff',
                  fontSize: 16
                }}
                placeholder="DD/MM/AAAA"
                value={dataFim}
                onChangeText={setDataFim}
                placeholderTextColor="#6c757d"
              />
              <ThemedText style={{ fontSize: 12, color: '#6c757d', marginTop: 4 }}>
                Deixe em branco para 7 dias
              </ThemedText>
            </View>
          </View>

          {/* Botão Criar Promoção */}
          <TouchableOpacity 
            style={{
              backgroundColor: '#28a745',
              padding: 16,
              borderRadius: 8,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 20
            }} 
            onPress={handleCriarPromocao}
          >
            <MaterialIcons name="add-circle" size={20} color="#fff" />
            <ThemedText style={{ color: '#fff', fontWeight: '600', marginLeft: 8 }}>
              Criar Promoção
            </ThemedText>
          </TouchableOpacity>
        </ThemedView>

        {/* Abas de Navegação */}
        <ThemedView style={{
          backgroundColor: '#fff',
          padding: 20,
          borderRadius: 12,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3
        }}>
          <View style={{ flexDirection: 'row', marginBottom: 16, backgroundColor: '#f8f9fa', borderRadius: 12, padding: 4 }}>
            <TouchableOpacity 
              style={[
                { flex: 1, padding: 8, borderRadius: 8, alignItems: 'center' },
                abaAtiva === 'ativas' && { backgroundColor: '#28a745' }
              ]}
              onPress={() => setAbaAtiva('ativas')}
            >
              <ThemedText style={[
                { fontSize: 12, fontWeight: '600' },
                abaAtiva === 'ativas' && { color: '#fff' }
              ]}>
                Ativas ({estatisticas.ativas})
              </ThemedText>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[
                { flex: 1, padding: 8, borderRadius: 8, alignItems: 'center' },
                abaAtiva === 'expiradas' && { backgroundColor: '#28a745' }
              ]}
              onPress={() => setAbaAtiva('expiradas')}
            >
              <ThemedText style={[
                { fontSize: 12, fontWeight: '600' },
                abaAtiva === 'expiradas' && { color: '#fff' }
              ]}>
                Expiradas ({estatisticas.expiradas + estatisticas.canceladas})
              </ThemedText>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[
                { flex: 1, padding: 8, borderRadius: 8, alignItems: 'center' },
                abaAtiva === 'historico' && { backgroundColor: '#28a745' }
              ]}
              onPress={() => setAbaAtiva('historico')}
            >
              <ThemedText style={[
                { fontSize: 12, fontWeight: '600' },
                abaAtiva === 'historico' && { color: '#fff' }
              ]}>
                Histórico
              </ThemedText>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[
                { flex: 1, padding: 8, borderRadius: 8, alignItems: 'center' },
                abaAtiva === 'estatisticas' && { backgroundColor: '#28a745' }
              ]}
              onPress={() => setAbaAtiva('estatisticas')}
            >
              <ThemedText style={[
                { fontSize: 12, fontWeight: '600' },
                abaAtiva === 'estatisticas' && { color: '#fff' }
              ]}>
                Estatísticas
              </ThemedText>
            </TouchableOpacity>
          </View>

          {/* Conteúdo das Abas */}
          {abaAtiva === 'ativas' && (
            <View>
              {promocoes.filter(p => p.status === 'ativa').length > 0 ? (
                promocoes.filter(p => p.status === 'ativa').map(promocao => (
                  <PromocaoItem key={promocao.id} promocao={promocao} />
                ))
              ) : (
                <ThemedView style={{
                  alignItems: 'center',
                  padding: 40,
                  backgroundColor: '#f8f9fa',
                  borderRadius: 12
                }}>
                  <Ionicons name="pricetag-outline" size={48} color="#6c757d" />
                  <ThemedText style={{ fontSize: 16, fontWeight: '600', color: '#6c757d', marginTop: 12 }}>
                    Nenhuma promoção ativa
                  </ThemedText>
                  <ThemedText style={{ fontSize: 14, color: '#6c757d', marginTop: 8, textAlign: 'center' }}>
                    Crie sua primeira promoção para atrair mais clientes
                  </ThemedText>
                </ThemedView>
              )}
            </View>
          )}

          {abaAtiva === 'expiradas' && (
            <View>
              {promocoes.filter(p => p.status !== 'ativa').length > 0 ? (
                promocoes.filter(p => p.status !== 'ativa').map(promocao => (
                  <PromocaoItem key={promocao.id} promocao={promocao} />
                ))
              ) : (
                <ThemedView style={{
                  alignItems: 'center',
                  padding: 40,
                  backgroundColor: '#f8f9fa',
                  borderRadius: 12
                }}>
                  <Ionicons name="pricetag-outline" size={48} color="#6c757d" />
                  <ThemedText style={{ fontSize: 16, fontWeight: '600', color: '#6c757d', marginTop: 12 }}>
                    Nenhuma promoção expirada
                  </ThemedText>
                  <ThemedText style={{ fontSize: 14, color: '#6c757d', marginTop: 8, textAlign: 'center' }}>
                    Todas as suas promoções estão ativas!
                  </ThemedText>
                </ThemedView>
              )}
            </View>
          )}

          {abaAtiva === 'historico' && (
            <View>
              {historico.length > 0 ? (
                historico.map(item => (
                  <HistoricoItem key={item.id} item={item} />
                ))
              ) : (
                <ThemedView style={{
                  alignItems: 'center',
                  padding: 40,
                  backgroundColor: '#f8f9fa',
                  borderRadius: 12
                }}>
                  <Ionicons name="time-outline" size={48} color="#6c757d" />
                  <ThemedText style={{ fontSize: 16, fontWeight: '600', color: '#6c757d', marginTop: 12 }}>
                    Nenhum registro no histórico
                  </ThemedText>
                  <ThemedText style={{ fontSize: 14, color: '#6c757d', marginTop: 8, textAlign: 'center' }}>
                    O histórico aparecerá aqui quando você criar promoções
                  </ThemedText>
                </ThemedView>
              )}
            </View>
          )}

          {abaAtiva === 'estatisticas' && (
            <View>
              <ThemedView style={[
                {
                  backgroundColor: '#fff',
                  padding: 16,
                  borderRadius: 12,
                  marginBottom: 12,
                  borderWidth: 1,
                  borderColor: '#e9ecef'
                },
                { backgroundColor: 'rgba(40, 167, 69, 0.1)' }
              ]}>
                <ThemedText type="defaultSemiBold" style={{ marginBottom: 8 }}>📊 Estatísticas de Promoções</ThemedText>
                <ThemedText style={{ fontSize: 14, color: '#495057', marginBottom: 4 }}>Total de Promoções: {estatisticas.total}</ThemedText>
                <ThemedText style={{ fontSize: 14, color: '#495057', marginBottom: 4 }}>Promoções Ativas: {estatisticas.ativas}</ThemedText>
                <ThemedText style={{ fontSize: 14, color: '#495057', marginBottom: 4 }}>Promoções Expiradas: {estatisticas.expiradas}</ThemedText>
                <ThemedText style={{ fontSize: 14, color: '#495057', marginBottom: 4 }}>Promoções Canceladas: {estatisticas.canceladas}</ThemedText>
              </ThemedView>
            </View>
          )}
        </ThemedView>
      </ScrollView>

      {/* Modal de Seleção de Produtos */}
      <Modal
        visible={modalProdutos}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalProdutos(false)}
      >
        <View style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.5)',
          justifyContent: 'center',
          padding: 20
        }}>
          <ThemedView style={{
            backgroundColor: '#fff',
            borderRadius: 12,
            padding: 20,
            maxHeight: '80%'
          }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
              <MaterialIcons name="search" size={20} color="#28a745" />
              <ThemedText type="subtitle" style={{ marginLeft: 8 }}>Selecionar Produto</ThemedText>
            </View>

            <TextInput
              style={{
                borderWidth: 1,
                borderColor: '#ced4da',
                borderRadius: 8,
                padding: 12,
                backgroundColor: '#fff',
                fontSize: 16,
                marginBottom: 16
              }}
              placeholder="Buscar produtos..."
              value={termoBusca}
              onChangeText={setTermoBusca}
              placeholderTextColor="#6c757d"
            />

            <FlatList
              data={produtosFiltrados}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <ProdutoItem produto={item} />}
              style={{ maxHeight: 300 }}
              showsVerticalScrollIndicator={false}
            />

            <TouchableOpacity 
              style={{
                backgroundColor: '#28a745',
                padding: 16,
                borderRadius: 8,
                alignItems: 'center',
                marginTop: 12
              }}
              onPress={() => setModalProdutos(false)}
            >
              <ThemedText style={{ color: '#fff', fontWeight: '600' }}>Cancelar</ThemedText>
            </TouchableOpacity>
          </ThemedView>
        </View>
      </Modal>
    </ThemedView>
  );
}