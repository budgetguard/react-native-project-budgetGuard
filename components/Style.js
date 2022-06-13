import * as React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    
        body: {
            flex: 1, 
            alignItems: 'center', 
            justifyContent: 'center' ,
            margin: 10,
            backgroundColor: "#F1efef"
        },
        text: {
          fontSize:30,
          fontWeight: "bold",
          margin: 10,
          color:"black"
      },
        text_heading: {
            fontSize:40,
            // fontWeight: "",
            margin: 10,
            color:"black",
            justifyContent: "center",
            alignItems: "center"
        },
        text_subheader: {
          fontSize:20,
          // fontWeight: "",
          margin: 10,
          color:"black",
          justifyContent: "center",
            alignItems: "center"
            
      },
        button:{
          width: 68,
          height: 66,
          backgroundColor: "#007FFF",
          alignItems: "center",
          borderRadius: 50,
          left: 170,
          top: 40
    
        },
        text_button:{
          color: "#F5FAFA",
          fontSize: 30,
          //fontFamily: "Segoe UI"
          justifyContent: "center",
          alignItems: "center",
          margin: 15,
          fontWeight: "bold"
        },
        image: {
          width:193,
          height: 258
        },

        //help
        help_text_button:{
            color: "#FF9001",
            fontSize: 25,
            //fontFamily: "Segoe UI"
            //justifyContent: "center",
            //alignItems: "center",
            margin: 10,
            fontWeight: "bold"
        },
        help_body: {
            justifyContent: 'center' ,
            margin: 10,
            backgroundColor: "#F1efef"
        },
        
        //homescreen style
        hs_button:{
            width: 200,
            height: 60,
            backgroundColor: "#007FFF",
            alignItems: "center",
            borderRadius: 6,
            margin: 15
          },
          hs_text_button:{
            color: "#F5FAFA",
            fontSize: 20,
            //fontFamily: "Segoe UI"
            justifyContent: "center",
            alignItems: "center",
            margin: 15,
            fontWeight: "bold"
          },
          hs_text_subheader: {
            fontSize:20,
            // fontWeight: "",
            margin: 10,
            color:"black",
            justifyContent: "center",
              alignItems: "center",
              lineHeight: 30,
          },
          budget_button:{
            width: 68,
            height: 66,
            backgroundColor: "#007FFF",
            alignItems: "center",
            borderRadius: 50,
            left: 170,
            top: 100
      
          },
          //records
          r_button:{
            width: 68,
            height: 66,
            backgroundColor: "#007FFF",
            alignItems: "center",
            borderRadius: 50,
            left: 170,
            top: 200
        
          },

          //GOAL TAB
          //active tab
          a_button:{
            width: 68,
            height: 66,
            backgroundColor: "#007FFF",
            alignItems: "center",
            borderRadius: 50,
            left: 170,
            top: 140
        
          },
          a_image: {
            width:277,
            height: 206
          },

          //paused tab
          p_button:{
            width: 68,
            height: 66,
            backgroundColor: "#007FFF",
            alignItems: "center",
            borderRadius: 50,
            left: 170,
            top: 150
        
          },
          p_image: {
            width:388,
            height: 206
          },

          //reached tab
          reached_image: {
            width:368,
            height: 206
          },

          //DEBTS
          //lent tab
          L_image: {
            width:354,
            height: 278
          },

          l_button:{
        width: 68,
        height: 66,
        backgroundColor: "#007FFF",
        alignItems: "center",
        borderRadius: 50,
        left: 150,
        top: 100
          },

          //Add button Screens
          add_body: {
             flex: 1, 
            //alignItems: 'center', 
            justifyContent: 'center' ,
            //margin: 10,
            backgroundColor: "#F1efef"
        },
          add_text: {
            fontSize:15,
            fontWeight: "bold",
            margin: 10,
            color:"black"
          },
          add_textInput:{
            borderColor:'black',
            borderWidth: 1,
            padding: 10,
            margin: 10,
            width: 400
          
          },
          save_button:{
            width: 200,
            //padding: 20,
            height: 56,
            backgroundColor: "#007FFF",
            alignItems: "center",
            borderRadius: 50,
            left: 100,
            justifyContent: "center"
        
          },
            save_text_button:{
              color: "#F5FAFA",
              fontSize: 20,
              //fontFamily: "Segoe UI"
              justifyContent: "center",
              alignItems: "center",
              margin: 15,
              fontWeight: "bold"
            },
})