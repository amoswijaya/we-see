"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiAlignJustify } from "react-icons/fi";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
const MobileNav = () => {
  const pathname = usePathname();
  return (
    <section className='w-full max-w-[264px]'>
      <Sheet>
        <SheetTrigger asChild>
          {/* <Image
            src='/icons/hamburger.svg'
            width={36}
            height={36}
            alt='hamburger icon'
            className='cursor-pointer sm:hidden'
          /> */}
          <FiAlignJustify className=' cursor-pointer sm:hidden w-[36px] h-[36px]' />
        </SheetTrigger>
        <SheetContent side='left' className='border-none bg-gray-100'>
          <Link href='/' className='flex items-center gap-1'>
            <Image
              src='/icons/logo.svg'
              width={32}
              height={32}
              alt='yoom logo'
            />
            <p className='text-[26px] font-extrabold '>YOOM</p>
          </Link>
          <div className='flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto'>
            <SheetClose asChild>
              <section className=' flex h-full flex-col gap-6 pt-16 '>
                {sidebarLinks.map((item) => {
                  const isActive = pathname === item.route;

                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route}
                        key={item.label}
                        className={cn(
                          "flex gap-4 items-center p-4 rounded-lg w-full max-w-60",
                          {
                            "bg-slate-400": isActive,
                            "text-white": isActive,
                          },
                        )}
                      >
                        <Image
                          src={item.imgURL}
                          alt={item.label}
                          width={20}
                          height={20}
                        />
                        <p className='font-semibold'>{item.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
