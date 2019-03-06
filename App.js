/**
 * 
 * Routing  
 * @author Shashank Srivastava
 * 
 */

import { createStackNavigator,createAppContainer } from 'react-navigation';

import List from './src/Containers/List';
import Home from './src/Containers/Home';
// import HomeComponent from './src/Components/HomeComponent'
// import ListComponent from './src/Components/ListComponent'



const  MyApp = createStackNavigator({
  Home: {
    screen: Home,
  },
  List:{
    screen: List
  }
});   



export default createAppContainer(MyApp);  