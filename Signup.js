import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Platform,
  Text,
} from "react-native";

function Signup() {
  const [Fname, setfname] = useState("");
  const [Lname, setlname] = useState("");
  const [Uname, setUname] = useState("");
  const [Pword, setPname] = useState("");

  function InsertRecord() {
    var Firstname = Fname;
    var Lastname = Lname;
    var Username = Uname;
    var Password = Pword;

    /**Validations */
    if (
      (Firstname.length == 0) |
      (Lastname.length == 0) |
      (Username == 0) |
      (Password == 0)
    ) {
      alert("Required field is missing.");
    } else if (Password.length < 8) {
      alert("Password must have a minimum of 8 characters!");
    } else if (!/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(Password)) {
      alert("Password must have atleast 1 special character.");
    } else if (/[ ]/.test(Password)) {
      alert("Don't include space in password.");
    } else {
      /**
       * Fetch API requires a URL parameter such as API URL, method, headers and Data
       */
      var InsertAPIURL =
        "http://192.168.1.55/SampleProject/api/insert.php"; /**URL of the API we created, named insert.php. It 0is saved in our local system so this is the URL */

      var headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      /**
       * Data object contains the user data entered
       */
      var Data = {
        /**variable in API : Variable of data in this file */
        FirstName: Firstname,
        LastName: Lastname,
        Username: Username,
        Password: Password,
      };

      fetch(InsertAPIURL, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(Data),
      })
        .then((response) =>
          response.json()
        ) /**check response type of API (CHECK OUTPUT OF DATA IS IN JSON) */
        .then(() => {
          alert(
            "Registration Successful."
          ); /**If data is in JSON => Display alert msg */
          /**Navigate to anywhere */
        })
        .catch((error) => {
          alert(error);
        });
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={{ fontSize: 30 }}>Create Account</Text>
      </View>
      <View style={styles.inputStyle}>
        <TextInput
          style={styles.text}
          placeholder="First name"
          onChangeText={(anytxt) => setfname(anytxt)}
        />
        <TextInput
          style={styles.text}
          placeholder="Last name"
          onChangeText={(anytxt) => setlname(anytxt)}
        />
        <TextInput
          style={styles.text}
          placeholder="Username"
          onChangeText={(anytxt) => setUname(anytxt)}
        />
        <TextInput
          style={styles.text}
          placeholder="Password"
          onChangeText={(anytxt) => setPname(anytxt)}
        />
      </View>
      <View style={{ margin: 30 }}>
        <Button
          style={styles.btnSave}
          title="Save"
          color={"green"}
          onPress={InsertRecord}
        />
      </View>
    </View>
  );
}

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    margin: 20,
    borderRadius: 20,
    flexDirection: "column",
    justifyContent: "center",
  },
  inputStyle: {
    margin: 5,
    backgroundColor: "#ffff",
    borderRadius: 5,
  },
  text: {
    padding: 5,
    borderWidth: 2,
    margin: 3,
    marginBottom: 20,
    borderRadius: 5,
    borderColor: "#000",
    width: "70%",
    alignSelf: "center",
  },
  btnSave: {
    alignSelf: "center",
  },
  heading: {
    alignSelf: "center",
    margin: 20,
  },
});
