import * as React from 'react';
import { View, Text, StyleSheet, Pressable, Alert, Image, TextInput } from 'react-native';
import styles from '../Style';

export default function Adds () {
  const onPressSave = () => {
    //navigation.navigate("New Borrow");
    Alert.alert("button is clicked");
  }
    return(
      <View>
        <Text style={styles.add_text}>Name </Text>
        <TextInput placeholder='From whom I have borrowed?' style={styles.add_textInput}/>
        <Text style={styles.add_text}>Description </Text>
        <TextInput placeholder='What was it for?' style={styles.add_textInput}/>
        <Text style={styles.add_text}>Amount </Text>
        <TextInput placeholder='Amount' style={styles.add_textInput}/>
        <Text style={styles.add_text}>Date </Text>
        <TextInput placeholder='Date' style={styles.add_textInput}/>
        <TextInput placeholder='Due Date' style={styles.add_textInput}/>

        <Pressable
          onPress={onPressSave}
          style={styles.save_button}
        >
          <Text style={styles.save_text_button}>Save</Text>
        </Pressable>
      </View>
    );
  }

  