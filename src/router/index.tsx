import { createBrowserRouter, Navigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';
import { BookDetail } from '../pages/BookDetail';
import { Discover } from '../pages/Discover';
import { Profile } from '../pages/Profile';
import { WriteReview } from '../pages/WriteReview';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn } = useAppContext();
  return isLoggedIn ? <>{children}</> : <Navigate to="/login" replace />;
};

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Navigate to="/home" replace />,
  },
  {
    path: '/home',
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: '/book/:id',
    element: (
      <ProtectedRoute>
        <BookDetail />
      </ProtectedRoute>
    ),
  },
  {
    path: '/discover',
    element: (
      <ProtectedRoute>
        <Discover />
      </ProtectedRoute>
    ),
  },
  {
    path: '/profile',
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
  },
  {
    path: '/review',
    element: (
      <ProtectedRoute>
        <WriteReview />
      </ProtectedRoute>
    ),
  },
]);
