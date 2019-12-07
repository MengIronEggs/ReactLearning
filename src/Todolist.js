import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
// import axios from "axios";
import './style.css';

class Todolist extends Component {
    // 自执行函数、最先执行
    constructor(props) {
        super(props);//调用一次父类的方法
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleItemDeleteClick = this.handleItemDeleteClick.bind(this);
        this.state = { //组件的状态  存储组件的数据
            inputValue: '',
            list: [], 
        }
	}
	// 生命周期函数（组件即将被挂载到页面的时刻被执行）
	componentWillMount(){}
	// 页面加载完成之后被执行(ajax一般在这里执行)
	componentDidMount(){
        const TestArr = ["one","two","three"];
        this.setState(()=>({
            list:[...TestArr]
        }));
        // let url = 'testUrl';ajax的测试请求。
        // axios.get(url).then(res=>{
        //     alert('success');
        // }).catch(()=>{
        //     alert('error');
        // }) 
    }
	// 组件被更新之前，自动执行 。
	shouldComponentUpdate(){return true;
	}
	// 组件被更新之前自动执行，但是在shouldComponentUpdate之后被执行，
	// 如果shouldComponentUpdate返回true执行，反之不执行 。
	componentWillUpdate(){}
	// 组件跟新完成之后触发该生命周期
	componentDidUpdate(){} 
	// 当一个组件从父组件接受参数
    // 如果组件第一次存在于dom，不会执行0
    // 如果组件之前已经存在于dom中，才会执行 。
	componentWillReceiveProps(){}
    // 返回元素必须整体被包含
    render() {
        return (
            <Fragment>
                <div>
                    {
                        /*input输入框*/
                        /*htmlFor='insertArea' 获取焦点*/
                        // 输入框子
                    }
                    <label htmlFor='insertArea'>输入内容：</label>
                    <input
                        id='insertArea'
						className='input'
						ref={(input) => {this.input = input}}
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}//改变this的指向
                    />
                    <button onClick={this.handleButtonClick}>提交</button>
                </div>
                <ul ref={(ul)=>{this.ul =  ul}}>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }
    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                <div 
                key={index}>
                    {/* 父组件向子组件传参，通过属性传递，子组件通过this.props.属性值接收参数 */}
                    {/* 子组件向父组件传参，子组件需要调用父组件的方法去改变父组件的数据。同时父组件的方法的this指向要做一次绑定 */}
                    <TodoItem
                        content={item}
                        index={index}
                        handleItemDeleteClick={this.handleItemDeleteClick}
                    />
                    {/* <li
                                key={index}
                                onClick={this.handleItemDeleteClick.bind(this, index)}
                                dangerouslySetInnerHTML={{ __html: item }}
                            >
                            </li> */}
                </div>
            )
        })
    };

    handleInputChange(e) {
		const value = e.target.value;
		// console.log(e.target);
		// const value = this.input.value;
        this.setState(()=>({
            inputValue: value,
        }))
    };

    handleButtonClick() {
        // prevState  修改数据之前的数据
        this.setState((prevState)=>({
            list: [...prevState.list, prevState.inputValue],
            inputValue: "",
		}));
		 
        // this.setState({
        //     list: [...this.state.list, this.state.inputValue],
        //     inputValue: "",
        // })
    };

    handleItemDeleteClick(index) {
        // console.log(index);
        // immutable
        // state不允许我们做任何改变 
        // const list = [...this.state.list];
        // list.splice(index, 1);
        // this.setState({
        //     list: list,
        // })
        this.setState((prevState)=>{
            const list = [...prevState.list];
            list.splice(index,1);
            return{list}
        });
    }
}

export default Todolist;