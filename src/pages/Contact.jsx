import { Button, Form, Input, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React from 'react';

const prefixSelector = (
  <Form.Item name='prefix' noStyle>
    <Select style={{ width: 90 }}>
      <Select.Option value='977'>+977</Select.Option>
      <Select.Option value='911'>+911</Select.Option>
    </Select>
  </Form.Item>
);

const Contact = () => {
  return (
    <div className='block contactPage'>
      <div className='container'>
        <Form
          name='basic'
          initialValues={{ remember: true }}
          autoComplete='off'
          layout='vertical'
          size='large'
        >
          <Form.Item
            label='Fullname'
            name='fullname'
            rules={[{ required: true, message: 'Please input your fullname!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label='Email'
            name='email'
            rules={[
              {
                type: 'email',
                required: true,
                message: 'Please input your mailing address!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name='phone'
            label='Phone Number'
            rules={[
              { required: true, message: 'Please input your phone number!' },
            ]}
          >
            <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item
            name='message'
            label='Message'
            rules={[{ message: 'Please input your phone number!' }]}
          >
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item label={null}>
            <Button
              color='purple'
              variant='solid'
              type='primary'
              htmlType='submit'
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
