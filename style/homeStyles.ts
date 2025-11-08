// styles/homeStyles.ts
import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#28a745',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 4,
  },
  titulo: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.9)',
    marginTop: 6,
  },
  menuContainer: {
    padding: 16,
    gap: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#dee2e6',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  iconContainer: {
    width: 46,
    height: 46,
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#28a745',
    marginRight: 14,
  },
  textContainer: {
    flex: 1,
  },
  description: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
  destaquesSection: {
    padding: 16,
    paddingTop: 0,
  },
  destaquesGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  destaqueItem: {
    alignItems: 'center',
    padding: 14,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#dee2e6',
    flex: 1,
    marginHorizontal: 4,
    elevation: 1,
  },
  destaqueNome: {
    fontSize: 11,
    color: '#333',
    marginBottom: 3,
    textAlign: 'center',
    fontWeight: '600',
  },
  destaquePreco: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#28a745',
  },
  infoSection: {
    padding: 16,
    paddingTop: 0,
  },
  infoText: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
    marginBottom: 10,
  },
  infoDestaque: {
    fontSize: 13,
    color: '#28a745',
    fontWeight: '600',
    backgroundColor: 'rgba(40, 167, 69, 0.1)',
    padding: 10,
    borderRadius: 8,
    textAlign: 'center',
  },
});