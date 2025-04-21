import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the home page
    navigate('/home');
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/30">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary">Loading Research Lab...</h1>
        <p className="text-xl text-foreground/70">Redirecting to homepage</p>
      </div>
    </div>
  );
};

export default Index;
