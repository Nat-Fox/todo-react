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
      pendingTask: [],
      deletedTask: []
    }
  }

  // function add component
  addTask = () => {
    //console.log('add', this.state.text);
    this.setState((prevState) => {
      return { 
        pendingTask: prevState.pendingTask.concat([prevState.text]),
        text: '' 
      }
    })
  }

  changeText = (event) => {
    //console.log(event.target);
    this.setState({
      text: event.target.value
    })
  }
  
  // necesitamos el id y la tarea a eliminar
  deleteTask =  idx => () => {
    this.setState((prevState) => {

      // 1ª pedingTask -> ["abc1", "abc2", "abc3"]
      // 2ª pedingTask -> ["abc1", "abc2"]

      // 1ª el que se borro filtrado -> ["abc3"]
      // 2ª el que se borro filtrado -> ["abc2"]
      const addToDeleted = prevState.pendingTask.filter((elem, index) => index == idx);

      return {
        // 1ª los que quedaron -> ["abc1", "abc2"]
        // 1ª los que quedaron -> ["abc1"]
        pendingTask: prevState.pendingTask.filter((elem, index) => index !== idx),

        // 1ª deletedTask -> [] + el que se borro -> ["abc3"]  resultado => ["abc3"]
        // 1ª deletedTask -> ["abc3"] + el que se borro -> ["abc2"]  resultado => ["abc3", "abc2"]
        deletedTask: prevState.deletedTask.concat(addToDeleted)
      };
      
    })
    
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
            <Deleted 
            title="Permanent Delete Task" 
            deletedTask={this.state.deletedTask}/>   
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
