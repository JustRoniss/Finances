import { Button, Form, Input } from 'antd';
import "./../styles/authentication.css"


const Authentication: React.FC = () => {

    const onFinish = () => {
        console.log("Clicou no finish");
    }


    return (
        <div className="container">
            <Form
                name="login"
                onFinish={onFinish}
                className="form"
            >
                <Form.Item
                    label="Usuário"
                    name="username"
                    rules={[{required:true}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                label="Senha"
                name="password"
                rules={[{required:true}]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>

            </Form>


        </div>
    )
}

export default Authentication;