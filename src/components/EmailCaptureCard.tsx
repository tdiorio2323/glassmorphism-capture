import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const EmailCaptureCard = () => {
  const [email, setEmail] = useState("");
  
  // Using the newly uploaded product images
  const images = [
    "/lovable-uploads/3273d74f-d063-4b96-b731-90c645b2ca87.png",
    "/lovable-uploads/5d4be55a-4a44-4494-8f43-17b706d2e668.png",
    "/lovable-uploads/624ab187-eba8-4c79-97ee-8179bdfc60ce.png",
    "/lovable-uploads/7a5ed7d7-e637-49c3-8040-aeb953a07608.png",
    "/lovable-uploads/7d1b869c-3d48-4658-b6d9-8ec465fda625.png",
    "/lovable-uploads/88ebf753-494e-4d4d-808a-7115b62f1c3f.png",
    "/lovable-uploads/be7010db-b090-46da-8f96-be7b7ac4399b.png",
    "/lovable-uploads/eac43ff5-aed9-4e0a-a991-025e052eadd8.png",
    "/lovable-uploads/ec0df8f3-0f51-40a2-b6e5-c4c89ba1c6cf.png",
    "/lovable-uploads/faed02fe-70be-4025-b9c7-d0c65669e600.png"
  ];
  
  // Duplicate images for seamless looping
  const duplicatedImages = [...images, ...images];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // Handle email submission logic here
  };

  return (
    <div className="w-[330px] h-[550px] max-w-[390px] mx-auto animate-breathing">
      {/* Glass Morphism Card */}
      <div className="h-full relative backdrop-blur-glass bg-white/10 border border-white/20 rounded-2xl shadow-glass shadow-card-glow p-6 flex flex-col drop-shadow-[0_15px_15px_rgba(0,0,0,0.3)]">
        
        {/* Logo Section */}
        <div className="flex justify-center items-center pt-4 pb-4">
          <img 
            src="/lovable-uploads/c954f561-d572-4e24-ac9a-63fd1d23bbed.png" 
            alt="Bag Man NY Logo" 
            className="w-32 h-auto"
          />
        </div>

        {/* Video content area */}
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-[280px] rounded-xl overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10 relative" style={{ height: 'calc(157px + 50px)' }}>
            <div className="absolute inset-0 flex animate-conveyor-belt">
              {duplicatedImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Product ${index + 1}`}
                  className="w-[150px] h-full object-contain flex-shrink-0"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Email capture form at bottom */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div className="relative">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="STAY IN THE LOOP"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-bebas text-lg placeholder:text-white/60 text-white focus:border-white/30 focus:ring-2 focus:ring-primary/50 backdrop-blur-sm"
              required
            />
          </div>

          {/* Green Glossy Submit Button */}
          <Button
            type="submit"
            className="w-full bg-gradient-to-b from-green-500 to-green-700 hover:from-green-400 hover:to-green-600 text-white font-bold py-3 rounded-full shadow-lg border border-green-600 transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10 font-bebas text-lg tracking-wide">SUBMIT</span>
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-white/40 rounded-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EmailCaptureCard;