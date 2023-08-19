import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
function Home() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/movies`)
      .then((res) => {
        res.json();
      })
      .then((data) => {
        console.log(data);
        setDatas(data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  });

  return (
    <>
      <div data-test-id="container">
        {datas.map((movie) => {
          <Card key={movie.id} movie={movie}></Card>;
        })}
      </div>
      {/* Here will come the Pagination component */}
    </>
  );
}

export default Home;
