import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  carrinhoBtn: {
    padding: 8,
    backgroundColor: 'rgba(52, 152, 219, 0.1)',
    borderRadius: 8,
  },
  buscaInput: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#FFF',
    fontSize: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    marginBottom: 12,
  },
  categoriasContainer: {
    marginBottom: 16,
  },
  categoriaItem: {
    alignItems: 'center',
    padding: 12,
    borderRadius: 12,
    marginRight: 8,
    minWidth: 80,
  },
  categoriaIcone: {
    fontSize: 20,
    marginBottom: 4,
  },
  categoriaNome: {
    fontSize: 12,
    textAlign: 'center',
  },
  categoriaSelecionada: {
    fontWeight: 'bold',
    color: '#FFF',
  },
  listaProdutos: {
    paddingBottom: 20,
  },
  produtoCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginBottom: 8,
    backgroundColor: 'rgba(107, 142, 35, 0.05)',
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#6B8E23',
  },
  produtoInfo: {
    flex: 1,
  },
  produtoNome: {
    fontSize: 16,
    marginBottom: 4,
  },
  produtoPreco: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6B8E23',
    marginBottom: 2,
  },
  produtoEstoque: {
    fontSize: 12,
    opacity: 0.7,
    marginBottom: 4,
  },
  produtoDescricao: {
    fontSize: 12,
    opacity: 0.6,
    fontStyle: 'italic',
  },
  botaoAdicionar: {
    backgroundColor: '#6B8E23',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  botaoDesabilitado: {
    backgroundColor: '#95a5a6',
  },
  botaoTexto: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 12,
  },
  vazio: {
    alignItems: 'center',
    padding: 40,
    opacity: 0.5,
  },
  vazioTexto: {
    textAlign: 'center',
  },
  voltarLink: {
    marginTop: 20,
    padding: 16,
    alignItems: 'center',
  },
});