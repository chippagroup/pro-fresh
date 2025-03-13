import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative w-[200px] h-[60px]">
            <Image
              src="/logo.png"
              alt="Pro-Fresh Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link href="#about" className="hover:text-green-600 transition-colors">About Us</Link>
          <Link href="#services" className="hover:text-green-600 transition-colors">Services</Link>
          <Link href="#team" className="hover:text-green-600 transition-colors">Our Team</Link>
          <Link href="#contact" className="hover:text-green-600 transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
