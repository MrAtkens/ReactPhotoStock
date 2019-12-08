import React, {Component} from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { AccesGrid } from './containers'

import routes from './routes'
import './mainCss.css'

const switchRoutes = (
    <Switch>
      {routes.map((prop, key) => {
        if (prop.layout === "/") {
          return (
            <Route
              path={prop.layout + prop.path}
              component={prop.component}
              key={key}
            />
          );
        }
        return null;
      })}
        <Redirect from="/" to="/main" />
    </Switch>
  );

class Main extends Component{
    render(){
        return(
          <div>
            {this.props.redirectStatus === true ? (
                <div>{switchRoutes}</div>   
            ) : (<AccesGrid/>)}                    
          </div>
        );
    }
}

const mapStateToProps = store => {
  return {
    redirectStatus: store.usersReducer.redirectStatus,
  }
}

export default connect(
  mapStateToProps, null
)(Main)