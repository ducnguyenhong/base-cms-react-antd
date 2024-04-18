import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb as AntdBreadcrumb } from 'antd';
import { memo } from 'react';

const Breadcrumb: React.FC = () => {
  return (
    <AntdBreadcrumb
      items={[
        {
          href: '',
          title: <HomeOutlined />
        },
        {
          href: '',
          title: (
            <>
              <UserOutlined />
              <span>Application List</span>
            </>
          )
        },
        {
          title: 'Application'
        }
      ]}
    />
  );
};

export default memo(Breadcrumb);
