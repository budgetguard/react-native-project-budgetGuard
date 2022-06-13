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
        <TextInput placeholder='Name' style={styles.add_textInput}/>
        <Text style={styles.add_text}>Target Amount </Text>
        <TextInput placeholder='Amount' style={styles.add_textInput}/>
        <Text style={styles.add_text}>Saved Already </Text>
        <TextInput placeholder='Amount Saved' style={styles.add_textInput}/>
        <Text style={styles.add_text}>Goal Date </Text>
        <TextInput placeholder='Date' style={styles.add_textInput}/>

        <Pressable
          onPress={onPressSave}
          style={styles.save_button}
        >
          <Text style={styles.save_text_button}>Save</Text>
        </Pressable>
      </View>
    );
  }

