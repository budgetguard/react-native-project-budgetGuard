import * as React from 'react';
import { View, Text,  Pressable, Alert, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import styles from './components/styles';
import kamit from "../Add/AddReached";
import styles from '../Style'

function Reach({navigation}) {
  const onPressHa = () => {
    navigation.navigate("Reached Goal");
    //Alert.alert("button is clicked");
  }
    return (
      <View style={styles.body}>
        <Image style={styles.reached_image}
        source={require("../images/reached.png")}/>
        <Text style={styles.text_heading}>Save for your Goals</Text>
        <Text style={styles.text_subheader}>Manage all your goals here. Tap the plus button to add the first one.</Text>
        <Pressable
        onPress={onPressHa}
        // style = {({pressed})=>({backgroundColor: pressed ? "#ddd" : "#0f0"})}
        style={styles.p_button}
        ><Text style={styles.text_button}>+</Text></Pressable>
      </View>
    );
  }
  const Stack = createNativeStackNavigator();
  export default function Nakamit(){
    return(
      <Stack.Navigator>
        <Stack.Screen name="komporme" component={Reach} options={{headerShown: false}}/>
        <Stack.Screen name="Reached Goal" component={kamit}/>
      </Stack.Navigator>
    )
  }


