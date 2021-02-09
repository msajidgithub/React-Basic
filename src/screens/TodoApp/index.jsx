import React, { Component } from 'react'
import { Icon } from '@material-ui/core';
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';
import { AssignmentIndOutlined } from '@material-ui/icons';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import UpdateOutlinedIcon from '@material-ui/icons/UpdateOutlined';
import '../../App.css';




class TodoApp extends Component {

    constructor() {

        super()
        this.state = {
            userInput: "",
            userEdit: "",
            TodoArry: [],
            todoNo: 0

        }
    }




    AddTodo = () => {

        if (this.state.userInput.trim() !== "") {

            // this.state.TodoArry.push(this.state.userInput)
            let obj = {
                Record: this.state.userInput,
                Status: true
            }
            this.setState({
                userInput: "",
                editInput: "",
                TodoArry: [...this.state.TodoArry, obj],
                todoNo: this.state.todoNo + 1

            })
        }
        else {
            alert('Please Enter Some Text')
        }
        console.log('AddText is working')

        console.log(this.state.TodoArry)
    }


    todoDel = (index) => {
        console.log('del chala', index)
        this.state.TodoArry.splice(index, 1)
        this.setState(
            {
                TodoArry: this.state.TodoArry,
                todoNo: this.state.todoNo - 1
            }
        )
        console.log(this.state.TodoArry)

    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.AddTodo();
        }
    }

    todoEdit = (index, val) => {
        this.state.TodoArry[index].Status = false;
        this.setState({
            TodoArry: this.state.TodoArry
        })


        console.log('edit', this.state.TodoArry)
    }



    handleChange = (e, index) => {
        this.state.TodoArry[index].Record = e.target.value;
        this.setState({
            TodoArry: this.state.TodoArry,
            userEdit: e.target.value
            

        })
        console.log(index, e.target.value)

    }

    todoUpdate = (index)=> {
        let obj = {
            Record: this.state.userEdit,
            Status: true

        }
        this.state.TodoArry[index] = obj
        this.setState({
            userInput: "",
            TodoArry: this.state.TodoArry,

        })

    }
    render() {
        return (
            <div className='todo-box'>
                <div className='heading'>
                    <h1>TodoApp</h1>
                    <h3>No of Entry: {this.state.todoNo}</h3>
                    <input onKeyPress={this.handleKeyPress} type='text' value={this.state.userInput} placeholder='Enter Your Todos' onChange={(e) => {
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
                                <li > {v.Status ? <div style={{ marginLeft: '1em' }}>{v.Record}</div> :
                                    <input type="text" value={v.Record} width="70%" onChange={(e) => this.handleChange(e, i)} />}
                                    <div className='delet-edit'>

                                        <IconButton aria-label="delete" onClick={() => this.todoDel(i)} color="inherit" >
                                            <DeleteIcon fontSize="small" />
                                        </IconButton>
                                        {v.Status ? <IconButton aria-label="edit" onClick={() => this.todoEdit(i, v.Record)} color="inherit" >
                                            <EditOutlinedIcon fontSize="small" />
                                        </IconButton> : <IconButton aria-label="edit" onClick={() => this.todoUpdate(i)} color="inherit" >
                                                <UpdateOutlinedIcon fontSize="small" />
                                            </IconButton>}
                                    </div>
                                    <hr></hr>
                                </li>

                            );
                        })}
                    </ul>

                </div>
            </div>
        )
    }
}

export default TodoApp;
