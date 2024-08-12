export const errorFormatter = (getError: any) => {
  let errors: any = {};
  getError.forEach((ele: any) => {
    errors[ele.path[0]] = ele.message;
  });
  return errors;
};

export const zodErrorFormatter = (error: any) => {
  let err = Object.entries(error);
  const formatError: { [key: string]: string } = {};
  err.forEach((ele: any) => {
    if (ele[0] !== "_errors") {
      formatError[ele?.[0]] = ele[1]._errors?.[0];
    }
  });
  return formatError;
};
