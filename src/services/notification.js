import { toast } from "react-toastify";

export default function makeNotification(text) {
  toast(text, {
    autoClose: 2500,
    type: "info",
    theme: "colored",
  });
}
