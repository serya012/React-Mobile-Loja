// styles/exploreStyles.ts
import { StyleSheet } from 'react-native';

export const exploreStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    marginBottom: 24,
  },
  subtitulo: {
    fontSize: 16,
    opacity: 0.7,
    marginTop: 4,
  },
  criarPromocao: {
    marginBottom: 24,
  },
  botaoCriar: {
    backgroundColor: '#e74c3c',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  botaoCriarTexto: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  promocoesAtivas: {
    marginBottom: 24,
  },
  listaVazia: {
    alignItems: 'center',
    padding: 40,
    opacity: 0.5,
  },
  textoVazio: {
    fontSize: 16,
    marginBottom: 8,
    marginTop: 12,
  },
  descricaoVazia: {
    textAlign: 'center',
    fontSize: 14,
  },
  dicas: {
    gap: 12,
  },
  dicaItem: {
    padding: 16,
    backgroundColor: 'rgba(241, 196, 15, 0.1)',
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#f1c40f',
  },
  dicaDescricao: {
    marginTop: 4,
    fontSize: 14,
    opacity: 0.7,
  },
});