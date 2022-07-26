export const validateInput = (name: string, value: string) => {
  let hasError = false,
    error = "";
  switch (name) {
    case "number_one":
    case "number_two":
      if (!value || isNaN(Number(value))) {
        hasError = true;
        error = "Enter a number with digits up to 9 characters long";
      }
      break;
    default:
      break;
  }
  return { hasError, error };
};
