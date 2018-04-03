import red from 'material-ui/colors/red';
import blue from 'material-ui/colors/blue';

export default {
  card: {
    minWidth: 275,
    height: 580
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
  iconDeleted: {
    marginLeft: 10
  },
  buttonRemove: {
    position: 'absolute',
    top: '75%'
  },
  overflowTaskDeleted: {
    overflowY: 'scroll',
    height: 250,
    marginTop: '16%'
  },
  iconDeletedForever: {
    cursor: 'pointer',
    '&:hover': {
      color: red[600]
    }
  },
  iconUndo: {
    cursor: 'pointer',
    '&:hover': {
      color: blue[600]
    }
  }
};