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
      deletedTask: [],
      completedTask: []
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
    
  deleteTask =  idx => () => {
    this.setState((prevState) => {
      // item seleccionado a eliminar
      const addToDeleted = prevState.pendingTask.filter((elem, index) => index == idx);

      return {
        // items que no se eliminan
        pendingTask: prevState.pendingTask.filter((elem, index) => index !== idx),
        // se concatenan las task que van siendo eliminadas en el array de items eliminados        
        deletedTask: prevState.deletedTask.concat(addToDeleted)
      };
      
    })
    
  }
  
  completedTask = idx => () => {
    console.log('completed task', idx);
    this.setState((prevState) => {
      // item seleccionado
      const addToCompleted = prevState.pendingTask.filter((elem, index) => index == idx);
      return {
        // items que no se eliminan
        pendingTask: prevState.pendingTask.filter((elem, index) => index !== idx),
        // se concatenan las task que van siendo seleccionadas en el array de task completed
        completedTask: prevState.completedTask.concat(addToCompleted)
      }
    })
    
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
            <History 
              title="Undo Completed Task"
              completedTask={this.state.completedTask}    
            />
          </Grid>
        </Grid> 
      </div>
    );
  }
}

export default App;
