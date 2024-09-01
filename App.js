import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState('');


  const handleAdd = () => { //funktio
    setTodos([...todos, { key: todo }]);
    setTodo("");
  }

  const handleClear = () => { //funktio
    setTodos("");
    setTodo("");
  }

  console.log(todos)

  return (
    <View style={styles.container}>

      <TextInput style = {styles.input} 
        placeholder='Syötä ostos'
        onChangeText={text => setTodo(text)}
        value={todo}
      />

      <Button title="Add" onPress={handleAdd}></Button>
      
      <Button title="Clear" onPress={handleClear}></Button>

      <Text>Shopping list</Text>
      <FlatList
        data={todos}
        renderItem={({ item }) => <Text>{item.key}</Text>}
        ListEmptyComponent={<Text>Empty shopping list</Text>}
        ItemSeparatorComponent={
          <View
            style={{ height: 1, backgroundColor: 'grey', width: 100 }}>
          </View>}
      />
      < StatusBar style="auto" />
    </View >

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100
  },

  input: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 5,
    margin: 5,
    width: '50%'
  },
});
