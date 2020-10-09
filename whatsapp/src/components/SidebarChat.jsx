import { Avatar } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./SidebarChat.css";
import { Link } from "react-router-dom";
import axios from "../axios";
import { IconButton } from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import EditIcon from "@material-ui/icons/Edit";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

function SidebarChat({ name, id, deleteChat, showEditChat }) {
  // randomized avatar
  const [seed, setSeed] = useState("");
  const [lastSeen, setLastSeen] = useState("");
  const [editState, setEditState] = useState(false);
  const [editChat, setEditChat] = useState("");
  // Pop ip for deleting chat open
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
    // get last seen message from chat
    axios
      .get("/messages/sync")
      .then((res) => {
        // filter by chatName
        let filteredData = res.data.filter(
          (message) => message.chatName === name
        );
        setLastSeen(filteredData[filteredData.length - 1]);
      })
      .catch((err) => console.log(err));
  }, [name]);
  // delete chat
  function chatDelete() {
    axios
      .delete("/chats/delete/" + id)
      .then((res) => {
        console.log(res);
        deleteChat(id);
        setOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // change edit value
  function handleChange(event) {
    const value = event.target.value;
    setEditChat(value);
  }
  // handle patch request
  function submitEdit(e) {
    e.preventDefault();
    axios
      .patch("/chats/update/" + id, {
        oldChatName: name,
        newChatName: editChat,
      })
      .then((res) => {
        console.log(res);
        setEditState(false);
        setEditChat("");
        // tell sidebar the chat has been edited
        showEditChat();
      })
      .catch((err) => {
        console.log(err);
        setEditState(false);
        setEditChat("");
      });
  }
  return (
    <Link to={`/chats/${id}`} className="link">
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarChat-info">
          <h2>{name}</h2>
          <p>
            {lastSeen?.name}: {lastSeen?.message}
          </p>
        </div>
        <div className="sidebarChat-icons">
          {editState ? (
            <ClickAwayListener
              onClickAway={() => {
                setEditState(false);
                setEditChat("");
              }}
            >
              <form onSubmit={submitEdit}>
                <div className="sidebar-search-container">
                  <IconButton onClick={submitEdit}>
                    <EditIcon />
                  </IconButton>
                  <input
                    type="text"
                    onChange={handleChange}
                    value={editChat}
                    autoFocus
                  />
                </div>
              </form>
            </ClickAwayListener>
          ) : (
            <IconButton
              onClick={() => {
                setEditState(true);
              }}
            >
              <EditIcon />
            </IconButton>
          )}
          <div className="sidebar-chat-delete">
            <IconButton onClick={handleClickOpen}>
              <HighlightOffIcon />
            </IconButton>

            <Dialog
              
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {`Are you sure you want to delete ${name} Chat for yourself?`}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Warning chat visbility would be deleted but all the message contents
                  remain.Click on <strong>add new chat</strong> and type{" "}
                  <em>{name}</em> to redo action. Click on <em>ACCEPT</em> to
                  delete or <em></em> DISAGREE to go back.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={handleClose}
                  variant="outlined"
                  color="primary"
                >
                  Disagree
                </Button>
                <Button
                  onClick={chatDelete}
                  variant="outlined"
                  color="secondary"
                  autoFocus
                >
                  Agree
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default SidebarChat;
