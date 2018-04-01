import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import stylesDeleted from './styles';
import Icon from 'material-ui/Icon';
import Grid from 'material-ui/Grid'


function SimpleCard(props) {
  const { classes, title } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            {title}
          </Typography>
          <Typography variant="headline" component="h2">
            Deleted Tasks
          </Typography>      

          <Typography component="p">    
            <div className={classes.overflowTaskDeleted}>
              {/* Aca irá la lista de tareas borradas */}
              <div>
                <Grid container spacing={16}>
                  <Grid item xs={8} md={8}>
                    <span className={classes.bullet}>•</span> 
                    <span>lala</span>
                  </Grid>
                  <Grid item xs={2} md={2}>
                    <Icon className={classes.iconDeletedForever}>delete_forever</Icon>
                  </Grid>                
                  <Grid item xs={2} md={2}>
                    <Icon className={classes.iconUndo}>undo</Icon>
                  </Grid>                
                </Grid>
              </div>              
            </div>  
          </Typography>

        </CardContent>        
        <CardActions>
          <Button variant="raised" size="large" color="primary" className={classes.buttonRemove}>
            Remove All
            <Icon className={classes.iconDeleted}>remove_circle_outline</Icon>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(stylesDeleted)(SimpleCard);