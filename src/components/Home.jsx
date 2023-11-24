import hero from "../assests/Illustration.svg";
export const Home = () => {
  return (
    <>
      <div className="flex px-36 py-24 items-center gap-28 self-stretch  font-[Inter] text-left">
        <div>
          <p className="font-[Inter] font-medium text-6xl text-[#4D4D4D] self-stretch  ">
            Lessons and insights <br />
            <span className="text-[#4CAF4F]">from 8 years</span>{" "}
          </p>
          <p className="text-[#717171]  text-base mt-4">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="rounded bg-[#4CAF4F] px-8 py-3 text-white mt-8">
            Register
          </button>
        </div>
        <div>
          <img src={hero} alt="" />
        </div>
      </div>
    </>
  );
};
