
type TableProps<T> = {
  data: T[];
}

const Table = <T,>(props: TableProps<T>) => {

  return (
    <div>
      <div class="mt-4">
        <input type="text" class="rounded-lg border border-solid-gray shadow-sm h-6 p-4 text-sm text-primary-black" placeholder="Search" />
      </div>
      <div class="border rounded-lg shadow-sm border-solid-gray mt-5">
        <table class="w-full">
          <thead class="text-sm text-primary-gray">
            <tr class="[&>:first-child]:rounded-tl-lg [&>:last-child]:rounded-tr-lg border-b border-b-solid-gray">
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
