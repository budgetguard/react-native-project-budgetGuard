import * as React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Modal } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
//import styles from './components/styles';

export default function Helps() {
    return (
      <View style={styles.body}>
          <ScrollView>
                <Text style={styles.text_heading}>All about DEBTS</Text>
                <Text style={styles.text_subheader}>The "Debts" feature is intended to record simple 
personal loans. It cannot be used for managing bank
loans, credit cards,  overdraft accounts, etc.
</Text>
<Text style={styles.text_subheader}>1. Go to the Main Menu > Debts. A new Debt is 
added by tapping on the (+) button.</Text>
<Text style={styles.text_subheader}>2. Select a proper type (I Lent / I Borrowed). If you 
have borrowed money you would need to also choose 
the matching debt type (I borrowed from someone /
Loans from banks, Credit card).
</Text>
<Text style={styles.text_subheader}>When adding debt to Budget Guard you can choose from
existing records you already have in the app ('YES, 
SELECT RECORD' button) and you will get redirected to
the 'Records' list, or you can create a record from 
scratch ('NO, SKIP' button).  
</Text>
<Text style={styles.text_subheader}>3. Fill in all necessary information. Don't forget to select 
the expected due date too, as the application will 
monitor this time and remind you when your debt is 
due.  By creating the new Debt, a Record is generated
in the Overview and is shown by tapping on the debt
banner.
</Text>
<Text style={styles.text_subheader}>4. If the Debt was partly or fully paid back, click on the 
'Add Record' to add this payment. You can choose either
from the existing records ('Select Record') or create a
new record manually ('Create new Record'). The screen 
with record details will appear. 

</Text>
<Text style={styles.text_subheader}>5. When you have all details filled in, click on the 
'confirm icon' in the right upper corner. Your debt will 
show in the 'Active' section if it hasn't been repaid yet  
You can close the debt anytime if you decide to, just 
click on the 'three dots' icon in the right upper corner 
and select 'Close'.
</Text>

                
            </ScrollView>
      </View>
    );
  }

  const styles = StyleSheet.create({
    body: {
        // flex: 1, 
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
      width: 354,
      height: 67,
      backgroundColor: "#007FFF",
      alignItems: "center",
      borderRadius: 6,
      margin: 15
    },
    text_button:{
      color: "#F5FAFA",
      fontSize: 25,
      //fontFamily: "Segoe UI"
      justifyContent: "center",
      alignItems: "center",
      margin: 20,
      fontWeight: "bold"
    }
    })
