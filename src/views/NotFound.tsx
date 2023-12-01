import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((t) => t - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (countdown <= 0) {
      setCountdown(5);
      navigate("/");
    }
  }, [countdown])

  return (
    <>
      <div>
        <h1>Not Found</h1>
        <p>You will be redirected to the home page in {countdown} seconds...</p>
      </div>
    </>
  )
}

