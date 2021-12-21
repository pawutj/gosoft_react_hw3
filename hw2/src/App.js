// import logo from './logo.svg';
// import './App.css';
import { useState } from "react";
function App() {
  const [data, setData] = useState({ name: {} });
  const getUser = () => {
    fetch("https://randomuser.me/api/")
      .then((data) => data.json())
      .then((data) => {
        setData(data.results[0]);
        console.log(data.results[0]);
      });
  };

  return (
    <div>
      <div>
        {data.email && (
          <div style={{ margin: 10 }}>
            <img src={data.picture.large} width={200} />
            <h2>email: {data.email}</h2>
            <h2>gender: {data.gender}</h2>
            <h2>
              name: {data.name.tile} {data.name.first} {data.name.last}
            </h2>
          </div>
        )}
        <button onClick={getUser}> Generate User </button>
      </div>
    </div>
  );
}

export default App;
