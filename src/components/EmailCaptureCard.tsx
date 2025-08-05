import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const EmailCaptureCard = () => {
  const [email, setEmail] = useState("");
  
  // Using the newly uploaded product images
  const images = [
    "/lovable-uploads/dcd2cf43-eede-4c6a-b562-9cf0069295fa.png",
    "/lovable-uploads/2a51bed4-5b53-41a2-be4d-8fb36da4a313.png",
    "/lovable-uploads/30ceffb3-8a31-484b-a710-bdbf2e3859ba.png",
    "/lovable-uploads/ede27745-49e5-453a-840c-d7e2fd460ae9.png",
    "/lovable-uploads/9d28edef-a31d-49be-8d80-79d35a636104.png",
    "/lovable-uploads/309b544c-fdba-480c-bf87-8de4cd304f69.png",
    "/lovable-uploads/b258139b-0e07-4e99-b593-1ee1cd7410f8.png",
    "/lovable-uploads/5dac8c95-b9d9-4188-9290-4c7ba116b611.png",
    "/lovable-uploads/a96cb7b2-3323-43c5-8649-5574d857fe1e.png",
    "/lovable-uploads/47c4142d-ee68-45ac-a93a-cf9355f952f0.png"
  ];
  
  // Duplicate images for seamless looping
  const duplicatedImages = [...images, ...images];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // Handle email submission logic here
  };

  return (
    <div className="w-[330px] h-[650px] max-w-[390px] mx-auto">
      {/* Glass Morphism Card */}
      <div className="h-full relative backdrop-blur-glass bg-white/10 border border-white/20 rounded-2xl shadow-glass shadow-card-glow p-6 flex flex-col drop-shadow-[0_15px_15px_rgba(0,0,0,0.3)]">
        
        {/* Logo */}
        <div className="pt-4 pb-4 flex justify-center">
          <img 
            src="/lovable-uploads/8c8a62bd-1521-47f1-90f9-94a4b828322c.png" 
            alt="Quick Printz Logo" 
            className="max-w-[400px] max-h-[200px] object-contain"
          />
        </div>

        <div className="px-4 pb-[5px]">
        </div>

        {/* Spacer to push video and button to bottom */}
        <div className="flex-1"></div>

        {/* Promotional content area - positioned above button */}
        <div className="flex items-center justify-center px-4 pt-0 pb-[10px]">
          <div className="w-full max-w-[280px] rounded-xl overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10 relative">
            <img
              src="/lovable-uploads/880fcfee-3717-4bd0-b183-6d4b586a5833.png"
              alt="Place Your Order Today"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Spacer for button area */}
        <div className="px-4 pb-4 h-12">
        </div>
      </div>
    </div>
  );
};

export default EmailCaptureCard;