import { FC } from 'react';
import { Card, Input, Select } from 'antd';
import './productTable.scss';

interface Props {}

const ProductTable: FC = (props: Props) => {
  const { Option } = Select;
  return (
    <div className='productTable__container'>
      <Card title='Product Table' style={{ width: '100%' }}>
        <div className='productTable__container__inputs'>
          <Input addonBefore='Name' defaultValue='Crypto_Currency' />
          <Input addonBefore='Title' defaultValue='Crypto_Currency' />
        </div>
        <div className='productTable__container__select'>
          <div className='productTable__container__select--addon'>Primary key</div>
          <Select className='productTable__container__select--prefix'>
            <Option value='jack'>Jack</Option>
            <Option value='lucy'>Lucy</Option>
          </Select>
        </div>
      </Card>
    </div>
  );
};

export default ProductTable;
