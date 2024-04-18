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

interface MenuRoute {
  key: string;
  route: string;
  breadcrumb: { title: string; route: string }[];
  section: string;
}

export const MENU_ROUTES: MenuRoute[] = [
  {
    key: 'new-orders',
    route: '/new-orders',
    breadcrumb: [
      {
        title: 'Đơn hàng mới',
        route: '/new-orders'
      }
    ],
    section: 'Đơn hàng mới'
  },
  {
    key: 'completed-orders',
    route: '/completed-orders',
    breadcrumb: [
      {
        title: 'Đơn hàng đã hoàn thành',
        route: '/completed-orders'
      }
    ],
    section: 'Đơn hàng đã hoàn thành'
  },
  {
    key: 'products',
    route: '/products',
    breadcrumb: [
      {
        title: 'Danh sách sản phẩm',
        route: '/products'
      }
    ],
    section: 'Danh sách sản phẩm'
  },
  {
    key: 'backgrounds',
    route: '/backgrounds',
    breadcrumb: [
      {
        title: 'Danh sách background',
        route: '/backgrounds'
      }
    ],
    section: 'Danh sách background'
  },
  {
    key: 'stickers',
    route: '/stickers',
    breadcrumb: [
      {
        title: 'Danh sách sticker',
        route: '/stickers'
      }
    ],
    section: 'Danh sách sticker'
  },
  {
    key: 'categories',
    route: '/categories',
    breadcrumb: [
      {
        title: 'Danh sách danh mục',
        route: '/categories'
      }
    ],
    section: 'Danh sách danh mục'
  },
  {
    key: 'news',
    route: '/news',
    breadcrumb: [
      {
        title: 'Danh sách tin tức',
        route: '/news'
      }
    ],
    section: 'Danh sách tin tức'
  },
  {
    key: 'feedbacks',
    route: '/feedbacks',
    breadcrumb: [
      {
        title: 'Danh sách feedback',
        route: '/feedbacks'
      }
    ],
    section: 'Danh sách feedback'
  }
];
