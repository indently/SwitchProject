import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';


export default function App() {
  const [isEnabled, setIsEnabled] = useState(true);
  const [text, setText] = useState('Press the switch!');


  const toggleSwitch = () => {

    if (isEnabled) {
      setText('Inactive');
    } else {
      setText('Active');
    }

    setIsEnabled(previousState => !previousState);
  }

  return (
    <View style={styles.container}>
      <Text style={{ margin: 20, fontWeight: 'bold' }}>{text}</Text>
      <Switch
        trackColor={{ false: '#767577', true: 'tomato' }}
        thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
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
