import { Button, StyleSheet, TextInput,Text, View } from 'react-native';
import TodoInput from '../Components/TodoInput'
import TodoItem from '../Components/TodoItem';

import { useState } from 'react';

export default function Main() {

  const [todo,setTodo] = useState([])

  function addTodoHandler(enteredTodoText){
    //console.log(enteredTodoText);
    setTodo((abz)=>[
      ...abz,enteredTodoText
    ])
 }

  return (
    <View style={styles.appContainer}>
      <TodoInput onAddTodo={addTodoHandler}/>
      <TodoItem item={todo}/>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    paddingTop:50,
    paddingHorizontal:16
  },

});
