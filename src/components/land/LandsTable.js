import { useTable } from "react-table";
import { useMemo } from "react";

export default function LandsTable({ data }) {
  const columns = useMemo(
    () => [
      {
        Header: "Land Info",
        columns: [
          {
            Header: "Power Level",
            accessor: "powerLevel"
          },
          {
            Header: "Defending Commander Lvl",
            accessor: "defendingCommanderLevel"
          },
          {
            Header: "Army Power",
            accessor: "armyPower"
          },
          {
            Header: "Defending Army count",
            accessor: "armyCount"
          }
        ]
      },
      {
        Header: "Rewards",
        columns: [
          {
            Header: "March EXP",
            accessor: "marchExp"
          },
          {
            Header: "Mock Battle EXP",
            accessor: "mockBattleExp"
          },
          {
            Header: "Mock Battle Grain Cost",
            accessor: "mockBattleGrainCost"
          },
          {
            Header: "Gather Amount",
            accessor: "gatherAmount"
          },
          {
            Header: "Resources per Hour",
            accessor: "resourcesPerHour"
          },
          {
            Header: "Fellowship Resources per Hour",
            accessor: "fellowshipResourcesPerHour"
          }
        ]
      }
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  });

  return (
    <table
      className="w-full border-solid border-2 border-sky-500 overflow-scroll"
      {...getTableProps()}
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                className="p-2 border-solid border-2 border-sky-500"
                {...column.getHeaderProps()}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    className="border-solid border border-sky-500 p-2"
                    {...cell.getCellProps()}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
