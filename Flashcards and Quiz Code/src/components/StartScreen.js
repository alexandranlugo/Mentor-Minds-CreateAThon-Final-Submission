function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Here is your generated quiz.</h2>
      <h3>There are {numQuestions} questions in total.</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
