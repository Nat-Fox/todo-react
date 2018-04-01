import React, { Component } from 'react';
import './index.css';
import './App.css';
import Add from './Add/Add';
import Deleted from './Deleted/Deleted';
import History from './History/History'
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      pendingTask: []
    }
  }

  // function add component
  addTask = () => {
    console.log('add', this.state.text);
    this.setState((prevState) => {
      return { 
        pendingTask: prevState.pendingTask.concat([prevState.text]),
        text: '' 
      }
    })
  }

  changeText = (event) => {
    console.log(event.target);
    this.setState({
      text: event.target.value
    })
  }
  
  deleteTask = () => {
    console.log('delete task');
  }
  
  completedTask = () => {
    console.log('completed task');
  }

  render() {
    return (
      <div>
        <Typography className="title-app" variant="display3">Task</Typography>        
        <Grid container spacing={8}>
          <Grid item xs={12} md={4}>
            <Add 
              title="Add a New Task" 
              addfunction={this.addTask}
              deletefunction={this.deleteTask}
              completedfunction={this.completedTask}
              inputValue={this.state.text}  
              changeText={this.changeText}  
              pendingTask={this.state.pendingTask}          
            />   
          </Grid>
          <Grid item xs={12} md={4}>
            <Deleted title="Permanent Delete Task" />   
          </Grid>
          <Grid item xs={12} md={4}>
            <History title="Undo Completed Task"/>
          </Grid>
        </Grid> 
      </div>
    );
  }
}

export default App;
