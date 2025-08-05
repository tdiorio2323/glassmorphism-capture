import EmailCaptureCard from "@/components/EmailCaptureCard";

const Index = () => {
  return (
    <div 
      className="min-h-screen overflow-hidden flex flex-col justify-start items-center pt-[30px] p-4"
      style={{
        backgroundImage: `url('/lovable-uploads/1ca97aca-69f6-434a-81a2-edcf50a74b4c.png')`,
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
