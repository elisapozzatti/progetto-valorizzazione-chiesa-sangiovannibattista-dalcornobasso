import "../Quiz.css";

function Requestsquiz(props) {
  const getColor = (answer) => {
    if (!props.selected) return "#c8b89a";

    if (answer === props.correct) return "lightgreen";

    return "#ff9999";
  };

  const getBorder = (answer) => {
    if (!props.selected) return "#c8b89a";

    if (answer === props.correct) return "green";

    return "red";
  };

  return (
    <div>
      <h2
        style={{
          backgroundColor: "#c8b89a",
          borderLeft: "5px solid #a08060",
          borderRadius: "0 10px 10px 0",
          margin: "20px",
          padding: "10px",
        }}
      >
        {props.request}
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "0 20px",
          padding: "0 20px",
        }}
      >
        <h3
          style={{
            backgroundColor: getColor(props.answer1),
            borderRadius: "10px",
            border: "2px solid " + getBorder(props.answer1),
            padding: "10px",
            cursor: "pointer",
          }}
          className="quiz-answers"
          onClick={() => props.onClick(props.answer1)}
        >
          {props.answer1}
        </h3>
        <h3
          style={{
            backgroundColor: getColor(props.answer2),
            borderRadius: "10px",
            border: "2px solid " + getBorder(props.answer2),
            padding: "10px",
            cursor: "pointer",
          }}
          className="quiz-answers"
          onClick={() => props.onClick(props.answer2)}
        >
          {props.answer2}
        </h3>
        <h3
          style={{
            backgroundColor: getColor(props.answer3),
            borderRadius: "10px",
            border: "2px solid " + getBorder(props.answer3),
            padding: "10px",
            cursor: "pointer",
          }}
          className="quiz-answers"
          onClick={() => props.onClick(props.answer3)}
        >
          {props.answer3}
        </h3>
        <h3
          style={{
            backgroundColor: getColor(props.answer4),
            borderRadius: "10px",
            border: "2px solid " + getBorder(props.answer4),
            padding: "10px",
            cursor: "pointer",
          }}
          className="quiz-answers"
          onClick={() => props.onClick(props.answer4)}
        >
          {props.answer4}
        </h3>
      </div>
    </div>
  );
}

export default Requestsquiz;
