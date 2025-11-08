import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useColorScheme } from './use-color-scheme';
import { Colors } from '@/constants/theme';

export function useDynamicStyles<T>(createStyles: (colors: typeof Colors.light) => T): T {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme as 'light' | 'dark'];
  
  const styles = useMemo(() => createStyles(colors), [colorScheme, createStyles]);
  return styles;
}