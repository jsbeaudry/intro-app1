import React from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  Dimensions,
  Text,
  View,
  Image
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class Intro1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          backgroundColor: "transparent",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <View style={{ flex: 1 }}>
          <Ionicons
            style={{ alignSelf: "center", marginTop: 150 }}
            name={Platform.OS == "ios" ? "ios-images" : "md-images"}
            size={150}
            color="#fff"
          />
          <Text
            style={{
              alignSelf: "center",
              marginTop: 70,
              color: "#fff",
              fontFamily: Platform.OS == "ios" ? "Helvetica" : "Roboto",
              fontSize: 30,
              marginBottom: 30,
              fontWeight: "500"
            }}
          >
            Create album
          </Text>

          <Text
            style={{
              alignSelf: "center",
              width: 295,
              height: 88,
              color: "#fff",
              fontFamily: Platform.OS == "ios" ? "Helvetica" : "Roboto",
              fontSize: 12,
              fontWeight: "400",
              lineHeight: 22
            }}
          >
            Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed
            sapien metus, scelerisque nec pharetra id, tempor a tortor.
            Pellentesque non dignissim neque.
          </Text>
        </View>
      </View>
    );
  }
}
