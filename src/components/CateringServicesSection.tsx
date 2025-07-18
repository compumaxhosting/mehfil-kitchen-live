import { GoGift } from "react-icons/go";
import { HiOutlineCake } from "react-icons/hi";
import { LuPartyPopper } from "react-icons/lu";
import { BiCalendarEvent } from "react-icons/bi";
import { FaUserTie } from "react-icons/fa";
import { FaRunning } from "react-icons/fa";
import Link from 'next/link';

const services = [
    {
        title: 'Birthday Catering',
        desc: 'Celebrate birthdays with rich flavors from our menu – from kabobs to biryanis, curated to impress every guest.',
        icon: <GoGift />,
        link: '/catering-services-for-birthday-party-near-me'
    },
    {
        title: 'Wedding Catering',
        desc: 'Make your special day memorable with signature Hyderabadi dishes served fresh with elegance and authenticity.',
        icon: <HiOutlineCake />,
        link: '/wedding-catering-near-me-in-skokie-il'
    },
    {
        title: 'Party Orders',
        desc: 'Host flavorful parties with our customized menus featuring Chicken 65, Kalimirchi Beef, and more crowd favorites.',
        icon: <LuPartyPopper />,
        link: '/party-catering-services-skokie-Illinois'
    },
    {
        title: 'Event Catering',
        desc: 'From intimate events to large gatherings, we provide flexible catering solutions with consistent quality and taste.',
        icon: <BiCalendarEvent />,
        link: '/event-catering-in-skokie-il'
    },
    {
        title: 'Corporate Meals',
        desc: 'Delight your team or clients with professionally prepared meals that deliver comfort, quality, and Hyderabadi spice.',
        icon: <FaUserTie />,
        link: '/corporate'
    },
    {
        title: 'On-Demand Orders',
        desc: 'Call +1 786-763-4000 to place an order for quick pickup or delivery – freshly prepared meals at your convenience.',
        icon: <FaRunning />,
        link: '/ondemand'
    },
];

export default function CateringServicesSection() {
    return (
        <section>
            <div className="w-full py-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-[36px] font-semibold text-[#1a3c34] mb-4">
                        Mehfil Kitchen Catering – Halal Hyderabadi Food in Skokie, IL
                    </h1>
                    <p className="text-gray-700 mb-12 max-w-4xl mx-auto">
                        Looking for halal Hyderabadi catering services in Skokie, IL? At Mehfil Kitchen, we specialize in authentic Hyderabadi halal food catering for weddings, birthdays, parties, and corporate events. Our catering menu features traditional dishes like Hyderabadi Mutton Dum Biryani, Chicken Biryani, Hyderabadi Mutton Fry, Chicken Reshmi Kabob, Butter Chicken, Kalimirchi Beef, Mehfil Fish Fry, and Shahi Rice that bring the rich flavors of Hyderabad straight to your event. <br /><br />
                        We provide halal catering in Skokie and nearby areas including Evanston, Lincolnwood, Wilmette, Morton Grove, Glenview, Niles, Des Plaines, Park Ridge, and Arlington Heights. Whether you need halal wedding catering, Hyderabadi party catering, or corporate catering with authentic Indian dishes, we ensure every order is freshly prepared with high-quality halal ingredients. <br /><br />
                        Make your next event memorable with Mehfil Kitchen’s Hyderabadi catering services. From intimate family gatherings to large corporate lunches, we deliver fresh, flavorful, and halal-certified meals that your guests will love. <br /><br />
                        Contact us today for a free catering quote or visit <strong>MehfilKitchen.com/catering</strong> to explore our full Hyderabadi catering menu in Skokie, IL.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, idx) => (
                            <Link href={service.link} key={idx} passHref>
                                <div className="flex flex-col h-full bg-[#e6d38d] text-black border-2 border-[#eee] px-[42px] py-[30px] rounded-[10px] text-center transition-all duration-300 hover:bg-[#1a3c34] hover:text-white cursor-pointer">
                                    <div className="flex justify-center mb-4">
                                        <span className="text-[50px]">
                                            {service.icon}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                    <p className="text-[15px] mt-auto">{service.desc}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <div className="relative w-full">
                <div className="w-full h-[350px] sm:h-[650px] bg-[url('/services-banner.png')] bg-cover bg-center"></div>
                <div className="absolute top-[-1px] left-0 w-full h-[20px] bg-[url('/zigzag.svg')] bg-cover bg-no-repeat z-[1]"></div>
                <div className="absolute bottom-[-1px] left-0 w-full h-[20px] bg-[url('/zigzag.svg')] bg-cover bg-no-repeat z-[1] rotate-180"></div>
            </div>
        </section>
    );
}
