import React from 'react'
import { Form, Icon, Input, Button, Upload } from 'antd'
import { requestPost } from '@/utils/request'
import Apis from '@/services/api'
import './styles.less'
export default 
@Form.create()
class extends React.PureComponent {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        requestPost('https://api.baxiaobu.com/index.php/home/v5/add', values)
      }
    })
  }

  handleReset = () => {
    this.props.form.resetFields();
  }

  render () {
    const { getFieldDecorator } = this.props.form

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 24 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 24 },
      },
    }
   
    return (
      <div id="pages_operational_box">
        <div className="pages_form_box">
          <Form 
            onSubmit={this.handleSubmit}
            {...formItemLayout} 
            layout="inline"
            labelAlign="left"
          >
            <Form.Item label="姓名" className="operational_list">
              {getFieldDecorator('name')(
                <Input
                  placeholder="name"
                />,
              )}
            </Form.Item>
            <Form.Item label="年龄" className="operational_list">
              {getFieldDecorator('age')(
                <Input
                  placeholder="age"
                />,
              )}
            </Form.Item>
            <Form.Item label="信息" className="operational_list">
              {getFieldDecorator('hospital')(
                <Input
                  placeholder="hospital"
                />,
              )}
            </Form.Item>
            <Form.Item label="标题" className="operational_list">
              {getFieldDecorator('gender')(
                <Input
                  placeholder="gender"
                />,
              )}
            </Form.Item>
            <Form.Item label="上传" >
              {getFieldDecorator('upload', {
                valuePropName: 'fileList',
                getValueFromEvent: this.normFile,
              })(
                <Upload name="logo" action="/upload.do" listType="picture">
                  <Button>
                    <Icon type="upload" /> Click to upload
                  </Button>
                </Upload>,
              )}
            </Form.Item>
            <Form.Item
             style={{width:'100%'}}
            >
              <Button 
              type="primary" 
              htmlType="submit" 
            
              >
                添加
              </Button>
            </Form.Item>
          </Form>
          
        </div>
      </div>
    )
  }
}