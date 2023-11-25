import logo1 from "../assests/client-logo-1.svg";
import logo2 from "../assests/client-logo-2.svg";
import logo3 from "../assests/client-logo-3.svg";
import logo4 from "../assests/client-logo-4.svg";
import logo5 from "../assests/client-logo-6.svg";
import logo6 from "../assests/client-logo-7.svg";

import communityLogo from "../assests/community-logo.svg";
import homeLogo from "../assests/Home-logo.svg";
import groupLogo from "../assests/Group-logo.svg";
export const Client = () => {
  return (
    <>
      <div className="w-1440  px-36 items-center font-[Inter] ">
        <p className="font-semibold text-4xl  text-[#4D4D4D]">Our Clients</p>
        <p className="text-[#717171] text-base mt-2">
          We have been working with some Fortune 500+ clients
        </p>
      </div>
      <div className="flex px-36 h-24 justify-between items-center mt-4 self-stretch">
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
        <img src={logo4} alt="" />
        <img src={logo5} alt="" />
        <img src={logo6} alt="" />
        <img src={logo5} alt="" />
      </div>
      <div className="font-[Inter] mt-10">
        <p className="text-4xl font-semibold text-[#4D4D4D] ">
          Manage your entire community <br /> in a single system
        </p>
        <p className="text-[#717171] text-base mt-2">
          Who is Nextcent suitable for?
        </p>
      </div>

      <div className="flex justify-between items-center px-36 text-center font-[Inter] mt-4 ">
        <div className=" text-center flex justify-center items-center flex-col px-8 py-6">
          <img src={communityLogo} alt="" />
          <p className="mt-2 font-bold text-3xl text-[#4D4D4D]">
            Membership <br /> Organisations
          </p>
          <p className="text-[#717171] text-sm mt-2">
            Our membership management <br /> software provides full automation
            of <br /> membership renewals and payments
          </p>
        </div>
        <div className=" text-center flex justify-center items-center flex-col px-8 py-6">
          <img src={homeLogo} alt="" />
          <p className="mt-2 font-bold text-3xl text-[#4D4D4D]">
            National <br /> Associations
          </p>
          <p className="text-[#717171] text-sm mt-2">
            Our membership management <br /> software provides full automation
            of <br /> membership renewals and <br /> payments
          </p>
        </div>
        <div className=" text-center flex justify-center items-center flex-col px-8 py-6">
          <img src={groupLogo} alt="" />
          <p className="mt-2 font-bold text-3xl text-[#4D4D4D]">
            Clubs And <br /> Groups
          </p>
          <p className="text-[#717171] text-sm mt-2">
            Our membership management <br /> software provides full automation
            of <br /> membership renewals and payments
          </p>
        </div>
      </div>

      
    </>
  );
};
