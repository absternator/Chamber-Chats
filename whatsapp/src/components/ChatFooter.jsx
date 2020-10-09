import React, { useState } from "react";
import InsertEmoticon from "@material-ui/icons/InsertEmoticon";
import { IconButton } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import axios from "../axios";
// import { useStateValue } from "../StateProvider";
import Picker from "emoji-picker-react";
import DictateButton from "react-dictate-button";

const useStyles = makeStyles((theme) => ({
  button: {
    marginLeft: ".5vw",
  },
}));
function ChatFooter({ chatName, userValue }) {
  // set name to user
  // const [{ user }, dispatch] = useStateValue();

  const classes = useStyles();
  const [message, setMessage] = useState("");
  // handle input change
  const handleChange = (event) => {
    const  value  = event.target.value;
    setMessage(value);
  };
  // Async function -- await(pause) until data comes in
  const handleSubmit = async (event) => {
    event.preventDefault();
    let stringMessage = message.toString();
    stringMessage = stringMessage.replace(",", " ");
    console.log(stringMessage);
    await axios
      .post("/messages/new", {
        name: userValue?.displayName,
        message: stringMessage,
        chatName: chatName,
      })
      .then((res) => console.log(res.data));
    // return to blank search bar
    setMessage("");
  };
  // Emoji handeling
  const [emojiClicked, setEmojiClicked] = useState(false);
 

  const onEmojiClick = (event, emojiObject) => {
    setMessage((prevState) => {
      return prevState + " " + emojiObject.emoji + " ";
    });
  };
  // handle dictate
  const handleDictate = ({
    result: result,
  }) => {
    if (result === undefined){
      console.log(typeof result);
      alert("Error: couldnt recognize speech")
    } else {
        setMessage(result?.transcript);
    console.log(result?.confidence);
    }
  };

  // on dictate progress
  const handleProgress = () => {
  }
  // handle Error
  const handleError = (event) => {
    console.log(event);
  }

  return (
    <div className="chat-footer">
      <IconButton onClick={() => setEmojiClicked(!emojiClicked)}>
        <InsertEmoticon />
      </IconButton>
      {emojiClicked && (
        <Picker onEmojiClick={onEmojiClick} disableSearchBar="true" />
      )}
      <form>
        <input
          type="text"
          placeholder="Type a message"
          onChange={handleChange}
          value={message}
        />
        {/* <button type="submit">Send</button> */}
        <Button
          variant="outlined"
          // style={{ color: "green" }}
          size="small"
          className={classes.button}
          endIcon={<Icon>send</Icon>}
          type="submit"
          onClick={handleSubmit}
        >
          Send
        </Button>
      </form>
      <DictateButton
        className="my-dictate-button"
        grammar="#JSGF V1.0; grammar districts; public <district> = Tuen Mun | Yuen Long;"
        onDictate={handleDictate}
        onProgress={handleProgress}
        onError={handleError}
      >
        <MicIcon />
      </DictateButton>
    </div>
  );
}

export default ChatFooter;
