import { useState } from "react";
import Button from "./Helpers/Button";

function FormAddFriend({ handleAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?u=118836");

  console.log(name);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !image) return;

    const newFriend = {
      name: name,
      image: "https://i.pravatar.cc/48?u=118836",
      balance: 0,
      id: crypto.randomUUID(),
    };

    handleAddFriend(newFriend);
    setName("");
  };

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>Friend Name </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Image Url</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}

export default FormAddFriend;
