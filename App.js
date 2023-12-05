import 'react-native-gesture-handler';
import React, { useEffect } from "react"
import { StyleSheet, SafeAreaView } from "react-native";
import Root from "./src/root/root";
import './i18n';
import SplashScreen from 'react-native-splash-screen'

const App = () => {
  useEffect(() => { SplashScreen.hide() }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Root />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor:"black"
  },
});

export default App;

