

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
import { MyTabs } from './Navigation/MainNavigation';
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
      <GestureHandlerRootView>
    <SafeAreaView >
      <View style={{width:"100%",height:"100%"}}>
      <MyTabs />
      </View>
    </SafeAreaView>
    </GestureHandlerRootView>
    </NavigationContainer>
  );
}

export default App;
