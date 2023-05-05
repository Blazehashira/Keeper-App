import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

export default function CreateArea(props) {
  const [bool, setBool] = useState(false);

  const [noteItems, setNoteItems] = useState({
    title: "",
    content: "",
  });

  function handleTextField() {
    setBool(!bool);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNoteItems((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    event.preventDefault();
    props.onAdd(noteItems);
    setNoteItems({
      title: "",
      content: "",
    });
  }

  return (
    <div>
      <form onClick={handleTextField} className="create-note">
        {bool && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={noteItems.title}
          />
        )}
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={bool ? "3" : "1"}
          value={noteItems.content}
        />
        <Zoom in={bool}>
          <Fab size="small" color="yellow" onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}
