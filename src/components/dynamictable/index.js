import React, { useEffect, useState } from 'react';
import './style.css';
import { Table } from 'antd';

export default function App() {
  const [data, setData] = useState([]);
  const apiURL = 'https://dummyjson.com/products/';
  const columns = [
    {
      title: 'Thumbnail',
      dataIndex: 'thumbnail',
      key: 'thumbnail',
      render: (thumbnail) => (
        <img
          src={thumbnail}
          alt="Thumbnail"
          class="image"
          width="50"
          height="50"
        />
      ),
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Brand',
      dataIndex: 'brand',
      key: 'brand',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Discount(%)',
      dataIndex: 'discountPercentage',
      key: 'discountPercentage',
    },
    {
      title: 'Stock',
      dataIndex: 'stock',
      key: 'stock',
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
    },
  ];
  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => setData(data.products));
  }, []);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :</p>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          showSizeChanger: false,
          pageSize: 10,
          size: 'small',
        }}
      />
      ;
    </div>
  );
}
