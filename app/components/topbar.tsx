'use client'

import { useState } from 'react'
import Link from "next/link"
import Close from '@material-symbols/svg-400/outlined/close.svg';

export default function Topbar() {
    const [open, setOpen] = useState(true)

    return (
        <div className="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
            <div className={(open && "opacity-100" || "opacity-0") + " fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ease-in-out duration-500"}></div>
            <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <div className={(open && "translate-x-0" || "translate-x-full") + " pointer-events-auto relative w-screen max-w-md transform transition ease-in-out duration-500 sm:duration-700"}>
                            <div className={(open && "opacity-100" || "opacity-0") + " absolute right-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4 ease-in-out duration-500"}>
                                <button type="button" className="relative rounded-md group focus:outline-none focus:ring-2 focus:ring-white"
                                    onClick={() => setOpen(false)}>
                                    <span className="absolute -inset-2.5"></span>
                                    <span className="sr-only">Close panel</span>
                                    <Close width={25} height={25} className="fill-gray-300 group-hover:fill-gray-500" />
                                </button>
                            </div>
                            <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                <div className="px-4 sm:px-6">
                                    <h2 className="text-base font-semibold leading-6 text-gray-900" id="slide-over-title">Panel title</h2>
                                </div>
                                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                    <ul>
                                        {Array(9).fill('Content').map((v, i) =>
                                            <li key={i}><Link href="#" className="text-gray-900">Content</Link></li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}