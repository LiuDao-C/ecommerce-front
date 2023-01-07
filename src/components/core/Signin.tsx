import React from 'react'
import Layout from './Layout'
import { Form, Input, Button } from "antd"
import { signin, SigninPayload } from '../../store/actions/auth.action'
import { useDispatch } from "react-redux"

const Signin = () => {
    // 获取 dispatch
    const dispatch = useDispatch()
    const onFinish = (value: SigninPayload) => {
        dispatch(signin(value))
    }

    return <Layout title="登录" subTitle="">
        <Form onFinish={onFinish}>
            <Form.Item name="email" label="邮箱">
                <Input />
            </Form.Item>
            <Form.Item name="password" label="密码">
                <Input.Password />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    登录
                </Button>
            </Form.Item>
        </Form>
    </Layout>
}

export default Signin