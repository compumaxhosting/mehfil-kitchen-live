"use client";

import Link from "next/link";
import React from "react";
import { BottomMenu } from "./BottomMenu";
import Image from "next/image";

export const Footer = () => {
    return (
        <>
            <section>
                <div className="bg-[#1a3c34] py-6 px-6 md:px-10 lg:px-20">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-y-8 md:gap-y-0 md:gap-x-12">
                        {/* ABOUT US */}
                        <div className="w-full md:w-1/4 px-2">
                            <div className="flex flex-col pb-6">
                                <Image
                                    src="/logo2.png"
                                    alt="Mehfil Kitchen Logo"
                                    width={100}
                                    height={150}
                                    quality={95}
                                    priority={true} // For above-the-fold images
                                />
                            </div>
                            <p className="text-sm text-white">
                                Experience the authentic taste of Hyderabadi cuisine in the
                                heart of Skokie. Our food is a celebration of tradition, flavor,
                                and culture.
                            </p>
                        </div>

                        {/* QUICK LINKS */}
                        <div className="w-full md:w-1/4 px-2">
                            <h2 className="text-lg font-semibold text-white mb-4">
                                Quick Links
                            </h2>
                            <ul className="list-disc pl-5 font-thin text-sm text-white space-y-2 sm:space-y-1">
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <Link href="/about">About</Link>
                                </li>
                                <li>
                                    <Link href="/menu">Menu</Link>
                                </li>
                                <li>
                                    <Link href="/gallery">Gallery</Link>
                                </li>
                                <li>
                                    <Link href="/halal-hyderabadi-catering-skokie-il">
                                        Catering
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>

                        {/* CONTACT US */}
                        <div className="w-full md:w-1/4 px-2">
                            <h2 className="text-lg font-semibold text-white mb-4">
                                Contact Us
                            </h2>
                            <div className="text-white text-sm space-y-2">
                                <div>
                                    5264 Lincoln Ave<br />
                                    Skokie, IL 60077
                                </div>
                                <div>
                                    <span className="font-semibold">Tel: </span>
                                    <a href="tel:+17867634000" className="hover:underline">
                                        786-763-4000
                                    </a>
                                </div>
                                <div>
                                    <span className="font-semibold">Email: </span>
                                    <a
                                        href="mailto:info@mehfilkitchen.com"
                                        className="hover:underline"
                                    >
                                        info@mehfilkitchen.com
                                    </a>
                                </div>
                                <div>
                                    <span className="font-semibold">Hours: </span>
                                    <div>
                                        Mon-Sun: 9:30 AM - 11:00 PM
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* FOR REGULAR ORDERS */}
                        <div className="w-full md:w-1/4 px-2">
                            <h2 className="text-lg font-semibold text-white mb-4">
                                For Regular Orders:
                            </h2>
                            <p className="text-sm text-white mb-4">
                                Order from your favorite delivery app:
                            </p>
                            <div className="flex flex-wrap items-center gap-4">
                                <a
                                    href="https://www.doordash.com/store/mehfil-kitchen-skokie-33915289/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src="/doordash.png"
                                        alt="DoorDash"
                                        width={80}
                                        height={40}
                                    />
                                </a>
                                <a
                                    href="https://www.ubereats.com/store/mehfil-kitchen/RpxFaKXDRC6WeTay-6Iqhw"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src="/ubereats.jpeg"
                                        alt="Uber Eats"
                                        width={50}
                                        height={40}
                                    />
                                </a>
                            </div>
                            <div className="text-white pt-2">
                                Mon-Sun: 9:30 AM - 11:00 PM
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Bar */}
                <div className="bg-[#1a3c34] text-white py-5 px-6 md:px-10 lg:px-20">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Social Icons */}
                        <div className="flex flex-row gap-4 order-1 md:order-2">
                            {/* Facebook */}
                            <a href="https://www.facebook.com/mehfilkitchen/" target="_blank" rel="noopener noreferrer" className='flex items-center justify-center w-10 h-10 rounded-full bg-white bg-opacity-15 hover:bg-[#1a3c34] transition-all duration-300'>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='text-white'>
                                    <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" fill="currentColor" />
                                </svg>
                            </a>

                            {/* Instagram */}
                            <a href="https://www.instagram.com/kitchen.mehfil/?igsh=ejNmNzJkbG56bmxj#" target="_blank" rel="noopener noreferrer" className='flex items-center justify-center w-10 h-10 rounded-full bg-white bg-opacity-15 hover:bg-[#1a3c34] transition-all duration-300'>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='text-white'>
                                    <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 19.4 19.4 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2ZM12 15.5C13.9 15.5 15.5 13.9 15.5 12C15.5 10.1 13.9 8.5 12 8.5C10.1 8.5 8.5 10.1 8.5 12C8.5 13.9 10.1 15.5 12 15.5ZM17.5 6.5C16.7 6.5 16 7.2 16 8C16 8.8 16.7 9.5 17.5 9.5C18.3 9.5 19 8.8 19 8C19 7.2 18.3 6.5 17.5 6.5Z" fill="currentColor" />
                                </svg>
                            </a>

                            {/* Twitter/X */}
                            <a href="https://x.com/mehfilkitchen" target="_blank" rel="noopener noreferrer" className='flex items-center justify-center w-10 h-10 rounded-full bg-white bg-opacity-15 hover:bg-[#1a3c34] transition-all duration-300'>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='text-white'>
                                    <path d="M17.53 3H21.25L13.91 10.87L22.5 21H16.16L10.97 14.68L4.97 21H1.23L8.97 12.62L0.75 3H7.24L12 8.74L17.53 3ZM16.38 19.13H18.19L6.22 4.76H4.29L16.38 19.13Z" fill="currentColor" />
                                </svg>
                            </a>

                            {/* YouTube */}
                            <a href="https://www.youtube.com/@mehfilkitchenskokie" target="_blank" rel="noopener noreferrer" className='flex items-center justify-center w-10 h-10 rounded-full bg-white bg-opacity-15 hover:bg-[#1a3c34] transition-all duration-300'>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='text-white'>
                                    <path d="M10 15L15.19 12L10 9V15ZM21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.84 15.8 21.56 16.83C21.31 17.73 20.73 18.31 19.83 18.56C19.36 18.69 18.5 18.78 17.18 18.84C15.88 18.91 14.69 18.94 13.59 18.94L12 19C7.81 19 5.2 18.84 4.17 18.56C3.27 18.31 2.69 17.73 2.44 16.83C2.31 16.36 2.22 15.73 2.16 14.93C2.09 14.13 2.06 13.44 2.06 12.84L2 12C2 9.81 2.16 8.2 2.44 7.17C2.69 6.27 3.27 5.69 4.17 5.44C4.64 5.31 5.5 5.22 6.82 5.16C8.12 5.09 9.31 5.06 10.41 5.06L12 5C16.19 5 18.8 5.16 19.83 5.44C20.73 5.69 21.31 6.27 21.56 7.17Z" fill="currentColor" />
                                </svg>
                            </a>
                        </div>
                        <p className="order-2 md:order-1 text-sm mb-4">
                            © {new Date().getFullYear()} Mehfil Kitchen. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </section>
            <BottomMenu />
        </>
    );
};