import React from 'react';

class ClassLifeCycle extends React.Component{
    state={name:"Laptop"}
    handlename=this.handlename.bind(this)
    myTime=new Date()
    myHour=this.myTime.getHours()

    handlename(){
        this.setState({name:"Apple"})
    }
    componentDidMount(){
        console.log('Component mounted')
    }
    shouldComponentUpdate(){
        let access=this.myHour > 16 ? true : false;
        return access
    }
    componentDidUpdate(){
        console.log("Your profile has been Updated")
    }
    componentWillUnmount(){
        window.confirm('the component is going to be deleted')
    }

    render(){
        return<div>
            <h1>LifeCycle Component</h1>
            <h3>Product :{this.state.name}</h3>
            <button onClick={this.handlename}>Change the Product</button>
        </div>
    }
}
export default ClassLifeCycle