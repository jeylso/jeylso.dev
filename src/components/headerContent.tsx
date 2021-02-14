const HeaderMe = () => {
  return (
    <div className="col-start-1 row-start-1 relative w-40">
      <p className="text-4xl text-center font-light tracking-wider">me</p>
      <div className="vl"></div>
      <div className="lines-top w-40"></div>
    </div>
  );
};

const HeaderWebSite = () => {
  return (
    <div className="col-start-2 row-start-1 relative w-56">
      <p className="text-4xl text-center font-light tracking-wider">website</p>
      <div className="vl"></div>
      <div className="lines-top w-56"></div>
    </div>
  );
};

export { HeaderMe, HeaderWebSite };
