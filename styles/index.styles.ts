import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    menuContainer: {
        flex: 1,
        padding: 24,
        backgroundColor: '#f8fafc',
        paddingTop: 80,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 24,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 4,
        borderLeftWidth: 4,
    },
    iconContainer: {
        width: 60,
        height: 60,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
        backgroundColor: '#3b82f6',
        shadowColor: '#3b82f6',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 4,
    },
    icon: {
        fontSize: 24,
        color: '#ffffff',
    },
    textContainer: {
        flex: 1,
    },
    description: {
        fontSize: 14,
        color: '#64748b',
        marginTop: 4,
        lineHeight: 20,
    },
});