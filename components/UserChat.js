import { Avatar } from "@material-ui/core";
import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import getRecipientEmail from "../utils/getRecipentEmail";
import { useCollection } from "react-firebase-hooks/firestore";
import Router from "next/router";

const UserChat = ({ id, users }) => {
  const [user] = useAuthState(auth);
  const [recipientSnapShot] = useCollection(
    db.collection("users").where("email", "==", getRecipientEmail(users, user))
  );

  const recipient = recipientSnapShot?.docs?.[0]?.data();
  const recipientEmail = getRecipientEmail(users, user);

  const changeRoute = () => {
    Router.push(`/chat/${id}`);
  };

  return (
    <Container onClick={changeRoute}>
      {recipient ? (
        <UserAvatar src={recipient?.photoURL} />
      ) : (
        <UserAvatar src={recipientEmail[0]} />
      )}
      <UserName>{recipientEmail}</UserName>
    </Container>
  );
};

export default UserChat;

const Container = styled.div`
  background-color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 15px;
  :hover {
    background-color: #32373945;
  }
`;

const UserAvatar = styled(Avatar)`
  margin-right: 15px;
`;

const UserName = styled.p`
  word-break: break-word;
`;
