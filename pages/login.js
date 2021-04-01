import Head from "next/head";
import styled from "styled-components";
import { auth, provider } from "../firebase";

const Login = () => {
  const signin = () => {
    auth.signInWithPopup(provider).catch(alert);
  };

  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      <LoginContainer>
        <WhatsappImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/598px-WhatsApp.svg.png" />
        <GoogleButton onClick={signin}>
          <GoogleImage
            src="https://i.pinimg.com/originals/39/21/6d/39216d73519bca962bd4a01f3e8f4a4b.png"
            alt="google logo"
          />
          Signin with Google
        </GoogleButton>
      </LoginContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: whitesmoke;
  display: grid;
  place-items: center;
  min-height: 100vh;
`;

const LoginContainer = styled.div`
  width: 360px;
  height: 60%;
  background-color: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 14px 11px 20px 0px #e2e2e2;
`;

const WhatsappImage = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 15px;
`;

const GoogleButton = styled.button`
  min-width: 150px;
  height: 50px;
  background-color: #57ca5b;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  box-shadow: 4px 3px 10px 3px #e2e2e2;
  color: black;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 16px;
  padding: 0 15px;
  padding-left: 0;
  display: flex;
  align-items: center;
  letter-spacing: 2px;
  outline: 0;

  :hover {
    box-shadow: 14px 11px 20px 0px white;
  }
`;

const GoogleImage = styled.img`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50px;
  margin-right: 10px;
`;

export default Login;
