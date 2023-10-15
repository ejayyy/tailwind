'use client'

import { ReactNode, useState, useEffect, useRef, RefObject } from 'react'
import Link from "next/link"

function useClickOutside(
    ref: RefObject<HTMLElement>,
    onClickOutside: Function
) {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
                onClickOutside();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, onClickOutside]);
}

export default function Dropdown({
    navigation,
    children
}: {
    navigation: { name: string; href: string; current: boolean; }[],
    children: ReactNode
}) {
    const [openDropdown, setOpenDropdown] = useState(false)
    const dropdown = useRef<HTMLDivElement>(null)

    useClickOutside(dropdown, () => setOpenDropdown(false));

    return (
        <div className="relative ml-3" ref={dropdown}>
            <div>
                <button type="button"
                    onClick={() => setOpenDropdown(!openDropdown)}
                    className="relative flex rounded-full text-sm group"
                    id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    {children}
                </button>
            </div>
            {openDropdown &&
                <div className={
                    (openDropdown && "transform opacity-100 scale-100" || "transform opacity-0 scale-95") +
                    " absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-in-out duration-100"}
                    role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={
                                (item.current ? 'bg-cyan-700 text-white' : 'hover:bg-cyan-600 hover:text-white')
                                + ' block px-4 py-2 text-sm'
                            }
                            role="menuitem" tabIndex={-1}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>}
        </div>
    )
}