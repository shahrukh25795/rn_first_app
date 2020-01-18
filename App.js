import React, { Component } from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-community/google-signin';


class App extends Component {

  componentDidMount(){
    // GoogleSignin.hasPlayServices({autoResolve : true}).then((result)=>{
    //   console.log("result1==>", result)
    // }).catch((error)=>{
    //   console.log("error1==>", error)   
    // })

    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: "152517238484-e2517e7oib3bv0ac8h27m17m4kgrqd55.apps.googleusercontent.com", // client ID of type WEB for your server (needed to verify user ID and offline access)
    });
  }

  handleClicked= async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log("tttttttt88888==>",userInfo)
    } catch (error) {
      console.log("99999==>",error)
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  }

  render() {
    return (
      <TouchableOpacity 
      onPress={this.handleClicked}
        style={
            { alignContent : 'center',
              alignSelf : 'center',
              marginTop : 100, 
              height:50, 
              width:200,
              backgroundColor:"#5ABFC2",
              padding:15
            }
          }>       
        <Text style={{alignSelf :'center'}}>Login with google</Text>
     </TouchableOpacity>
    );
  }
}

export default App;