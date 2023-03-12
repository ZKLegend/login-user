import { Link } from "react-router-dom";
import { useState } from "react";
import { Row, Col } from "antd";
import pic1 from "../../images/pic1.png";
import "./forgotpass.css";
import { Button, Form, Input } from "antd";

import { CustomLogo } from "../../Components/CustomLogo/CustomLogo";

const ForgotPass = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="forgotpass">
      <div className="forgotpass-form">
        <CustomLogo />
        <div>
          {" "}
          <Link className="login-register-link" to="/login">
            Back to login
          </Link>
        </div>

        <h3 className="trade-gothic-lt-extended-bold-40px forgotpass-title">
          Forgot your password?
        </h3>
        <div className="montserrat-regular-16px forgotpass-paragraph">
          Don’t worry, happens to all of us. Enter your email below to recover
          your password
        </div>

        <Form name="forgotpass" scrollToFirstError>
          <label className="montserrat-semibold" htmlFor="email">
            Email
          </label>
          <Form.Item
            name="email"
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
            <Input id="email" onChange={(e) => setEmail(e.target.value)} />
          </Form.Item>

          <Form.Item>
            <Button
              className="forgotpass-button"
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      <img className="forgotpass-image" src={pic1} alt="err" />
    </div>
  );
};

export default ForgotPass;
