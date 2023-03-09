import { Link } from "react-router-dom";
import { useState } from "react";
import { Row, Col } from "antd";
import pic1 from "../../images/pic1.png";

import { Button, Form, Input } from "antd";

import { CustomLogo } from "../../Components/CustomLogo/CustomLogo";

const ForgotPass = () => {
    const [email,setEmail] = useState("")
  return (
    <div className="Loginframe">
      <Row gutter={48}>
        <Col span={12}>
          <CustomLogo />
          Back to login
          <Link className="login-register-link" to="/login">
            Login
          </Link>
          <h3 className="forgot-title">Forgot your password?</h3>
          <Form
            
           
            name="forgotpass"
            
            style={{ maxWidth: 600 }}
            scrollToFirstError
          >
            <CustomLogo />

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
              <Input onChange={(e) => setEmail(e.target.value)} />
            </Form.Item>

            <Form.Item >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={12}>
          <img src={pic1} alt="err" />
        </Col>
      </Row>
    </div>
  );
};

export default ForgotPass;
