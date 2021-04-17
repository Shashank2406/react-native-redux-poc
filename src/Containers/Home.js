import { connect } from "react-redux";
import HomeComponent from "../Components/HomeComponent"
import { setFunction } from "../Services/action";


const mapStateToProps = (state) => ({
    homeValue: state.home.homeData,
    userValue: state.home.userData
})

const mapDispatchToProps = (dispatch) => ({
    setFunction: (param) => dispatch(setFunction(param))
})

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent)

export default Home;