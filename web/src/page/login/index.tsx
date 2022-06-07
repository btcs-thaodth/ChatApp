import { Form, Input, Button } from 'antd';
import { useRecoilState } from 'recoil';
import { currentUserStore } from '../../store/CurrentUser';
import { useNavigate } from 'react-router-dom';
import { handleLoginLogout } from '../../service/chatapp';
import { useEffect } from 'react';
import messageApi from '../../service/messageApi';
import { messageStore } from '../../store/Message';

const Login = () => {
    const navigate = useNavigate();
    const [ , setCurrentUser] = useRecoilState(currentUserStore)
    const [ , setMessage] = useRecoilState(messageStore)
    const onFinish = async(values: any) => {
        setCurrentUser(values.username);
        handleLoginLogout('connectionToServer','joined the chat room', values.username, 'connected');
        navigate('/chatroom');
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    useEffect(() => {
      const getAllMessages = async() => {
        try {
          const mess = await messageApi.getAllMessages()
          setMessage([...mess.data])
        } catch {
          //TODO: handle get all member fail
        }
      }
      getAllMessages()
    },[setMessage])

    
    return(
        <div
        className="w-full h-[100vh] grid place-items-center"
        style={{
            backgroundImage: `url('${process.env.PUBLIC_URL}/images/background.webp')`,
            backgroundPosition: 'center',
          }}
      >
        <div className="bg-white max-w-sm md:max-w-md shadow-sm w-full rounded-2xl px-12 pt-8 pb-8 mb-4">
          <div className='-mt-5'>
            <img
              className="m-auto"
              src={`${process.env.PUBLIC_URL}/images/logo-chatapp.png`}
              alt="Logo"
            />
            {/* <p className="text-lg font-light text-center mt-2">
              ChatApp
            </p> */}
          </div>
        <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
        <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
        >
            <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 11, span: 16 }}>
            <Button type="primary" htmlType="submit">
                Login
            </Button>
        </Form.Item>
        </Form>
    </div>
    </div>
    )
}

export default Login