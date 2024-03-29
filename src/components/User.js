import classes from './User.module.css';

class User extends Components{
     render(){
      return <li className={classes.user}>{props.name}</li>
     }
}
const User = (props) => {
  return <li className={classes.user}>{props.name}</li>;
};

export default User;
