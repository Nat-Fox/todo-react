import red from 'material-ui/colors/red';
import green from 'material-ui/colors/green';

export default {
  card: {
    minWidth: 275,
    height: 500
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  iconAdd: {   
   marginLeft: 10
  },
  buttonAdd: {
    position: 'absolute',
    top: '75%'
  },
  mrgTopForm: {
    marginTop: 15,
    marginBottom: 15
  },
  overflowTask: {
    overflowY: 'scroll',
    height: 250
  },  
  iconDeleted: {
    cursor: 'pointer',
    '&:hover': {
      color: red[600]
    }
  },
  iconCheck: {
    cursor: 'pointer',
    '&:hover': {
      color: green[500]
    }
  }
};