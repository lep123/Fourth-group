import React from 'react';
import './index.less'
import { resd } from '@/actions/res'
import { connect } from 'react-redux'
import { Form, Icon, Input, Button, message } from 'antd';

@connect(state => {
    return {
 }
},{
    resd,
})class NormalLoginForm extends React.Component {

  handleSubmit = e => {
      console.log(111)
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
            this.props.resd(values).then( res => {
                console.log(res.payload.status)
                if(res.payload.status == 200){
                    message.success('注册成功')
                    this.props.push('/login')
                }else {
                    message.error('注册失败')
                }
            })
      }
    });
  };

    //密码正则判断
  obk = (rule, value, callback) => {
    const reg = /([0-9]+[a-zA-Z]+|[a-zA-Z]+[0-9]+)[0-9a-zA-Z]*/
    if(value && !value.match(reg)){
        callback('必须为数字和字母混合')
    }
    callback()
  } 

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <div className="Res-box">
            <div className="Res-ZC">
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                {getFieldDecorator('username', {
                    rules: [{ required: true, message: '用户名不能为空' }],
                })(
                    <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                    />,
                )}
                </Form.Item>
                <Form.Item>
                {getFieldDecorator('password', {
                    rules: [
                        { 
                            validator: this.obk,                                                                                            message: '必须是数字和字母组合!' 
                        },
                        { required: true, message: '密码不能为空' }
                    ],
                })(
                    <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                    />,
                )}
                </Form.Item>
                <Form.Item>
                {getFieldDecorator('passworder', {
                    rules: [
                        { 
                            validator: this.passer,                                                                                            message: '必须是数字和字母组合!' 
                        },
                        { required: true, message: '请再次输入密码' }
                    ],
                })(
                    <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                    />,
                )}
                
                </Form.Item>
                <Form.Item>
                <p><a className="login-form-forgot" href="">
                    Forgot password
                </a>
                Or <a href="">register now!</a>
                </p>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    注册
                </Button>
                </Form.Item>
            </Form>
        </div>
    </div>
    );
  }
}

export default  Form.create({ name: 'normal_login' })(NormalLoginForm);
