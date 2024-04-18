import { Button, Image, Layout, theme } from 'antd';
import { useState } from 'react';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { Link, Navigate, Outlet, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import Logo from 'src/assets/logo.png';
import { useQueryUserInfo } from 'src/services/auth.service';
import { tokenState } from 'src/states/common';
import { WEBSITE_NAME } from 'src/utils/resource';
import packageJson from '../../package.json';
import { MENU_ROUTES } from './components/helper';
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
  const { pathname } = useLocation();
  const currentRoute = MENU_ROUTES.find((i) => i.route === pathname);
  const { section } = currentRoute || {};

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
                <Image src={Logo} alt="logo" width={30} height={30} preview={false} />
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
            margin: '25px',
            minHeight: 400,
            background: colorBgContainer,
            borderRadius: borderRadiusLG
          }}
        >
          <div className="border-b border-b-gray-200 py-4 px-5 flex items-center gap-3">
            <div className="w-[2px] h-[15px] bg-[#3699ff]" />
            <h2 className="font-bold uppercase mt-0.5">{section}</h2>
          </div>
          <div className="p-5">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
