import Image from 'next/image';

export default function Services() {
  const services = [
    {
      title: 'Technical Training',
      image: '/images/classroom_food_scientist.png',
      items: [
        'Supplier Quality Assurance',
        'Product Formulation and Development',
        'Product Labelling Requirement',
        'Barcoding',
        'Product Traceability',
        'HACCP Awareness',
        'QMS (ISO 22000/9000/9001) and FSSC 22000'
      ]
    },
    {
      title: 'FoodBev Seta Courses',
      image: '/images/food_presented.png',
      items: [
        'National Certificate: Accommodation Service',
        'National Certificate: Professional Cookery',
        'National Certificate: Food and Beverage Services',
        'FET: Hospitality Reception',
        'National Certificate: Fast Food Services'
      ]
    },
    {
      title: 'AGRISETA Courses',
      image: '/images/hands_plant.png',
      items: [
        'National Certificate: Animal Production',
        'National Certificate: Mixed Farming System',
        'National Certificate: Plant Production',
        'National Certificate: Poultry Production'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">{service.title}</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="mt-1.5 w-2 h-2 bg-green-600 rounded-full flex-shrink-0"></span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
