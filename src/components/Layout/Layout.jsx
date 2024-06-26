import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppNav } from '../AppNav/AppNav';
import { Suspense } from 'react';
import { useAuth } from '../../redux/hooks/useAuth';
import css from './Layout.module.css';

export const Layout = () => {
  const { isRefreshing } = useAuth();
  return (
    <div className={css.context}>
      <div className={css.area}>
        <div className={`mt-0 mt-md-3 mb-md-3 mx-auto ${css.box}`}>
          {!isRefreshing && <AppNav />}
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
          <Toaster position="top-right" reverseOrder={false} />
        </div>
        <ul className={css.circles}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};
