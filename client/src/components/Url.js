import React from "react";
import { Form, Input } from "antd";

function Url() {
    return (
        <div>
          <Form.Item
            name="url"
            label="Url Link"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </div>
   );
}

export default Url