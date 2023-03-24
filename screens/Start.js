import { Button, StyleSheet, Text, TextInput, View,Image } from 'react-native';

export default function Start({ navigation }) {

    function toTodo() {
        navigation.navigate('Main');
    }

  return (
    <View style={styles.appContainer}>
        <View style={styles.imageContainer}>
            <Image
            style={styles.logo}
            source={{uri: 'https://www.kmit.in/images/kmit-bar.png'}}
            />
            <Image
            style={styles.image}
            source={require('../assets/images/logo.png')}
            />
        </View>
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} 
                    placeholder="Enter your Name"
            />
            <View style={styles.button}>
                <Button title="Continue" 
                        color="green" 
                        onPress={toTodo}
                />
            </View>        
        </View>
    </View>

  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor:'white'
  },
  imageContainer: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 100,
  },
  logo: {
    width: 80,
    height: 100,
    resizeMode:'contain'
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'lime',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 16,
    fontSize:24 
  },
  button: {
    width: '100%',
    marginVertical:'2%',
  },
});