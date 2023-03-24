import { Button, StyleSheet, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function TodoInput(props){

    const [enteredTodoText, setEnteredTodoText]= useState('');


    function todoInputHandler(enteredText){
       // console.log(enteredText);
       setEnteredTodoText(enteredText)
    }

    function addTodoHandler(){
        props.onAddTodo(enteredTodoText)
        //console.log(enteredTodoText);
     }

    return(
        <View style={styles.inputContainer}>
            <TextInput 
                    style={styles.textInput} 
                    placeholder="Enter your TODO!" 
                    onChangeText={todoInputHandler}
            />
            <Button title="Add Todo" onPress={addTodoHandler} />
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer:{
      flex:1,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      borderBottomWidth:1,
      borderBottomColor:'red'
    },
    textInput:{
      borderWidth:1,
      width:'70%',
      padding:8,
    }
   
  });
  