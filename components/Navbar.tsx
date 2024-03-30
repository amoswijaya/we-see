import React from "react";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { SignedIn, UserButton } from "@clerk/nextjs";
const Navbar = () => {
  return (
    <nav className=' flex  justify-between fixed z-50 w-full bg-slate-100 px-6 py-4 lg:px-10  items-center'>
      <Link href='/' className='flex items-center gap-1'>
        <Image
          src='/icons/logo.svg'
          width={32}
          height={32}
          alt='yoom logo'
          className='max-sm:size-10'
        />
        <p className='text-[26px] font-extrabold  max-lg:hidden'>WE SEE</p>
      </Link>
      <div className=' justify-between gap-5'>
        <SignedIn>
          <UserButton afterSignOutUrl='/sign-in' showName={false} />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
