import Image from 'next/image';

export default function AboutSection() {
    return (
        <section className="w-full pt-8 pb-4 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

                {/* Left Content */}
                <div className="md:w-1/2 text-left">
                    <h1 className="text-[28px] sm:text-[32px] text-center font-bold mb-6 text-gray-800 leading-tight">
                        About Us – Mehfil Kitchen, Skokie, IL
                    </h1>
                    <div className="text-[16px] text-gray-700 space-y-4 leading-relaxed">
                        <p>
                            Welcome to Mehfil Kitchen, your destination for authentic Hyderabadi cuisine in Skokie, IL.
                            Born from a passion to share the true taste of Hyderabad with the community, we bring you
                            dishes that celebrate rich traditions and bold flavors.
                        </p>
                        <p>
                            Our menu features signature items like Mutton Biryani, Chicken Biryani, Hyderabadi Mutton Dum Biryani,
                            Chicken-65, Majestic Chicken, Chicken Reshmi Kabob, Kalimirchi Beef, and Mehfil Fish Fry. Every dish
                            is prepared with handpicked spices and fresh halal ingredients, ensuring an experience that warms
                            your heart and satisfies your soul.
                        </p>
                        <p>
                            At Mehfil Kitchen, we believe food is not just about taste but about connection and celebration.
                            That is why we also offer catering services for all occasions, delivering authentic halal Hyderabadi
                            cuisine to weddings, parties, corporate events, and family gatherings with care and elegance.
                        </p>
                        <p>
                            We proudly serve Skokie, Evanston, Niles, Morton Grove, Lincolnwood, and surrounding Chicago North
                            suburbs. Whether you dine in or order catering, you will feel the warmth of our hospitality and
                            the unmatched flavors of Hyderabad in every bite.
                        </p>
                        <p>
                            Visit us today and let Mehfil Kitchen be part of your everyday meals and special moments.
                        </p>
                    </div>
                </div>

                {/* Right Image with Rotation - FIXED */}
                <div className="md:w-1/2 flex justify-center items-center overflow-hidden">
                    <div className="w-96 md:w-[700px] aspect-square overflow-hidden relative animate-[spin_20s_linear_infinite]">
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