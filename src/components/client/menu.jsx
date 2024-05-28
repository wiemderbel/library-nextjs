"use client";
import Link from "next/link";

import Image from "next/image";
import { useRouter } from "next/navigation";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useShoppingCart } from "use-shopping-cart";
import LogoutIcon from "@mui/icons-material/Logout";
import { useSession, signIn, signOut } from "next-auth/react";
import module from "./menu.module.css"

import CartModal from "./shoppingCart/cartModal";
import { useState } from "react";

const Menu = () => {
  const [toggle,setToggle]=useState(false)
  const { data: session } = useSession();

  const router = useRouter();
  const { handleCartClick, cartCount } = useShoppingCart();

  return (
    <header className={module.header}>
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Image src="/logo.svg" alt="logo" width={40} height={50} />

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/"
                >
                  {" "}
                  Home{" "}
                </Link>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="#"
                >
                  {" "}
                  About{" "}
                </a>
              </li>

              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/shoppingClient/cartlivre"
                >
                  Shopping Cart{" "}
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/admin/dashbord"
                >
                  {" "}
                 Admin Dashboard {" "}
                </Link>
              </li>

            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <button className="relative" onClick={() => handleCartClick()}>
              <ShoppingCartIcon className=" text-teal-600 " />
              <div className="rounded-full flex justify-center items-center bg-gray-100 text-xs text-black absolute w-6 h-5 bottom-6 -right-1">
                {cartCount}
              </div>
            </button>
            <CartModal />
            <div className="sm:flex sm:gap-4">
              {session ? (
                <Link
                  onClick={() => signOut()}
                  className="hidden mr-3 rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
                  href="#"
                > <LogoutIcon/>
                  Deconnecter
                </Link>
              ) : (
                <Link
                  onClick={() => signIn()}
                  className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                  href="/api/auth/signin"
                > <AccountCircleIcon/>
                  Connecter
                </Link>
              )}
            </div>

            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden" onClick={()=>setToggle(prev => !prev)}>
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Menu;
