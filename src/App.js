import React, { useState, useEffect } from "react";
import JsonData from "./public/json/data.json";
import "../src/styles.css";

function App() {
  const [peopleData, setPeopleData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setPeopleData(
      JsonData.map((person, index) => ({ ...person, id: index + 1 }))
    );
  }, []);

  const peoplePerPage = 3;
  const startIndex = currentPage * peoplePerPage;
  const endIndex = startIndex + peoplePerPage;
  const currentPeople = peopleData.slice(startIndex, endIndex);

  const nextPage = () => {
    if (startIndex + peoplePerPage < peopleData.length) {
      setCurrentPage(currentPage + 1);
    } else {
      alert("No more people!");
    }
  };

  return (
    <div className="container">
      <div className="ui">
        <div>
          <h1 className="heading">PEOPLE DATA</h1>
        </div>
        <div className="pagination">
          <button onClick={nextPage}>Next Page</button>
        </div>
      </div>
      <div className="people-container">
        {currentPeople.map((person) => (
          <div className="person" key={person.id}>
            <div className="main">
              <div>
                <div className="id-container">
                  <p className="id">{person.id}</p>
                </div>
              </div>
              <div>
                <div className="name-container">
                  <p className="name">Name: {person.name}</p>
                </div>
                <div className="location-container">
                  <p className="location">Location: {person.location}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="para">CURRENTLY 3 PEPOLE SHOWING</p>
    </div>
  );
}

export default App;
