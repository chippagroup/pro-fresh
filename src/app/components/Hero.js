import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/fruit_basket.png"
          alt="Fresh produce background"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              The House of Agriculture, Agro-processing & Food Handlers Training
            </h1>
            <p className="text-lg md:text-xl text-gray-100">
              Empowering farmers and food business operators with quality assurance and safety standards
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="#contact" className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors text-lg">
                Get Started
              </a>
              <a href="#services" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-colors text-lg">
                Our Services
              </a>
            </div>
          </div>
          <div className="hidden md:block relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/images/hands_plant.png"
              alt="Sustainable agriculture"
              fill
              className="object-cover rounded-lg transform hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
