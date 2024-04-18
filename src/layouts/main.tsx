import { Button, Image, Layout, theme } from 'antd';
import { useState } from 'react';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { Link, Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import Logo from 'src/assets/logo.png';
import { useQueryUserInfo } from 'src/services/auth.service';
import { tokenState } from 'src/states/common';
import { WEBSITE_NAME } from 'src/utils/resource';
import packageJson from '../../package.json';
import Header from './header';
import MenuLayout from './menu';

const { Sider, Content } = Layout;

const MainLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken();
  const token = useRecoilValue(tokenState);
  const { isLoading } = useQueryUserInfo();

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <Layout className="min-h-screen">
      <Sider trigger={null} collapsible collapsed={collapsed} width={280} className="relative">
        <div className="flex items-center justify-between py-5 pl-5 pr-2 ">
          {!collapsed && (
            <Link to="/">
              <div className="flex items-center gap-3">
                <Image src={Logo} alt="logo" width={30} height={30} />
                <p className="text-[#e6e6e6] font-semibold text-xl">{WEBSITE_NAME}</p>
              </div>
            </Link>
          )}

          <Button type="text" onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? (
              <HiChevronDoubleRight color="#254f74" size={20} />
            ) : (
              <HiChevronDoubleLeft color="#254f74" size={20} />
            )}
          </Button>
        </div>
        <div className="w-full h-px bg-[#12283a]" />
        <MenuLayout />
        {!collapsed && (
          <div className="absolute bottom-0 left-0 border-t border-[#12283a] w-full py-2.5 flex justify-center">
            <p className="text-[#4d4d4d]">Version: {packageJson.version}</p>
          </div>
        )}
      </Sider>
      <Layout>
        <Header />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
