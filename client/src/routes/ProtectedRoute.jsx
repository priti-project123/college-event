import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { useRoleContext } from '../context/RoleContext';

const ProtectedRoute = ({ allowedRoles }) => {
  const { user } = useAuthContext();
  const { isAdmin, isOrganizer, isUser } = useRoleContext();

  const hasAccess =
    (allowedRoles.includes('admin') && isAdmin) ||
    (allowedRoles.includes('organizer') && isOrganizer) ||
    (allowedRoles.includes('user') && isUser);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!hasAccess) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
