import PopupSocial from "@libs/popup-social";
import { Buttons } from "@types";

export default function Button({ name, email }: Buttons) {
  const sendEmail = () => {
    window.location.href = `mailto:${email}`;
  };
  const handleButton = {
    class: name === "social" ? "text-xl md:text-2xl" : "text-3xl",
    defaultClass: "font-light tracking-wider focus:outline-none",
    click: name === "social" ? PopupSocial : sendEmail,
  };
  return (
    <button
      className={`${handleButton.class} ${handleButton.defaultClass}`}
      onClick={handleButton.click}
    >
      {name === "social" ? "social media" : name}
    </button>
  );
}
