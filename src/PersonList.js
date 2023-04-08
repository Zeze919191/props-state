import React, { useState } from "react";

// PersonList component
const PersonList = () => {
  const [persons, setPersons] = useState([{ name: "Marie", age: 22 }]);
  const [newPerson, setNewPerson] = useState({ name: "", age: "" });
  const handleAddPerson = () => {
    setPersons([...persons, newPerson]);
    setNewPerson({ name: "", age: "" });
  };
  const handleRemovePerson = (index) => {
    const newPersons = [...persons];
    newPersons.splice(index, 1);
    setPersons(newPersons);
  };

  return (
    <div>
      <h2>People's Record</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {persons.map((person, index) => (
              <tr key={index}>
                <td>{person.name}</td>
                <td>{person.age}</td>
                <td>
                  <button
                    className="btn-remove"
                    onClick={() => handleRemovePerson(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <input
          className="addPerson"
          type="text"
          value={newPerson.name}
          onChange={(e) => setNewPerson({ ...newPerson, name: e.target.value })}
          placeholder="Name"
        />
      </div>
      <div>
        <input
          className="addPerson"
          type="text"
          value={newPerson.age}
          onChange={(e) => setNewPerson({ ...newPerson, age: e.target.value })}
          placeholder="Age"
        />
      </div>
      <button className="btn-addPerson" onClick={handleAddPerson}>
        Add Person
      </button>
    </div>
  );
};

export default PersonList;
