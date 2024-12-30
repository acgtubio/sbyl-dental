import { createAsync } from "@solidjs/router";
import { ColumnDef, createColumnHelper, createSolidTable, getCoreRowModel } from "@tanstack/solid-table"
import { getClients } from "~/data/clients";
import { SdClient } from "~/types/client";
import TableComponent from "../table";

export const route = {
  preload: () => getClients()
}

export const ClientTable = () => {
  const clients = createAsync(() => getClients());
  const columnHelper = createColumnHelper<SdClient>();

  const columns = [
    columnHelper.accessor("firstname", {
      header: "Name",
    }),
    columnHelper.accessor("balance", {
      header: "Balance",
    }),
  ] as Array<ColumnDef<unknown, any>>;

  const table = createSolidTable({ columns, get data() { return clients() ?? [] }, getCoreRowModel: getCoreRowModel() });

  return (
    <>
      <TableComponent table={table} />
    </>
  )
}
