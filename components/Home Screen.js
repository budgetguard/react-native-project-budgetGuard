import * as React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScrollView } from 'react-native-gesture-handler';
//import styles from './components/styles';
import styles from './Style'

export default function HomeScreen({navigation}) {

    const onPressHandler = () => {
      navigation.navigate("Budget");
    }
  
    return (
      <ScrollView>
        <View style={styles.body}>
          <Image style={styles.image} source={require("./images/home.png")}/>
            <Text style={styles.text_heading}>Budget Guard</Text>
            <Text style={styles.hs_text_subheader}>We want to help you know exactly where your money is
              being spent, and how much money you've coming in. Knowing where every perso is being
              spent is a great first step to starting your savings, getting out of debt or preparing for retirement. Our Budget Guard can help.</Text>
            
            <Pressable onPress={onPressHandler}
              // style = {({pressed})=>({backgroundColor: pressed ? "#ddd" : "#0f0"})}
              style={styles.hs_button}
            >
              <Text style={styles.hs_text_button}>Create A Budget</Text>
            </Pressable>
        </View>
      </ScrollView>
    );
  }

  
