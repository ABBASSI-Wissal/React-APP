import axios from "axios";
import { useEffect, useState } from "react";

export function Character({ data }) {
  const [names, setNames] = useState([]);
  useEffect(() => {
    axios
      .all(data.map((endpoint) => axios.get(endpoint)))
      .then((response) => setNames(response.map((d) => d.data.name)));
  }, [data]);
  return (
    <div>
      <ul className="tags">
        {names.length > 0 &&
          names.map((name, i) => {
            return <li key={i}>{name}</li>;
          })}
      </ul>
    </div>
  );



}
