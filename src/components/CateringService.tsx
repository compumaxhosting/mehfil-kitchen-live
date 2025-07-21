import Image from 'next/image';
import Link from 'next/link';
import { ServicePageProps, serviceData } from '../Data/CateringServicesData';

const ServicePage: React.FC<ServicePageProps> = ({ service }) => {
  const currentService = serviceData[service] || serviceData['birthday'];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] min-h-[500px] w-full">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src={currentService.heroImage}
          alt={currentService.title}
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{currentService.title}</h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl">{currentService.heroSubtitle}</p>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl font-semibold text-[#1a3c34] mb-6">
              {currentService.introTitle}
            </h1>

            {/* Updated to use introParagraphs array */}
            {currentService.introParagraphs.map((paragraph, i) => (
              <p key={i} className="text-gray-700 mb-4">
                {paragraph}
              </p>
            ))}

            {currentService.ctaLink && (
              <p>
                Visit{' '}
                <Link
                  href={currentService.ctaLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  {currentService.ctaLink.url.replace(/^https?:\/\//, '')}
                </Link>{' '}
                {currentService.linkContent}
              </p>
            )}
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src={currentService.introImage}
              alt={`${currentService.title} presentation`}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[#f9f8f3]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-[#1a3c34] mb-12 text-center">
            Our {currentService.title} Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {currentService.features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">
                  {feature.icon.startsWith('/') ? (
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={58}
                      height={58}
                      className="inline-block"
                    />
                  ) : (
                    feature.icon
                  )}
                </div>
                <h3 className="text-xl font-semibold text-[#1a3c34] mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-16 bg-[#1a3c34] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center">
            Signature {currentService.title} Dishes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentService.menuItems.map((item, index) => (
              <div key={index} className="text-center p-6 border border-[#e6d38d] rounded-lg">
                <h3 className="text-xl font-medium mb-2 text-[#e6d38d]">{item.name}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#1a3c34] mb-12 text-center">
            {currentService.title} Gallery
          </h2>
          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 max-w-6xl mx-auto">
            {currentService.galleryImages.map((image, index) => (
              <div key={index} className="relative aspect-square rounded-lg overflow-hidden group">
                <Image
                  src={`/${image}`}
                  alt={`${currentService.title} example ${index + 1}`}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Link href="/gallery">
              <button className="bg-[#1a3c34] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#122822] transition-colors">
                Explore Gallery
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#e6d38d]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-semibold text-[#1a3c34] mb-4">
            {currentService.ctaTitle}
          </h2>
          <p className="text-gray-700 mb-8 text-lg">
            {currentService.ctaText}
          </p>
          <Link href="/contact">
            <button className="bg-[#1a3c34] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#122822] transition-colors">
              Contact Us Now
            </button>
          </Link>
        </div>
      </section>

      {/* Attribution */}
      <p className="text-xs text-center text-gray-400 px-4 bg-[#e6d38d]">
        Some images on this page are sourced from <a href="https://www.freepik.com" target="_blank" rel="noopener noreferrer" className="underline">Freepik</a>
      </p>
    </div>
  );
};

export default ServicePage;