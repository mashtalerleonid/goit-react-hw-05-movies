import { Button } from "./Top.styled";
import { ImArrowUp } from "react-icons/im";

export default function Top({ isShown }) {
  function handleClick(e) {
    window.scrollBy({
      top: -document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  return (
    <Button onClick={handleClick} isShown={isShown}>
      <ImArrowUp />
    </Button>
  );
}
