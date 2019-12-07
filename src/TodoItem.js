import React, { Component } from 'react';
import ProTypes from 'prop-types';
class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        console.log('child render');
        const { content } = this.props;
        return <div onClick={this.handleClick}>{content}</div>
    }
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content !== this.props.content){
            return true;
        }else{
            return false;
        }
    }
    handleClick() {
        const { handleItemDeleteClick, index } = this.props;
        handleItemDeleteClick(index);
        // this.props.handleItemDeleteClick(this.props.index);
    }
    // 当一个组件从父组件接受参数
    // 如果组件第一次存在于dom，不会执行0
    // 如果组件之前已经存在于dom中，才会执行 。
    componentWillReceiveProps(){}
    // 当组件即将被从页面中剔除的时候，会被执行。
    componentWillUnmount(){}
}
//属性校验
TodoItem.propTypes = { 
    content: ProTypes.oneOfType([ProTypes.number,ProTypes.string]),
    handleItemDeleteClick: ProTypes.func,
    index: ProTypes.number,
}
// 默认值
TodoItem.defaultProps = {
    
}
export default TodoItem;
