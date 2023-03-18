import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import * as Speech from 'expo-speech';

export default function App() {

  const [text, setText] =useState('kattimatikainen');
  const [selected, setSelected] = useState(0);

  const langOptions =[
    {label: "English", language: 'en-US'},
    {label: "Finnish", language: 'fi-FI'},
    {label: "Swedish", language: 'sv-SE'},
  ];

  const values = langOptions.map(option => option.label)

  const speak = () => {
    Speech.speak(text, {language: langOptions[selected].language});
  };

  console.log(langOptions[selected].language);

  return (
    <View style={styles.container}>
      <SegmentedControl
        values={values}
        selectedIndex={selected}
        onChange={event => setSelected(event.nativeEvent.selectedSegmentIndex)}
       />
       <TextInput onChangeText={text => setText(text)} value={text}></TextInput>
      <Button title="Press to hear some words" onPress={speak} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
