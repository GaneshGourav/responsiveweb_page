import logo from "../assests/Logo (1).svg";

export const Navbar = () => {
  return (
    <>
      <div className="inline-flex gap-36 px-28 py-6  justify-around h-84 w-1440 align-baseline items-center mt-2">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="flex justify-around w-1/2 text-gray-900 font-[Inter] gap-12 text-base font-normal leading-6">
          <p className="font-medium ">Home</p>
          <p>Service</p>
          <p>Feature</p>
          <p>Product</p>
          <p>Testimonial</p>
          <p>FAQ</p>
        </div>
        <div className="flex justify-between  items-center gap-2 w-52 text-[#4CAF4F] font-[Inter] text-center font-medium px-5">
          <p>Login</p>
          <p className="border py-2 bg-[#43A046] text-white px-5 rounded  leading-5 font-[Inter] text-sm gap-2 ">
            Sign up
          </p>
        </div>
      </div>
    </>
  );
};
