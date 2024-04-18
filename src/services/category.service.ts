import { useQuery } from '@tanstack/react-query';
import { Category } from 'src/types/category.type';
import { Pagination } from 'src/types/common.type';
import { API } from 'src/utils/API';

export const useQueryCategoryList = () => {
  const queryKey = ['GET_CATEGORY_LIST'];

  return useQuery<{ data: Category[]; pagination: Pagination }>({
    queryKey,
    queryFn: () =>
      API.request({
        url: '/categories'
      })
  });
};
