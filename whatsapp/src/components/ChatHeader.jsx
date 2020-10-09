import React, { useState, useEffect } from "react";
import { SearchOutlined } from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import ClickAwayListener from "@material-ui/core/ClickAwayListener";

function ChatHeader({ chatName, messages, handleDelete, searchedMessage }) {
  // randomized avatar
  const [seed, setSeed] = useState("");
  const [lastSeen, setLastSeen] = useState("...");
  // search bar
  const [searchBarInitiated, setSearchBarInitiated] = useState(false);
  const [searchChat, setSearchChat] = useState([]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
    setLastSeen((prevState) => {
      if (messages === undefined || messages.length === 0) {
        return prevState;
      } else {
        const time = new Date(messages[messages.length - 1].createdAt);
        return time.getDay() !== new Date().getDay()
          ? time.toLocaleString().slice(0, -3)
          : time.toLocaleTimeString().slice(0, -3);
      }
    });
  }, [chatName, messages]);

  function handleSearch() {
    setSearchBarInitiated(!searchBarInitiated);
  }
  // handle input change
  const handleChange = (event) => {
    const { value } = event.target;
    setSearchChat(value.toLowerCase());
  };
  // handle submit to searh for message
  function submitSearch(e) {
    // pass back and find
    e.preventDefault();
    searchedMessage(searchChat, true);
  }

  return (
    <div className="chat-header">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      {/* Info displayed */}
      <div className="chat-header-info">
        <h3>{chatName}</h3>
        <p>last seen at {lastSeen}</p>
      </div>
      {/* icons on header */}
      <div className="chat-header-right">
        {searchBarInitiated ? (
          <ClickAwayListener
            onClickAway={() => {
              setSearchBarInitiated(false);
              setSearchChat("");
              searchedMessage(searchChat, false);
            }}
          >
            <form onSubmit={submitSearch}>
              <div className="sidebar-search-container">
                <IconButton onClick={submitSearch}>
                  <SearchOutlined />
                </IconButton>
                <input
                  type="text"
                  onChange={handleChange}
                  value={searchChat}
                  autoFocus
                />
              </div>
            </form>
          </ClickAwayListener>
        ) : (
          <div className="chat-header-right">
            <IconButton onClick={handleSearch}>
              <SearchOutlined />
            </IconButton>

            <IconButton
              onClick={() => {
                handleDelete();
              }}
            >
              <DeleteForeverIcon />
            </IconButton>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatHeader;
