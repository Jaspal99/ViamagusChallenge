

import 'react-native-gesture-handler';
import React, { useCallback, useRef } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import Home from './Screens/Home/Home';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet,{BottomSheetRefProps} from './Components/BottomSheet/Bottomsheet';
import Profile from './Screens/Profile/Profile';
import { NavigationContainer } from '@react-navigation/native';
function App() {
  const ref = useRef<BottomSheetRefProps>(null);

  const onPress = useCallback(() => {
    const isActive = ref?.current?.isActive();
    if (isActive) {
      ref?.current?.scrollTo(0);
    } else {
      ref?.current?.scrollTo(-200);
    }
  }, []);
  return (
    <NavigationContainer>
    <GestureHandlerRootView style={{ flex: 1 }}>
    <SafeAreaView >
      {/* <Home /> */}
      <Profile />
      {/* <View style={style.container}>
        <StatusBar style="dark" />
        <View>
        <TouchableOpacity style={style.button} onPress={onPress} />
        </View>
        <BottomSheet ref={ref}>
          <View style={{ flex: 1, backgroundColor: 'orange' }} />
        </BottomSheet>
      </View> */}
    </SafeAreaView>
    </GestureHandlerRootView>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 50,
    borderRadius: 25,
    aspectRatio: 1,
    backgroundColor: 'orange',
    opacity: 0.6,
  },
});

export default App;
