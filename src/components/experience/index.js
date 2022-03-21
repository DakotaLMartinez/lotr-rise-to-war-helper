import { useMemo } from "react";
import { useQuery } from "react-query";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import ExperienceTable from "./ExperienceTable";
import EXPCalculator from "./EXPCalculator";

function Experience() {
  useDocumentTitle("Experience in LOTR: Rise to War");

  const columns = useMemo(
    () => [
      {
        Header: "Commander Experience",
        columns: [
          {
            Header: "Level",
            accessor: "level"
          },
          {
            Header: "EXP to Level Up",
            accessor: "expToLevelUp"
          },
          {
            Header: "Total EXP",
            accessor: "totalExp"
          }
        ]
      }
    ],
    []
  );

  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("/experience").then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <section>
      <h1>Experience Calculator</h1>
      <EXPCalculator data={data} />
      <ExperienceTable data={data} columns={columns} />
    </section>
  );
}

export default Experience;
