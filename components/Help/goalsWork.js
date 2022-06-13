import * as React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Modal } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
//import styles from './components/styles';

export default function Helps() {
    return (
      <View style={styles.body}>
          <ScrollView>
                <Text style={styles.text_heading}>How do GOALS work?</Text>
                <Text style={styles.text_subheader}>Goals for Budget Guard Android is one of our favorite 
features! Create a Goal and start saving today; 
even small amounts give a wonderful sense of
accomplishments. To create a Goal for yourself,
 follow these steps: </Text>
                {/* <Text style={styles.text_heading}></Text> */}
                <Text style={styles.text_subheader}>1. Find Goals in the main menu and go to Active. Tap
on the + sign to create Goals.</Text>
<Text style={styles.text_subheader}>
2. You can create your own new Goal or choose from 
the suggested saving Goals.
</Text>
<Text style={styles.text_subheader}>
3. fill in the required details (target amount, date, etc.)
and click on the check mark.
</Text>
<Text style={styles.text_subheader}>
4. Goals can work three ways:
</Text>
<Text style={styles.text_subheader}>
             a. To show how much to save each period, set 
the target date and amount
</Text>
<Text style={styles.text_subheader}>
             b. To predict how long it will take to reach your
goal, set the target amount and savings
</Text>
<Text style={styles.text_subheader}>
             c. To show the final expected amount, set the 
target date and record your savings
</Text>
<Text style={styles.text_subheader}>
5. You can Edit your Goal an any time! You can also
Pause your Goal if you need a break.
</Text>
<Text style={styles.text_subheader}>
6. Remember, Budget Guard does not move your money
 for in real life! Move your Goal money or extra Budget
money to your saving or other chosen account in real 
life money to avoid using this money for other 
spending.
</Text>
<Text style={styles.text_subheader}>
We wish you luck in achieving your financial Goals with 
Budgets Guard's help.

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
