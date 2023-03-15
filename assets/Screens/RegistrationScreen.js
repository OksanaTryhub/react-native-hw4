import React, { useState } from "react";

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform
} from "react-native";


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PlusIcon from 'react-native-vector-icons/SimpleLineIcons';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShownKeyboard, setIsShownKeyboard] = useState(false);
  const [icon, setIcon] = useState('eye-off');
  const [plusIcon, setPlusIcon] = useState('plus')

  const loginHandler = (value) => setLogin(value);
  const emailHandler = (value) => setEmail(value);
  const passwordHandler = (value) => setPassword(value);

  const iconChange = () => {
    setIcon(prevIcon => prevIcon === 'eye-off' ? 'eye' : 'eye-off')
    setIsShownKeyboard(true)
    console.log(isShownKeyboard)
  }

  const plusIconChange = () => {
    setPlusIcon(prevIcon => prevIcon === 'plus' ? 'close' : 'plus')
  }

  const showKeyboard = () => {
    console.log('show')
    console.log(isShownKeyboard)
    setIsShownKeyboard(true);
    console.log(isShownKeyboard)
  }

  const keyboardHide = () => {
    console.log(isShownKeyboard)
    setIsShownKeyboard(false);
    console.log(isShownKeyboard)
    Keyboard.dismiss()
  }

  const onLogin = () => {
    setIsShownKeyboard(false);
    console.log(isShownKeyboard)
    Keyboard.dismiss();
    setLogin('');
    setEmail('');
    setPassword('');
  }

  const [fontsLoaded] = useFonts({
     'Roboto-Regular': require('../fonts/Roboto-Regular.ttf'),
     'Roboto-Bold': require('../fonts/Roboto-Bold.ttf'),
   });
  
  const onLayoutRootView = async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  };

  if (!fontsLoaded) {
    return null;
  }
  return (
    <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View style={{ ...styles.form, paddingBottom: isShownKeyboard ? 0 : 78 }} onLayout={onLayoutRootView}>
              <View style={styles.avatarWrap}>
                <TouchableOpacity activeOpacity={0.7} >
                  <PlusIcon name={plusIcon} style={{...styles.plusIcon, color: plusIcon === 'plus'? '#FF6C00' : '#E8E8E8'}} onPress={() => plusIconChange()} /> 
                </TouchableOpacity>
              </View>
              <Text style={styles.title}>Регистрация</Text>
              <TextInput style={styles.input}
                  placeholder="Логин"
                  value={login}
                  onChangeText={loginHandler}
                  onFocus={()=>showKeyboard()}
              />
              <TextInput style={styles.input}
                placeholder="Адрес электронной почты"
                value={email}
                onChangeText={emailHandler}
                onFocus={()=>showKeyboard()}
              />
              <View style={styles.inputWrap}>
                  <TextInput style={[styles.input, styles.password]}
                  placeholder="Пароль"
                  value={password}
                  secureTextEntry={icon === 'eye-off' ? true: false}
                  onChangeText={passwordHandler}
                  onFocus={()=>showKeyboard()}
                />
                  <TouchableOpacity activeOpacity={0.7} >
                  <Icon name={icon} style={styles.icon} onPress={() => iconChange() } /> 
                  </TouchableOpacity>
              </View>
            <TouchableOpacity activeOpacity={0.7} style={styles.button}>
              <Text style={styles.buttonTitle} onPress={() => onLogin() }>Зарегистрироваться</Text>
            </TouchableOpacity>
            <View style={styles.acc}>
              <Text style={styles.text}>Уже есть аккаунт?</Text>
            <TouchableOpacity activeOpacity={0.7} >
              <Text style={styles.text}> Войти</Text>
            </TouchableOpacity>
            </View>
            </View>
            </KeyboardAvoidingView>
  )
}


export default RegistrationScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
   image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    },
  avatarWrap: {
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 16,
    position: 'absolute',
    top: -60,
    right: '50%',
    transform: [{ translateX: 40 }],
  },
  plusIcon: {
    fontSize: 25,
    position: 'absolute',
    top: 80,
    right: 0,
    transform: [{ translateX: 12 }],
  },
  icon: {
    fontSize: 20,
    color: '#1B4371',
    position: 'absolute',
    top: -35,
    right: 20
  },
  inputWrap: {
    flexDirection: 'row',
    alignItems: 'baseline'
  },
  form: {
    paddingHorizontal: 16,
    paddingTop: 92,
    paddingBottom: 78,
    backgroundColor: '#ffffff',
    width: '100%',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    
},
  input: {
    height:50,
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  password: {
    flex: 1,
    marginBottom: 43,
  },
  title: {
    fontFamily: 'Roboto-Bold',
    color: '#212121',
    fontSize: 30,
    lineHeight: 35.16,
    marginBottom: 33,
    textAlign: 'center',
    
  },
  button: {
    height:50,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    fontFamily: 'Roboto-Regular',

  },
  buttonTitle: {
    fontSize: 16,
    color: '#ffffff'
  },
  text: {
    fontSize: 16,
    color: '#1B4371',
    alignSelf: 'center',
  },
  acc: {
    flexDirection: 'row',
    justifyContent:'center'
  }
 
});
