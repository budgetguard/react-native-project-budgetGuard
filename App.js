/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "./components/Home Screen";
import Budgets from "./components/Budget";
import Debts from "./components/debts";
import Goals from "./components/goals";
import Helps from "./components/help";
import Records from "./components/records";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';


//const Drawer=createDrawerNavigator();


const Tab=createMaterialTopTabNavigator();


function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({route}) => ({
          tabBarStyle: {backgroundColor:"#00B2CA",  },
          tabBarLabelStyle: { fontSize: 12 },
          tabBarActiveTintColor: "white",
          tabBarIcon:({focused, size, color})=>{

            let iconName;
            
            if(route.name==="Home"){
              iconName="home";
              size = focused ? 15:20;
              color = focused ? "white" : "white";
            }
          
            else if(route.name==="Debt"){
              iconName="coins";
              size = focused ? 15:20;
              color = focused ? "gold" : "white";
            }
          
            else if(route.name==="Goal"){
              iconName="clipboard-list";
              size = focused ? 15:20;
              color = focused ? "white" : "white";
            }
          
            else if(route.name==="Budget"){
              iconName="file-invoice-dollar";
              size = focused ? 15:20;
              color = focused ? "white" : "white";
            }
          
            else if(route.name==="Record"){
              iconName="list";
              size = focused ? 15:20;
              color = focused ? "white" : "white";
            }
          
            else if(route.name==="Help"){
              iconName="question-circle";
              size = focused ? 15:20;
              color = focused ? "white" : "white";
            }
          
            return(
            <FontAwesome5 name={iconName} size={size} color={color}/>
          )
          
        }
      })}
      
      activeColor="#f0edf6"
      inactiveColor='white'
      barStyle={{backgroundColor: "black"}}
      >

        <Tab.Screen name="Home" 
        component={HomeScreen} 
        />
        <Tab.Screen name="Budget" component={Budgets} 
        />
        <Tab.Screen name="Debt" component={Debts} 
        />
        <Tab.Screen name="Goal" component={Goals} 
        />
        <Tab.Screen name="Record" component={Records} 
        />
        <Tab.Screen name="Help" component={Helps} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



export default App;
