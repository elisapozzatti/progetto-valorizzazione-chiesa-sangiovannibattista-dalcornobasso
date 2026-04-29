import "../Homepage.css";

function Cardhome(props) {
  return (
    <div
      style={{
        backgroundColor: "#2c1f0e",
        borderRadius: "10px",
        padding: "10px",
        width: "20vw",
        position: "absolute",
        zIndex: "500",
        ...props.style,
      }}
    >
      <h2 className="titleCard">{props.title}</h2>
      <p className="descriptionCard">{props.description}</p>
    </div>
  );
}

export default Cardhome;
