import React,{Component} from 'react';
import Habits from './components/Habits';
import './App.css';

class App extends Component{
  state={
    habits:[
      {id:1,title:"reading",count:0},
      {id:2,title:"running",count:0},
      {id:3,title:"walking",count:0}
    ]
  }
  handleIncrement=()=>{
    this.setState({count:this.state.count+1})
  }

  handleDecrement=()=>{
    this.setState({count:this.state.count>0 ? this.state.count-1 : 0})
  }

  handleDelete=(e)=>{
    console.log(e)
    //배열.filter(aaa) => aaa를 통과한 애들만 새로운 배열에 넣어줌
    
  }

  render(){
    return (
      <>      
        <header className="header">
          <h1>Habit Tracker</h1>
          <span className="habits__count">{this.state.habits.length}</span>
        </header>
        <Habits 
          habits={this.state.habits}
            
        />
      </>
    )
  }
}

export default App;
