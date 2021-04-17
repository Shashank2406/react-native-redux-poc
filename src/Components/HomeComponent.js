/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import {
   Platform,
   StyleSheet,
   Text,
   TouchableOpacity,
   View
 } from 'react-native';
 
 const instructions = Platform.select({
   ios: 'Press Cmd+R to reload,\n' +
     'Cmd+D or shake for dev menu',
   android: 'Double tap R on your keyboard to reload,\n' +
     'Shake or press menu button for dev menu',
 });
 

 export default class HomeComponent extends Component {

  componentDidMount(){
    console.log(this.props)
  }
 
   render() {
     return (
       <View style={styles.container}>
         <Text style={styles.welcome}>
           Welcome to Home
         </Text>
         <Text style={styles.instructions}>
           To get started, edit App.js
         </Text>
         <Text style={styles.instructions}>
           {this.props.homeValue}
         </Text>
         <TouchableOpacity onPress={() => {
           this.props.setFunction('Knowledge Meet Completed')
         }}>
           <Text>Call Function</Text>
         </TouchableOpacity>
       </View>
     );
   }
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF',
   },
   welcome: {
     fontSize: 20,
     textAlign: 'center',
     margin: 10,
   },
   instructions: {
     textAlign: 'center',
     color: '#333333',
     marginBottom: 5,
   },
 });
 