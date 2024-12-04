import Image from "next/image";
import logo from "../../public/0xDay_Logo.svg";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-center mt-2">
      <div className="w-[85%] bg-transparent">
        <Image src={logo} className="w-[120px]" alt="0xDay-Logo" />
      </div>
    </div>
  );
};

export default Navbar;
