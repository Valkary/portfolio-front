import type { SelectedCells } from "./Grid";

type Props = {
  col: number,
  row: number,
  selectCells: (row: number, col: number) => void,
  selectedCells: SelectedCells
};

function isCellSelected(selectedCells: SelectedCells, row: number, col: number) {
  if (selectedCells.end && selectedCells.start) {
    const [smaller_row, larger_row] = selectedCells.start.row > selectedCells.end.row
      ? [selectedCells.end.row, selectedCells.start.row]
      : [selectedCells.start.row, selectedCells.end.row];
    const [smaller_col, larger_col] = selectedCells.start.col > selectedCells.end.col
      ? [selectedCells.end.col, selectedCells.start.col]
      : [selectedCells.start.col, selectedCells.end.col];

    if (smaller_row <= row && larger_row >= row && smaller_col <= col && larger_col >= col) {
      return true;
    }
  } else if (selectedCells.start && selectedCells.start.col === col && selectedCells.start.row === row) {
    return true;
  }

  return false;
}

export default function Cell({ col, row, selectCells, selectedCells }: Props) {
  let isSelected = isCellSelected(selectedCells, row, col);

  return (
    <td
      key={`${row}-${col}`}
      className={`min-w-[50px] min-h-[20px] w-8 h-6 border-black border-2 cursor-pointer hover:bg-gray-500/95 ${isSelected ? "bg-blue-400/95" : "bg-white"}`}
      onClick={() => selectCells(row, col)}
    >
    </td>
  );
}
