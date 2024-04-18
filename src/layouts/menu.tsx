import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { MENU_ROUTES, menuItems } from './components/menu.helper';

const MenuLayout: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Menu
      className="pt-3"
      defaultSelectedKeys={['new-orders']}
      defaultOpenKeys={['order-list', 'product-list']}
      mode="inline"
      items={menuItems}
      theme="dark"
      onClick={(e) => {
        const menu = MENU_ROUTES.find((i) => i.key === e.key);
        !!menu && navigate(menu.route);
      }}
    />
  );
};

export default MenuLayout;
