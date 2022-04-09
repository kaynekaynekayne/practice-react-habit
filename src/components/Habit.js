import React,{Component} from 'react';

class Habit extends Component{

    state={
        count:0,
    }

    // handleIncrement(){
    //    this.setState({count:this.state.count+1}) 이거 왜 안돼
    // }
    handleIncrement=()=>{
        this.setState({count:this.state.count+1})
    }

    handleDecrement=()=>{
        this.setState({count:this.state.count>0 ? this.state.count-1 : 0})
    }

    handleDelete=(e)=>{
        
        //배열.filter(aaa) => aaa를 통과한 애들만 새로운 배열에 넣어줌
        
    }

    render(){
        
        return (
            <div className="container">

                <ul className="habits">
                    <li className="habit">
                        <span className="habit__name">{this.props.title}</span>
                        <span className="habit__count">{this.state.count}</span>
                        <button className="btn habit__plus" onClick={this.handleIncrement}>
                            <i className="fas fa-plus"></i>
                        </button>
                        <button className="btn habit__minus" onClick={this.handleDecrement}>   
                            <i className="fas fa-minus"></i>
                        </button>
                        <button className="btn habit__delete" onClick={this.handleDelete}>
                            <i className="fas fa-trash"></i>
                        </button>
                    </li>
                </ul>
            </div>
          );
    }
}

export default Habit;