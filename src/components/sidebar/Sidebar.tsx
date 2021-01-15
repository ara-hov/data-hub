import { Menu } from 'antd';
import './sidebar.scss';

const Sidebar = () => {
  const { SubMenu } = Menu;
  //   const handleClick = (e) => {
  //     console.log('click ', e);
  //   };
  return (
    <div className='sidebar__container'>
      <Menu
        // onClick={handleClick}
        // style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode='inline'
      >
        <SubMenu key='sub1' title='Data'>
          <Menu.Item key='1'>Source 01</Menu.Item>
          <Menu.Item key='2'>Source 02</Menu.Item>
          <Menu.Item key='3'>Source 03</Menu.Item>
        </SubMenu>
        <SubMenu key='sub2' title='Views'>
          <Menu.Item key='5'>Option 5</Menu.Item>
          <Menu.Item key='6'>Option 6</Menu.Item>
          <Menu.Item key='7'>Option 7</Menu.Item>
        </SubMenu>
        <SubMenu key='sub4' title='Publish'>
          <Menu.Item key='8'>Option 9</Menu.Item>
          <Menu.Item key='9'>Option 10</Menu.Item>
          <Menu.Item key='10'>Option 11</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default Sidebar;
