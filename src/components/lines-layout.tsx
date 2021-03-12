import { LineLayout } from "@types";

export default function LinesLayout({ align, height }: LineLayout) {
  return (
    <>
      {align === "bottom" ? <div className={`lines-bottom ${height}`} /> : null}
      <div className="vl" />
      {align === "top" ? <div className="lines-top" /> : null}
    </>
  );
}
