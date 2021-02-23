import SVG from "@components/svg";
import { LinkSocials } from "@types";

const socials = {
  facebook: {
    name: "facebook",
    color: "bg-facebook",
    url: "https://facebook.com",
    class: "row-start-1",
  },
  twitter: {
    name: "twitter",
    color: "bg-twitter",
    url: "https://twitter.com",
    class: "col-start-2 row-start-1",
  },
  github: {
    name: "github",
    color: "bg-black",
    url: "https://github.com",
    class: "col-span-2 row-start-2 flex items-center justify-center",
  },
};

export default function LinkSocial({ social }: LinkSocials) {
  const username = "jeylso";
  return (
    <a
      href={`${socials[social].url}/${username}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`outline-none ${socials[social].class}`}
    >
      <div className="flex shadow-lg rounded-full bg-gray-300 w-48">
        <div
          className={`${socials[social].color} rounded-full py-2 px-3 w-1/2`}
        >
          <SVG icon={socials[social].name} />
        </div>
        <div className="py-2 px-1 w-32">
          <p className="text-center -mt-1.3 mr-4 font-medium">@{username}</p>
        </div>
      </div>
    </a>
  );
}
