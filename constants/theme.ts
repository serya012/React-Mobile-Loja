import { Platform } from 'react-native';

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    
    // Novas cores adicionadas
    surface: '#f8f9fa',
    card: '#ffffff',
    textSecondary: '#6c757d',
    textMuted: '#adb5bd',
    border: '#dee2e6',
    primary: '#0a7ea4',
    primaryLight: '#0d8bba',
    success: '#28a745',
    warning: '#ffc107',
    error: '#dc3545',
    shadow: '#000000',
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    
    // Novas cores adicionadas
    surface: '#1c1e21',
    card: '#2d2f33',
    textSecondary: '#a0a4a8',
    textMuted: '#6c7075',
    border: '#404348',
    primary: '#4dabf7',
    primaryLight: '#74c0fc',
    success: '#51cf66',
    warning: '#ffd43b',
    error: '#ff6b6b',
    shadow: '#000000',
  },
};

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});