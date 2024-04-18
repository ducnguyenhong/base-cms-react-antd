import { Button, Popover } from 'antd';
import { memo, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import ImgUser from 'src/assets/user-avatar.png';
import { tokenState, userInfoAtom } from 'src/states/common';

const UserButton: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const setToken = useSetRecoilState(tokenState);

  const { fullName } = userInfo || {};

  const popoverContent = (
    <div className="w-80 rounded-sm overflow-hidden">
      <div className="bg-[#009BFC] flex items-center gap-3 px-4 py-3">
        <img src={ImgUser} alt="user" className="w-10 h-10" />
        <span className="font-semibold text-lg text-white">{fullName}</span>
      </div>
      <div className="px-4 py-6">
        <Button
          type="primary"
          danger
          onClick={() => {
            setUserInfo(undefined);
            setToken(undefined);
          }}
        >
          Đăng xuất
        </Button>
      </div>
    </div>
  );

  return (
    <Popover
      overlayInnerStyle={{ padding: 0 }}
      content={popoverContent}
      placement="bottomRight"
      arrow={false}
      trigger="click"
      open={open}
      onOpenChange={(data) => setOpen(data)}
    >
      <button
        type="button"
        className="h-12 rounded-xl border border-gray-200 bg-gray-100 px-4 hover:bg-gray-50 duration-200"
      >
        <div className="h-full flex items-center gap-2">
          <img src={ImgUser} alt="user" className="w-7 h-7" />
          <span className="font-semibold">{fullName}</span>
        </div>
      </button>
    </Popover>
  );
};

export default memo(UserButton);
