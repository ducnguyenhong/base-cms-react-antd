import { ErrorBoundary } from 'react-error-boundary';
import { Route, Routes } from 'react-router-dom';
import MainLayout from 'src/layouts/main';
import NotFound404 from 'src/pages/404';
import { CategoryList } from 'src/pages/category';
import Login from 'src/pages/login';

const AppRoute = () => {
  return (
    <ErrorBoundary FallbackComponent={() => <div>err</div>}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<MainLayout />}>
          <Route path="categories">
            <Route path="" element={<CategoryList />} />
            {/* <Route path="create" element={<UserCreate />} />
            <Route path="edit/:id" element={<UserCreate />} />
            <Route path="detail/:id/*" element={<UserDetail />} /> */}
          </Route>

          <Route path="*" element={<NotFound404 />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
};

export default AppRoute;
