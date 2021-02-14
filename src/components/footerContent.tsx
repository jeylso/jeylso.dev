const FooterSocialMedia = () => {
  return (
    <div className="col-start-2 row-start-3 relative w-42 -left-9 mt-4 z-10">
      <div className="lines-bottom h-5 w-42"></div>
      <div className="vl"></div>
      <p className="text-2xl text-center font-light tracking-wider">
        social media
      </p>
    </div>
  );
};

const FooterEmail = () => {
  return (
    <div className="col-start-1 row-start-3 col-span-2 row-span-2 relative w-full mt-4">
      <div className="lines-bottom h-16 w-full"></div>
      <div className="vl"></div>
      <p className="text-4xl text-center font-light tracking-wider">email</p>
    </div>
  );
};

export { FooterSocialMedia, FooterEmail };
