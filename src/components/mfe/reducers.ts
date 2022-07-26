import { IFormAction, FormActionKind, IFormState } from "./types";

export const formsReducer = (state: IFormState, action: IFormAction) => {
  switch (action.type) {
    case FormActionKind.UPDATE_FORM:
      const { name, value, hasError, error, touched, isFormValid } =
        action.data;
      return {
        ...state,
        [name]: { ...state[name], value, hasError, error, touched },
        isFormValid,
      };
    default:
      return state;
  }
};
