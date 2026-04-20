function Storyline(props) {
  return (
    <div
      style={{
        borderLeft: "3px solid #a08060",
        marginLeft: "20px",
        paddingLeft: "10px",
        cursor: "pointer",
      }}
      className="card"
      onClick={props.onClick}
    >
      <h3
        style={{
          color: "#a08060",
          marginBottom: "0",
        }}
      >
        {props.year}
      </h3>
      <h4
        style={{
          color: "black",
          marginTop: "5px",
          marginBottom: "5px",
        }}
      >
        {props.description}
        <img
          src="/arrow.png"
          style={{
            width: "5px",
            height: "5px",
            marginLeft: "5px",
            alignSelf: "center",
            transition: "transform 0.3s ease",
            transform: props.isOpen ? "rotate(90deg)" : "rotate(0deg)",
          }}
        />
      </h4>
    </div>
  );
}

export default Storyline;
