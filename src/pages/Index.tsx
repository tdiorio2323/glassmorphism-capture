import EmailCaptureCard from "@/components/EmailCaptureCard";
import diamondBackground from "@/assets/diamond-background.jpg";

const Index = () => {
  return (
    <div 
      className="min-h-screen overflow-hidden flex flex-col justify-start items-center pt-[30px] p-4"
      style={{
        backgroundImage: `url('${diamondBackground}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <EmailCaptureCard />
    </div>
  );
};

export default Index;
