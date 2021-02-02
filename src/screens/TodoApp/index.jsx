import React, { Component } from 'react'
import { Icon } from '@material-ui/core';
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';
import { AssignmentIndOutlined } from '@material-ui/icons';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
class TodoApp extends Component {
    constructor() {
        super()
        this.state = {
            userInput: "",
            TodoArry: []
        }
    }




    AddTodo = () => {
        this.state.TodoArry.push(this.state.userInput)

        this.setState({
            userInput: "",
            TodoArry: this.state.TodoArry
        })

        console.log('AddText is working')

        console.log(this.state.TodoArry)
    }

    render() {
        return (
            <div>
                <div className='heading'>
                    <h1>TodoApp</h1>
                    <input type='text' value={this.state.userInput} placeholder='Enter Your Todos' onChange={(e) => {
                        this.setState({
                            userInput: e.target.value
                        })
                    }} />
                    <span style={{
                        marginLeft: '.5em'
                    }}></span>
                    <button onClick={this.AddTodo}> Add </button>
                </div>

                <div className='textDisplay'>
                    <ul>
                        {this.state.TodoArry.map((v, i) => {
                            return (
                                <li >  <AssignmentOutlinedIcon
                                fontSize="inherit"
                                color="inherit" /> <span style={{marginLeft:'2em'}}>{v}</span> </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default TodoApp;
