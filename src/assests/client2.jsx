import clientLogo from "../assests/client-logo-8.svg";
import memeberLogo from "../assests/memePng.png";
import culbLogo from "../assests/culb.png";
import event from "../assests/event.png";
import payment from "../assests/payment.png"

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

      <div className="flex px-36 py-16 justify-between items-center bg-[#F5F7FA] text-left font-[Inter]">
        <div>
          <p className="text-4xl font-semibold text-[#4D4D4D]">
            Helping a local <br />{" "}
            <span className="text-[#4CAF4F]">business reinvent itself</span>
          </p>
          <p className="text-[#18191F] text-base mt-2">
            We reached here with our hard work and dedication
          </p>
        </div>

        <div>
          <div className="flex items-center gap-4 border border-sky-600">
            <div>
              <img src={memeberLogo} alt="" />
            </div>

            <div>
              <p>2,245,341</p>
              <p>Members</p>
            </div>
            <div>
              <img src={culbLogo} alt="" />
            </div>

            <div>
              <p>2,245,341</p>
              <p>Members</p>
            </div>
          </div>
          <div className="flex items-center gap-4 border border-sky-600">
            <div>
              <img src={event} alt="" />
            </div>

            <div>
              <p>828,867</p>
              <p>Event Bookings</p>
            </div>
            <div>
              <img src={payment} alt="" />
            </div>

            <div>
              <p>1,926,436</p>
              <p>Payments</p>
            </div>
          </div>

          
        </div>
        
      </div>
    </>
  );
};