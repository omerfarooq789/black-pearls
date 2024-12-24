import { useCallback } from "react";
import { toast } from "react-toastify";
import { AlertTypes } from "../enums";

export const useAlert = () => {
  return useCallback(
    ({ type, message }: { type: AlertTypes; message: string }): void => {
      if (type === AlertTypes.Success) {
        toast.success(message, {
          position: "top-center",
        });
      }
      if (type === AlertTypes.Error) {
        toast.error(message, {
          position: "top-center",
        });
      }
      if (type === AlertTypes.Warning) {
        toast.warning(message, {
          position: "top-center",
        });
      }
      if (type === AlertTypes.Info) {
        toast.info(message, {
          position: "top-center",
        });
      }
    },
    []
  );
};
