import logo from "../assests/Logo (1).svg"

export const Navbar = () =>{

    
    return <>
    
    
    <div className="flex  justify-around h-84 w-1440 align-baseline items-center mt-2">
<div><img src={logo} alt="logo" /></div>
<div className="flex justify-around w-1/2 text-gray-900">
    <p>Home</p>
    <p>Service</p>
    <p>Feature</p>
    <p>Product</p>
    <p>Testimonial</p>
    <p>FAQ</p>
</div>
<div className="flex justify-between  items-center w-52 text-[#43A046]">
    <p>Login</p>
    <p className="border border-sky-500  py-1 m-auto bg-[#43A046] text-white px-5 rounded ">Sign up</p>
</div>


    </div>
    
    
    </>
}