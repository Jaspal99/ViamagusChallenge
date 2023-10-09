import {Image, Text, View} from 'react-native';
import GlobalStyle from '../../assets/Styles/Global';
import Button from '../../Components/Button/Button';
import CounterList from '../../Components/CounterList/CounterList';

export default function Prediction(props) {
  return (
    <View
      style={[
        GlobalStyle.backgroundWhite,
        {
          padding: 16,
          margin: 10,
          justifyContent: 'space-between',
          alignContent: 'space-between',
        },
      ]}>
      <View>
        <Text
          style={{
            color: 'black',
            fontFamily: 'Montserrat',
            fontSize: 16,
            fontWeight: '600',
          }}>
          Your Prediction is {props?.val}
        </Text>
        <Text
          style={{
            color: '#727682',
            fontFamily: 'Montserrat',
            fontSize: 12,
            fontWeight: '600',
          }}>
          Entry tickets
        </Text>
      </View>
      <View style={{width: '100%', height: 200, padding: 10, margin: 10}}>
        <CounterList />
      </View>
      <Text>You can win</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 10,
        }}>
        <Text style={{color: '#03A67F'}}>$2000</Text>
        <Text>
          Total <Image source={require('../../assets/images/coin.png')} /> 5
        </Text>
      </View>
      <Button title="Submit my prediction" />
    </View>
  );
}
