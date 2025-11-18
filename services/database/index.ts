// services/database/index.ts
import { Platform } from 'react-native';

// Exportação condicional baseada na plataforma
if (Platform.OS === 'web') {
  module.exports = require('./web');
} else {
  module.exports = require('./native');
}