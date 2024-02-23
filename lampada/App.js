import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <p></p>
      <p>João Vitor Castro Viana Marques</p>
      <center>
      <Text>Portifólio</Text>
      <p></p>
      </center>
      <Image
      style={styles.logo}

      source={{
        uri: "https://i.pinimg.com/originals/86/f0/7b/86f07b3af5597023a031511783402ead.gif",

      }}
    />
     <StatusBar style="auto" />
      
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
