import type { SelectedCells } from "./Grid";

type Props = {
  col: number,
  row: number,
  selectCells: (row: number, col: number) => void,
  selectedCells: SelectedCells
};

function selectedCellBorders(start_row: number, start_col: number, end_row: number, end_col: number, cell_row: number, cell_col: number): string {
  let border_str = "";

  if (start_col === end_col && start_col === cell_col) { border_str += "border-x-4 " }
  if (cell_row === start_row) border_str += "border-t-4 ";
  if (cell_row === end_row) border_str += "border-b-4 ";
  if (cell_col === start_col) border_str += "border-l-4 ";
  if (cell_col === end_col) border_str += "border-r-4 ";

  return border_str;
}

function isCellSelected(selectedCells: SelectedCells, row: number, col: number) {
  if (selectedCells.end && selectedCells.start) {
    const [smaller_row, larger_row] = selectedCells.start.row > selectedCells.end.row
      ? [selectedCells.end.row, selectedCells.start.row]
      : [selectedCells.start.row, selectedCells.end.row];
    const [smaller_col, larger_col] = selectedCells.start.col > selectedCells.end.col
      ? [selectedCells.end.col, selectedCells.start.col]
      : [selectedCells.start.col, selectedCells.end.col];

    const borders = selectedCellBorders(smaller_row, smaller_col, larger_row, larger_col, row, col);

    if (smaller_row <= row && larger_row >= row && smaller_col <= col && larger_col >= col) {
      return [true, borders];
    }
  } else if (selectedCells.start && selectedCells.start.col === col && selectedCells.start.row === row) {
    return [true, "border-4 "];
  }

  return [false, ""];
}

export default function Cell({ col, row, selectCells, selectedCells }: Props) {
  const [isSelected, borders] = isCellSelected(selectedCells, row, col);

  return (
    <td
      key={`${row}-${col}`}
      className={
        `min-w-[50px] min-h-[20px] w-8 h-6 cursor-pointer hover:bg-gray-500/95 border-2 border-black
        ${isSelected ? `bg-blue-200 ${borders} border-dotted border-blue-900` : "bg-white"}`
      }
      onClick={() => selectCells(row, col)}
    >
    </td>
  );
}
