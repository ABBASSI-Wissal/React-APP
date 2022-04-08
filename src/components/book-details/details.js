import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../environment";
import { Character } from "../character/character";

export function BookDetails() {
  const [details, setDetails] = useState([]);
  const { isbn } = useParams();
  useEffect(() => {
    console.log(isbn);
    axios
      .get(API)
      .then((response) => {
        const currentBook = response.data.filter((b) => b.isbn === isbn);
        console.log(currentBook);
        //debugger;
        setDetails(currentBook);
      })
      .catch((err) => console.log(err));
  }, [isbn]);
  return (
    <React.Fragment>
      {/* <div>{JSON.stringify(details)}</div> */}
      <Character data={details.length > 0 ? details[0].characters : []} />
    </React.Fragment>
  );
}
