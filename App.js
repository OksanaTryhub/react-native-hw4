import React from "react";
import {
  StyleSheet,
  View,
  Keyboard,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./assets/Screens/LoginScreen";
import RegistrationScreen from "./assets/Screens/RegistrationScreen";

const MainStack = createStackNavigator()
export default function App() {
  

  return (
    <NavigationContainer> 
     <MainStack.Navigator initialRouteName="Login"> 
        <MainStack.Screen name="Registration" component={RegistrationScreen} options={{ headerShown: false }} /> 
        <MainStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      </MainStack.Navigator>
    </NavigationContainer>
  
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
   image: {
    flex: 1,
     resizeMode: 'cover',
    //  justifyContent: 'center',
    justifyContent: 'flex-end',
    },
//   avatarWrap: {
//     width: 120,
//     height: 120,
//     backgroundColor: '#F6F6F6',
//     borderWidth: 1,
//     borderColor: '#E8E8E8',
//     borderRadius: 16,
//     position: 'absolute',
//     top: -60,
//     right: '50%',
//     transform: [{ translateX: 40 }],
//   },
//   plusIcon: {
//     fontSize: 25,
//     position: 'absolute',
//     top: 150,
//     right: 0,
//     transform: [{ translateX: 12 }],
//   },
//   icon: {
//     fontSize: 20,
//     color: '#1B4371',
//     position: 'absolute',
//     top: -35,
//     right: 20
//   },
//   inputWrap: {
//     flexDirection: 'row',
//     alignItems: 'baseline'
//   },
//   form: {
//     paddingHorizontal: 16,
//     paddingTop: 92,
//     // paddingBottom: 78,
//     backgroundColor: '#ffffff',
//     width: '100%',
//     borderTopRightRadius: 25,
//     borderTopLeftRadius: 25,
    
// },
//   input: {
//     height:50,
//     padding: 16,
//     marginBottom: 16,
//     backgroundColor: '#F6F6F6',
//     borderWidth: 1,
//     borderColor: '#E8E8E8',
//     borderRadius: 8,
//     fontFamily: 'Roboto-Regular',
//     fontSize: 16,
//   },
//   password: {
//     flex: 1,
//     marginBottom: 43,
//   },
//   title: {
//     fontFamily: 'Roboto-Bold',
//     color: '#212121',
//     fontSize: 30,
//     lineHeight: 35.16,
//     marginBottom: 33,
//     textAlign: 'center',
    
//   },
//   button: {
//     height:50,
//     backgroundColor: '#FF6C00',
//     borderRadius: 100,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 16,
//     fontFamily: 'Roboto-Regular',

//   },
//   buttonTitle: {
//     fontSize: 16,
//     color: '#ffffff'
//   },
//   text: {
//     fontSize: 16,
//     color: '#1B4371',
//     alignSelf: 'center',
//   },
//   acc: {
//     flexDirection: 'row',
//     justifyContent:'center'
//   }
 
});
