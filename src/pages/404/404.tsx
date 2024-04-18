import { Image } from 'antd';
import Img404 from 'src/assets/404.png';

const NotFound404 = () => {
  return (
    <div className="flex flex-col items-center gap-5 pt-20">
      <p className="font-semibold text-2xl">Trang mà bạn truy cập không tồn tại!</p>

      <div className="w-[40%]">
        <Image src={Img404} alt="404" preview={false} />
      </div>
    </div>
  );
};

export default NotFound404;
