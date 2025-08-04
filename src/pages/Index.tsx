import EmailCaptureCard from "@/components/EmailCaptureCard";

const Index = () => {
  const handleEmailSubmit = (email: string) => {
    // Handle email submission - replace with your logic
    console.log("Email submitted:", email);
    alert(`Thank you! We'll send updates to ${email}`);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4">
      <EmailCaptureCard
        title="Join Our Newsletter"
        subtitle="Get the latest updates and exclusive offers"
        buttonText="Subscribe Now"
        onSubmit={handleEmailSubmit}
      />
    </div>
  );
};

export default Index;
