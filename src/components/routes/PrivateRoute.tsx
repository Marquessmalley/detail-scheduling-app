import { useEffect } from "react";
import { useAuth } from "context/AuthProvider";
import { useNavigate } from "react-router-dom";

interface PrivateRouteProps {
  children: React.ReactNode;
}
const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  if (loading) {
    return <div>loading...</div>;
  }

  return <>{user ? children : navigate("/login")}</>;
};

export default PrivateRoute;
