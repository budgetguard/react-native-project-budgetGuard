import * as React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import styles from './components/styles';

export default function BudgetAdd() {
    return (
      <View style={styles.body}>
        <Text style={styles.text_heading}>Track what you lent and borrowed</Text>
        <Text style={styles.text_subheader}>Manage all your Debts here</Text>
        
      </View>
    );
  }

  const styles = StyleSheet.create({
    body: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' ,
        margin: 10,
        backgroundColor: "#F1efef"
    },
    text: {
      fontSize:30,
      fontWeight: "bold",
      margin: 10,
      color:"black"
  },
    text_heading: {
        fontSize:40,
        // fontWeight: "",
        margin: 10,
        color:"black",
        justifyContent: "center",
        alignItems: "center"
    },
    text_subheader: {
      fontSize:20,
      // fontWeight: "",
      margin: 10,
      color:"black",
      justifyContent: "center",
        alignItems: "center"
  },
    button:{
      width: 354,
      height: 67,
      backgroundColor: "#007FFF",
      alignItems: "center",
      borderRadius: 6,
      margin: 15
    },
    text_button:{
      color: "#F5FAFA",
      fontSize: 25,
      //fontFamily: "Segoe UI"
      justifyContent: "center",
      alignItems: "center",
      margin: 20,
      fontWeight: "bold"
    }
    })
