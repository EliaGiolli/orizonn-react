import { create } from 'zustand'

type ThemeState = {
  initialTheme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  initialTheme: 'light',
  toggleTheme: () =>
    set((state) => ({
      initialTheme: state.initialTheme === 'light' ? 'dark' : 'light'
    }))
}));