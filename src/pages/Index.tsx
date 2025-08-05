import EmailCaptureCard from "@/components/EmailCaptureCard";

const Index = () => {
  return (
    <div 
      className="min-h-screen overflow-hidden flex flex-col justify-start items-center pt-[30px] p-4"
      style={{
        backgroundImage: `url('/lovable-uploads/1a26f818-39c9-42a0-91c3-cffc2f4be500.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transform: 'rotate(90deg)',
        transformOrigin: 'center'
      }}
    >
      <EmailCaptureCard />
    </div>
  );
};

export default Index;
