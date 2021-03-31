import styled from "styled-components";

const Message = ({ messages }) => {
  return (
    <Container>
      <p>{messages}</p>
    </Container>
  );
};

export default Message;

const Container = styled.div``;
