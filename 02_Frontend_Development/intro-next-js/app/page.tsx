import Image from "next/image";
import Link from "next/link";
import { FaReact } from "react-icons/fa";
// untuk file react: jsx & tsx
export default function Home() {
  const navButtons = [
    {
      name: "About",
      url: '/about'
    },
    {
      name: "Profiles",
      url: '/profiles'
    },
    {
      name: "Products",
      url: '/products'
    },
    {
      name: "Contact Us",
      url: '/contact-us'
    }
  ]
  return (
    <div className="w-full h-12 bg-blue-500 p-2 shadow-md flex items-center justify-between">
      <div><FaReact className="text-xl text-white" /></div>
      <div className="flex gap-4">
        {navButtons.map((nav, index) => (
          <div key={index} className="text-lg text-white font-bold hover:text-blue-900">
            <Link href={nav.url}>{nav.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
