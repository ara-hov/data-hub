import { Divider } from 'antd';
import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import './userAction.scss'

const UserAction = () => {
  return (
    <div className='userAction__container'>
      <SearchOutlined />
      <Divider type='vertical'/>
      <span className='userAction__container--signup'>Sign Up</span>
    </div>
  );
};

export default UserAction;
