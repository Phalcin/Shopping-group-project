// components/Navbar.tsx
"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Heart, ShoppingBagIcon, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { navigation } from "@/constants/data";
import { signIn, useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import { StateProps } from "../../type";

const Navbar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const { productData, favoriteData } = useSelector(
    (state: StateProps) => state.pro,
  );

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleMenuClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation(); // Prevent click event from propagating to window
    setShowMenu(!showMenu);
  };

  return (
    <div className="w-full h-20 border-b-[1px] border-b-zinc-500 bg-white text-zinc-600 sticky top-0 z-50 bg-white/80 backdrop-blur-2xl">
      <div className="max-w-screen-xl mx-auto h-full flex items-center justify-between px-4 xl:px-0">
        {/* Logo */}
        <Logo />
        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-5 text-sm uppercase font-semibold">
          {navigation.map((item) => (
            <Link href={item?.href} key={item._id}>
              <li
                className={`hover:text-black cursor-pointer duration-200 relative overflow-hidden group ${
                  item.href === pathname && "text-designColor"
                }`}
              >
                {item?.title}
                <span
                  className={`absolute h-[1px] w-full bg-blue-700 left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500 ${
                    item.href === pathname && "translate-x-0 bg-designColor"
                  }`}
                />
              </li>
            </Link>
          ))}
        </ul>
        {/* Mobile Menu */}
        <div className="md:hidden flex items-center" ref={menuRef}>
          <div className="flex items-center">
            <Link href={"/wishlist"} className="mr-4 relative">
              <Heart className="w-7 h-7" />
              {favoriteData && favoriteData.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full px-1 text-xs">
                  {favoriteData.length}
                </span>
              )}
            </Link>
            <Link href={"/cart"} className="relative">
              <ShoppingBagIcon className="w-7 h-7" />
              {productData && productData.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full px-1 text-xs">
                  {productData.length}
                </span>
              )}
            </Link>
          </div>
          {showMenu ? (
            <X
              className="w-7 h-7 cursor-pointer ml-4"
              onClick={handleMenuClick as any}
            />
          ) : (
            <Menu
              className="w-7 h-7 cursor-pointer ml-4"
              onClick={handleMenuClick as any}
            />
          )}
        </div>
        {showMenu && (
          <div className="absolute top-20 left-0 right-0 bg-white text-black shadow-md z-50">
            <ul className="py-4">
              {navigation.map((item) => (
                <Link href={item?.href} key={item._id}>
                  <li
                    onClick={() => setShowMenu(false)}
                    className="py-2 px-4 hover:bg-gray-200 cursor-pointer"
                  >
                    {item?.title}
                  </li>
                </Link>
              ))}
              {session ? (
                <Link href={"/profile"} key="profile">
                  <li
                    onClick={() => setShowMenu(false)}
                    className="py-2 px-4 hover:bg-gray-200 cursor-pointer"
                  >
                    Profile
                  </li>
                </Link>
              ) : (
                <button
                  onClick={() => signIn()}
                  className="py-2 px-4 hover:bg-gray-200 cursor-pointer"
                >
                  Login
                </button>
              )}
            </ul>
          </div>
        )}

        {/* Icons */}
        <div className="hidden md:flex items-center gap-x-5">
          <Link
            href={"/wishlist"}
            className="hover:text-black cursor-pointer duration-200 relative group"
          >
            <Heart className="w-7 h-7" />
            <span className="absolute top-0 -left-1 bg-zinc-800 text-zinc-200 w-4 h-4 rounded-full text-xs flex items-center justify-center group-hover:bg-black font-semibold group-hover:text-white">
              {favoriteData ? favoriteData.length : 0}
            </span>
          </Link>
          <Link
            href={"/cart"}
            className="hover:text-black cursor-pointer duration-200 relative group"
          >
            <ShoppingBagIcon className="w-7 h-7" />
            <span className="absolute top-0 -left-1 bg-zinc-800 text-zinc-200 w-4 h-4 rounded-full text-xs flex items-center justify-center group-hover:bg-black font-semibold group-hover:text-white">
              {productData ? productData.length : 0}
            </span>
          </Link>
          {session ? (
            <Link
              href={"/profile"}
              className="hover:text-black cursor-pointer duration-200 relative overflow-hidden group text-sm uppercase font-semibold"
            >
              Profile
              <span className="absolute h-[1px] w-full bg-blue-700 left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500" />
            </Link>
          ) : (
            <button
              onClick={() => signIn()}
              className="hover:text-black cursor-pointer duration-200 relative overflow-hidden group text-sm uppercase font-semibold"
            >
              Login
              <span className="absolute h-[1px] w-full bg-blue-700 left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
