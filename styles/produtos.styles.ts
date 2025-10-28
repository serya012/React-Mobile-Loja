import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    scrollView: {
        flex: 1,
    },
    header: {
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 16,
        opacity: 0.7,
        marginTop: 5,
    },
    form: {
        gap: 12,
        marginBottom: 20,
        padding: 16,
        backgroundColor: 'rgba(107, 142, 35, 0.1)',
        borderRadius: 12,
    },
    input: {
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 8,
        padding: 12,
        backgroundColor: '#FFF',
        fontSize: 16,
    },
    row: {
        flexDirection: 'row',
        gap: 10,
    },
    halfInput: {
        flex: 1,
    },
    categoriasScroll: {
        marginHorizontal: -4,
    },
    categoriasContainer: {
        flexDirection: 'row',
        gap: 8,
        paddingVertical: 4,
    },
    categoriaOption: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 20,
        gap: 6,
    },
    categoriaOptionIcon: {
        fontSize: 14,
    },
    categoriaOptionText: {
        fontSize: 12,
        fontWeight: '500',
    },
    categoriaOptionSelected: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    listaContainer: {
        marginBottom: 20,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: 16,
        marginVertical: 6,
        backgroundColor: 'rgba(107, 142, 35, 0.05)',
        borderRadius: 8,
        borderLeftWidth: 4,
    },
    infoContainer: {
        flex: 1,
    },
    detalhes: {
        fontSize: 14,
        opacity: 0.7,
        marginTop: 2,
    },
    codigoBarras: {
        fontSize: 12,
        opacity: 0.5,
        marginTop: 2,
    },
    descricao: {
        fontSize: 12,
        opacity: 0.6,
        fontStyle: 'italic',
        marginTop: 2,
    },
    acoes: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    controleEstoque: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(52, 152, 219, 0.1)',
        borderRadius: 8,
        padding: 4,
    },
    botaoEstoque: {
        width: 28,
        height: 28,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3498db',
        borderRadius: 6,
    },
    botaoEstoqueTexto: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 14,
    },
    estoqueNumero: {
        marginHorizontal: 10,
        fontSize: 14,
        fontWeight: 'bold',
        minWidth: 20,
        textAlign: 'center',
    },
    removerBtn: {
        padding: 8,
    },
    removerText: {
        fontSize: 18,
    },
    vazio: {
        alignItems: 'center',
        padding: 40,
        opacity: 0.5,
    },
    descricaoVazio: {
        textAlign: 'center',
        marginTop: 8,
        fontSize: 12,
    },
    voltarLink: {
        marginTop: 20,
        padding: 16,
        alignItems: 'center',
    },
});