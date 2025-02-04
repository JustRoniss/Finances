import { Button, Form, Input } from 'antd';
import "./../styles/authentication.css"


const Authentication: React.FC = () => {

    const onFinish = () => {
        console.log("Clicou no finish");
    }


    return (
        <div className="container">
            <Form
                layout="vertical"
                name="login"
                onFinish={onFinish}
                className="form"

            >
                <Form.Item className="text">
                    <h2>Acesso Restrito</h2>
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{required:true, message:"?"}]}
                >
                    <Input.Password className="input-password" />
                </Form.Item>


            </Form>

        </div>
    )
}

export default Authentication;