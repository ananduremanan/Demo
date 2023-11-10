import { Text, SafeAreaView, StyleSheet, Pressable } from 'react-native';
import Ripple from 'react-native-material-ripple';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Ripple rippleCentered={true} rippleDuration={300} rippleColor={"rgb(255, 255, 255)"} >
        <Pressable style={styles.button}><Text style={{color: "#fff"}}>touch me</Text></Pressable>
      </Ripple>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    alignItems: 'center'
  },
  button: {
    backgroundColor: "#3f5caa",
    padding: 10,
    borderRadius: 15
  }
});
