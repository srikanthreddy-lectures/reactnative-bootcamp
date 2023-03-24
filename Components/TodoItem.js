import {ScrollView, StyleSheet,Text, View } from 'react-native';

export default function TodoItem(props) {
  return (
    
      <View style={styles.todoContainer}>
        <ScrollView>
        {props.item.map((i)=><Text key={i} style={styles.todoItem}>{i}</Text>)}
        </ScrollView>
      </View>
   
  );
}

const styles = StyleSheet.create({
  todoContainer:{
    flex:5,
    padding:20,
  },
  todoItem:{
    margin:8,
    padding:8,
    backgroundColor:'blue',
    color:'white',
    borderRadius:8
  },
  
 
});
