/**
 * 
 * Container for home component  
 * @author Shashank Srivastava
 * 
 */


import { connect } from 'react-redux';
import HomeComponent from '../Components/HomeComponent';
import wellnessAutosuggestion from '../Services/action'

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  setLoader: (param) => dispatch(wellnessAutosuggestion(param))
});

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);

export default Home;