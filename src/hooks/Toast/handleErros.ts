
interface IHandleErrors {
  status: "success" | "error" | "info" | "warning";
  message: string;
}

export const handleErrors = (error: any): IHandleErrors => {
  let message = "An unknown error occurred";
  let status: IHandleErrors["status"] = "error";

  if (error instanceof Error) {
    // Check if it's a regular Error object
    message = error.message;
  } else if (error.response && error.response.data && typeof error.response.data.message === 'string') {
    // Check if it's an error from an HTTP response
    message = error.response.data.message;
  } else if (error.message) {
    // Generic message extraction
    message = error.message;
  }

  return {
    message,
    status,
  };
};