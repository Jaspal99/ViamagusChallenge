import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
// import { opacity } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

const CounterList = () => {
  const [currentIndex, setCurrentIndex] = useState(27);
  const [prevOp, setPrevOp] = useState(1);
  const data = Array.from({length: 101}, (_, i) => i); // Create an array from 0 to 100

  const renderItem = ({item, index}) => {
    // Calculate opacity based on the distance from the current index
    const opacity = Math.abs(index - currentIndex) === 1 ? 1 : 0.5 * prevOp;
    // setPrevOp(opacity);
    return (
      <View
        style={[
          styles.item,
          {opacity},
          {
            height: 50,
            backgroundColor: index === currentIndex + 1 ? '#efeaf7' : 'white',
            color: index === currentIndex + 1 ? '#6231AD' : 'black',
          },
        ]}>
        <Text
          style={[
            styles.text,
            {color: index === currentIndex + 1 ? '#6231AD' : 'black'},
          ]}>
          {item}
        </Text>
      </View>
    );
  };

  const handleScroll = event => {
    const {contentOffset} = event.nativeEvent;
    const index = Math.round(contentOffset.y / 50); // Assuming each item has a height of 50

    if (index !== currentIndex) {
      setCurrentIndex(index);
    }
  };

  return (
    // <View style={{height: 100, width: '100%'}}>
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.toString()}
      onScroll={handleScroll}
    />
    // </View>
  );
};

const styles = StyleSheet.create({
  item: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    // borderBottomWidth: 1,
    // borderBottomColor: 'gray',
  },
  text: {
    fontSize: 24,
  },
});

export default CounterList;
