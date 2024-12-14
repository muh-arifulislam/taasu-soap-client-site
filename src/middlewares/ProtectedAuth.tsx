import { Navigate } from "react-router-dom";
import { selectCurrentToken } from "../redux/features/auth/authSlice";
import { useAppSelector } from "../redux/hook";

type PropsType = {
  children: React.ReactElement;
};

const ProtectedAuth = ({ children }: PropsType) => {
  const token = useAppSelector(selectCurrentToken);

  if (token) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

export default ProtectedAuth;
