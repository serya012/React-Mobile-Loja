import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2c3e50',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 15,
    color: '#34495e',
    paddingLeft: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#3498db',
  },
  iconGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  iconItem: {
    width: '23%',
    alignItems: 'center',
    padding: 10,
    marginBottom: 15,
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconText: {
    marginTop: 8,
    fontSize: 10,
    textAlign: 'center',
    fontWeight: '600',
    color: '#2c3e50',
  },
});