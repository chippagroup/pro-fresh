import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute -left-20 -top-20 w-40 h-40 opacity-10">
        <Image
          src="/images/green_leaf.png"
          alt="Decorative leaf"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute -right-20 -bottom-20 w-40 h-40 opacity-10 rotate-180">
        <Image
          src="/images/leaf.png"
          alt="Decorative leaf"
          fill
          className="object-contain"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <div className="relative w-[120px] h-[36px]">
            <Image
              src="/logo.png"
              alt="Pro-Fresh Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">About Us</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/food_presented.png"
              alt="Professional food presentation"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6 text-gray-600">
            <p className="text-lg">
              Pro-Fresh Training and Consulting is a female-owned company run together with consultants who are experts in Food Safety Auditing. 
              Established in February 2017, we are proud to be a BBBEE level 1 company dedicated to empowering suppliers.
            </p>
            <p className="text-lg">
              We bring together a team of dedicated professionals who share the common value of making a difference through people. 
              Our accreditations include Foodbev SETA, AGRISETA, and CATHSETA under accreditation number 587/00304/1900.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-green-50 p-8 rounded-lg relative overflow-hidden group hover:bg-green-100 transition-colors">
            <div className="absolute right-0 bottom-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity">
              <Image
                src="/images/green_leaf.png"
                alt="Vision decoration"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-green-800">Vision</h3>
            <p className="text-gray-700 relative z-10">
              To enable Farmers and Food Business Operators to achieve Food safety and quality assurance, 
              increasing market access and competitiveness for our clients.
            </p>
          </div>
          <div className="bg-green-50 p-8 rounded-lg relative overflow-hidden group hover:bg-green-100 transition-colors">
            <div className="absolute right-0 bottom-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity">
              <Image
                src="/images/leaf.png"
                alt="Mission decoration"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-green-800">Mission</h3>
            <p className="text-gray-700 relative z-10">
              Understanding customer requirements to provide food quality and safety assurance across the 
              agricultural and food processing value chain, while maintaining excellent customer relations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
