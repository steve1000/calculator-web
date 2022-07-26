import React from "react";
import classnames from "classnames";

type AnswerAreaProps = {
  backgroundColourClass: string;
  textColourClass: string;
  content: string;
};

function AnswerArea({
  backgroundColourClass,
  textColourClass,
  content,
}: AnswerAreaProps) {
  return (
    <div
      className={classnames(
        "answer p-4 flex items-center justify-center text-2xl min-h-[160px]",
        backgroundColourClass,
        textColourClass
      )}
    >
      {content}
    </div>
  );
}

export default AnswerArea;
