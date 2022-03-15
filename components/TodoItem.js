import React, { Component,useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

// import {CircleCheckBox} from  'react-native-circle-checkbox'
import Works from './Works'


 const TodoItem =(props)=> {
     const {each} = props
 
    return (
       <View >
           <Text style={styles.mainText}>{each.date}</Text>
           <View style={styles.midContainer} >
                {each.lists.map(work => <Works key = {work.id} work = {work}/>)}
           </View>
       </View> 
    )
  
}

export default TodoItem

const styles = StyleSheet.create({
    dateText:{
        color:'grey',
        fontSize:15,
        fontWeight:'500'
    },
    innerContainer:{
        flexDirection:'row'
    },
    midContainer:{
        width:'96%',
        backgroundColor:'white',
        borderWidth:0,
        color:'grey',
        alignSelf:'center',
        padding:8,
        borderRadius:5,
        marginBottom:3,
        // borderLeft:'solid',
        borderLeftColor:'red',
        borderLeftWidth:5,
        height:'50%',
        // position: absolute,
        // left: 0,
        // top: '25%'
    }
    ,
    mainText:{
        margin:10,
        paddingLeft:10,
        color:'grey',
        fontWeight:'bold',
        fontSize:16
    },
     checkbox:{
         borderRadius:50,
         marginLeft:10,
         marginRight:10
     }
})