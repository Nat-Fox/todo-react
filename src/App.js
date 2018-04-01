import React, { Component } from 'react';
import Button from 'material-ui/Button';
import './index.css';
import './App.css';
import Add from './Add/Add';
import Deleted from './Deleted/Deleted';
import History from './History/History'
import Grid from 'material-ui/Grid';


class App extends Component {
  render() {
    return (
      <div>
        <div className="title-app">Task</div>
        <Grid container spacing={16}>
          <Grid item xs={12} md={6}>
            <Add title="Add Task" />   
          </Grid>
          <Grid item xs={12} md={6}>
            <Deleted title="Delete Task" />   
          </Grid>
        </Grid> 
        <Grid container spacing={16}>
          <Grid item xs={12} md={12}>
            <History title="History Task"/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
