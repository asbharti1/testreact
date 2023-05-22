import { Button, Checkbox, Form, Input } from 'antd';
import React, { useEffect, useState, } from "react";


const FormModel = () => {
  const [edit, setEdit] = useState([]);
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const handleChange = (e) => {
    setEdit({ [e.target.name]: e.target.value });
  };
  return(
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Name"
      name="name"
      rules={[
        {
          required: true,
          message: 'Please input your name!',
        },
      ]}
    >
      <Input onChange={handleChange}/>
    </Form.Item>

    <Form.Item
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your email!',
        },
      ]}
    >
      <Input onChange={handleChange}/>
    </Form.Item>

    <Form.Item
      label="Phone"
      name="phone"
      rules={[
        {
          required: true,
          message: 'Please input your phone!',
        },
      ]}
    >
      <Input onChange={handleChange}/>
    </Form.Item>

    <Form.Item
      label="Website"
      name="website"
      rules={[
        {
          required: true,
          message: 'Please input your website!',
        },
      ]}
    >
      <Input onChange={handleChange}/>
    </Form.Item>
     <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>

   
   
    
  </Form>
)};
export default FormModel;