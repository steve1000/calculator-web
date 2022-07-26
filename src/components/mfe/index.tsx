import React, { useReducer } from "react";
import { useMutation } from "react-query";
import Button from "./components/form/button";
import TextInput from "./components/form/input";
import plus from "./img/icon-plus.svg";
import { postData } from "./data/api";
import AnswerArea from "./components/answer-area";
import { isValidResponseCode } from "./utils/misc";
import { onInputChange, validateForm } from "./actions";
import { formsReducer } from "./reducers";
import { TAnswerResponse } from "./types";

const initialState = {
  number_one: {
    value: "",
    touched: false,
    hasError: false,
    error: "",
    name: "number_one",
  },
  number_two: {
    value: "",
    touched: false,
    hasError: false,
    error: "",
    name: "number_two",
  },
  isFormValid: false,
};

function CalculatorMFE() {
  const [formState, dispatch] = useReducer(formsReducer, initialState);

  const mutation = useMutation((data: object) => {
    return postData("http://localhost:3000/add", data);
  });

  const handleClick = (formState: any) => {
    if (validateForm(dispatch, formState)) {
      return mutation.mutate({
        number_one: Number(formState?.number_one?.value),
        number_two: Number(formState?.number_two?.value),
      });
    }
  };

  const renderAnswerArea = (
    response: TAnswerResponse,
    isLoading: boolean,
    isError: boolean,
    isSuccess: boolean
  ) => {
    const answer: string =
      response &&
      `${response?.data?.number_one} + ${response?.data?.number_two} = ${response?.data?.answer}`;

    // defaults on page load before form has been interacted with
    let backgroundColourClass = "bg-purple-dark";
    let textColourClass = "text-white";
    let content = "";

    if (isLoading) {
      content = "Calculating...";
    }

    if (isSuccess && isValidResponseCode(response?.statusCode) && answer) {
      backgroundColourClass = "bg-purple-dark-text";
      textColourClass = "text-white";
      content = answer;
    }

    if (isError) {
      backgroundColourClass = "bg-error-background";
      textColourClass = "text-error-text";
      content = "Something went wrong, please try again.";
    }

    return (
      <AnswerArea
        backgroundColourClass={backgroundColourClass}
        textColourClass={textColourClass}
        content={content}
      />
    );
  };

  const { isLoading, data, isError, isSuccess } = mutation;

  return (
    <div className="flex flex-col bg-white rounded border-grey-dark-border border-3">
      <div className="top p-8 pt-12 pb-12">
        <div className="flex justify-start gap-2 flex-wrap mb-8">
          <TextInput
            label="First number"
            name={formState.number_one.name}
            value={formState.number_one.value}
            onChange={(e) => {
              onInputChange(
                formState.number_one.name,
                e.target.value,
                dispatch,
                formState
              );
            }}
            hasError={formState.number_one.hasError}
            validationMessage={formState.number_one.error}
          />
          <TextInput
            label="Second number"
            name={formState.number_two.name}
            value={formState.number_two.value}
            onChange={(e) => {
              onInputChange(
                formState.number_two.name,
                e.target.value,
                dispatch,
                formState
              );
            }}
            hasError={formState.number_two.hasError}
            validationMessage={formState.number_two.error}
          />
        </div>
        <div>
          <Button
            text="Add them up"
            handleClick={() => handleClick(formState)}
            icon={plus}
            isLoading={isLoading}
            isDisabled={isLoading}
          />
        </div>
      </div>
      {renderAnswerArea(data, isLoading, isError, isSuccess)}
    </div>
  );
}

export default CalculatorMFE;
