import React from "react";
import { useState } from "react";

const List = [
  { name: "toko", age: 33 },
  { name: "beqa", age: 22 },
  { name: "ani", age: 44 },
  { name: "gia", age: 53 },
];

function TodoListMain() {
  const [name, setname] = useState("");
  const [age, setAge] = useState("");
  const [listData, setlistData] = useState(List);

  const addHandler = () => {
    const newData = {
      name: name,
      age: age,
    };

    if (name !== "" && age !== "") {
      setlistData([...listData, newData]);
    }
    setname("");
    setAge("");
  };

  const deleteHandler = (index) => {
    const newData = listData.filter(
      (item, filterIndex) => filterIndex !== index
    );

    setlistData(newData);
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <br />
      <input
        type="text"
        age="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br />
      <button onClick={addHandler}>Add Person</button>
      <ul>
        {listData.map((item, i) => (
          <li key={i}>
            me var {item.name} da var {item.age}{" "}
            <span onClick={() => deleteHandler(i)}>close</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoListMain;
