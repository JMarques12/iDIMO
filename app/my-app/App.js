import { useState } from 'react';
import { StyleSheet, Text, View, Switch, Image } from 'react-native';

const icon = require('./assets/icon.png');

export default function App() {
  const [habilitado, setHabilitado] = new useState(false);

  const habilitar = () => {
    setHabilitado(!habilitado);
  }

  return (
    <View style={styles.container}>
      <Image
        source={icon}
        style={styles.icon}
      />
      <Switch
        value={habilitado}
        onValueChange={habilitar}
      />

      <Image
        source={{
          uri: (habilitado)
            ? "https://i.pinimg.com/564x/7b/9c/3f/7b9c3fd5c44bcafeb6a828913659ddcc.jpg"
            : "https://i.pinimg.com/564x/e0/71/2f/e0712fe351e72ea62f2c44d3eff3c538.jpg"
        }}
        style={styles.lampada}
      />

      {/* {
        (habilitado) 
        ?
        <Image 
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/702/702797.png"
          }}
          style={styles.lampada}
        />
        :
        <Image 
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/702/702814.png"
          }}
          style={styles.lampada}
        />
      } */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '32px'
  },
  icon: {
    width: '686px',
    height: '386px'
  },
  lampada: {
    width: '200px',
    height: '200px'
  }
});