import { Layout } from 'antd';
import { memo } from 'react';
import Breadcrumb from './components/breadcrumb';
import UserButton from './components/user-button';

const { Header: AntdHeader } = Layout;

const Header: React.FC = () => {
  return (
    <AntdHeader className="bg-white px-5 flex items-center justify-between">
      <Breadcrumb />

      <UserButton />
    </AntdHeader>
  );
};

export default memo(Header);
