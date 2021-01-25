
import React from 'react';
import {connect} from 'react-redux'

class App extends  React.Component{
render(){
    // console.log(this.props.count)
    return (
        <>
        <div>Counter &nbsp; : {this.props.count}</div>
        <br/>
        <input type='button' onClick={this.props.onIncrement} value='increment' />
        <input type='button' onClick={this.props.OnDecrement} value='decrement' />
        </>
    )
}
}
const mapStateToProps=(state)=>{
    return {
        count:state.count
    }
}

const mapDispatchActionToProps=(dispatch)=>{
    return {
        onIncrement : () => dispatch({type:'INCREMENT'}),
        OnDecrement : () => dispatch({type:'DECREMENT'})
    }
}

export default connect(mapStateToProps,mapDispatchActionToProps)(App)