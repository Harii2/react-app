import {useState} from 'react'
import { StyleSheet, Text, View,CheckBox } from 'react-native'


const Works =(props) =>{
    const {work} = props

    const [isSelected,setSelection] = useState(work.completed)
    

     return(
         <View style={styles.mainContainer}> 
         <Text style={!isSelected ? styles.dateText : styles.dataTextMin}>{work.work}</Text>
         <View style={styles.innerContainer}>
                    <Text style={!isSelected ? styles.dateText : styles.dataTextMin}>{work.time}</Text>
                    <CheckBox 
                        value={isSelected}
                        onValueChange={() => {setSelection(!isSelected)}}
                        style={styles.checkbox} 
                    />
                   
                </View>
         </View>
     )
}

export default Works


const styles = StyleSheet.create({
    dateText:{
        color:'grey',
        fontSize:15,
        fontWeight:'bold',
        // color:' #D9D9D6'
    },
    dataTextMin:{
        color:'grey',
        fontSize:15,
        fontWeight:'bold',
        textDecorationLine:'line-through'
    }
    ,
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
    }
    ,
    mainContainer:{
        // width:'96%',
        // backgroundColor:'white',
        // borderWidth:0,
        // color:'grey',
        // alignSelf:'center',
        // padding:8,
        // borderRadius:5,
        // marginBottom:3,
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:20,
        fontWeight:"500",
        color:'grey'
    },
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