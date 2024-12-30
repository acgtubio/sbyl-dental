import { flexRender, HeaderGroup, Row, Table } from "@tanstack/solid-table";
import { For } from "solid-js";

type TableProps<T> = {
  table: Table<T>
}

const TableComponent = <T,>(props: TableProps<T>) => {

  return (
    <table class="w-full">
      <thead class="text-sm text-primary-gray">
        <For each={props.table.getHeaderGroups()}>
          {(headerGroup: HeaderGroup<T>) => (
            <tr class="[&>:first-child]:rounded-tl-lg [&>:last-child]:rounded-tr-lg border-b border-b-solid-gray">
              <For each={headerGroup.headers}>
                {header => (
                  <th>
                    {header.isPlaceholder ?
                      null :
                      flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )
                    }
                  </th>
                )}
              </For>
            </tr>
          )}
        </For>
      </thead>
      <tbody>
        <For each={props.table.getRowModel().rows}>
          {(row: Row<T>) => (
            <tr>
              <For each={row.getVisibleCells()}>
                {(cell) => (
                  <td>
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </td>
                )}
              </For>
            </tr>
          )}
        </For>
      </tbody>
    </table>
  );
}

export default TableComponent;
