import React, { Component } from "react";
import { Text, StyleSheet, Animated, Dimensions, Easing,  Image, TouchableOpacity, View} from 'react-native';
import { Icon } from 'react-native-elements';
import { Container, Left, Right, Header, Body, Title} from "native-base";

var {width ,height} =Dimensions.get('window');
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fadeValue: new Animated.Value(0),
      xValue: new Animated.Value(0),
      springvalue: new Animated.Value(0,3),
    }
  }

  _moveanimation = () =>{
    Animated.timing(this.state.xValue,{
      toValue: width-100,
      duration: 3000,
      easing: Easing.back(2),
     }).start(
      () =>{
      Animated.timing(this.state.xValue,{
        toValue: 0,
        duration:3000,
        easing:Easing.back(2),
      }).start(()=>{
        this._moveanimation();
      })
    })
  }

  _springanimation =() =>{
    Animated.spring(this.state.springvalue,{
      toValue: 2,
      friction: 2,
    }).start();
  }

  render() {
    return (
      <View style={styles.bodycontent}>

        <Animated.View style ={ [ styles.animationview, {left:this.state.xValue}]}/>
        {/* <Animated.Image
          source= {require('../assets/reactnative.png')}  
          Style = {[styles.imageview , {transform: [{ scale: this.state.springvalue}],alignSelf: 'center'}]}
        /> */}

        <TouchableOpacity Style={styles.Button} onPress={this._moveanimation}>
          <Text Style={styles.buttontext}> Animate </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  animationview:{
    width:100,
    height:100,
    backgroundColor: 'skyblue',
  },
  text:{
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 300,
  },
  Button:{
    backgroundColor: 'steelblue',
    borderWidth:1,
    flex:1,
    height: 45,
    alignSelf: 'center',
    marginTop:20,
  },
  buttontext:{
    color: 'white',
    padding: '12',
    fontWeight: 'bold',
    fontSize: 18,
    paddingHorizontal: 20,
  },
  imageview: {
    width:100,
    height:100,
    backgroundColor: 'transparent',
  },
  bodycontent:{
    flex: 1,
    justifyContent:'center',
  }
});

export default Home;