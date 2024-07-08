import { useNavigate } from "react-router-dom";
import { useAuth } from "context/AuthProvider";

const AdminLayout = () => {
  const navigate = useNavigate();

  const { user, signUserOut } = useAuth();

  const handleSignOut = () => {
    signUserOut();
    navigate("/login");
  };

  console.log(user);
  return (
    <div className="min-h-screen">
      AdminLayout
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default AdminLayout;
