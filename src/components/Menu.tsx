"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { menuItems, filters } from "../Data/MenuData";


export default function MenuSection() {
    const [activeFilter, setActiveFilter] = useState("family pack");

    const filteredItems = menuItems.filter(item =>
        item.categories.includes(activeFilter)
    );
    

    return (
        <section className="w-full py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-[#1a3c34]">
                        Mehfil Kitchen Menu – Authentic Halal Hyderabadi Food in Skokie, IL
                    </h1>
                    <p className="text-gray-700 text-base max-w-4xl mx-auto">
                        Explore our delicious halal Hyderabadi menu at Mehfil Kitchen in Skokie, IL. We serve Mutton Biryani, Chicken Biryani, Hyderabadi Mutton Dum Biryani, Chicken Reshmi Kabob, Chicken-65, Majestic Chicken, Butter Chicken, Kalimirchi Beef, Mehfil Fish Fry, Shahi Rice, and Plain Rice. Enjoy our Snack Combo with fresh Samosa, Mirchi, and Chai for the perfect evening treat.
                    Visit us for the best Hyderabadi food in Skokie, loved by customers from Evanston, Lincolnwood, Morton Grove, Niles, and nearby areas. Experience authentic flavors and quality halal meals that will keep you coming back.

                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="filter-buttons flex flex-wrap justify-center gap-2 mb-10">
                    {filters.map((filter) => (
                        <button
                            key={filter.value}
                            onClick={() => setActiveFilter(filter.value)}
                            className={`px-4 py-2 min-w-[100px] text-sm border border-[#e6d38d] rounded-full transition-all duration-300 hover:bg-[#e6d38d] hover:text-black ${activeFilter === filter.value ? 'bg-[#e6d38d] scale-105' : ''
                                }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                {/* Improved Animated Menu Grid */}
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-14 justify-items-center max-w-fit items-stretch">
                        <AnimatePresence mode="wait">
                            {filteredItems.map((item) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            type: "spring",
                                            stiffness: 100,
                                            damping: 15
                                        }
                                    }}
                                    exit={{
                                        opacity: 0,
                                        y: -20,
                                        transition: { duration: 0.2 }
                                    }}
                                    transition={{ duration: 0.3 }}
                                    layout // This enables layout animations
                                    className="w-full max-w-[340px] mb-4 md:mb-8 flex flex-col justify-between h-full"
                                >
                                    {/* Image with price tag */}
                                    <motion.div
                                        className="relative flex justify-center"
                                        layout
                                    >
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={380}
                                            height={373}
                                            className="w-full h-auto max-w-[380px] rounded-[5%] object-cover"
                                        />
                                        <div className="absolute bottom-6 right-6 bg-white text-black font-semibold px-3 py-2 md:px-4 md:py-2 rounded shadow text-sm md:text-base">
                                            ${item.price}
                                        </div>
                                    </motion.div>

                                    {/* Title */}
                                    <motion.h3
                                        className="text-xl md:text-2xl font-semibold text-black mt-6 md:mt-9 mb-4"
                                        layout
                                    >
                                        {item.title}
                                    </motion.h3>

                                    {/* Description */}
                                    <motion.p
                                        className="text-base leading-6 text-black mb-6 md:mb-8"
                                        layout
                                    >
                                        {item.description}
                                    </motion.p>

                                    {/* Order Now Button */}
                                    <motion.div layout>
                                        <Link
                                            href="contact"
                                            className="inline-block text-sm md:text-base font-semibold text-black px-6 md:px-10 py-3 md:py-4 border-2 border-[#1a3c34] rounded transition-all duration-300 hover:bg-[#1a3c34] hover:text-white mb-6"
                                        >
                                            Order Now!
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}    