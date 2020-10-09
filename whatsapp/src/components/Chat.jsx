import React, { useEffect, useState } from "react";
import "./Chat.css";
import Message from "./Message";
import ChatHeader from "./ChatHeader";
import ChatFooter from "./ChatFooter";
import Pusher from "pusher-js";
import axios from "../axios";
import { useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
// can destructure props
function Chat({ userValue }) {
  // matches chatID route -- useParams- react-router-dom
  const { chatId } = useParams();
  const [chatName, setChatName] = useState("");
  const [deleteState, setDeleteState] = useState(false);
  const [deletedItemsIds, setDeletedItemsIds] = useState([]);
  useEffect(() => {
    if (chatId) {
      // get specific chat ID
      axios
        .get("/chat/sync/" + chatId)
        .then((res) => {
          setChatName(res.data.name);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [chatId]);
  // get all messages
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios
      .get("/messages/sync")
      .then((res) => {
        //  setMessages(res.data);
        setMessages(() => {
          return res.data.filter((message) => {
            return message.chatName === chatName;
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [chatName]);

  // pusher sends data send through-- copy paste from pusher
  useEffect(() => {
    const pusher = new Pusher("903ce939fb72109083a5", {
      cluster: "ap1",
    });
    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (data) => {
      // push messages(add messages as input) -- could do prevState way too
      setMessages([...messages, data]);
      // setMessages((prevState) => {
      //   return [...prevState, data];
      // });
    });
    channel.bind("deleted", function (data) {
      console.log(data);
      setMessages((prevMessages) => {
        return prevMessages.filter((message) => {
          return message._id !== data._id;
        });
      });
    });
    // cleanup function
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);
  // automatically scroll to bottom
  useEffect(() => {
    document.querySelector(".chat-body").scrollTop = document.querySelector(
      ".chat-body"
    ).scrollHeight;
  }, []);
  // handle Delete state
  function handleDelete() {
    setDeleteState(!deleteState);
  }
  // add deleted items from MEssage componenet
  function addDeletedItems(item) {
    setDeletedItemsIds((prevState) => {
      return [...prevState, item];
    });
  }
  function removesDeletedItems(item) {
    setDeletedItemsIds((prevState) => {
      return prevState.filter((id) => {
        return item !== id;
      });
    });
  }
  // delete selected messages
  async function deleteSelected() {
    console.log(deletedItemsIds);
    await axios
      .post("/messages/delete", deletedItemsIds)
      .then((res) => {
        console.log(res);
        setDeleteState(false);
        setDeletedItemsIds([]);
      })
      .catch((err) => {
        console.log(err);
        alert("Refresh before attempting to delete");
        setDeleteState(false);
        setDeletedItemsIds([]);
      });
  }
  const [searchInitiated, setSearchInitiated] = useState(false);
  const [messageSearch, setMessageSearch] = useState("");
  // find search message
  function searchMessage(messageSearch, searchBarInitiated) {
    setSearchInitiated(searchBarInitiated);
    setMessageSearch(messageSearch);
    console.log(messageSearch);
  }
  return (
    <div className="chat">
      {/* Header of Chat ********/}
      {deleteState && (
        <Button
          variant="contained"
          color="secondary"
          onClick={deleteSelected}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      )}
      <ChatHeader
        chatName={chatName}
        messages={messages}
        handleDelete={handleDelete}
        searchedMessage={searchMessage}
      />
      {/* body of chat showing messages********* */}
      <div className="chat-body">
        {/* Message component */}
        {searchInitiated ? (
          <div className="chat-body-search">
            <h1>Matched search messages</h1>
            <br/>
            {messages.map((message, index) => {
              return (
                message.message.toLowerCase().includes(messageSearch) && (
                  <Message
                    userValue={userValue}
                    message={message}
                    key={index}
                    deleteState={deleteState}
                    addDeleted={addDeletedItems}
                    removeDeleted={removesDeletedItems}
                  />
                )
              );
            })}
          </div>
        ) : (
          messages.map((message, index) => {
            return (
              <Message
                userValue={userValue}
                message={message}
                key={index}
                deleteState={deleteState}
                addDeleted={addDeletedItems}
                removeDeleted={removesDeletedItems}
              />
            );
          })
        )}
      </div>
      {/* Footer of chat body  */}
      <ChatFooter userValue={userValue} chatName={chatName} />
    </div>
  );
}

export default Chat;
