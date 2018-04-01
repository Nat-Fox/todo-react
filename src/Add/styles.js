import red from 'material-ui/colors/red'

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
  iconAdd: {   
   marginLeft: 10
  },
  buttonAdd: {
    position: 'absolute',
    top: '46%'
  },
  mrgTopForm: {
    marginTop: 15,
    marginBottom: 15
  },
  overflowTask: {
    overflowY: 'scroll',
    height: 100
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  iconDeleted: {
    cursor: 'pointer',
    '&:hover': {
      color: red[600]
    }
  }
};