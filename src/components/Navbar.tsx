'use-client'

import Image from "next/image";
import logo from "../../public/assets/0xDay_Logo.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-center mt-2">
      <div className=" bg-transparent"
      style={{ width: 'calc(100vw - 220px)' }}>
        <Link href="/">
          <Image src={logo} className="w-[120px]" alt="0xDay-Logo" /> 
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
