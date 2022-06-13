import * as React from 'react';
import { View, Text, StyleSheet, Pressable, Alert, Image, TextInput,  } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../Style'

export default function Adds () {
  const onPressSave = () => {
    //navigation.navigate("New Borrow");
    Alert.alert("button is clicked");
  }
    return(
      
        <View style={styles.add_body}>
          <ScrollView>
          <Text style={styles.add_text}>Name: </Text>
        <TextInput placeholder='To Whom You Have Lent?' style={styles.add_textInput}/>

        <Text style={styles.add_text}>Description: </Text>
        <TextInput placeholder='What was it for?' style={styles.add_textInput}/>

        <Text style={styles.add_text}>Amount: </Text>
        <TextInput placeholder='Amount' style={styles.add_textInput}/>
        
        <Text style={styles.add_text}>Period: </Text>
        <TextInput placeholder='Date' style={styles.add_textInput}/>
        <TextInput placeholder='Due Date' style={styles.add_textInput}/>

        <Pressable
          onPress={onPressSave}
          style={styles.save_button}
        >
          <Text style={styles.save_text_button}>Save</Text>
        </Pressable>
          </ScrollView>
        
      </View>
        
      
    );
  }

// //   const styles = StyleSheet.create({
//     body: {
//       // flex: 1, 
//       //alignItems: 'center', 
//       justifyContent: 'center' ,
//       //margin: 10,
//       backgroundColor: "#F1efef"
//   },
// //   text: {
// //     fontSize:15,
// //     fontWeight: "bold",
// //     margin: 10,
// //     color:"black"
// //   },
// //   textInput:{
// //     borderColor:'black',
// //     borderWidth: 1,
// //     padding: 10,
// //     margin: 10,
// //     width: 400
  
// //   },
// //   button:{
// //     width: 200,
// //     height: 66,
// //     backgroundColor: "#007FFF",
// //     alignItems: "center",
// //     borderRadius: 10,
// //     left: 100,
// //     //top: 10,
// //     justifyContent: "center"

// //   },
// //     text_button:{
// //       color: "#F5FAFA",
// //       fontSize: 20,
// //       //fontFamily: "Segoe UI"
// //       justifyContent: "center",
// //       alignItems: "center",
// //       margin: 15,
// //       fontWeight: "bold"
// //     },
// // })