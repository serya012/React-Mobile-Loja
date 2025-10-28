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
    limparTexto: {
        color: '#e74c3c',
        fontWeight: 'bold',
    },
    lista: {
        flex: 1,
    },
    listaConteudo: {
        paddingBottom: 20,
    },
    itemCarrinho: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        marginBottom: 8,
        backgroundColor: 'rgba(52, 152, 219, 0.05)',
        borderRadius: 8,
        borderLeftWidth: 4,
        borderLeftColor: '#3498db',
    },
    itemInfo: {
        flex: 1,
    },
    itemPreco: {
        fontSize: 14,
        opacity: 0.7,
        marginTop: 2,
    },
    itemSubtotal: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#2ecc71',
        marginTop: 4,
    },
    controles: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    controleQuantidade: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(52, 152, 219, 0.1)',
        borderRadius: 8,
        padding: 4,
    },
    botaoQuantidade: {
        width: 32,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3498db',
        borderRadius: 6,
    },
    botaoQuantidadeTexto: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    quantidade: {
        marginHorizontal: 12,
        fontSize: 16,
        fontWeight: 'bold',
        minWidth: 20,
        textAlign: 'center',
    },
    botaoRemover: {
        padding: 8,
    },
    botaoRemoverTexto: {
        fontSize: 18,
    },
    carrinhoVazio: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
    },
    carrinhoVazioTexto: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        opacity: 0.7,
    },
    carrinhoVazioDescricao: {
        fontSize: 14,
        opacity: 0.5,
        marginBottom: 20,
        textAlign: 'center',
    },
    botaoCatalogo: {
        backgroundColor: '#3498db',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 8,
    },
    botaoCatalogoTexto: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    resumo: {
        padding: 16,
        backgroundColor: 'rgba(52, 152, 219, 0.1)',
        borderRadius: 12,
        marginTop: 16,
    },
    totalTexto: {
        fontSize: 20,
        color: '#2ecc71',
        textAlign: 'center',
        marginBottom: 4,
    },
    itensTexto: {
        textAlign: 'center',
        opacity: 0.7,
        marginBottom: 16,
    },
    botaoFinalizar: {
        backgroundColor: '#2ecc71',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    botaoFinalizarTexto: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    voltarLink: {
        marginTop: 20,
        padding: 16,
        alignItems: 'center',
    },
});