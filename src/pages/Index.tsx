import EmailCaptureCard from "@/components/EmailCaptureCard";

const Index = () => {
  return (
    <div 
      className="min-h-screen overflow-hidden flex flex-col justify-start items-center pt-[10px] p-4"
      style={{
        backgroundImage: `url('/lovable-uploads/1ca97aca-69f6-434a-81a2-edcf50a74b4c.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <EmailCaptureCard />
      <div className="mt-4 text-center">
        <a 
          href="https://www.bagmanpack.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block text-white font-bebas text-xl tracking-wider hover:text-green-400 transition-colors duration-300 text-shadow-lg"
        >
          <div className="w-[330px] mx-auto">PLACE YOUR ORDER TODAY</div>
          <div className="w-[330px] mx-auto text-4xl">WWW.BAGMANPACK.COM</div>
        </a>
      </div>
    </div>
  );
};

export default Index;
