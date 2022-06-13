import * as React from 'react';
import { View, Text, StyleSheet, Pressable, Alert, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import additional from "./Add/AddBudget";
//import styles from './components/styles';
import styles from "./Style";


function Budgets({navigation}) {
  const onPressAdd = () => {
    navigation.navigate("Add");
    //Alert.alert("button is clicked");
  }
    return (
      // <ScrollView>
      <View style={styles.body}>
        
        <Image style={styles.image}
        source={require("./images/createBudget.png")}/>
        <Text style={styles.text_heading}>Create Budget</Text>
        <Text style={styles.text_subheader}>Budgeting is the first step towards financial freedom.</Text>
        <Text style={styles.text_subheader}>Start Budgeting</Text>
        <Pressable onPress={onPressAdd} style={styles.budget_button}>
          <Text style={styles.text_button}>
            +
          </Text>
        </Pressable>
        
        
      </View>
      
    );
  }

  
  const Stack = createNativeStackNavigator();

  export default function BudgetAdd(){
    return(
      <Stack.Navigator>
        <Stack.Screen name='Add Budget' component={Budgets} options={{headerShown: false}}/>
        <Stack.Screen name='Add' component={additional}/>
      </Stack.Navigator>
    )
    
  }

  
