'use client'

import { useState } from 'react'
import Link from "next/link"

import FaceIcon from '@material-symbols/svg-400/outlined/face-fill.svg';
import CartIcon from '@material-symbols/svg-400/outlined/shopping_cart-fill.svg';
import Logo from '@material-symbols/svg-400/outlined/ac_unit.svg';
import MenuIcon from '@material-symbols/svg-400/outlined/menu.svg';
import CloseIcon from '@material-symbols/svg-400/outlined/close.svg';

const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
]

export default function Navbar() {
    const [openDropdown, setOpenDropdown] = useState(false)
    const [openMobile, setOpenMobile] = useState(false)

    return (
        <nav className="bg-cyan-500 text-gray-800 font-medium">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button"
                            onClick={() => setOpenMobile(!openMobile)}
                            className="relative inline-flex items-center justify-center rounded-md p-2 group" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                            <MenuIcon width={24} height={24} className={openMobile && "hidden" || "fill-gray-800 group-hover:fill-cyan-300"} />
                            <CloseIcon width={24} height={24} className={!openMobile && "hidden" || "fill-gray-800 group-hover:fill-cyan-300"} />
                        </button>
                    </div>
                    {/* desktop */}
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <Link href="/">
                                <Logo width={35} height={35} />
                            </Link>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={
                                            (item.current ? 'bg-cyan-700 text-white' : 'hover:bg-cyan-600 hover:text-white')
                                            + ' rounded-md px-3 py-2 text-sm'
                                        }
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button type="button" className="relative rounded-full p-1 group">
                            <span className="absolute -inset-1.5"></span>
                            <span className="sr-only">View cart</span>
                            <CartIcon width={40} height={40} className="fill-gray-800 group-hover:fill-cyan-300" />
                        </button>
                        <div className="relative ml-3">
                            <div>
                                <button type="button"
                                    onClick={() => setOpenDropdown(!openDropdown)}
                                    className="relative flex rounded-full text-sm group"
                                    id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                    <span className="absolute -inset-1.5"></span>
                                    <span className="sr-only">Open user menu</span>
                                    <FaceIcon width={40} height={40} className="fill-gray-800 group-hover:fill-cyan-300" />
                                </button>
                            </div>
                            <div className={
                                (openDropdown && "transform opacity-100 scale-100" || "transform opacity-0 scale-95") +
                                " absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-in-out duration-100"
                            }
                                role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>
                                <Link href="#" className="block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="user-menu-item-0">Your Profile</Link>
                                <Link href="#" className="block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="user-menu-item-1">Settings</Link>
                                <Link href="#" className="block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="user-menu-item-2">Sign out</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* mobile */}
            <div className={(openMobile && "block" || "hidden") + " sm:hidden"} id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={
                                (item.current ? 'bg-cyan-700 text-white' : 'hover:bg-cyan-600 hover:text-white')
                                + ' rounded-md px-3 py-2 block'
                            }
                            aria-current={item.current ? 'page' : undefined}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}