import { create } from "zustand";

interface SidebarStore {
  isOpen: boolean;
  toggleOpen: () => void;
  closeSidebar: () => void;
}

export const useSidebarStore = create<SidebarStore>((set) => ({
  isOpen: false,
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  closeSidebar: () => set(() => ({ isOpen: false })),
}));
