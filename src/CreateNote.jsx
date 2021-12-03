import React, { useState } from "react";
import Button from '@material-ui/core/Button';

const CreateNote = (props) => {


  const [note, setNote] = useState({
    title: '',
    content: ''
  });

  const InputEvent = (event) => {

    // const value = event.target.value;
    // const name = event.target.name;

    const { name, value } = event.target;

    setNote((preData) => {
      return {
        ...preData,
        [name]: value,
      }
    })
    // console.log(note);
  }

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: '',
      content: ''
    });
  }


  return (
    <>
      <div className="main_note">
        <form>
          <input type="text" onChange={InputEvent} value={note.title} placeholder="Title" name="title" autoComplete="off" />
          <textarea rows="" cols="" onChange={InputEvent} value={note.content} placeholder="Take a note.." name="content"></textarea>
          <Button onClick={addEvent}> ➕
          </Button>
        </form>
      </div>

    </>
  )
}

export default CreateNote;