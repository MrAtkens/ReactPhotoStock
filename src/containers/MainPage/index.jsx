import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Grid, Typography, TextField, Button, Paper } from '@material-ui/core';
import Image from 'material-ui-image';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';

import { fetchPhotos, addPhoto } from '../../actions'


class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: null
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    this.setState({picture:e.target.files[0]})
  }

  onUpload = () => {
    const fileName = this.inputFileName.value
    const description = this.inputDescription.value
    console.log(this.state.picture)
    this.props.addPhoto(this.state.picture, fileName, description, this.props.user.Login)
  }

  componentDidMount(){
    this.props.fetchPhotos()
  }

  render(){
    return(
      <Grid>
          <Paper className="paper">
            <Grid className="inputGrid">
              <TextField className="input" name="fileName" label="File name" placeholder="File name" variant="outlined" 
              margin="normal" fullWidth type="text" inputRef={inputFileName => this.inputFileName = inputFileName}/>
              <TextField className="input" name="description" label="Description" placeholder="Description" variant="outlined" 
              margin="normal" fullWidth type="text" inputRef={inputDescription => this.inputDescription = inputDescription}/>
              <input type="file" onChange={this.onChange} />
              <Button variant="contained" color="primary" onClick={this.onUpload}>Upload</Button>
            </Grid>
          </Paper>
        <Grid className={"photoStockPage"} container>
          {this.props.images.map(element => {
            return <Grid className={"container"} item xs={3} key={element.Id}>
            <a href={`${element.Path}`}>
              <Image 
              src={element.Path}
              className={"image"}
              key={element.Id}
              alt={element.FileName}
              disableSpinner
              />
              <div className={"middle"}>
                <Typography className={"text"} variant="h4">
                  {element.UserName}
                </Typography>
                <Typography className={"text"} variant="h3">
                  {element.FileName}
                </Typography>
                <Typography className={"text"} variant="body1">
                  {element.Description}
                </Typography>
              </div>
            </a>
          </Grid>
          })}
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
    </Grid>
      );
  }
}

const mapStateToProps = store => {
    return {
      user: store.usersReducer.user,
      images: store.photosReducer.images,
      isFetching: store.photosReducer.isFetching
    }
  }

const mapDispatchToProps = {
  fetchPhotos,
  addPhoto
}

  export default connect(
    mapStateToProps, mapDispatchToProps
  )(MainPage)