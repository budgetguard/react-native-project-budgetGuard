import * as React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Modal } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
//import styles from './components/styles';

export default function Helpps() {
    return (
      <View style={styles.body}>
          <ScrollView>
                <Text style={styles.text_heading}>Getting Started with Budget Guard</Text>
                <Text style={styles.text_subheader}>Budget Guard is an income and expense tracking mobile app that helps you budget, track your spending, and  reach your goals. If you are ready to get in control of your finances, This guide will help you get started with Budget Guard.</Text>
                <Text style={styles.text_heading}>Step 1: Install the Budget Guard Mobile App</Text>
                <Text style={styles.text_subheader}>Download and install the latest Budget Guard version from the Google Play Store or App Store.  </Text>
                <Text style={styles.text_heading}>Step 2: Create a New Account With Budget Guard</Text>
                <Text style={styles.text_subheader}> Creating an account with Budget Guard is easy. 
To get started, sign up using Google, Facebook or email.    </Text>
            </ScrollView>
      </View>
    );
  }

  const styles = StyleSheet.create({
    body: {
        // flex: 1, 
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
