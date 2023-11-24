import logo from "../assests/Logo (1).svg";

export const Navbar = () => {
  return (
    <>
      <div className="inline-flex gap-36 px-28 py-6 border border-sky-500 justify-around h-84 w-1440 align-baseline items-center mt-2">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="flex justify-around w-1/2 text-gray-900 font-[Inter] gap-12 text-base font-normal leading-6">
          <p>Home</p>
          <p>Service</p>
          <p>Feature</p>
          <p>Product</p>
          <p>Testimonial</p>
          <p>FAQ</p>
        </div>
        <div className="flex justify-between  items-center gap-3 w-52 text-[#4CAF4F] font-[Inter] ">
          <p>Login</p>
          <p className="border border-sky-500  py-1 m-auto bg-[#43A046] text-white px-5 rounded font-medium leading-5 font-[Inter]  ">
            Sign up
          </p>
        </div>
      </div>
    </>
  );
};
