import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import Awesome from "react-native-vector-icons/FontAwesome5";

function About({ navigation }) {

  /** Variable in useState */
  var [Username, setFindUser] = useState("");
  var [Fname, setfname] = useState("");
  var [Lname, setlname] = useState("");
  var [Uname, setUname] = useState("");
  var [Pword, setPname] = useState("");

  /**function that is called when FIND button is pressed */
  const searchUser = () => {
    /**Passing the Username entered by user to findUser variable */
    var findUser = Username;

    /**validations */
    if (findUser.length == 0) {
      alert("Required filed is missing.");
    } else {
      var SearchAPIURL = "http://192.168.1.55/SampleProject/api/search.php";

      var header = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };

      var Data = {
        FindUser: findUser,
      };

      fetch(SearchAPIURL, {
        method: "POST",
        headers: header,
        body: JSON.stringify(Data),
      })
        .then((response) => response.json())
        /**Getting the data from search API */
        .then((response) => {
          setfname(response[0].FirstName);
          setlname(response[0].LastName);
          setUname(response[0].Username);
          setPname(response[0].Password);
        })
        .catch((error) => {
          alert("Error" + error);
        });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.text}
          placeholder="Type user's name"
          onChangeText={(anytext) => setFindUser(anytext)}
        />
        <TouchableOpacity style={styles.findbtn} onPress={searchUser}>
          <Text style={{ color: "#fff" }}>
            <Awesome name="search" color={"#fff"} />
            Find user
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={{ textDecorationLine: "underline", padding: 10 }}>
            {" "}
            Signup{" "}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ResultContainer}>
        <Text style={{ fontSize: 25, alignSelf: "center", margin: 5 }}>
          User Data
        </Text>
        <TextInput style={styles.text} value={Fname} />
        <TextInput style={styles.text} value={Lname} />
        <TextInput style={styles.text} value={Uname} />
        <TextInput style={styles.text} value={Pword} />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity
          style={styles.updatebtn}
          onPress={() => alert("Update")}
        >
          <Text> Update </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.delbtn}>
          <Text> Delete </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },
  findbtn: {
    alignItems: "center",
    backgroundColor: "orangered",
    padding: 10,
    borderRadius: 25,
  },
  text: {
    padding: 5,
    borderWidth: 2,
    margin: 3,
    marginBottom: 20,
    borderRadius: 10,
    borderColor: "#000",
    width: "100%",
    alignSelf: "center",
  },
  searchContainer: {
    margin: 20,
    paddingTop: 20,
  },
  ResultContainer: {
    margin: 20,
  },
  updatebtn: {
    alignItems: "center",
    backgroundColor: "#32cd32",
    padding: 10,
    borderRadius: 25,
    width: "30%",
  },
  delbtn: {
    alignItems: "center",
    backgroundColor: "#cd5c5c",
    padding: 10,
    borderRadius: 25,
    width: "30%",
  },
});
