import { Table, TableProps } from 'antd';
import { Link } from 'react-router-dom';
import { CreateButton, TableAction } from 'src/components/table';
import { useQueryCategoryList } from 'src/services/category.service';
import { TableStyle } from 'src/styles/table.style';
import { Category } from 'src/types/category.type';

const CategoryList: React.FC = () => {
  const { data: dataQuery, isLoading, error } = useQueryCategoryList();

  const { data = [], pagination } = dataQuery || {};

  const columns: TableProps<Category>['columns'] = [
    {
      title: 'STT',
      dataIndex: 'id',
      key: 'id',
      render: (text, _, index) => <Link to={`/categories/${text}/detail`}>{index + 1}</Link>
    },
    {
      title: 'Tiêu đề',
      dataIndex: 'title',
      key: 'title',
      render: (text) => (
        <Link to={`/categories/${text}/detail`}>
          <p className="font-semibold">{text}</p>
        </Link>
      )
    },
    {
      title: 'Danh mục cha',
      dataIndex: 'parentId',
      key: 'parentId'
    },
    {
      title: 'Đường dẫn',
      dataIndex: 'url',
      key: 'url'
    },
    {
      title: 'Hành động',
      key: 'action',
      render: (_, record) => <TableAction item={record} />
    }
  ];

  return (
    <TableStyle>
      <div className="flex justify-end mb-5">
        <CreateButton route="/categories/create" />
      </div>
      <Table columns={columns} dataSource={data} />
    </TableStyle>
  );
};

export default CategoryList;
