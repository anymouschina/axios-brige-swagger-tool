import React from 'react'
import { Input } from 'antd';
import Axios from 'axios'
import $qs from 'qs'
import { file } from '@babel/types';
import { string } from 'prop-types';
Axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
const { Search,TextArea } = Input;
interface mycomponentState{
    file:any,
    showText:Boolean
}
interface mycomponentProp{

}
class workBoard extends React.Component<mycomponentProp,mycomponentState>{
    constructor(props:any){
        super(props)
        this.state = {
            file:'',
            showText:false
        }
    }
    getApiFile(url:string){
        Axios({url:'https://www.saberc8.cn/goods/api/getFile',method: 'post',data:$qs.stringify({baseUrl:url})}).then((res)=>{
            this.setState({
                file:res,
                showText:!!res
            })
        })
    }
    render(){
        return (
            <div style={{width:'100%',padding:'50px'}}>
                  <Search
                    placeholder="input search text"
                    defaultValue="https://petstore.swagger.io/v2/swagger.json"
                    enterButton="Search"
                    size="large"
                    onSearch={value => this.getApiFile(value)}
                    />
                    <TextArea style={{display: this.state.showText ? "block" : "none"}} autoSize value={this.state.file}>

                    </TextArea>
            </div>
        )
    }
}
export default workBoard