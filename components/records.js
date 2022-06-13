import * as React from 'react';
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import styles from './components/styles';
import record from "./Add/AddRecords";
import styles from './Style'

function Records({navigation}) {
  const onPressHa = () => {
    navigation.navigate("New Record");
    //Alert.alert("button is clicked");
  }
    return (
      <View style={styles.body}>
         <Text style={styles.text_heading}>List of Records</Text>
        <Text style={styles.text_subheader}>Recorded Incomes and Expenses will show up here.</Text>
        <Text style={styles.text_subheader}>Create the first one.</Text>
        <Pressable
        onPress={onPressHa}
        // style = {({pressed})=>({backgroundColor: pressed ? "#ddd" : "#0f0"})}
        style={styles.r_button}
        ><Text style={styles.text_button}>+</Text></Pressable>
      </View>
    );
  }

  const Stack = createNativeStackNavigator ();
  export default function Rec() {
    return(
      <Stack.Navigator>
        <Stack.Screen name='reco' component={Records} options={{headerShown: false}}/>
        <Stack.Screen name='New Record' component={record}/>
      </Stack.Navigator>
    )

  }

