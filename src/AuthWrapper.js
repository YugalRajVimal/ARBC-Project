import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthWrapper = ({ setIsAuthenticatedSeller }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const authUser = async (token) => {
      if (!token) {
        localStorage.removeItem("token");
        navigate("/signin");
        return;
      }

      console.log(token);
      const role = localStorage.getItem("role");

      try {
        const response = await axios.get(
          `http://localhost:3000/api/user/auth-user/${role}`,
          {
            headers: {
              Authorization: `${localStorage.getItem("token")}`,
              "Content-Type": "application/json",
            },
          }
        );

        console.log(response);

        if (response.status === 200) {
          setIsAuthenticatedSeller(true);
          return;
        }

        setIsAuthenticatedSeller(false);
        localStorage.removeItem("token");
        navigate("/signin");
      } catch (error) {
        console.log(error);
        setIsAuthenticatedSeller(false);
        localStorage.removeItem("token");
        navigate("/signin");
      }
    };

    const token = localStorage.getItem("token");
    authUser(token);
  }, [setIsAuthenticatedSeller, navigate]);

  return null;
};

export default AuthWrapper;
