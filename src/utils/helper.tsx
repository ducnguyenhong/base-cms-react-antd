import { notification } from 'antd';

interface ToastConfig {
  message: string;
  content?: string;
  type?: 'success' | 'info' | 'warning' | 'error';
}

export const showToast = (config: ToastConfig) => {
  const { type = 'success', message, content } = config;
  notification[type]({ message, description: content });
};
