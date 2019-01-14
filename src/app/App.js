import React, { Component } from "react";
import { connect } from "react-redux";
import Profile from "../components/profile";
import { Grid } from "@material-ui/core";

class App extends Component {
  componentDidMount() {
    this.props.image();
  }

  render() {
    return (
      <div>
        <Grid container spacing={16}>
          <Grid item xs>
            {/* <div>
          Age: <span>{this.props.age}</span>
          <div>
            <button onClick={this.props.ageDown}>Age Down</button>
            <button onClick={this.props.ageUp}>Age Up</button>
          </div>
          <div>
            <button onClick={this.props.image}>Image</button> */}
            {this.props.person ? (
              <Profile
                person={this.props.person}
                refreshImageHandler={() => this.props.image()}
              />
            ) : (
              ""
            )}
            {/* </div>
        </div> */}
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { age: state.add.age, person: state.imageReducer.person };
};

const mapDispatchToProps = dispatch => {
  return {
    ageUp: () => dispatch({ type: "AGE_UP" }),
    ageDown: () => dispatch({ type: "AGE_DOWN" }),
    image: () => dispatch({ type: "RANDOM_IMAGE" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
