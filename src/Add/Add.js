import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import Typography from 'material-ui/Typography';
import stylesAdd from './styles';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid'

function SimpleCard(props) {
  const { classes, title, addfunction, deletefunction, completedfunction, inputValue, changeText, pendingTask } = props;
  
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">            
            {title} 
          </Typography>
          <Typography variant="headline" component="h2">
            List of tasks 
          </Typography>          
          <form>
            <TextField 
              placeholder="Add your task" 
              className={classes.mrgTopForm}
              value={inputValue}
              onChange={changeText}
              ></TextField>
          </form>       
          
          <div className={classes.overflowTask}>
            {/* Aca irá la lista de tareas ingresadas */}              
            {pendingTask.map((task, idx) => {
              return ( 
                <Grid container spacing={16} key={idx}>
                  <Grid item xs={8} md={8}>                                                          
                    <Typography variant="body2">
                    • {task}                    
                    </Typography>   
                    {console.log(idx)}
                  </Grid>
                  <Grid item xs={2} md={2}>
                  <Icon 
                    className={classes.iconDeleted} 
                    onClick={deletefunction(idx)}>
                    delete
                  </Icon>
                </Grid>                
                <Grid item xs={2} md={2}>
                  <Icon 
                    className={classes.iconCheck}
                    onClick={completedfunction}>
                    check_circle
                  </Icon>
                </Grid>  
              </Grid>
              )
            })}                          
          </div>            
          
          
        </CardContent>
        <CardActions>
          <Button 
            variant="raised" 
            size="large" 
            color="primary" 
            className={classes.buttonAdd} 
            onClick={addfunction}>            
            Add            
            <Icon className={classes.iconAdd}>add_circle_outline</Icon>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(stylesAdd)(SimpleCard);