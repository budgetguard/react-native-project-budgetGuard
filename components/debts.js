import * as React from 'react';
import Lent from "./Debts/lent";
import Borrow from './Debts/borrowed';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Tab=createMaterialBottomTabNavigator();
export default function Debts() {
    return (
       <Tab.Navigator
       screenOptions={({route}) => ({
        tabBarStyle: {backgroundColor:"#00B2CA",  },
        tabBarLabelStyle: { fontSize: 12 },
        tabBarActiveTintColor: "white",
        tabBarIcon:({focused, size, color})=>{

          let iconName;
          
          if(route.name==="Lents"){
            iconName="hand-holding-usd";
            size = focused ? 20:15;
            color = focused ? "white" : "grey";
          }
        
          else if(route.name==="Borrowed"){
            iconName="donate";
            size = focused ? 20:15;
            color = focused ? "white" : "grey";
          }
        
          
        
          return(
          <FontAwesome5 name={iconName} size={size} color={color}/>
        )
        
      }
    })}
    
    activeColor="#f0edf6"
    inactiveColor='white'
    barStyle={{backgroundColor: "black"}}
    //    barStyle={{backgroundColor: "#17224D"}}
   inactiveColor= "grey"
  >
         <Tab.Screen name='Lents' component={Lent}/>
         <Tab.Screen name='Borrowed' component={Borrow}/>
       </Tab.Navigator>
      
    );
  }

  