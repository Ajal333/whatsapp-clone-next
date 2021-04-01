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
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/598px-WhatsApp.svg.png"
        style={{ marginBottom: 15 }}
      />
      <Circle size={50} color="#55C657" />
    </div>
  );
};

export default Loader;
