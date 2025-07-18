import Image from "next/image";
import React from "react";
import CateringForm from "./CateringForm";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="container mx-auto px-6 md:px-10 lg:px-40 py-14">
        {/* Google Maps Embed */}
        <div className="hidden sm:block mb-5 pb-4">
          <div className="w-full">
            <iframe
              width="100%"
              height="400"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.9391418589086!2d-87.75704282403487!3d42.05533677121981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fcfe3e61bc7e9%3A0x5fa5de50bd96bc13!2s5264%20Lincoln%20Ave%2C%20Skokie%2C%20IL%2060077%2C%20USA!5e0!3m2!1sen!2sin!4v1719162351266!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            ></iframe>
          </div>
        </div>

        {/* Regular Orders - Logos Section */}
        <div className="w-full text-center mt-12 mb-12">
          <h3 className="text-xl font-semibold mb-4">
            For Regular Orders, Use:
          </h3>
          <div className="flex justify-center gap-6">
            {/* DoorDash Logo */}
            <a
              href="https://www.doordash.com/store/mehfil-kitchen-skokie-33915289/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/doordash.png"
                alt="Order on DoorDash"
                width={80}
                height={40}
                className="h-12 object-contain"
              />
            </a>

            {/* Uber Eats Logo */}
            <a
              href="https://www.ubereats.com/store/mehfil-kitchen/RpxFaKXDRC6WeTay-6Iqhw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/ubereats.jpeg"
                alt="Order on Uber Eats"
                width={80}
                height={40}
                className="h-12 object-contain"
              />
            </a>
          </div>
        </div>

        <CateringForm />
        {/* <div className="flex flex-wrap">
          <div className="w-full">
            <h2 className="text-3xl font-bold mb-6">
              Get in Touch For Catering
            </h2>
          </div>

          <div className="w-full lg:w-8/12">
            <form className="form-contact">
              <div className="flex flex-wrap -mx-4">
                <div className="w-full sm:w-6/12 px-4 mb-4">
                  <div className="form-group">
                    <input
                      className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#1a3c34]-500"
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>
                <div className="w-full sm:w-6/12 px-4 mb-4">
                  <div className="form-group">
                    <input
                      className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#1a3c34]-500"
                      id="email"
                      type="email"
                      placeholder="Enter email address"
                    />
                  </div>
                </div>
                <div className="w-full px-4 mb-4">
                  <div className="form-group">
                    <input
                      className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#1a3c34]-500"
                      id="subject"
                      type="text"
                      placeholder="Enter Subject"
                    />
                  </div>
                </div>
                <div className="w-full px-4 mb-4">
                  <div className="form-group">
                    <textarea
                      className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#1a3c34]-500"
                      id="message"
                      cols={30}
                      rows={9}
                      placeholder="Enter Message"
                    ></textarea>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="bg-[#1a3c34] text-white px-6 py-3 rounded hover:bg-[#e6d38d] hover:text-black border-2 border-[#1a3c34] transition duration-300"
              >
                Send
              </button>
            </form>
          </div>

          <div className="w-full lg:w-3/12 lg:ml-8 mt-8 lg:mt-0">
            <div className="flex items-start mb-6">
              <span className="text-xl text-[#1a3c34] mr-4 mt-1">
                <FaMapMarkerAlt />
              </span>
              <div>
                <h3 className="text-lg font-medium">5264 Lincoln Ave,</h3>
                <p className="text-gray-600">Skokie IL 60077, USA</p>
              </div>
            </div>
            <div className="flex items-start mb-6">
              <span className="text-xl text-[#1a3c34] mr-4 mt-1">
                <FaPhoneAlt />
              </span>
              <div>
                <h3 className="text-lg font-medium">+1 786-763-4000</h3>
                <p className="text-gray-600">
                  We&apos;re available 11 AM – 11 PM
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-xl text-[#1a3c34] mr-4 mt-1">
                <FaEnvelope />
              </span>
              <div>
                <h3 className="text-lg font-medium">info@mehfilkitchen.com</h3>
                <p className="text-gray-600">Send us your query anytime!</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ContactSection;