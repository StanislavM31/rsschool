import { create } from 'zustand';
import { extractPersonId } from '@/shared/utilities/extract-person-id.ts';
import type { Person } from '@/entities/person/model/interfaces/person.interface.ts';

interface SelectionState {
  selectedItems: Person[];
  toggleSelection: (person: Person) => void;
  unselectItem: (id: string) => void;
  clearSelection: () => void;
  isSelected: (id: string) => boolean;
}

export const useSelectionStore = create<SelectionState>((set, get) => ({
  selectedItems: [],
  toggleSelection: (person: Person) => {
    const id = extractPersonId(person.url);
    const isSelected = get().selectedItems.some(
      (item) => extractPersonId(item.url) === id
    );

    set((state) => ({
      selectedItems: isSelected
        ? state.selectedItems.filter(
            (item) => extractPersonId(item.url) !== id
          )
        : [...state.selectedItems, person],
    }));
  },
  unselectItem: (id: string) => {
    set((state) => ({
      selectedItems: state.selectedItems.filter(
        (item) => extractPersonId(item.url) !== id
      ),
    }));
  },
  clearSelection: () => {
    set({ selectedItems: [] });
  },
  isSelected: (id: string) =>
    get().selectedItems.some((item) => extractPersonId(item.url) === id),
}));
