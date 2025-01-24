import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

const [product, setProduct] = useState ("");
const [historys, setHistorys] = useState([]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>

        <View style={styles.textInputs}>
          <TextInput
            placeholder='Add an Item'
            onChangeText={setProduct}
            value={product}
            style={styles.input}
          />

        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 300,
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputs: {
    marginBottom: 20,
  },
  input: {
    borderColor: '#000',
    borderWidth: 0.5,
    marginBottom: 10,
    padding: 8,
    width: 200,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '25%',
  },
  buttonContainer: {
    backgroundColor: '#009688',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  buttonText: {
    color: '#fff',
  },
});
