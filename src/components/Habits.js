import React,{Component} from 'react';
import Habit from './Habit'; 


class Habits extends Component{
    render(){
        const habits=this.props.habits;
        console.log(habits)
        return(
            <div>
                {habits.map(habit=>
                    <>                  
                        <Habit 
                            habit={habit}
                            key={habit.id}
                            title={habit.title}
                            count={habit.count}
                            // onIncrement={this.props.onIncrement}
                            // onDecrement={this.props.onDecrement}
                            // onDelete={this.props.onDelete}
                        />
                    </>
                )}
            </div>
        )
    }
}

export default Habits;