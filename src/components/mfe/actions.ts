import { FormActionKind } from "./types";
import { validateInput } from "./validations";

export const onInputChange = (
  name: string,
  value: string,
  dispatch: any,
  formState: any
) => {
  let hasError = formState[name]?.hasError;
  let error = formState[name]?.error;

  let allowedLength = 9;
  if (value.indexOf(".") > -1) {
    allowedLength++;
  }
  if (value.indexOf("-") > -1) {
    allowedLength++;
  }
  if (value.length > allowedLength) {
    return;
  }
  if (formState[name]?.hasError) {
    const result = validateInput(name, value);
    error = result.error;
    hasError = result.hasError;
  }
  dispatch({
    type: FormActionKind.UPDATE_FORM,
    data: {
      ...formState[name],
      name,
      value,
      touched: true,
      error,
      hasError,
    },
  });
};

export const validateForm = (dispatch: any, formState: any): boolean => {
  let isFormValid = true;

  for (const key in formState) {
    const item = formState[key];
    if (item?.name) {
      const { hasError, error } = validateInput(item.name, item.value);
      if (key === item.name && hasError) {
        isFormValid = false;
      }
      dispatch({
        type: FormActionKind.UPDATE_FORM,
        data: {
          name: item.name,
          value: item.value,
          hasError,
          error,
          touched: false,
          isFormValid,
        },
      });
    }
  }
  return isFormValid;
};
