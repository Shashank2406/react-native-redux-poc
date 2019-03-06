/**
 * 
 * Container for home component  
 * @author Shashank Srivastava
 * 
 */


import { connect } from 'react-redux';
import HomeComponent from '../Components/HomeComponent';
import getFunction from '../Services/action'

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  getFunction: (param) => dispatch(getFunction(param))
});

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);

export default Home;