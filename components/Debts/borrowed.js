import * as React from 'react';
import { View, Text, StyleSheet, Pressable, Alert, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import pinautang from "../Add/AddBorrowed";
import styles from '../Style'
//import TabBarTop from '@react-navigation/material-top-tabs/lib/typescript/src/views/MaterialTopTabBar';

//import styles from './components/styles';

function Borrow({navigation}) {
  const onPressNewUtang = () => {
    navigation.navigate("New Borrow");
    //Alert.alert("button is clicked");
  }
    return (
      <View style={styles.body}>
        <Image style={styles.L_image}
        source={require("../images/borrowed.png")}/>
        <Text style={styles.text_heading}>Track Your Debts</Text>
        <Text style={styles.text_subheader}>If you owe someone money, get on a plan and pay them.Start your plan by listing them.</Text>
        <Pressable
        onPress={onPressNewUtang}
        // style = {({pressed})=>({backgroundColor: pressed ? "#ddd" : "#0f0"})}
        style={styles.l_button}
        ><Text style={styles.text_button}>+</Text></Pressable>
      </View>
    );
  }
const Stack=createNativeStackNavigator();
  export default function Inutang(){
    return(
      <Stack.Navigator>
        <Stack.Screen name='hinutang' component={Borrow} options={{headerShown: false}}/>
        <Stack.Screen name='New Borrow' component={pinautang}/>
      </Stack.Navigator>
    )
  }


