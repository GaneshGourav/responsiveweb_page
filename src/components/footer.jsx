import companyLogo from "../assests/Logo (1).svg";
import instaLogo from "../assests/InstaIcon.png";
import InternetIcon from "../assests/webIcon.png";
import twitterIcon from "../assests/twitterIcon.png";
import youtubeIcon from "../assests/youtubeIcon.png";
export const Footer = () => {
  return (
    <>
      <div className="flex px-[165px] py-16 justify-between items-start gap-[125px] bg-[#263238] font-[Inter]">
        <div>
          <img src={companyLogo} className="text-white" alt="" />
          <p className="text-[#F5F7FA] text-sm mt-10">
            Copyright © 2020 Nexcent ltd.
          </p>
          <p className="text-[#F5F7FA] text-sm text-left mt-2">
            All rights reserved
          </p>
          <div className="flex gap-4 mt-10">
            <img src={instaLogo} alt="instaLogo" />
            <img src={InternetIcon} alt="websiteLogo" />
            <img src={twitterIcon} alt="twitterLogo" />
            <img src={youtubeIcon} alt="youtubeLogo" />
          </div>
        </div>
        <div className="flex items-start justify-between gap-[30px] text-[#F5F7FA] font-[Inter] text-left  w-[635px]">
          <div>
            <p className="text-xl font-semibold">Company</p>
            <p className="mt-6 text-sm">About us</p>
            <p className="mt-3 text-sm">Blog</p>
            <p className="mt-3 text-sm">Contact us</p>
            <p className="mt-3 text-sm">Pricing</p>
            <p className="mt-3 text-sm">Testimonials</p>
          </div>
          <div>
            <p className="text-xl font-semibold">Support</p>
            <p className="mt-6 text-sm">Help center</p>
            <p className="mt-3 text-sm">Terms of service</p>
            <p className="mt-3 text-sm">Legal</p>
            <p className="mt-3 text-sm">Privacy policy</p>
            <p className="mt-3 text-sm">Status</p>
          </div>
          <div>
            {" "}
            <p className="text-xl font-semibold">Stay up to date</p>
            <input
              type="email"
              placeholder="  Your email address"
              className="bg-[gray] text-[#D9DBE1] rounded text-sm mt-6"
            />
          </div>
        </div>
      </div>
    </>
  );
};
