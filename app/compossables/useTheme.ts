// composables/useTheme.ts
import { computed, onMounted } from 'vue';
import { useState } from '#imports';

type Theme = 'light' | 'dark';
type ThemeMode = 'system' | 'light' | 'dark';

const STORAGE_KEY = 'theme-mode';

export function useTheme() {
  const mode = useState<ThemeMode>('themeMode', () => 'system');
  const theme = useState<Theme>('theme', () => 'light');

  const systemPrefersDark = () => {
    if (!process.client) return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  const resolveTheme = (m: ThemeMode): Theme => {
    if (m === 'light') return 'light';
    if (m === 'dark') return 'dark';
    return systemPrefersDark() ? 'dark' : 'light';
  };

  const applyTheme = (t: Theme) => {
    theme.value = t;

    if (!process.client) return;
    const el = document.documentElement;

    if (t === 'dark') el.classList.add('dark');
    else el.classList.remove('dark');
  };

  const setMode = (m: ThemeMode) => {
    mode.value = m;
    if (process.client) localStorage.setItem(STORAGE_KEY, m);

    applyTheme(resolveTheme(m));
  };

  onMounted(() => {
    if (!process.client) return;

    const stored = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
    const initial: ThemeMode = stored === 'light' || stored === 'dark' || stored === 'system' ? stored : 'system';
    setMode(initial);

    // Volg systeemveranderingen wanneer mode = system
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    media.addEventListener('change', (evt) => {
      if (mode.value === 'system') {
        applyTheme(evt.matches ? 'dark' : 'light');
      }
    });
  });

  const isDark = computed(() => theme.value === 'dark');

  return {
    mode, // system | light | dark
    theme, // effective (light | dark)
    isDark,
    setMode, // setMode('system' | 'light' | 'dark')
  };
}
