import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="relative w-[180px] h-[54px]">
              <Image
                src="/logo.png"
                alt="Pro-Fresh Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-600 text-sm">
              The house of Agriculture, Agro-processing & Food Handlers Training
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-gray-600 hover:text-green-600">About Us</Link></li>
              <li><Link href="#services" className="text-gray-600 hover:text-green-600">Services</Link></li>
              <li><Link href="#team" className="text-gray-600 hover:text-green-600">Our Team</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-600">Technical Training</li>
              <li className="text-gray-600">FoodBev Seta Courses</li>
              <li className="text-gray-600">AGRISETA Courses</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:renei.maenetja@gmail.com" className="text-gray-600 hover:text-green-600">
                  renei.maenetja@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:0762167644" className="text-gray-600 hover:text-green-600">
                  076 216 7644
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Pro-Fresh Value Adding Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
