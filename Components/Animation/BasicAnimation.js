import React, {useState, useEffect} from 'react';
import {View, Animated, StyleSheet} from 'react-native';

const BasicAnimation = () => {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    fadeIn(); // Trigger the animation when the component is mounted
  }, []); // Empty dependency array ensures it runs only once when mounted

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, {opacity: fadeAnim}]} />
      <Animated.View style={[styles.box, {opacity: fadeAnim}]} />
      <Animated.View style={[styles.box, {opacity: fadeAnim}]} />
      <Animated.View style={[styles.box, {opacity: fadeAnim}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    margin: 10,
  },
});

export default BasicAnimation;
