import { useEffect } from 'react';
import { Platform } from 'react-native';

/**
 * Required by Bolt's Expo preview infrastructure. The hook is a no-op on
 * native but ensures the framework is ready before the app renders on web.
 */
export function useFrameworkReady() {
  useEffect(() => {
    if (Platform.OS === 'web') {
      // Framework readiness hook — intentionally empty.
      // Required for Bolt's Expo preview to function correctly.
    }
  }, []);
}
