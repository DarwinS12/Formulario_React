import { useSnackbar } from "notistack";

export function useHandleAlert() {
  const { enqueueSnackbar } = useSnackbar();

  const handleAlert = (text) => {
    enqueueSnackbar(text, {
      variant: "success",
    });
  };
  return { handleAlert };
}
