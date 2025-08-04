import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const EmailCaptureCard = () => {
  const [email, setEmail] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    "/lovable-uploads/20c20cde-9e12-4c4c-ab65-80d1ac03ce12.png",
    "/lovable-uploads/ffb600bf-1349-4156-9c20-1fd5bb4653ea.png",
    "/lovable-uploads/bfa436aa-ecaa-4e4e-9624-504b2e660553.png",
    "/lovable-uploads/63d66703-1c5c-40a8-864f-a55aca70cb6c.png",
    "/lovable-uploads/36b099ad-d14b-4344-aad0-04fa0b6938d6.png",
    "/lovable-uploads/74380a69-9b63-40dc-8a4c-ce32ad95b653.png"
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, [images.length]);

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
            <div className="absolute inset-0 flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Product ${index + 1}`}
                  className="w-full h-full object-cover flex-shrink-0"
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