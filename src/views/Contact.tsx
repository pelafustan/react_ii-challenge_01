import { Button, Input, Form } from "antd";

export default function Contact() {
  type FieldType = {
    userName?: string;
    userEmail?: string;
    userRequest?: string;
  };

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
  };

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
    },
  };
  /* eslint-enable no-template-curly-in-string */

  return (
    <>
      <h1 style={{ margin: "2rem 0" }}>Contact Form</h1>
      <Form
        name="request"
        autoComplete="off"
        {...layout}
        validateMessages={validateMessages}
      >
        <Form.Item<FieldType>
          label="Your name"
          name="userName"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Your email"
          name="userEmail"
          rules={[{ required: true, type: "email" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Your request"
          name="userRequest"
          rules={[{ required: true }]}
        >
          <Input.TextArea
            allowClear
          />
        </Form.Item>
        <Form.Item
          wrapperCol={{ offset: 8, span: 8}}
        >
          <Button
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
