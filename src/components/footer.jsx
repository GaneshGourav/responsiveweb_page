import companyLogo from "../assests/Logo (1).svg"
import instaLogo from "../assests/InstaIcon.png"
import InternetIcon from "../assests/webIcon.png";
import twitterIcon from "../assests/twitterIcon.png"
import youtubeIcon from "../assests/youtubeIcon.png"
export const Footer = () =>{

    return <>
   <div className="flex px-[165px] py-16 items-start gap-[125px] bg-[#263238] font-[Inter]" >
    <div>
        <img src={companyLogo} className="text-white" alt="" />
        <p className="text-[#F5F7FA] text-sm mt-10">Copyright © 2020 Nexcent ltd.</p>
        <p className="text-[#F5F7FA] text-sm text-left mt-2">All rights reserved</p>
        <div className="flex gap-4 mt-10">
<img src={instaLogo} alt="" />
<img src={InternetIcon} alt="" />
<img src={twitterIcon} alt="" />
<img src={youtubeIcon} alt="" />
        </div>
        
    </div>
    <div></div>



   </div>
    </>
}