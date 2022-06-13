import * as React from 'react';
import { View, Text, Pressable, Alert, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import aktib from "../Add/AddActive";
import styles from '../Style'

function Active({navigation}) {
  const onPressBagongGinagawa = () => {
    navigation.navigate("Active Goal");
    //Alert.alert("button is clicked");
  }
    return (
      <View style={styles.body}>
        <Image style={styles.a_image}
        source={require("../images/active.png")}/>
        <Text style={styles.text_heading}>Make your Goals</Text>
        <Text style={styles.text_subheader}>A little progress each day adds up to big results.</Text>
        <Text style={styles.text_subheader}>Manage your goals here.</Text>
        <Pressable
        onPress={onPressBagongGinagawa}
        // style = {({pressed})=>({backgroundColor: pressed ? "#ddd" : "#0f0"})}
        style={styles.a_button}
        ><Text style={styles.text_button}>+</Text></Pressable>
      </View>
    );
  }
const Stack = createNativeStackNavigator();

export default function Ginagawa(){
  return(
    <Stack.Navigator>
      <Stack.Screen name='daggun' component={Active} options={{headerShown: false}}/>
      <Stack.Screen name='Active Goal' component={aktib} />
    </Stack.Navigator>
  )
}
  