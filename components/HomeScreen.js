import { StyleSheet, Text,TextInput, View ,Modal,TouchableOpacity, Button} from 'react-native'
import React,{useState} from 'react'
import TodoItem from './TodoItem'
// import PopUp from './PopUp'


const Todos = [{id:1,date:'FEB 28 2016',lists:[{id:1,work:'Interview at google',completed:false,time:'9:20 PM'},{id:2,work:'take out childrens',time:'12:20',completed:false}]},
{id:2,date:'FEB 28 2016',lists:[{id:1,work:'Interview at google',completed:true,time:'9:20 PM'},{id:2,work:'take out childrens',time:'12:20',completed:false}]},
{id:3,date:'FEB 28 2016',lists:[{id:1,work:'Interview at google',completed:true,time:'9:20 PM'},{id:2,work:'take out childrens',time:'12:20',completed:false}]}]

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"]


const HomeScreen = () => {

 const [show,setShow] = useState(false)
 const [task,setTask] = useState('')
 const [time,setTime] = useState('')
 const [todos,setTodos] = useState(Todos)

//  console.log(todos)

 const AddTodo = () =>{
   setTask('')
   setTime('')
   setShow(!show);
   const id = todos.length + 1 
   const d = new Date()
   const date = d.getDate()
   const mon = month[d.getMonth()]
   const year = d.getFullYear()
   
   const newTodo = {id,date:`${date} ${mon} ${year}`,lists:[{id:1,work:task,completed:false,time}]}
  
   setTodos((todos) => ([...todos,newTodo]))
  //  console.log(todos)
   
 }

  return (
    
    <View>
     <View style={{marginBottom:30,position:'sticky',float:'top',width:"100%",height:60,backgroundColor:'green'}}>
           <Text style={{color:'white',marginTop:15,fontSize:20,textAlign:'center',marginBottom:20}}>Todo List</Text>
        </View>
        <View >
        {
             todos.map(each => <TodoItem key={each.id} each={each}/>)
           }
           </View>
           <View style={styles.bottomView}>
           <TouchableOpacity onPress={() => setShow(!show)} style={{margin:20,width:40,height:40,borderRadius:50,justifyContent:'center',alignItems:'center',marginTop:20,backgroundColor:"green"}}>
             <Text style={{color:'white',fontSize:30,marginRight:5,marginLeft:5,marginBottom:3}}>+</Text>
           </TouchableOpacity> 
           <Modal
           transparent={true}
           visible={show}>
             <View style={{backgroundColor:'#000000aa',flex:1}}>
                 <View style={{backgroundColor:'white',margin:50,padding:50,borderRadius:15,flex:1}}>
                   <Text>{new Date().getDate()} {month[new Date().getMonth()]} {new Date().getFullYear()}</Text>
                   
                   <TextInput
                   placeholder='Enter task'
                   type='text'
                   style={styles.input}
                   value={task}
                    onChange={(e) => setTask(e.target.value)}
                  />

                  <TextInput
                   placeholder='Enter time'
                   type='text'
                   style={styles.input}
                   value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />

                   <TouchableOpacity onPress={() => AddTodo()} style={{margin:20,width:100,height:40,borderRadius:5,justifyContent:'center',alignItems:'center',marginTop:20,backgroundColor:"blue"}}>
                  <Text style={{color:'white',fontSize:30,marginRight:5,marginLeft:5,marginBottom:3}}>ok</Text>
                  </TouchableOpacity> 
                 </View>
             </View>
           </Modal>
           </View>
           {/* <View style={{height:1000}}>

           </View> */}
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  mainC:{minHeight:"100vh"},
  addBtn:{
    height:100,
    width:100,
    borderRadius:100,
    position:'absolute',
    backgroundColor:'green'
  }
  ,
  bottomView:{
    display:'flex',flexDirection:'row',justifyContent:'flex-end',
    width: '100%', 
    height: 50,  
    // justifyContent: 'center', 
    // alignItems: 'center',
    position: 'absolute',
    bottom: 0
  },
  input:{
    backgroundColor:'white',
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius:10,
    marginTop:5
},
})

{/* <>
        <View style={{marginBottom:30,overFlow:'visibile',width:"100%",height:60,backgroundColor:'green',alignSelf:'flex-start'}}>
           <Text style={{color:'white',marginTop:15,fontSize:20,textAlign:'center',marginBottom:20}}>Todo List</Text>
        </View> 
        <View>
        {
             Todos.map(each => <TodoItem key={each.id} each={each}/>)
           }
           </View>
    </> */}