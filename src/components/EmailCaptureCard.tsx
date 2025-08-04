import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const EmailCaptureCard = () => {
  const [email, setEmail] = useState("");

  // Using the newly uploaded product images
  const images = ["/lovable-uploads/dcd2cf43-eede-4c6a-b562-9cf0069295fa.png", "/lovable-uploads/2a51bed4-5b53-41a2-be4d-8fb36da4a313.png", "/lovable-uploads/30ceffb3-8a31-484b-a710-bdbf2e3859ba.png", "/lovable-uploads/ede27745-49e5-453a-840c-d7e2fd460ae9.png", "/lovable-uploads/9d28edef-a31d-49be-8d80-79d35a636104.png", "/lovable-uploads/309b544c-fdba-480c-bf87-8de4cd304f69.png", "/lovable-uploads/b258139b-0e07-4e99-b593-1ee1cd7410f8.png", "/lovable-uploads/5dac8c95-b9d9-4188-9290-4c7ba116b611.png", "/lovable-uploads/a96cb7b2-3323-43c5-8649-5574d857fe1e.png", "/lovable-uploads/47c4142d-ee68-45ac-a93a-cf9355f952f0.png"];

  // Duplicate images for seamless looping
  const duplicatedImages = [...images, ...images];
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // Handle email submission logic here
  };
  return <div className="w-[330px] h-[550px] max-w-[390px] mx-auto">
      {/* Glass Morphism Card */}
      <div className="h-full relative backdrop-blur-glass bg-white/10 border border-white/20 shadow-glass shadow-card-glow p-6 flex flex-col drop-shadow-[0_15px_15px_rgba(0,0,0,0.3)] rounded-2xl">
        
        {/* Empty space where logo and text were */}
        <div className="pt-4 pb-4">
        </div>

        <div className="px-4 pb-[5px]">
        </div>

        {/* Spacer to push video and button to bottom */}
        <div className="flex-1"></div>

        {/* Logo content area - positioned above button */}
        <div className="flex items-center justify-center pt-0 pb-[10px] py-[332px] px-[32px]">
          <div className="w-full max-w-[280px] rounded-xl overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10 relative flex items-center justify-center" style={{
          height: 'calc(157px + 50px)'
        }}>
            <img src="/lovable-uploads/a3f340a8-65a2-4326-a67c-6f95884fd4b1.png" alt="TD Studios Logo" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Order Now Button */}
        <div className="px-4 pb-4">
          <Button className="w-full bg-black text-white font-bold py-3 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.3)] border border-gray-800 transition-all duration-300 relative overflow-hidden group">
            <span className="relative z-10 font-bebas text-lg tracking-wide">STAY UPDATED</span>
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/15 to-white/30 rounded-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
          </Button>
        </div>
      </div>
    </div>;
};
export default EmailCaptureCard;