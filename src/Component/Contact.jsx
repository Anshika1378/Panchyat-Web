import { Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="p-8 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-green-700 mb-4">Contack Us</h2>
      <p className="flex items-center justify-center gap-2 text-gray-700 mb-2">
        <Phone size={18} /> +91 XXXXXX210
      </p>
      <p className="flex items-center justify-center gap-2 text-gray-700">
        <Mail size={18} /> panchayat.shantinagar@gmail.com
      </p>
    </section>
  );
}
