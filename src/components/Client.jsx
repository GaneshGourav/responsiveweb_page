import logo1 from "../assests/client-logo-1.svg";
import logo2 from "../assests/client-logo-2.svg";
import logo3 from "../assests/client-logo-3.svg";
import logo4 from "../assests/client-logo-4.svg";
import logo5 from "../assests/client-logo-6.svg";
import logo6 from "../assests/client-logo-7.svg";
import clientLogo from "../assests/client-logo-8.svg"
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

      <div className="flex justify-around items-center px-36 font-[Inter] text-left self-stretch m-auto border border-sky-400">
        <div className="border border-sky-400 w-1440px">
          <img src={clientLogo} className="py-12 h-[443px] w-[442px]"  alt="" />
        </div>
        <div className="border border-sky-700 flex flex-col items-start">
          <p className="text-4xl font-semibold  text-[#4D4D4D] ">The unseen of spending three <br /> years at Pixelgrade</p>
          <p className="mt-4 text-[#717171] text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. <br /> Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed <br /> porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. <br /> Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
          <button className="rounded bg-[#4CAF4F] px-8 py-3 text-white mt-8">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};
