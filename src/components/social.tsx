import LinkSocials from "@components/link-social";

export default function Social() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 no-select">
      <LinkSocials social="facebook" />
      <LinkSocials social="twitter" />
      <LinkSocials social="github" />
    </div>
  );
}
