import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import Welcome from './src/screens/Welcome';

const App = () => {
  return (
    <SafeAreaView  >
        <View className=' h-full' >
          <Welcome />
        </View>  
    </SafeAreaView>
    

  );
}

const styles = StyleSheet.create({
 
})

export default App;
