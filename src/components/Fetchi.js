import { useEffect, useState } from "react";
// import './App.js'

function Fetchi() {
  const [data, setData] = useState([]);
  const apiGet = async () => {
    const response = await fetch("https://dummyjson.com/quotes")
      .then((res) => res.json())
      .then((dat) => dat.quotes);
    const responsedata = response.filter((data) => data.id < 11);
    setData(responsedata);
  };
  useEffect(() => {
    apiGet();
  }, []);
  return (
    <div>
      {data.map((obj) => (
        <h1 style={{ backgroundColor: "lightblue" }}>
          {obj.id}.{obj.quote} - {obj.author}
        </h1>
      ))}
    </div>
  );
}

export default Fetchi;
