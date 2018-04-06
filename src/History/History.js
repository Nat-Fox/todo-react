import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import stylesHistory from './styles';
import Icon from 'material-ui/Icon';
import Grid from 'material-ui/Grid'

function SimpleCard(props) {
  const { classes, title, completedTask, undoTaskCompleted, undoAllTaskCompleted } = props;  

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            {title}
          </Typography>
          <Typography variant="headline" component="h2">
            Completed Tasks
          </Typography>   
          

          <div className={classes.overflowTaskHistory}>
            {/* Aca irá la lista de tareas completadas */}
            {completedTask.map((task, idx) => {
              return(
                <Grid container spacing={16} key={idx}>
                  <Grid item xs={10} md={10}>                                        
                      <Typography variant="body2">
                        • {task}
                      </Typography>                    
                  </Grid>                  
                  <Grid item xs={2} md={2}>
                    <Icon 
                      className={classes.iconUndoTask}
                      onClick={undoTaskCompleted(idx)}>
                        undo
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
            className={classes.buttonUndo}
            onClick={undoAllTaskCompleted}>
            Undo All
            <Icon className={classes.iconUndo}>undo</Icon>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(stylesHistory)(SimpleCard);