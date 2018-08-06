import React, {Component} from 'React';
import { Form, Icon, Input, Button, Checkbox, Tabs } from 'antd';
import {split as SplitEditor} from 'react-ace';
import 'brace/mode/java';
import 'brace/theme/monokai';
import styles from './css/card.css';



const FormItem = Form.Item;
const TabPane = Tabs.TabPane;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
  }
  
handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
}
callback = () => {
}

onChange = () => {
}
validateUserName = (e,dksjd,dkadf) => {
    debugger;
    alert('fsf');
  }
  
  render() {
  debugger;
  const { getFieldDecorator } = this.props.form;
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
    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 },
      },
    };
   return (<div className={styles.card}>
   <Tabs defaultActiveKey="1" onChange={this.callback} type="card">
   <TabPane tab="Tab 1" key="1">
   <Form onSubmit={this.handleSubmit} className="login-form">
         <FormItem
          {...formItemLayout}
          label="User name"
        >
          {getFieldDecorator('userName', {
            rules: [{
              type: 'string', message: 'The input is not valid userName!',
            }, {
              required: true, message: 'Please input your userName!',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Ip address"
        >
          {getFieldDecorator('ipAddress', {
            rules: [{
              type: 'number', message: 'The input is not valid ip address!',
            }, {
              required: true, message: 'Please input your Ip address!',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Port"
        >
          {getFieldDecorator('port', {
          initialValue: 22,
            rules: [{
              type: 'number', message: 'The input is not valid port!',
            }, {
              required: true, message: 'Please input your port!',
            }, {
              validator: this.validateUserName,
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem {...formItemLayoutWithOutLabel}>
          <Button type="primary" htmlType="submit">Submit</Button>
        </FormItem>
      </Form> </TabPane><TabPane tab="Tab 2" key="2"> 
      <SplitEditor
    mode="java"
    splits={2}
    value={['hi', 'hello']}
    orientation="beside"
    theme="monokai"
    onChange={this.onChange}
  /></TabPane></Tabs></div>
    );
  }
}

export default  Form.create()(App);