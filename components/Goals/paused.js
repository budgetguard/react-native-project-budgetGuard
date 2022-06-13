import * as React from 'react';
import { View, Text, StyleSheet, Pressable, Alert, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import styles from './components/styles';
import pausee from "../Add/AddPaused";
import styles from '../Style';

function Pause({navigation}) {
  const onPressHa = () => {
    navigation.navigate("Paused Goal");
    //Alert.alert("button is clicked");
  }
    return (
      <View style={styles.body}>
        <Image style={styles.p_image}
        source={require("../images/paused.png")}/>
        <Text style={styles.text_heading}>Save for your Goals</Text>
        <Text style={styles.text_subheader}>Manage all your goals here. Tap the plus button to add the first one</Text>
      
        <Pressable
        onPress={onPressHa}
        // style = {({pressed})=>({backgroundColor: pressed ? "#ddd" : "#0f0"})}
        style={styles.p_button}
        ><Text style={styles.text_button}>+</Text></Pressable>
      </View>
    );
  }

  const Stack = createNativeStackNavigator();

export default function Hinto(){
  return(
    <Stack.Navigator>
      <Stack.Screen name='Sobit' component={Pause} options={{headerShown: false}}/>
      <Stack.Screen name='Paused Goal' component={pausee}/>
    </Stack.Navigator>
  )
}

  
