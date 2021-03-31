import { Circle } from "better-react-spinkit";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <img
        height="200px"
        src="https://res.cloudinary.com/mozilla-foundation/image/upload/c_fit,f_auto,q_70,w_736/v1587570879/foundationsite/buyersguide/whatsapp_m0bge5.jpg"
        style={{ marginBottom: 15 }}
      />
      <Circle size={50} color="#55C657" />
    </div>
  );
};

export default Loader;
