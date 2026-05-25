import { useMemo } from 'react';
import type { JSX } from 'react';
import { useSelectionStore } from '@/store/use-selection-store.ts';
import { buildCsv } from '@/shared/utilities/build-csv.ts';
import './selected-items-flyout.scss';

function SelectedItemsFlyout(): JSX.Element | null {
  const selectedItems = useSelectionStore((state) => state.selectedItems);
  const clearSelection = useSelectionStore((state) => state.clearSelection);

  const csvDownload = (): void => {
    if (!selectedItems.length) {
      return;
    }

    const csv = buildCsv(selectedItems);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `${selectedItems.length}_items.csv`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);
  };

  const description = useMemo(
    () => `${selectedItems.length} item${selectedItems.length === 1 ? '' : 's'} selected`,
    [selectedItems.length]
  );

  if (!selectedItems.length) {
    return null;
  }

  return (
    <aside className="selected-items-flyout">
      <div className="selected-items-flyout__content">
        <div className="selected-items-flyout__label">{description}</div>
        <div className="selected-items-flyout__actions">
          <button
            type="button"
            className="selected-items-flyout__button selected-items-flyout__button--clear"
            onClick={clearSelection}
          >
            Unselect all
          </button>
          <button
            type="button"
            className="selected-items-flyout__button selected-items-flyout__button--download"
            onClick={csvDownload}
          >
            Download
          </button>
        </div>
      </div>
    </aside>
  );
}

export default SelectedItemsFlyout;
