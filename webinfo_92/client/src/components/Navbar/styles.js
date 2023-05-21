import { makeStyles } from '@material-ui/core/styles';
import { brown } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    backgroundColor: brown[500],
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
 
 contained: {
    backgroundColor: brown[1],
  },
  h1: {
color: brown[500] 
  },
  heading: {
    color: theme.palette.getContrastText(brown[500]),
    backgroundColor: brown[500],
    textDecoration: 'none',
    fontSize: '2em',
    fontWeight: 300,
  },
  image: {
    marginLeft: '10px',
    marginTop: '5px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      marginTop: 20,
      justifyContent: 'center',
    },
  },
  logout: {
    marginLeft: '20px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },
  
  button: {
    backgroundColor: brown[200]
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
    color: brown[200]
  },
  purple: {
    color: theme.palette.getContrastText(brown[500]),
    backgroundColor: brown[500],
  },
}));
