import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
  // Platform
} from "react-native";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const loginHandler = (value) => setLogin(value);
  const emailHandler = (value) => setEmail(value);
  const passwordHandler = (value) => setPassword(value);

  const [icon, setIcon] = useState('eye-off');

  const iconChange = () => {
    setIcon(prevIcon => prevIcon === 'eye-off' ? 'eye' : 'eye-off')
  }

  const onLogin = () => {
    Keyboard.dismiss();
    setLogin('');
    setEmail('');
    setPassword('');
  }

   const [fontsLoaded] = useFonts({
     'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
     'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
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
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <ImageBackground source={require('./assets/images/bg.jpg')} style={styles.image}>
          <View style={styles.form}>
            <Text style={styles.title}>Регистрация</Text>
            <TextInput style={styles.input}
              placeholder="Логин"
              value={login}
              onChangeText={loginHandler}
            />
            <TextInput style={styles.input}
              placeholder="Адрес электронной почты"
              value={email}
              onChangeText={emailHandler}
            />
            <View style={styles.inputWrap}>
                <TextInput style={[styles.input, styles.password]}
                placeholder="Пароль"
                value={password}
                secureTextEntry={icon === 'eye-off' ? true: false}
                onChangeText={passwordHandler}
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
        </ImageBackground>
      </View>
      
</TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
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
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    },
  form: {
    height: 549,
    paddingHorizontal: 16,
    paddingTop: 92,
    backgroundColor: '#ffffff',
    width: '100%',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25
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
    fontSize: 24,
    marginBottom: 36,
    textAlign: 'center',
    
  },
  button: {
    height:50,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
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
