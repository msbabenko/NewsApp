import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import {setToken} from './Token'
import {login} from './Mock'


export const LogInScreen = ({ navigation }) => {

    const [loginValue, setLoginValue] = useState('');
    const [pswdValue, setPswdValue] = useState('');
  
    const [errorMessage, setErrorMessage] = useState('');
    const loginUser = async () => {
      setErrorMessage('');
      login(loginValue, pswdValue)
        .then(async (res) => {
          await setToken(res.auth_token);
          navigation.navigate('Profile', { screen: 'ProfileNested' }); 
        })
        .catch((err) => setErrorMessage(err.message));
    };
  
  
  
  return (
      <View  style={styles.container}>
               <Text style={styles.logo}>News | Login</Text>
          <View style={styles.inputView} >
            <TextInput  
              style={styles.inputText}
              placeholder="Email..." 
              placeholderTextColor="#003f5c"
             value={loginValue}
             onChangeText={(data) => setLoginValue(data)}
              
              />
          </View>
          <View style={styles.inputView} >
            <TextInput  
              secureTextEntry
              style={styles.inputText}
              placeholder="Password..." 
              placeholderTextColor="#003f5c"
              value={pswdValue}
             onChangeText={(data) => setPswdValue(data)}
              />
          </View>
          <View style={styles.fixToText}>
          <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>
          
          <TouchableOpacity>
            <Text style={styles.signupText}>Sign up</Text>
          </TouchableOpacity>
          </View>
          <TouchableOpacity 
              style={styles.loginBtn}
              onPress={loginUser}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
       </View >
    
      )
  };
  


  const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        
      },
     
    logo:{
      fontWeight:"bold",
      fontSize:50,
      color:"#fb5b5a",
      marginBottom:40
    },
    inputView:{
      width:"80%",
      backgroundColor:"#e6e6ea",
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    },
    inputText:{
      height:50,
      color:"#003f5c"
    },
    forgot:{
      color:"#003f5c",
      fontSize:11
    },
    
    loginText:{
      color:"white",
      fontSize:16
    },
    signupText:{
        color:"#fb5b5a",
        fontSize:11
      },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    loginBtn:{
        width:"80%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:15,
        marginBottom:10
      },
      featuredTitleStyle: {
        marginHorizontal: 5,
        textShadowColor: '#00000f',
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius: 3
      },
      noteStyle: {
        margin: 5,
        fontStyle: 'italic',
        color: '#b2bec3',
        fontSize: 10
      }
  });