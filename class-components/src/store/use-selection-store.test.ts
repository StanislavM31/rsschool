import { describe, expect, it, beforeEach } from 'vitest';
import { useSelectionStore } from './use-selection-store.ts';

const basePerson = {
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
  url: 'https://swapi.dev/api/people/1/',
};

describe('useSelectionStore', () => {
  beforeEach(() => {
    useSelectionStore.setState({ selectedItems: [] });
  });

  it('toggles selection on and off', () => {
    const { selectedItems, toggleSelection, isSelected } = useSelectionStore.getState();

    expect(selectedItems).toHaveLength(0);
    toggleSelection(basePerson);
    expect(useSelectionStore.getState().selectedItems).toHaveLength(1);
    expect(isSelected('1')).toBe(true);

    toggleSelection(basePerson);
    expect(useSelectionStore.getState().selectedItems).toHaveLength(0);
    expect(useSelectionStore.getState().isSelected('1')).toBe(false);
  });

  it('clears selection', () => {
    const { toggleSelection, clearSelection } = useSelectionStore.getState();

    toggleSelection(basePerson);
    expect(useSelectionStore.getState().selectedItems).toHaveLength(1);
    clearSelection();
    expect(useSelectionStore.getState().selectedItems).toHaveLength(0);
  });
});
