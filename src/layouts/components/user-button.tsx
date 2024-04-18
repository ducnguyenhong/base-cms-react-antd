import { Button, Popover } from 'antd';
import { memo, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { tokenState, userInfoAtom } from 'src/states/common';

const UserButton: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const setToken = useSetRecoilState(tokenState);

  const { fullName } = userInfo || {};

  const popoverContent = (
    <div>
      <Button
        onClick={() => {
          setUserInfo(undefined);
          setToken(undefined);
        }}
      >
        Đăng xuất
      </Button>
    </div>
  );

  return (
    <Popover content={popoverContent} trigger="click" open={open} onOpenChange={(data) => setOpen(data)}>
      <Button type="primary">{fullName}</Button>
    </Popover>
  );
};

export default memo(UserButton);
