import React, { Component } from 'react';
import './index.css';
import './App.css';
import Add from './Add/Add';
import Deleted from './Deleted/Deleted';
import History from './History/History'
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Data from './data';


class App extends Component {

  

  constructor(props) {
    console.log('data ->', Data)
    super(props);
    this.state = {
      text: '',
      pendingTask: [],
      deletedTask: [],
      completedTask: [],
      deleteTotalTask: []
    }
  }
  
  addTask = () => {    
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
      const addToDeleted = prevState.pendingTask.filter((elem, index) => index === idx);

      return {
        // items que no se eliminan
        pendingTask: prevState.pendingTask.filter((elem, index) => index !== idx),
        // se concatenan las task que van siendo eliminadas en el array de items eliminados        
        deletedTask: prevState.deletedTask.concat(addToDeleted)
      };
      
    })
    
  }
  
  deleteTotalTask = idx => () => {
    this.setState((prevState) => {
      const addToTotalDeleted = prevState.deletedTask.filter((elem, index) => index === idx);
    
      return {
        deletedTask: prevState.deletedTask.filter((elem, index) => index !== idx),
        deleteTotalTask: prevState.deleteTotalTask.concat(addToTotalDeleted)
      }
    })    
  }

  completedTask = idx => () => {    
    this.setState((prevState) => {
      // item seleccionado      
      const addToCompleted = prevState.pendingTask.filter((elem, index) => index === idx);
   
      return {
        // items que no se eliminan
        pendingTask: prevState.pendingTask.filter((elem, index) => index !== idx),
        // se concatenan las task que van siendo seleccionadas en el array de task completed
        completedTask: prevState.completedTask.concat(addToCompleted)
      }
    })    
  }

  undoTaskDeleted = idx => () => {    
    this.setState((prevState) => {                  
      const undoDeleted = prevState.deletedTask.filter((elem, index) => index === idx);          
      console.log('undo', undoDeleted);
      return {
        pendingTask: prevState.pendingTask.concat(undoDeleted),
        deletedTask: prevState.deletedTask.filter((elem, index) => index !== idx)
      }
    })
  }

  undoAllDeleted = () => {
    //deleteTask
    this.setState((prevState) => {
      //console.log('lala', prevState.deletedTask)
      return {
        pendingTask: prevState.pendingTask.concat(prevState.deletedTask),
        deletedTask: []
      }
    })
  }

  undoTaskCompleted = idx => () => {
    this.setState((prevState) => {
      const undoCompleted = prevState.completedTask.filter((elem, index) => index === idx)
      return {
        pendingTask: prevState.pendingTask.concat(undoCompleted),
        completedTask: prevState.completedTask.filter((elem, index) => index !== idx)
      }      
    })    
  }

  undoAllTaskCompleted = () => {
    console.log('lala')
    this.setState((prevState) => {
      return {
        pendingTask: prevState.pendingTask.concat(prevState.completedTask),
        completedTask: []
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
              deletedTask={this.state.deletedTask}
              deleteTotalTask={this.deleteTotalTask}
              undoFunctionDelete={this.undoTaskDeleted}
              undoAllDeleted={this.undoAllDeleted}/>   
          </Grid>
          <Grid item xs={12} md={4}>
            <History 
              title="Undo Completed Task"
              completedTask={this.state.completedTask}
              undoTaskCompleted={this.undoTaskCompleted}  
              undoAllTaskCompleted={this.undoAllTaskCompleted}  
            />
          </Grid>
        </Grid> 
      </div>
    );
  }
}

export default App;
