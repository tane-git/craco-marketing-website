import { Menu, Dropdown as AntdDropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import style from './style.module.less';

const menu = (
  <Menu>
    <Menu.Item key="0">
      Frontier (Testnet)
    </Menu.Item>
    <Menu.Item key="1">
      Managed Services
    </Menu.Item>
  </Menu>
);

export const Dropdown: React.FC = () => {
  return (
    <AntdDropdown overlay={menu} trigger={['click']}>
      <div className={style.dropdown}>
        Application <DownOutlined />
      </div>
    </AntdDropdown>
  )
}
