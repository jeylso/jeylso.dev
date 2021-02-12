export default function HomePage() {
  return (
    <div className="grid grid-flow-col auto-cols-max gap-x-11 no-select">
      {/* lines top */}
      <div className="col-start-1 row-start-1 relative w-40">
        <p className="text-4xl text-center font-light tracking-wider">me</p>
        <div className="vl"></div>
        <div className="lines-top w-40"></div>
      </div>
      <div className="col-start-2 row-start-1 relative w-56">
        <p className="text-4xl text-center font-light tracking-wider">
          website
        </p>
        <div className="vl"></div>
        <div className="lines-top w-56"></div>
      </div>
      {/* email */}
      <span className="col-span-2 row-start-2 text-5xl font-light tracking-wider">
        joseluis@jeylso.dev
      </span>
      {/* lines bottom */}
      <div className="col-start-2 row-start-3 relative w-42 -left-9 mt-4">
        <div className="lines-bottom h-5 w-42"></div>
        <div className="vl"></div>
        <p className="text-2xl text-center font-light tracking-wider">
          social media
        </p>
      </div>
      <div className="col-start-1 row-start-3 col-span-2 row-span-2 relative w-full mt-4">
        <div className="lines-bottom h-16 w-full"></div>
        <div className="vl"></div>
        <p className="text-4xl text-center font-light tracking-wider">email</p>
      </div>
    </div>
  );
}
