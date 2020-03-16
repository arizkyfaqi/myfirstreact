import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const myelement = (
    <div className="App">
      <table border="1">
        <tr>
          <th>Name</th>
        </tr>
        <tr>
          <td>John</td>
        </tr>
        <tr>
          <td>Elsa</td>
        </tr>
      </table>
    </div>
  );

  return myelement;
}

export default App;
