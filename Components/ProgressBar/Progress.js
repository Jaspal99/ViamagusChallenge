import React from 'react';
import {View, StyleSheet} from 'react-native';

const ProgressBar = ({percentage}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.bar, {width: `${percentage}%`}]} />
    </View>
  );
};

const Progress = () => {
  return (
    <View style={styles.appContainer}>
      <ProgressBar percentage={65} />
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  container: {
    width: '100%',
    height: 10,
    backgroundColor: '#2DABAD',
    marginBottom: 10,
    borderRadius: 100,
  },
  bar: {
    height: '100%',
    backgroundColor: '#FE4190',
    borderRadius: 100,
    borderTopEndRadius: 0,
    borderEndEndRadius: 0,
    borderBottomRightRadius: 0,
  },
});

export default Progress;
