import { Typography } from 'antd';
import React from 'react'
import './index.css';
const { Title, Paragraph, Text } = Typography;
interface IMyComponentProps{

}
interface IMyComponentState{
  json:string,
  pathUrl:string
}
class Guide extends React.Component<IMyComponentProps, IMyComponentState>{
    constructor(props:any){
        super(props)
        this.state = { json:`{\npageNo:1,
          pageSize:10\n}`,
          pathUrl:'api/{shopId}/shops'};
    }
    render(){
        return (
            <Typography>
    <Title>介绍</Title>
    <Paragraph>
          axios-brige-swagger 是一个减少前端开发人员根据 swagger 编写接口文件工作量的工具。
    </Paragraph>
    <Paragraph>
      后端编写接口后自动生成 swagger-ui 接口文档,而每个人编写风格迥异会导致接口风格混乱。基于<Text mark>敏捷开发</Text>
      的设计价值观，通过自动化脚本生成接口文件，降低冗余的生产成本，杜绝后台接口修改导致前台增加工作量的事件发生，让前端开发者专注于
      <Text strong>更好的用户体验</Text>。
    </Paragraph>
    <Title level={2}>目前支持的接口形式: query/body/path 以及它们的混合</Title>
    <Paragraph>
      <ul>
        <li>
          <a href="#">query形式,即将参数置于url来进行数据交互。</a>
        </li>
        <li> 
        example:<Text strong>api/test/?id=param1</Text>
        </li>
        <li>
        <a href="#">body形式,通过传递一个json对象进行数据交互。</a>
        </li>
        <li>
         example: <Text strong>api/test/findlistPage</Text>
          <code>
            {this.state.json}
          </code>
        </li>
        <li>
          <a href="#">path传递。</a>
        </li>
        <li>
         example: <Text strong>{this.state.pathUrl}</Text>
        </li>
      </ul>
    </Paragraph>
  </Typography>
        )
    }
}

export default Guide
