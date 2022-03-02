import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add, submittingState }) => {
  const [note, setNote] = useState("");
  function noteChange(e) {
    setNote(e.target.value);
  }

  const [date, setDate] = useState("");
  function dateChange(e) {
    setDate(e.target.value);
  }

  const [time, setTime] = useState("");
  function timeChange(e) {
    setTime(e.target.value);
  }

  function addItem() {
    submittingState.current = true;
    add(function (prevData) {
      return [
        {
          id: v4(),
          note,
          date,
          time,
        },
        ...prevData,
      ];
    });
  }

  return (
    <div>
      <center>
        <h1>MemoNote</h1>
      </center>
      <p>Content:</p>
      <input type="text" value={note} onChange={noteChange} />
      <p>Date:</p>
      <input type="date" value={date} onChange={dateChange} />
      <p>Time:</p>
      <input type="time" value={time} onChange={timeChange} />
      <button className="add" onClick={addItem}>
        ADD
      </button>
    </div>
  );
};

export default Edit;
