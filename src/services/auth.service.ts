import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { tokenState, userInfoAtom } from 'src/states/common';
import { API } from 'src/utils/API';

export const useMutateLogin = () => {
  const navigate = useNavigate();
  const setUserInfo = useSetRecoilState(userInfoAtom);
  const setToken = useSetRecoilState(tokenState);

  return useMutation({
    mutationFn: (params: Record<string, unknown>) => {
      return API.request({
        url: '/auth/login',
        method: 'POST',
        params: params
      }).then((res) => {
        setToken(res?.accessToken);
        API.request({
          url: '/api/user-info'
        }).then((user) => {
          setUserInfo(user);
          navigate('/');
        });
      });
    }
  });
};

export const useMutateLogout = () => {
  return useMutation({
    mutationFn: () => {
      return API.request({
        url: '/auth/logout',
        method: 'POST'
      });
    }
  });
};
