import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useColorScheme } from './use-color-scheme';
import { Colors } from '@/constants/theme';

export function useDynamicStyles<T extends StyleSheet.NamedStyles<T>>(
  createStyles: (colors: typeof Colors.light | typeof Colors.dark) => T
): T {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme];
  
  return useMemo(() => createStyles(colors), [colorScheme, createStyles]);
}