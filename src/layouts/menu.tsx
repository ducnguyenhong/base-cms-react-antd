import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { MENU_ROUTES, menuItems } from './components/helper';

const MenuLayout: React.FC = () => {
  const navigate = useNavigate();

  return (
    <MenuStyle>
      <Menu
        className="pt-3"
        // defaultSelectedKeys={['new-orders']}
        defaultOpenKeys={['order-list', 'product-list']}
        mode="inline"
        items={menuItems}
        theme="dark"
        onClick={(e) => {
          const menu = MENU_ROUTES.find((i) => i.key === e.key);
          !!menu && navigate(menu.route);
        }}
      />
    </MenuStyle>
  );
};

export default MenuLayout;

const MenuStyle = styled.div`
  .ant-menu-item-selected {
    background-color: transparent;
  }

  .ant-menu-item-selected .ant-menu-item-icon {
    color: #8bb9f9;
  }

  .ant-menu-item-selected .ant-menu-title-content {
    color: #8bb9f9;
  }
`;
