import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../redux/apiRequest";
import { Row, Col } from "antd";
import { CustomLogo } from "../../Components/CustomLogo/CustomLogo";
import pic1 from "../../images/pic1.png";
import { Link } from "react-router-dom";

import { Button, Checkbox, Form, Input, Select } from "antd";
import "./register.css";
const Register = () => {
  const { Option } = Select;
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [address,setAddress] = useState("");
  const [phonenumber,setPhonenumber] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
  const handleRegister = (e) => {
    
    const newUser = {
      email: email,
      password: password,
      username: username,
      address:address,
      phonenumber:phonenumber,
    };
    registerUser(newUser, dispatch, navigate);
  };
  const [form] = Form.useForm();

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="84">+84</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  return (
    <div className="register-container">
      <Row gutter={48}>
        <Col span={12}>
          <img src={pic1} alt="err" />
        </Col>
        <Col span={12}>
          
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={handleRegister}
            style={{ maxWidth: 600 }}
            scrollToFirstError
          >
            <CustomLogo />
              <Form.Item
              name="nickname"
              label="Username"
              tooltip="What do you want others to call you?"
              rules={[
                {
                  required: true,
                  message: "Please input your nickname!",
                  whitespace: true,
                },
              ]}
            >
              <Input onChange={(e)=>setUsername(e.target.value)}/>
            </Form.Item>


            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input onChange={(e)=>setEmail(e.target.value)}/>
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password onChange={(e)=>setPassword(e.target.value)}/>
            </Form.Item>

            

            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
              <Input addonBefore={prefixSelector} style={{ width: "100%" }} onChange={(e)=>setPhonenumber(e.target.value)} />
            </Form.Item>

            <Form.Item
              name="address"
              label="Address"
              rules={[{ required: true, message: "Please input Intro" }]}
            >
              <Input.TextArea onChange={(e)=>setAddress(e.target.value)} />
            </Form.Item>

            <Form.Item
              name="gender"
              label="Gender"
              rules={[{ required: true, message: "Please select gender!" }]}
            >
              <Select placeholder="select your gender">
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(new Error("Should accept agreement")),
                },
              ]}
              {...tailFormItemLayout}
            >
              <Checkbox>
              I agree to all the <a href="">Terms</a> and <a href="">Privacy Policies</a>
              </Checkbox>
              
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
              
            </Form.Item>
            Already have account?
              <Link className="login-register-link" to="/login">
                Login 
              </Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
