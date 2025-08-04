import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface EmailCaptureCardProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  onSubmit?: (email: string) => void;
}

const EmailCaptureCard = ({ 
  title = "Join Our Newsletter",
  subtitle = "Get updates and exclusive offers",
  buttonText = "Subscribe",
  onSubmit = (email) => console.log("Email submitted:", email)
}: EmailCaptureCardProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;
    
    setIsSubmitting(true);
    try {
      await onSubmit(email);
      setEmail("");
    } catch (error) {
      console.error("Email submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-[330px] max-w-[390px] mx-auto">
      <div className="relative backdrop-blur-glass bg-white/10 border border-white/20 rounded-2xl shadow-glass shadow-card-glow p-6 flex flex-col gap-6">
        
        <div className="text-center">
          <h2 className="text-white font-semibold text-2xl mb-2">
            {title}
          </h2>
          <p className="text-white/80 text-sm">
            {subtitle}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40"
          />
          
          <Button
            type="submit"
            disabled={isSubmitting || !email}
            className="w-full bg-gradient-to-b from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-semibold py-3 rounded-full shadow-lg transition-all duration-300"
          >
            {isSubmitting ? "Submitting..." : buttonText}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EmailCaptureCard;