import { useQuery } from "react-query";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import LandsTable from "./LandsTable";

function Land() {
  useDocumentTitle("Land in LOTR:Rise to War");

  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("/lands").then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <section>
      <h1>Land</h1>
      <LandsTable data={data} />
    </section>
  );
}

export default Land;
