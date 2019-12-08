import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Slide } from 'react-reveal';
import { Redirect, Link } from 'react-router-dom'
import { Button, TextField, Paper, Grid, Typography  } from '@material-ui/core';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { singUp, singIn } from '../../actions'

import './style.css'

class AccesGrid extends Component {

  constructor(props) {
    super(props);
    this.state = {
      switchStatus: true
    }
  }

  componentDidUpdate(prevProps){
    if(this.props.singUpCodeStatus !== prevProps.singUpCodeStatus){
      if(this.props.singUpCodeStatus === true){
        this.setState({ switchStatus: false })
      }
    }
  }

  switchAction = () => {
    if(this.state.switchStatus){
      this.setState({ switchStatus: false })
    }
    else{
      this.setState({ switchStatus: true })
    }
  }
  
  onSingIn = () => {
    const login = this.inputLoginUserName.value
    const password = this.inputLoginPassword.value
    this.props.singIn(login, password)
    this.inputLoginPassword.value = "";
  }

  onSingUp = () => {
    const login = this.inputSingUpUserName.value
    const password = this.inputSingUpPassword.value
    this.props.singUp(login, password)
  }

  onRedirect = () => {
    if (this.props.redirectStatus === true) {
      return <Redirect to='/' />
    }
    else if(this.props.redirectStatus === false) {
      return <p className={'error'}>Некоректная авторизация</p>
    }
    else if(this.props.singUpCodeStatus === false){
      return <p className={'error'}>Данный пользователь уже зарегистрирован</p>
    }
  }

  render(){
    return( 
      <Grid className="primaryBackGround" container alingitems="center" justify="center" direction="row">
          <Grid className="cardBlock" item xs={6} sm={3}>
            <Slide top duration={3}>
              <Paper className="paper">
                  <Grid className="inputGrid">
                   
                      {this.state.switchStatus === true ? (
                      <div>
                        <Typography className="header" variant="h4" component="h5">
                          <Link to="#" onClick={this.switchAction}>SingIn</Link>
                        </Typography>
                        {this.onRedirect()}
                        <TextField className="input" name="login" label="Login" placeholder="Login" variant="outlined"
                        margin="normal" fullWidth type="text" inputRef={inputLoginUserName => this.inputLoginUserName = inputLoginUserName}/>
                        <TextField className="input" name="password" label="Password" placeholder="Password" variant="outlined" 
                        margin="normal" fullWidth type="password" inputRef={inputLoginPassword => this.inputLoginPassword = inputLoginPassword}/>

                        <Button variant="contained" color="primary" onClick={this.onSingIn}>Login</Button>
                      </div>) : (
                      <div>
                        <Typography className="header" variant="h4" component="h5">
                          <Link to="#" onClick={this.switchAction}>SingUp</Link>
                        </Typography>
                        {this.onRedirect()}
                        <TextField className="input" name="loginSingUp" label="Login" placeholder="Login" variant="outlined"
                        margin="normal" fullWidth type="text" inputRef={inputSingUpUserName => this.inputSingUpUserName = inputSingUpUserName}/>
                        <TextField className="input" name="passwordSingUp" label="Password" placeholder="Password" variant="outlined" 
                        margin="normal" fullWidth type="password" inputRef={inputSingUpPassword => this.inputSingUpPassword = inputSingUpPassword}/>

                        <Button variant="contained" color="primary" onClick={this.onSingUp}>SingUp</Button>
                      </div>
                      )}
                      
                  </Grid>
              </Paper>
            </Slide>
          </Grid>
      <ToastContainer
        position={'bottom-left'}
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover/>   
    </Grid>);
  }
}

const mapStateToProps = store => {
    return {
        redirectStatus: store.usersReducer.redirectStatus,
        singUpCodeStatus: store.usersReducer.singUpCodeStatus,
    }
  }

const mapDispatchToProps = {
    singUp,
    singIn
}

  export default connect(
    mapStateToProps, mapDispatchToProps
  )(AccesGrid)