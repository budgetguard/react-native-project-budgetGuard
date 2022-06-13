import * as React from 'react';
import { View, Text, StyleSheet, Pressable, Alert, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import pinahiram from "../Add/AddLent";
import styles from '../Style';

function Lent({navigation}) {
  const onPressAddLents = () => {
    navigation.navigate("New Lent");
    //Alert.alert("button is clicked");
  }
    return (
      <View style={styles.body}>
        <Image style={styles.L_image}
        source={require("../images/lent.png")}/>
        <Text style={styles.text_heading}>Track what you lent and borrowed</Text>
        <Text style={styles.text_subheader}>Manage all your Debts here</Text>
        <Pressable
        onPress={onPressAddLents}
        // style = {({pressed})=>({backgroundColor: pressed ? "#ddd" : "#0f0"})}
        style={styles.l_button}
        ><Text style={styles.text_button}>+</Text></Pressable>
      </View>
    );
  }

    const Stack = createNativeStackNavigator();
  export default function Lents(){
    return(
      <Stack.Navigator>
        <Stack.Screen  name='Pahiram' component={Lent} options={{headerShown: false}}/>
        <Stack.Screen  name='New Lent' component={pinahiram} />
      </Stack.Navigator>
    )
  }

