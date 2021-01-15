import { FC, useEffect } from 'react';
import { Card, Table } from 'antd';
// import SwaggerClient from 'swagger-client';
import './columns.scss';

interface Props {}

const columns = [
  {
    title: 'NAME',
    dataIndex: 'name',
  },
  {
    title: 'CATEGORY',
    dataIndex: 'age',
  },
  {
    title: 'DESCRIPTION',
    dataIndex: 'description',
  },
  {
    title: 'ECOSYSTEM',
    dataIndex: 'ecosystem',
  },
  {
    title: 'LINK',
    dataIndex: 'link',
  },
  {
    title: 'PRIMITIVE',
    dataIndex: 'primitive',
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];

const Columns: FC = (props: Props) => {

//   useEffect(() => {
//     const request = {
//       url: 'https://datahub-container.c9cjtf1mve5pq.us-west-2.cs.amazonlightsail.com/get_table_constructor_example',
//     //   query: {
//     //     two: {
//     //       value: 2,
//     //     },
//     //     three: {
//     //       value: 3,
//     //     },
//     //   },
//       method: 'GET',
//     };
//     SwaggerClient.http(request);
//     console.log("file: Columns.tsx ~ line 59 ~ useEffect ~ request", request)
//   }, []);

  return (
    <div className='columns__container'>
      <Card title='Columns' style={{ width: '100%' }}>
        <Table columns={columns} dataSource={data} bordered={true} />
      </Card>
    </div>
  );
};

export default Columns;
