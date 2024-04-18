import { MenuProps } from 'antd';
import { BiSolidCategory } from 'react-icons/bi';
import { FaRegMoneyBillAlt, FaUserFriends } from 'react-icons/fa';
import { FaMoneyBill, FaNewspaper, FaProductHunt } from 'react-icons/fa6';
import { MdFeedback } from 'react-icons/md';
import { PiSelectionBackgroundBold } from 'react-icons/pi';
import { RiEmojiStickerFill } from 'react-icons/ri';

type MenuItem = Required<MenuProps>['items'][number];

const getMenuItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
) => {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem;
};

export const menuItems: MenuProps['items'] = [
  getMenuItem('Đơn hàng', 'order-list', <FaMoneyBill />, [
    getMenuItem('Đơn hàng mới', 'new-orders', <FaMoneyBill />),
    getMenuItem('Đơn hàng hoàn thành', 'completed-orders', <FaRegMoneyBillAlt />)
  ]),
  getMenuItem('Quản lý sản phẩm', 'product-list', <FaProductHunt />, [
    getMenuItem('Danh sách sản phẩm', 'products', <FaProductHunt />),
    getMenuItem('Danh sách background', 'backgrounds', <PiSelectionBackgroundBold />),
    getMenuItem('Danh sách sticker', 'stickers', <RiEmojiStickerFill />)
  ]),
  getMenuItem('Quản lý danh mục', 'categories', <BiSolidCategory />),
  getMenuItem('Danh sách khách hàng', 'customers', <FaUserFriends />),
  getMenuItem('Danh sách tin tức', 'news', <FaNewspaper />),
  getMenuItem('Quản lý feedback', 'feedbacks', <MdFeedback />)
];

export const MENU_ROUTES: { key: string; route: string }[] = [
  {
    key: 'new-orders',
    route: '/new-orders'
  },
  {
    key: 'completed-orders',
    route: '/completed-orders'
  },
  {
    key: 'products',
    route: '/products'
  },
  {
    key: 'backgrounds',
    route: '/backgrounds'
  },
  {
    key: 'stickers',
    route: '/stickers'
  },
  {
    key: 'categories',
    route: '/categories'
  },
  {
    key: 'news',
    route: '/news'
  },
  {
    key: 'feedbacks',
    route: '/feedbacks'
  }
];
