import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// About page now redirects to home and scrolls to about section
const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/", { replace: true });
  }, [navigate]);

  return null;
};

export default About;
