import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Active from './Goals/active';
import Pause from './Goals/paused';
import Reach from './Goals/reached';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";


const Tab=createMaterialBottomTabNavigator();

export default function Goals() {
    return (
      <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {backgroundColor:"#00B2CA",  },
        tabBarLabelStyle: { fontSize: 12 },
        tabBarActiveTintColor: "white",
        tabBarIcon:({focused, size, color})=>{

          let iconName;
          
          if(route.name==="Active"){
            iconName="chart-line";
            size = focused ? 20:15;
            color = focused ? "white" : "grey";
          }
        
          else if(route.name==="Paused"){
            iconName="pause";
            size = focused ? 20:15;
            color = focused ? "white" : "grey";
          }
          else if(route.name==="Reached"){
            iconName="bullseye";
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
  //     barStyle={{backgroundColor: "#17224D"}}
  //     activeColor="#f0edf6"
  // inactiveColor="white"
      
      >
         <Tab.Screen name='Active' component={Active}
         />
         <Tab.Screen name='Paused' component={Pause}/>
         <Tab.Screen name='Reached' component={Reach}/>
       </Tab.Navigator>
    );
  }
