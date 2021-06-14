import React, { useState } from 'react';
import { Modal, Button, Input, Form } from 'antd';

const ModalVacancies = ({position}) => {

    return(
        <>
            <Modal title="Basic Modal"
                   // visible={isModalVisible}
                   // onOk={handleOk}
                   // onCancel={handleCancel}
                >
                <Form
                    name="Apply for a vacancy"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                        <Input placeholder="Username*"/>
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[{type: 'email', required: true, message: 'Please input your name!' }]}
                    >
                        <Input placeholder="Email*" />
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        rules={[{ required: true, message: 'Please input your phone number!' }]}
                    >
                        <Input placeholder="Phone Number*" style={{ width: '100%' }} />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
};
export default ModalVacancies