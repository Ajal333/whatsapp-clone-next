import styled from "styled-components";
import { Chat, MoreVert, SearchOutlined } from "@material-ui/icons";
import { IconButton, Button, Avatar } from "@material-ui/core";
import UserChat from "./UserChat";
import * as EmailValidator from "email-validator";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";

const Sidebar = () => {
  const [user] = useAuthState(auth);
  const chatRef = db
    .collection("chats")
    .where("users", "array-contains", user.email);

  const [chatSnapshot] = useCollection(chatRef);

  const getNewChat = () => {
    let inputEmail = prompt("Please enter the email you want to chat with: ");

    if (!inputEmail) return null;

    if (
      inputEmail !== user.email &&
      !chatExists(inputEmail) &&
      EmailValidator.validate(inputEmail)
    ) {
      console.log("hello");
      db.collection("chats").add({
        users: [user.email, inputEmail],
      });
    }
  };

  const chatExists = (recipientEmail) =>
    !!chatSnapshot?.docs.find(
      (chat) =>
        chat.data().users.find((user) => user === recipientEmail)?.length > 0
    );

  return (
    <Container>
      <IconContainer>
        <UserAvatar onClick={() => auth.signOut()} src={user?.photoURL} />
        <Icons>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </Icons>
      </IconContainer>
      <Search>
        <SearchOutlined />
        <SearchInput placeholder="Enter the mail id you want to chat with" />
      </Search>
      <Newchat onClick={getNewChat}>Start a new chat</Newchat>
      {chatSnapshot?.docs.map((chat) => (
        <UserChat id={chat.id} key={chat.id} users={chat.data().users} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  background: white;
  height: 100vh;
  flex: 0.45;
  /* overflow-y: scroll; */
  min-width: 300px;
  max-width: 350px;
  border-right: solid 1px whitesmoke;

  ::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
`;

const IconContainer = styled.div`
  position: sticky;
  top: 0;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  border-bottom: 1px solid whitesmoke;
  height: 80px;
  background-color: white;
`;

const Icons = styled.div``;

const UserAvatar = styled(Avatar)`
  width: 40px;
  height: 40px;
  color: #131c2198;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const Search = styled.div`
  display: flex;
  padding: 15px;
`;
const SearchInput = styled.input`
  width: 100%;
  outline-width: 0;
  border: none;
  margin-left: 10px;
`;

const Newchat = styled(Button)`
  width: 100%;
  &&& {
    margin-top: 15px;
    margin-bottom: 15px;
    border: solid 1px whitesmoke;
  }
`;

export default Sidebar;
