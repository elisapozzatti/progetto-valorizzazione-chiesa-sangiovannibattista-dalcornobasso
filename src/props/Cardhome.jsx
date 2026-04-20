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
      <h2
        style={{
          color: "#a08060",
          fontSize: "18px",
        }}
      >
        {props.title}
      </h2>
      <p
        style={{
          color: "white",
          fontSize: "14px",
        }}
      >
        {props.description}
      </p>
    </div>
  );
}

export default Cardhome;
