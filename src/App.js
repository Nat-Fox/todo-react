import React, { Component } from 'react';
import Button from 'material-ui/Button';
import './index.css';
import './App.css';
import Add from './Add/Add';
import Deleted from './Deleted/Deleted';
import History from './History/History'
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';


class App extends Component {
  render() {
    return (
      <div>
        <Typography className="title-app" variant="display3">Task</Typography>        
        <Grid container spacing={8}>
          <Grid item xs={12} md={4}>
            <Add title="Add a New Task" />   
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
