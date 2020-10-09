import React, { useState, useEffect } from "react";
// import { useStateValue } from "../StateProvider";
import Checkbox from "@material-ui/core/Checkbox";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
// Illustrates each message-- pass in className
function Message({
  message,
  userValue,
  deleteState,
  addDeleted,
  removeDeleted,
}) {
  // get user from data layer
  // const [{ user }, dispatch] = useStateValue();
  const [deletedItemId, setDeletedItemId] = useState("");
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (!deleteState) {
      setDeletedItemId("");
      setChecked(false);
    }
  }, [deletedItemId, deleteState]);
  // if checked add to array
  function handleCheck(event) {
    const { value, checked } = event.target;
    setChecked(checked);
    if (checked) {
      setDeletedItemId(value);
      addDeleted(value);
    } else {
      removeDeleted(value);
      setDeletedItemId("");
    }
  }
  let time = new Date(message.createdAt);

  return (
    // use string stuff like this to add functionality
    // if user logged in === message name then should be green
    <p
      className={`chat-message ${
        userValue?.displayName === message.name && "chat-reciever"
      }`}
    >
      {userValue?.displayName === message.name && deleteState && (
        <Checkbox
          className={!checked && "unchecked-color"}
          size="small"
          checkedIcon={<IndeterminateCheckBoxIcon />}
          inputProps={{ "aria-label": "uncontrolled-checkbox" }}
          value={message._id}
          checked={checked}
          onChange={handleCheck}
        />
      )}
      <span className="chat-name">{message.name}</span>
      {message.message}
      <span className="chat-timestamp">
        {time.getDay() !== new Date().getDay()
          ? time.toLocaleString().slice(0, -3)
          : time.toLocaleTimeString().slice(0, -3)}
      </span>
    </p>
  );
}

export default Message;
