import { createSolidTable } from "@tanstack/solid-table";
import { Component, For } from "solid-js";

// TODO: fix types
type TableProps = {
  columns: any[];
  data: any[][];
};

const Table: Component<TableProps> = (props) => {

  return (
    <div>
      <div class="mt-4">
        <input type="text" class="rounded-lg border border-solid-gray shadow-sm h-6 p-4 text-sm text-primary-black" placeholder="Search" />
      </div>
      <div class="border rounded-lg shadow-sm border-solid-gray mt-5">
        <table class="w-full">
          <thead class="text-sm text-primary-gray">
            <tr class="[&>:first-child]:rounded-tl-lg [&>:last-child]:rounded-tr-lg border-b border-b-solid-gray">
              <For each={props.columns}>
                {(item, index) => (
                  <th class="font-bold text-left px-4 py-2">
                    <span>{item}</span>
                  </th>
                )}
              </For>
            </tr>
          </thead>
          <tbody>
            <For each={props.data}>
              {(row, index) => (
                <tr class="[&:not(:last-child)]:border-b border-b-solid-gray text-primary-black text-sm hover:bg-secondary-light hover:cursor-pointer transition-colors">
                  <For each={row}>
                    {(col, index) => (
                      <td class="px-4 py-1">
                        <h1>{col}</h1>
                      </td>
                    )}
                  </For>
                </tr>
              )}
            </For>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
