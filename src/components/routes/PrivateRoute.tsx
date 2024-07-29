import { useAuth } from "context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { SpinnerIcon } from "components/ui/icons";

interface PrivateRouteProps {
  children: React.ReactNode;
}
const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div
        style={{ height: "90vh" }}
        className=" flex justify-center items-center "
      >
        <div role="status">
          <SpinnerIcon />
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return <>{user ? children : navigate("/login")}</>;
};

export default PrivateRoute;
