import { Image } from 'antd';
import Img404 from 'src/assets/404.png';

const NotFound404 = () => {
  return (
    <div>
      <p>Trang không tồn tại</p>

      <Image src={Img404} alt="404" />
    </div>
  );
};

export default NotFound404;
