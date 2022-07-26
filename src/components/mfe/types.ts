type FormNumber = {
  value: string;
  touched: boolean;
  hasError: boolean;
  error: string;
  name: string;
};

export enum FormActionKind {
  UPDATE_FORM = "UPDATE_FORM",
}

export type TAnswerResponse = {
  statusCode: number;
  data: {
    number_one: string;
    number_two: string;
    answer: string;
  };
};

interface IObjectKeys {
  [key: string]: any;
}

export interface IFormAction {
  type: FormActionKind;
  data: {
    value: string;
    touched: boolean;
    hasError: boolean;
    error: string;
    name: string;
    isFormValid: boolean;
  };
}

export interface IFormState extends IObjectKeys {
  number_one: FormNumber;
  number_two: FormNumber;
  isFormValid: boolean;
}
