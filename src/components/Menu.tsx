"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { menuItems, filters } from "../Data/MenuData";

type ViewMode = "complete" | "filtered";

export default function MenuSection() {
    const [activeFilter, setActiveFilter] = useState("family pack");
    const [viewMode, setViewMode] = useState<ViewMode>("filtered");

    const filteredItems = menuItems.filter(item =>
        item.categories.includes(activeFilter)
    );

    // Group items by category for complete menu view
    const groupedItems = menuItems.reduce((acc, item) => {
    let category = item.categories;

    // Combine Mutton & Chicken Dum Biryani under one heading
    if (
        item.title.toLowerCase().includes("chicken dum biryani") ||
        item.title.toLowerCase().includes("mutton dum biryani")
    ) {
        category = "Hyderabadi Dum Biryani";
    }

    if (!acc[category]) {
        acc[category] = [];
    }
    acc[category].push(item);
    return acc;
}, {} as Record<string, typeof menuItems>);

    // Debug logging
    // console.log("Active Filter:", activeFilter);
    // console.log("Filtered Items:", filteredItems.length);
    // console.log("All Menu Items:", menuItems.length);

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

                {/* View Mode Toggle */}
                <div className="flex justify-center mb-8">
                    <div className="bg-gray-100 p-1 rounded-lg flex w-full max-w-xl">
                        <button
                            onClick={() => setViewMode("complete")}
                            className={`flex-1 px-6 py-3 text-sm font-medium rounded-md transition-all duration-300 ${viewMode === "complete"
                                    ? "bg-[#1a3c34] text-white shadow-sm"
                                    : "text-gray-600 hover:text-gray-900"
                                }`}
                        >
                            Complete Menu
                        </button>
                        <button
                            onClick={() => setViewMode("filtered")}
                            className={`flex-1 px-6 py-3 text-sm font-medium rounded-md transition-all duration-300 ${viewMode === "filtered"
                                    ? "bg-[#1a3c34] text-white shadow-sm"
                                    : "text-gray-600 hover:text-gray-900"
                                }`}
                        >
                            Browse by Category
                        </button>
                    </div>
                </div>

                {/* Filter Buttons - Only show in filtered mode */}
                <AnimatePresence>
                    {viewMode === "filtered" && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="filter-buttons flex flex-wrap justify-center gap-2 mb-10"
                        >
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
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Menu Content */}
                <AnimatePresence mode="wait">
                    {viewMode === "complete" ? (
                        <motion.div
                            key="complete"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="bg-[#1a3c34] rounded-lg p-4 md:p-8 lg:p-12 text-white shadow-2xl"
                            style={{
                                backgroundImage: `
                                    radial-gradient(circle at 20% 80%, rgba(120, 120, 120, 0.1) 0%, transparent 50%),
                                    radial-gradient(circle at 80% 20%, rgba(120, 120, 120, 0.1) 0%, transparent 50%)
                                `,
                            }}
                        >
                            <div className="text-center mb-6 md:mb-14">
                                <h2 className="text-lg sm:text-xl font-bold text-[#e6d38d] mb-3 font-serif">
                                    Our Complete Menu
                                </h2>
                                <div className="w-24 md:w-32 h-1 bg-[#e6d38d] mx-auto rounded-full"></div>
                            </div>

                            {Object.entries(groupedItems).map(([category, items]) => (
                                <div key={category} className="mb-8 md:mb-12 last:mb-0">
                                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#e6d38d] mb-4 md:mb-6 text-center capitalize font-serif border-b-2 border-[#e6d38d] pb-2">
                                        {category.replace(/([A-Z])/g, ' $1').trim()}
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                        {items.map((item) => (
                                            <div
                                                key={`${category}-${item.title}`}
                                                className="flex justify-between items-start p-3 md:p-4 border-b border-gray-600 hover:bg-gray-600/50 rounded-lg transition-all duration-300"
                                            >
                                                <div className="flex-1">
                                                    <h4 className="text-base md:text-lg lg:text-xl font-semibold text-[#e6d38d] mb-1 md:mb-2">
                                                        {item.title}
                                                    </h4>
                                                    <p className="text-white text-xs md:text-sm leading-relaxed pr-2 md:pr-4">
                                                        {item.description}
                                                    </p>
                                                </div>
                                                <div className="text-right">
                                                    <span className="text-lg md:text-xl lg:text-2xl font-bold text-[#e6d38d]">
                                                        ${item.price}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            <div className="text-center mt-8 md:mt-12">
                                <Link
                                    href="contact"
                                    className="inline-block text-sm md:text-lg font-semibold bg-[#e6d38d] text-black hover:text-white px-6 py-3 md:px-8 md:py-4 rounded-lg transition-all duration-300 hover:bg-[#1a3c34] hover:scale-105 shadow-lg"
                                >
                                    Order Now!
                                </Link>
                            </div>
                        </motion.div>
                    ) : (
                        // Filtered Menu View - Original Grid Layout
                        <motion.div
                            key="filtered"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="flex justify-center"
                        >
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
                                            layout
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
                                                    quality={95}
                                                    priority={true}
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
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}