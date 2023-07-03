import ProtectedRoute from '@components/auth/ProtectedRoute';

const Layout = ({ children }) => {
  return <ProtectedRoute role={'admin'} >{children}</ProtectedRoute>;
};

export default Layout;
