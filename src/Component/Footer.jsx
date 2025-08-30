import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white py-6 text-center">
      <h3 className="mb-3 font-medium">Follow us on</h3>
      <div className="flex justify-center gap-6">
        <a href="#" target="_blank" rel="noreferrer" className="hover:text-gray-200">
          <Facebook />
        </a>
        <a href="#" target="_blank" rel="noreferrer" className="hover:text-gray-200">
          <Twitter />
        </a>
        <a href="#" target="_blank" rel="noreferrer" className="hover:text-gray-200">
          <Instagram />
        </a>
      </div>
      <p className="mt-4 text-sm">© 2025 Gram Panchayat Shanti Nagar</p>
    </footer>
  );
}
