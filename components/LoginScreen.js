import { StyleSheet,Text, TextInput, View ,KeyboardAvoidingView,TouchableOpacity,Button} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import React, { useEffect } from 'react'
import { auth } from '../firebase'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'

const LoginScreen = () => {
  const [email,setEmail] = React.useState('')
  const [pw,setPw] = React.useState('')

  const navigation = useNavigation()

  useEffect(()=>{
     const unSubscribe = auth.onAuthStateChanged(user =>{
          if(user){
              navigation.navigate('Home')
          }
      })
      return unSubscribe

  },[])
   
  const handleSignUp = ()=>{
    createUserWithEmailAndPassword(auth,email,pw)
    .then(res =>{
        const user = res.user;
        console.log('signed in with',user.email)
    })
    .catch(e => alert(e.message))
  }

  const handleLoggedIn = ()=>{
      signInWithEmailAndPassword(auth,email,pw)
      .then(res =>{
        const user = res.user;
        console.log('LoggedIn with',user.email)
    })
    .catch(e => alert(e.message))
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
        <View 
            style={styles.inputContainer}
        >
            <TextInput
                placeholder='email'
                type='text'
                style={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextInput
                placeholder='password'
                style={styles.input}
                value={pw}
                onChange={(e) => setPw(e.target.value)}
                secureTextEntry={true}
            />    
        </View>
        <View
            style={styles.buttonContainer}
        >
            <TouchableOpacity
            onPress={handleLoggedIn}
            style={[styles.button,styles.buttonText]}
            >
               <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={handleSignUp}
            style={[styles.button,styles.buttonOutline]}
            >
               <Text style={styles.buttonOutlineText}>Register</Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'},

    inputContainer:{
        width:'80%'
    },
    input:{
        backgroundColor:'white',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        marginTop:5
    },
    buttonContainer:{
        width:'60%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:40
    },
    button:{
        backgroundColor:'#0782F9',
        width:'100%',
        padding:15,
        borderRadius:10,
        alignItems:'center'
    },
    buttonOutline:{
        backgroundColor:'white',
        marginTop:10,
        borderColor:'#0682F9',
        borderWidth:2,
    },
    buttonText:{
        color:'white',
        fontWeight:'700',
        fontSize:16
    },
    buttonOutlineText:{
        color:'#0738F9',
        fontWeight:'700',
        fontSize:16
    }

})