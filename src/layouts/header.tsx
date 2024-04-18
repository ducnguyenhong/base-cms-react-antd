import { Layout } from 'antd';
import { memo } from 'react';
import Breadcrumb from './components/breadcrumb';

const { Header: AntdHeader } = Layout;

const Header: React.FC = () => {
  return (
    <AntdHeader className="bg-white px-5 flex items-center">
      <Breadcrumb />
    </AntdHeader>
  );
};

export default memo(Header);
