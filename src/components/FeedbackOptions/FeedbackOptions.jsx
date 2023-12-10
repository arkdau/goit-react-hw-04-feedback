// import { useEffect } from "react";
// import { Component } from "react";
import css from "./feedbackOptions.module.css";

function FeedbackOptions({ incGood, incNeutral, incBad }) {
  return (
    <div>
      <button className={css.button} onClick={() => incGood()}>
        Good
      </button>
      <button className={css.button} onClick={() => incNeutral()}>
        Neutral
      </button>
      <button className={css.button} onClick={() => incBad()}>
        Bad
      </button>
    </div>
  );
}

export default FeedbackOptions;
