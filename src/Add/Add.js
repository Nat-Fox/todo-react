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
            List of tasks 
          </Typography>          
          <Typography component="p">
            <form>
              <TextField placeholder="Add your task" className={classes.mrgTopForm}></TextField>
            </form>            
            <div className={classes.overflowTask}>
              {/* Aca irá la lista de tareas ingresadas */}
              <div>
                <Grid container spacing={16}>
                  <Grid item xs={10} md={10}>
                    <span className={classes.bullet}>•</span> 
                    <span>lala</span>
                  </Grid>
                  <Grid item xs={2} md={2}>
                    <Icon className={classes.iconDeleted}>delete_forever</Icon>
                  </Grid>                
                </Grid>
              </div>              
            </div>            
          
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="raised" size="large" color="primary" className={classes.buttonAdd}>            
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