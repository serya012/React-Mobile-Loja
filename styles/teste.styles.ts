import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8fafc',
        paddingTop: 60,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 24,
        color: '#1e293b',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        marginTop: 28,
        marginBottom: 16,
        color: '#334155',
        paddingLeft: 12,
        borderLeftWidth: 4,
        borderLeftColor: '#3b82f6',
    },
    iconGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    iconItem: {
        width: '23%',
        alignItems: 'center',
        padding: 12,
        marginBottom: 16,
        backgroundColor: '#ffffff',
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.08,
        shadowRadius: 6,
        elevation: 4,
    },
    iconText: {
        marginTop: 8,
        fontSize: 10,
        textAlign: 'center',
        fontWeight: '600',
        color: '#475569',
    },
});