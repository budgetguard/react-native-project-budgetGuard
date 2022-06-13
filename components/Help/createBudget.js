import * as React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Modal } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
//import styles from './components/styles';

export default function Helps() {
    return (
      <View style={styles.body}>
          <ScrollView>
                <Text style={styles.text_heading}>How do I create a BUDGET?</Text>
                <Text style={styles.text_subheader}>So you want to create a Budget in Budget Guard Android, 
great decision! Here's how:
</Text>
<Text style={styles.text_subheader}>1. Go to the Main Menu and click on Budgets
</Text>
<Text style={styles.text_subheader}>2. Click on the green circle '+' icon to add a new 
Budget

</Text>
<Text style={styles.text_subheader}>3. Name your Budget and enter your Budget's details 
here. When you choose a Category and/or Label to be 
included in your Budget, every Record with that 
Category/Label will be reflected in your Budget. Keep 
this in mind when categorizing and labeling your 
Records. For example, if you create a Budget for the 
cinema, you could rename a Subcategory 'Cinema' to 
use for this Budget
</Text>
<Text style={styles.text_subheader}>Bam! You're done. Pat yourself on the back or 
perhaps eat some ice cream. Delete or Edit your Budget 
at any time.
</Text>
                
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
