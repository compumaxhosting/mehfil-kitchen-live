import Image from 'next/image';

export default function AboutHyderabadiFlavorsSection() {
    return (
        <section className="w-full pt-8 pb-4 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

                {/* Left Content */}
                <div className="md:w-1/2 text-left">
                    <h1 className="text-[28px] sm:text-[32px] text-center font-bold mb-6 text-gray-800 leading-tight">
                        Experience Authentic Hyderabadi Flavors in Skokie, IL
                    </h1>
                    <div className="text-[16px] text-gray-700 space-y-4 leading-relaxed">
                        <p>
                            Welcome to Mehfil Kitchen in Skokie, IL, where the aroma of Hyderabadi spices fills the air and each bite tells a story of tradition. Our menu is crafted to delight every food lover, offering Mutton Biryani, Chicken Biryani, Hyderabadi Mutton Dum Biryani, and Hyderabadi Chicken Dum Biryani for an unforgettable feast.
                        </p>
                        <p>
                            Indulge in Chicken Reshmi Kabob, Chicken Boti Kabob, Chicken Malai Boti, and spicy Chicken-65. Savor specialties like Majestic Chicken, Badami Chicken, Chicken Kadai, Butter Chicken, and the flavorful Mehfils Chicken. For beef lovers, we serve rich Beef Masala and peppery Kalimirchi Beef, while seafood fans can relish our Mehfil Fish Fry.
                        </p>
                        <p>
                            Pair your meals with Shahi Rice or Plain Rice, and don’t miss our Snack Combo featuring freshly made Samosa, Mirchi, and Chai, perfect for your cozy evenings.
                        </p>
                        <p>
                            We also offer catering services for all occasions, serving authentic Halal Hyderabadi cuisine to make your events memorable.
                        </p>
                        <p>
                            We proudly serve customers from Skokie, Evanston, Niles, Morton Grove, Lincolnwood, and nearby Chicago North suburbs. Visit us today to enjoy true Hyderabadi hospitality and a dining experience that will keep you coming back for more.
                        </p>
                    </div>
                </div>

                {/* Right Image with Rotation */}
                <div className="md:w-1/2 flex justify-center items-center overflow-hidden">
                    <div className="w-72 sm:w-72 md:w-[400px] aspect-square overflow-hidden relative animate-[spin_20s_linear_infinite]">
                        <Image
                            src="/about.png"
                            alt="About Mehfil"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
