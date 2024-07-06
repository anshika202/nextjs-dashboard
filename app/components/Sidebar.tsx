import React from 'react'
import BrandImage from "../Icons/BrandImage";
import Dropdown from "../Icons/DropDown";
import Link from 'next/link';
import Home from "../Icons/HomeIcon";
import Orders from "../Icons/Copy";
import Product from "../Icons/Squares";
import Delivery from "../Icons/Truck";
import Marketing from "../Icons/Mic";
import Analytics from "../Icons/charIcon";
import Payments from "../Icons/CardsIcon";
import Tools from "../Icons/Cursor";
import Discounts from "../Icons/DiscountsIcons";
import Audience from "../Icons/UsersIcon";
import Appearance from "../Icons/ArtIcon";
import Plugin from "../Icons/ShockIcon";
import WalletIcon from "../Icons/WalletIcon";

const Sidebar = () => {
  return (
    <div className='flex flex-col bg-[#1E2640] py-[16px] px-[10px] gap-6 h-screen w-[225px] z-50'>
       <div className="flex items-center w-full px-[8px]">
      <BrandImage />
      <div className="flex flex-col ml-[12px]">
        <h1 className="text-[15px] text-white">Nishyan</h1>
        <a className="cursor-pointer underline text-[13px] text-[#FFFFFF]/80">
          visit store
        </a>
      </div>
      <button className="ml-auto ">
        <Dropdown />
      </button>
    </div>

    <ul className='flex flex-col gap-y-1 overflow-y-auto'>
        <li>
        <Link className="py-2 px-4 flex items-center gap-3 text-sm w-full h-full text-white hover:bg-[#ffff]/10 z"
            href="/">
             <Home/>   
            Home
            </Link>
        </li>
        <li>
        <Link className="py-2 px-4 flex items-center gap-3 text-sm w-full h-full text-white hover:bg-[#ffff]/10 z"
            href="/">
             <Orders/>   
            Orders
            </Link>
        </li>
        <li>
        <Link className="py-2 px-4 flex items-center gap-3 text-sm w-full h-full text-white hover:bg-[#ffff]/10 z"
            href="/">
             <Product/>   
            Products
            </Link>
        </li>
        <li>
        <Link className="py-2 px-4 flex items-center gap-3 text-sm w-full h-full text-white hover:bg-[#ffff]/10 z"
            href="/">
             <Delivery/>   
            Delivery
            </Link>
        </li>
        <li>
        <Link className="py-2 px-4 flex items-center gap-3 text-sm w-full h-full text-white hover:bg-[#ffff]/10 z"
            href="/">
             <Marketing/>   
            Marketing
            </Link>
        </li>
        <li>
        <Link className="py-2 px-4 flex items-center gap-3 text-sm w-full h-full text-white hover:bg-[#ffff]/10 z"
            href="/">
             <Analytics/>   
            Analytics
            </Link>
        </li>
        <li>
        <Link className="py-2 px-4 flex items-center gap-3 text-sm w-full h-full text-white bg-[#ffff]/10 rounded"
            href="/">
             <Payments/>   
            Payments
            </Link>
        </li>
        <li>
        <Link className="py-2 px-4 flex items-center gap-3 text-sm w-full h-full text-white hover:bg-[#ffff]/10 z"
            href="/">
             <Tools/>   
            Tools
            </Link>
        </li>
        <li>
        <Link className="py-2 px-4 flex items-center gap-3 text-sm w-full h-full text-white hover:bg-[#ffff]/10 z"
            href="/">
             <Discounts/>   
            Discounts
            </Link>
        </li>
        <li>
        <Link className="py-2 px-4 flex items-center gap-3 text-sm w-full h-full text-white hover:bg-[#ffff]/10 z"
            href="/">
             <Audience/>   
            Audience
            </Link>
        </li>
        <li>
        <Link className="py-2 px-4 flex items-center gap-3 text-sm w-full h-full text-white hover:bg-[#ffff]/10 z"
            href="/">
             <Appearance/>   
            Appearance
            </Link>
        </li>
        <li>
        <Link className="py-2 px-4 flex items-center gap-3 text-sm w-full h-full text-white hover:bg-[#ffff]/10 z"
            href="/">
             <Plugin/>   
            Plugins
            </Link>
        </li>
    </ul>
    <div className="bg-[#353C53] mt-auto flex gap-x-2 rounded items-center py-1.5 px-3 bottom-4 w-full text-white justify-self-end">
      <div className=" bg-white/10 rounded p-[6px]">
        <WalletIcon/>
      </div>
      <div className="flex flex-col">
        <p className="text-white/80 text-[13px]">Available Credits</p>
        <span className="text-white font-medium text-base">222.10</span>
      </div>
    </div>
    </div>
  )
}

export default Sidebar;