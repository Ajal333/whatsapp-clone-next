import { Button } from "@material-ui/core";
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
        <WhatsappImage src="https://res.cloudinary.com/mozilla-foundation/image/upload/c_fit,f_auto,q_70,w_736/v1587570879/foundationsite/buyersguide/whatsapp_m0bge5.jpg" />
        <Button onClick={signin}>Signin with Google</Button>
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
  width: 100px;
  height: 100px;
  margin-bottom: 15px;
`;

export default Login;
