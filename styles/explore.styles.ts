import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8fafc',
        padding: 20,
    },
    header: {
        marginBottom: 32,
        paddingTop: 60,
    },
    subtitulo: {
        fontSize: 16,
        color: '#64748b',
        marginTop: 8,
        fontWeight: '500',
    },
    criarPromocao: {
        marginBottom: 32,
    },
    botaoCriar: {
        backgroundColor: '#3b82f6',
        padding: 20,
        borderRadius: 16,
        alignItems: 'center',
        shadowColor: '#3b82f6',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },
    botaoCriarTexto: {
        color: '#ffffff',
        fontWeight: '600',
        fontSize: 16,
    },
    promocoesAtivas: {
        marginBottom: 32,
    },
    listaVazia: {
        alignItems: 'center',
        padding: 48,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.03,
        shadowRadius: 6,
        elevation: 2,
    },
    textoVazio: {
        fontSize: 16,
        marginBottom: 8,
        color: '#64748b',
        fontWeight: '500',
    },
    descricaoVazia: {
        textAlign: 'center',
        fontSize: 14,
        color: '#94a3b8',
        lineHeight: 20,
    },
    dicas: {
        gap: 16,
    },
    dicaItem: {
        padding: 20,
        backgroundColor: '#ffffff',
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 6,
        elevation: 2,
        borderLeftWidth: 4,
        borderLeftColor: '#f59e0b',
    },
    dicaDescricao: {
        marginTop: 6,
        fontSize: 14,
        color: '#64748b',
        lineHeight: 20,
    },
}); 