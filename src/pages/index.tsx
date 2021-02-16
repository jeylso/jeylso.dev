import Lines from "../components/lines";

export default function HomePage() {
  return (
    <div className="grid grid-flow-col auto-cols-max no-select">
      <Lines>
        <h1 className="col-span-2 row-start-2 text-4xl md:text-5xl font-light tracking-wider">
          joseluis@jeylso.dev
        </h1>
      </Lines>
    </div>
  );
}
