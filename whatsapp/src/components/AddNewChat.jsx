import React, {useState} from "react";
import axios from "../axios"

function AddNewChat({addChat}) {

const [chat, setChat] = useState({});

const createChat = () => {
    const roomName = prompt("Please enter name for chat");
    // add value to chats
    if (roomName) {
      axios.post("/chat/new", { name: roomName }).then((res) => {
        setChat({...res.data});
        // call prop and add chat to sidebar
         addChat(chat);
      })
      .catch(err => {
        console.log(err);
        alert("Cannot create Chat with existing name")
      })
    }
  };
  
  return (
    <div onClick={createChat} className="sidebarChat addNewChat">
      <h2>Add a new Chat</h2>
    </div>
  );
}

export default AddNewChat;
