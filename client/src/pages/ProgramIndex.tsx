import { useEffect, useState } from "react";
import Series from "../components/Series";

export default function ProgramIndex() {
  const [series, setSeries] = useState([]);
  useEffect(() => {
    const getPrograms = () => {
      fetch("http://localhost:3310/api/programs")
        .then((response) => response.json())
        .then((data) => {
          setSeries(data);
        });
    };
    getPrograms();
  }, []);

  return (
    <>
      <h1>My Series</h1>
      <Series series={series} />
    </>
  );
}
