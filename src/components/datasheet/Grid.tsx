import { useState, useEffect } from "react";
import Cell from "./Cell";

type Props = {
  rows: number,
  cols: number
};

export type SelectedCells = {
  start: {
    row: number,
    col: number
  } | null,
  end: {
    row: number,
    col: number
  } | null
};

export default function Grid({ rows, cols }: Props) {
  const [selectedCells, setSelectedCells] = useState<SelectedCells>({ start: null, end: null });
  const [shiftPressed, setShiftPressed] = useState(false);
  const table_rows = makeTable(rows, cols);

  function selectCells(row: number, col: number) {
    if (!shiftPressed || !selectedCells?.start) {
      setSelectedCells({
        end: null,
        start: { row, col }
      });
    } else {
      setSelectedCells({
        ...selectedCells,
        end: { row, col }
      });
    }
  }

  function makeTable(rows: number, cols: number) {
    let table = [];

    for (let i = 0; i < rows; i++) {
      let row = [];
      for (let j = 0; j < cols; j++) {
        const cell = <Cell key={`cell-[${i}, ${j}]`} row={i} col={j} selectCells={selectCells} selectedCells={selectedCells} />
        row.push(cell);
      }
      table.push(row);
    }

    return table;
  }

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === 'Shift') {
        event.preventDefault();
        setShiftPressed(true);
      } else {
        setShiftPressed(false);
      }
    };

    document.addEventListener('keydown', keyDownHandler);
    document.addEventListener('keyup', _ => setShiftPressed(false));

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
      document.removeEventListener('keyup', _ => setShiftPressed(false));
    };
  }, []);

  return (
    <table className="px-5 my-20 md:w-80% lg:w-70%">
      <tbody>
        {table_rows.map((row, row_idx) => <tr key={row_idx}>
          {row.map(cell => cell)}
        </tr>)}
      </tbody>
    </table>
  )
}
