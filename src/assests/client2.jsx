import clientLogo from "../assests/client-logo-8.svg";
import memeberLogo from "../assests/memePng.png";
import culbLogo from "../assests/culb.png";
import event from "../assests/event.png";
import payment from "../assests/payment.png";
import clientLogo8 from "../assests/client-logo-8.png";
import logo1 from "../assests/client-logo-1.svg";
import logo2 from "../assests/client-logo-2.svg";
import logo3 from "../assests/client-logo-3.svg";
import logo4 from "../assests/client-logo-4.svg";
import logo5 from "../assests/client-logo-6.svg";
import logo6 from "../assests/client-logo-7.svg";
import image18 from "../assests/image 18.png"
import image19 from "../assests/image 19.png"
import image20 from "../assests/image 20.png"

export const ClientPost = () => {
  return (
    <>
      <div className="flex justify-around items-center px-36 font-[Inter] text-left self-stretch m-auto ">
        <div className="w-1440px">
          <img src={clientLogo} className="py-12 h-[443px] w-[442px]" alt="" />
        </div>
        <div className="flex flex-col items-start">
          <p className="text-4xl font-semibold  text-[#4D4D4D] ">
            The unseen of spending three <br /> years at Pixelgrade
          </p>
          <p className="mt-4 text-[#717171] text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. <br /> Sed accumsan quam vitae est varius
            fringilla. Pellentesque placerat vestibulum lorem sed <br /> porta.
            Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus
            pretium auctor. <br /> Etiam quis massa pulvinar, aliquam quam
            vitae, tempus sem. Donec elementum pulvinar odio.
          </p>
          <button className="rounded bg-[#4CAF4F] px-8 py-3 text-white mt-8">
            Learn More
          </button>
        </div>
      </div>

      <div className="flex px-36 py-16 justify-around items-center bg-[#F5F7FA] text-left font-[Inter]">
        <div className=" w-1/3 py-5 px-2">
          <p className="text-4xl font-semibold text-[#4D4D4D] ">
            Helping a local <br />{" "}
            <span className="text-[#4CAF4F]">business reinvent itself</span>
          </p>
          <p className="text-[#18191F] text-base mt-2">
            We reached here with our hard work and dedication
          </p>
        </div>

        <div className=" w-1/3">
          <div className="flex items-center gap-4 ">
            <div>
              <img src={memeberLogo} className="w-[48px] h-[48px]" alt="" />
            </div>

            <div>
              <p className="text-[#4D4D4D] font-bold text-3xl">2,245,341</p>
              <p className="text-base text-[#717171]">Members</p>
            </div>
            <div>
              <img src={culbLogo} className="w-[48px] h-[48px]" alt="" />
            </div>

            <div>
              <p className="text-[#4D4D4D] font-bold text-3xl">46,328</p>
              <p className="text-base text-[#717171]">Members</p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4  mt-10">
            <div>
              <img src={event} className="w-[48px] h-[48px]" alt="" />
            </div>

            <div>
              <p className="text-[#4D4D4D] font-bold text-3xl">828,867</p>
              <p className="text-base text-[#717171]">Event Bookings</p>
            </div>
            <div>
              <img src={payment} className="w-[40px] h-[48px]" alt="" />
            </div>

            <div>
              <p className="text-[#4D4D4D] font-bold text-3xl">1,926,436</p>
              <p className="text-base text-[#717171]">Payments</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-around items-center px-36 font-[Inter] text-left self-stretch m-auto ">
        <div className="w-1440px">
          <img src={clientLogo} className="py-12 h-[443px] w-[442px]" alt="" />
        </div>
        <div className="flex flex-col items-start">
          <p className="text-4xl font-semibold  text-[#4D4D4D] ">
            How to design your site footer like <br /> we did
          </p>
          <p className="mt-4 text-[#717171] text-sm">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt <br /> molestie, massa nunc varius arcu, at
            scelerisque elit erat a magna. Donec quis erat at <br /> libero
            ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula
            leo dui, at porta <br /> nisi facilisis finibus. In euismod augue
            vitae nisi ultricies, non aliquet urna tincidunt. Integer <br /> in
            nisi eget nulla commodo faucibus efficitur quis massa. Praesent
            felis est, finibus et nisi <br /> ac, hendrerit venenatis libero.
            Donec consectetur faucibus ipsum id gravida.
          </p>
          <button className="rounded bg-[#4CAF4F] px-8 py-3 text-white mt-8">
            Learn More
          </button>
        </div>
      </div>

      <div className="flex px-36 py-16 gap-16 justify-around items-center bg-[#F5F7FA] text-left font-[Inter]">
        <div>
          <img src={clientLogo8} className="w-[326px] h-[326px]" alt="" />
        </div>
        <div>
          <div>
            <p className="text-base font-medium text-[#717171]">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus <br /> tincidunt ullamcorper.
              Proin eu enim metus. Vivamus sed libero ornare, tristique quam in,
              gravida <br /> enim. Nullam ut molestie arcu, at hendrerit elit.
              Morbi laoreet elit at ligula molestie, nec molestie <br /> mi
              blandit. Suspendisse cursus tellus sed augue ultrices, quis
              tristique nulla sodales. Suspendisse <br /> eget lorem eu turpis
              vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
              sapien, <br /> vitae placerat ante feugiat eget. Quisque vulputate
              odio neque, eget efficitur libero condimentum <br /> id. Curabitur
              id nibh id sem dignissim finibus ac sit amet magna.
            </p>
            <p className="mt-4  text-xl font-semibold text-[#4CAF4F]">
              Tim Smith
            </p>
            <p className="text-base text-[#89939E] mt-2">
              British Dragon Boat Racing Association
            </p>

            <div className="flex  justify-around gap-10 items-center mt-4 self-stretch">
              <img src={logo1} alt="" />
              <img src={logo2} alt="" />
              <img src={logo3} alt="" />
              <img src={logo4} alt="" />
              <img src={logo5} alt="" />
              <img src={logo6} alt="" />
              <div className="w-[188px]">
                <p className="text-[#4CAF4F] font-semibold text-xl">
                  Meet all customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="font-[Inter] mt-12">
        <p className="text-4xl font-semibold text-[#4D4D4D]">Caring is the new marketing</p>
        <p className="text-[#717171] text-base mt-2">The Nexcent blog is the best place to read about the latest membership insights,<br /> trends and more. See who's joining the community, read about how our community <br /> are increasing their membership income and lot's more.​</p>
      </div>
    </>
  );
};
