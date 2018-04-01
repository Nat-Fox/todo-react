import blue from 'material-ui/colors/blue';

export default {
  card: {
    minWidth: 275,
    height: 350
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
  iconUndo: {
    marginLeft: 10
  },
  buttonUndo: {
    position: 'absolute',
    top: '48%'
  },
  overflowTaskHistory: {
    overflowY: 'scroll',
    height: 120,
    marginTop: '15%'
  },
  iconUndoTask: {
    cursor: 'pointer',
    '&:hover': {
      color: blue[600]
    }
  }
};