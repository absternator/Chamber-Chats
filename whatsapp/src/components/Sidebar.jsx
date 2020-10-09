import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import "@material-ui/core";

import { Avatar, IconButton } from "@material-ui/core";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import SidebarChat from "./SidebarChat";
import axios from "../axios";
import AddNewChat from "./AddNewChat";
// import { useStateValue } from "../StateProvider";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { auth } from "../firebase";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
function Sidebar({ userValue }) {
  //  store chats
  const [chats, setChats] = useState([]);
  const [editedChat,setEditedChat] = useState(false);
  // const [{user}, dispatch] = useStateValue();
  // useEffect --> show all chats
  useEffect(() => {
    axios
      .get("/chat/sync")
      .then((res) => {
        setChats(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [chats.length,editedChat]);
  // add chat to array
  const addChat = (newChat) => {
    setChats((prevState) => {
      return [...prevState, newChat];
    });
  };
// logout user
  const logOut = () => {
    auth
      .signOut()
      .then(() => console.log("Signed out"))
      .catch((err) => console.log(err));
    window.location = "/";
  };
  // Search bar implementation
  const [searchBarInitiated, setSearchBarInitiated] = useState(false);
  const [searchChat, setSearchChat] = useState([]);
  // set search bar search
  const handleChange = (event) => {
    const { value } = event.target;
    setSearchChat(value.toLowerCase());
  };
  // delete chat
  function deleteChat(deletedId) {
    setChats((prevChats) => {
      return prevChats.filter((chat) => {
        return chat._id !== deletedId;
      });
    });
  }
  // edit chat
  function showEditChat() {
    setEditedChat(!editedChat);
  }
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        {/* avatar */}
        <Avatar src={userValue?.photoURL} alt="display-image" />
        {/* right side consiting of icons */}
        <div className="sidebar-header-right">
          <IconButton  onClick={logOut}>
            <ExitToAppIcon />
            <strong>Logout</strong>
          </IconButton>
        </div>
      </div>
      {/* Create search bar */}
      {searchBarInitiated ? (
        <div className="sidebar-fix">
          <ClickAwayListener
            onClickAway={() => {
              setSearchBarInitiated(false);
              setSearchChat("");
            }}
          >
            <div className="sidebar-search">
              <div className="sidebar-search-container">
                <IconButton
                  onClick={() => {
                    setSearchBarInitiated(false);
                    setSearchChat("");
                  }}
                >
                  <ArrowBackIcon />
                </IconButton>
                <input
                  type="text"
                  onChange={handleChange}
                  value={searchChat}
                  autoFocus
                />
              </div>
            </div>
          </ClickAwayListener>
          <div className="sidebar-chats">
            {chats.map((chat, index) => {
              return (
                chat.name.toLowerCase().includes(searchChat) && (
                  <SidebarChat name={chat.name} id={chat._id} key={index} />
                )
              );
            })}
          </div>
        </div>
      ) : (
        /* if side bar search is not initiated */
        <div className="sidebar-fix">
          <div className="sidebar-search">
            <div className="sidebar-search-container">
              <IconButton
                onClick={() => {
                  setSearchBarInitiated(true);
                }}
              >
                <SearchOutlinedIcon />
              </IconButton>
              <input
                type="text"
                placeholder="Search for Chat"
                onClick={() => {
                  setSearchBarInitiated(true);
                }}
              />
            </div>
          </div>
          <div className="sidebar-chats">
            <AddNewChat addChat={addChat} />
            {chats.map((chat, index) => {
              return (
                <SidebarChat
                  name={chat.name}
                  id={chat._id}
                  key={index}
                  deleteChat={deleteChat}
                  showEditChat={showEditChat}
                />
              );
            })}
          </div>
        </div>
      )}

      {/* Chats - split into each chat */}
    </div>
  );
}

export default Sidebar;
