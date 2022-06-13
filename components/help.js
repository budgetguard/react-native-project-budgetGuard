import * as React from 'react';
import gettingStarted from "./Help/gettingStarted";
import aboutDebts from "./Help/aboutDebts";
import createBudget from "./Help/createBudget";
import goalsWork from "./Help/goalsWork"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pressable,View, Text, StyleSheet } from 'react-native';
import styles from './Style';

function Hell({navigation}){
  // Nakalagay yung mga buttons
  const onPressStarted = () => {
    navigation.navigate("Getting Started");
  }

  const onPressGoals = () => {
    navigation.navigate("How do Goals work");
  }

  const onPressDebts = () => {
    navigation.navigate("All about Debts");
  }

  const onPressBudget = () => {
    navigation.navigate("Creating Budget");
  }
  return(
    <View style={styles.help_body}>
      <Pressable onPress={onPressStarted}>
        <Text style={styles.help_text_button}>
          Getting Started with Budget Guard
        </Text>
        </Pressable>
      <Pressable onPress={onPressGoals} >
        <Text style={styles.help_text_button}>
          How Do GOALS work?
        </Text>
      </Pressable>
      <Pressable onPress={onPressDebts} >
          <Text style={styles.help_text_button}>
            All about DEBTS
          </Text>
        </Pressable>
      <Pressable onPress={onPressBudget} >
        <Text style={styles.help_text_button}>
          How do I create a BUDGET?
        </Text>
        </Pressable>
    </View>
  )
}


const Stack = createNativeStackNavigator();

export default function Helps() {
    return (
      <Stack.Navigator>
        <Stack.Screen 
          name='Tulong' 
          component={Hell}
          options={{
            headerShown: false
          }}/>
        <Stack.Screen name='Getting Started' component={gettingStarted}/>
        <Stack.Screen name='All about Debts' component={aboutDebts}/>
        <Stack.Screen name='Creating Budget' component={createBudget}/>
        <Stack.Screen name='How do Goals work' component={goalsWork}/>
      </Stack.Navigator>
    );
  }

// const styles = StyleSheet.create({
//   body: {
//     // flex: 1, 
//     //alignItems: 'center', 
//     justifyContent: 'center' ,
//     margin: 10,
//     backgroundColor: "#F1efef"
// },
// text: {
//   fontSize:30,
//   fontWeight: "bold",
//   margin: 10,
//   color:"black"
// },
// button:{
//   //width: 354,
//   //height: 67,
//   //backgroundColor: "#007FFF",
//   //alignItems: "center",
//   //borderRadius: 6,
//   //margin: 5
// },
// help_text_button:{
//   color: "#FF9001",
//   fontSize: 25,
//   //fontFamily: "Segoe UI"
//   //justifyContent: "center",
//   //alignItems: "center",
//   margin: 10,
//   fontWeight: "bold"
// }
// })