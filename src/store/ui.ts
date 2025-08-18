import { create } from 'zustand';

interface UiState {
  sidebarOpen: boolean;
  environment: 'sandbox' | 'live';
  setSidebar: (open: boolean) => void;
  toggleSidebar: () => void;
  toggleEnvironment: () => void;
  setEnvironment: (environment: UiState['environment']) => void;
}

export const useUiStore = create<UiState>((set) => ({
  sidebarOpen: true,
  setSidebar: (open) => set((s) => ({ ...s, sidebarOpen: open })),
  environment: 'sandbox',
  toggleSidebar: () => set((s) => ({ ...s, sidebarOpen: !s.sidebarOpen })),
  toggleEnvironment: () =>
    set((s) => ({
      ...s,
      environment: s.environment === 'sandbox' ? 'live' : 'sandbox',
    })),
  setEnvironment: (environment: UiState['environment']) =>
    set((s) => ({
      ...s,
      environment,
    })),
}));
