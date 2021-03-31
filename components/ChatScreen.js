import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFileTwoTone,
  InsertEmoticon,
  Mic,
  MoreVert,
} from "@material-ui/icons";
import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../firebase";
import { useRouter } from "next/router";
import Message from "./Message";
import { useState } from "react";

const ChatScreen = () => {
  const [input, setInput] = useState("");
  const [user] = useAuthState(auth);
  const router = useRouter();
  const [messagesSnap] = useCollection(
    db
      .collection("chats")
      .doc(router.query.id)
      .collection("messages")
      .orderBy("timestamp", "asc")
  );

  const showMessages = () => {
    if (messagesSnap) {
      return messagesSnap.docs.map((message) => (
        <Message
          key={message.id}
          user={message.data().user}
          messages={{
            ...message.data(),
            timestamp: message.data().timestamp?.toDate().getTime(),
          }}
        />
      ));
    }
  };

  const sendMessage = () => {};

  return (
    <Container>
      <ChatHeader>
        <Avatar />
        <HeaderInfo>
          <h3>The email</h3>
          <p>Last seeeeeeeeeeen</p>
        </HeaderInfo>
        <HeaderIcons>
          <IconButton>
            <AttachFileTwoTone />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </HeaderIcons>
      </ChatHeader>
      <MessageContainer>
        {showMessages()}
        <EndofMessages />
      </MessageContainer>
      <InputContainer>
        <IconButton>
          <InsertEmoticon />
        </IconButton>
        <Input value={input} onChange={(e) => setInput(e.target.value)} />
        <button hidden disabled={!input} onClick={sendMessage}>
          Send Message
        </button>
        <IconButton>
          <Mic />
        </IconButton>
      </InputContainer>
    </Container>
  );
};

export default ChatScreen;

const Container = styled.div`
  background-color: whitesmoke;
  height: 100%;
`;

const ChatHeader = styled.div`
  background-color: white;
  position: sticky;
  top: 0;
  height: 80px;
  padding: 20px;
  z-index: 1;
  display: flex;
  align-items: center;
  border-bottom: 1px solid whitesmoke;
`;

const HeaderInfo = styled.div`
  margin-left: 15px;
  flex: 1;

  > h3 {
    margin-bottom: 3px;
  }

  > p {
    margin-top: 3px;
    font-size: 14px;
    color: gray;
  }
`;

const InputContainer = styled.form`
  display: flex;
  position: sticky;
  z-index: 1;
  background-color: white;
  padding: 10px;
  bottom: 0;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
  align-items: center;
  padding: 20px;
  outline: 0;
  border-radius: 10px;
  background-color: whitesmoke;
  border: none;
  margin: 0 15px;
`;

const MessageContainer = styled.div``;

const HeaderIcons = styled.div``;

const EndofMessages = styled.div``;
