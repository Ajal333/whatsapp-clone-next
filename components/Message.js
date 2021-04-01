import moment from "moment";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { auth } from "../firebase";

const Message = ({ messages, user }) => {
  const [currentUser] = useAuthState(auth);

  const TypeOfMessenger = user === currentUser.email ? Sender : Reciever;

  return (
    <Container>
      <TypeOfMessenger>
        {messages.message}
        <TimeStamp>
          {messages.timestamp ? moment(messages.timestamp).format("LT") : "..."}
        </TimeStamp>
      </TypeOfMessenger>
    </Container>
  );
};

export default Message;

const Container = styled.div``;

const MessageElement = styled.p`
  width: fit-content;
  min-width: 80px;
  border-radius: 8px;
  /* margin: 10px; */
  padding: 10px;
  padding-bottom: 15px;
  position: relative;
  text-align: right;
`;

const Sender = styled(MessageElement)`
  margin-left: auto;
  background-color: #dcf8c6;
  border-bottom-right-radius: 0;
`;

const Reciever = styled(MessageElement)`
  text-align: left;
  background-color: whitesmoke;
  border-bottom-left-radius: 0;
`;

const TimeStamp = styled.p`
  font-size: 11px;
  text-align: right;
  margin: 0;
  margin-top: 5px;
  color: gray;
`;
