import { HeaderMe, HeaderWebSite } from "../components/headerContent";
import { FooterSocialMedia, FooterEmail } from "../components/footerContent";

export default function HomePage() {
  return (
    <div className="grid grid-flow-col auto-cols-max gap-x-11 no-select">
      {/* lines top */}
      <HeaderMe />
      <HeaderWebSite />
      {/* email */}
      <h1 className="col-span-2 row-start-2 text-5xl font-light tracking-wider">
        joseluis@jeylso.dev
      </h1>
      {/* lines bottom */}
      <FooterEmail />
      <FooterSocialMedia />
    </div>
  );
}
