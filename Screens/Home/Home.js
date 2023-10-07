import {Text, View, Image, Dimensions} from 'react-native';
import GlobalStyle from '../../assets/Styles/Global';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faChartArea,
  faChartBar,
  faChartLine,
  faCircleInfo,
  faClockFour,
  faCoins,
  faInfo,
  faInfoCircle,
  faPerson,
  faVectorSquare,
} from '@fortawesome/free-solid-svg-icons';
import {faMugSaucer} from '@fortawesome/free-solid-svg-icons/faMugSaucer';
import {faClock} from '@fortawesome/free-regular-svg-icons';
import {faBitcoin, faViacoin} from '@fortawesome/free-brands-svg-icons';
import Button from '../../Components/Button/Button';
import style from './Style';
import Progress from '../../Components/ProgressBar/Progress';
import {Modalize} from 'react-native-modalize';
import {useRef, useState} from 'react';
import Prediction from '../Prediction/Prediction';
// import {Image} from 'react-native-svg';
export default function Home() {
  console.log('Home');
  const modalizeRef = useRef(null);
  const screenHeight = Dimensions.get('window').height;
  const openBottomSheet = () => {
    if (modalizeRef.current) {
      modalizeRef.current.open();
    }
  };
  const [value, setValue] = useState('');

  const handlePredict = val => {
    setValue(val);
    openBottomSheet();
  };

  return (
    <View style={GlobalStyle.screenContainer}>
      <View>
        <Text style={GlobalStyle.heading}>Today's Game</Text>
      </View>
      <View
        style={{
          padding: 15,
          backgroundColor: 'rgba(98, 49, 173, 1)',
          height: 116,
          width: '100%',
        }}>
        <View
          style={{
            margin: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            alignContent: 'center',
            // justifyContent: 'center',
          }}>
          <Text style={{color: '#D2BAF5', fontSize: 12}}>
            UNDER OR OVER{' '}
            {/* <FontAwesomeIcon color="#D2BAF5" size={12} icon={faInfoCircle} />{' '} */}
            <Image source={require('../../assets/images/Info.png')} />
          </Text>
          <View
            style={{
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#D2BAF5',
                fontSize: 12,
              }}>
              Starting in{' '}
              <FontAwesomeIcon size={12} color="#D2BAF5" icon={faClockFour} />{' '}
              03:23:12
            </Text>
          </View>
        </View>
        <View style={{margin: 10, fontWeight: 500, lineheight: 10}}>
          <Text style={{color: '#D2BAF5', fontWeight: 500}}>
            Bitcoin price will be under
          </Text>
          <Text style={{color: 'white', fontWeight: 500}}>
            $24,524 at 7 a ET on 22nd Jan'21
          </Text>
        </View>
        <Image
          style={{
            position: 'absolute',
            width: 100,
            height: 50,
            right: 1,
            bottom: 1,
          }}
          source={require('../../assets/images/Bitcoin.png')}
        />
      </View>

      <View
        style={{
          borderWidth: 1,
          borderColor: '#F6F3FA',
          padding: 16,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View style={style.div2headingContainer}>
            <Text style={style.div2heading}>PRIZE POOL</Text>
            <Text style={style.div2content}>$12,000</Text>
          </View>
          <View style={style.div2headingContainer}>
            <Text style={style.div2heading}>UNDER</Text>
            <Text style={style.div2content}>3.25x</Text>
          </View>
          <View style={style.div2headingContainer}>
            <Text style={style.div2heading}>OVER</Text>
            <Text style={style.div2content}> 1.25x</Text>
          </View>
          <View style={style.div2headingContainer}>
            <Text style={style.div2heading}>ENTRY FEES</Text>
            <Text style={style.div2content}>
              5 <Image source={require('../../assets/images/coin.png')} />
            </Text>
          </View>
        </View>
        <View
          style={{
            // borderWidth: 1,
            padding: 16,
          }}>
          <Text>Whats your prediction</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Button
            onPress={() => {
              handlePredict('Under');
            }}
            color="#452C55"
            title="Under"
          />
          <Button
            onPress={() => {
              handlePredict('Over');
            }}
            title="Over"
          />
        </View>
      </View>

      <View
        style={{
          // borderWidth: 1,
          padding: 16,
          backgroundColor: '#F6F3FA',
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#727682'}}>
            <Image source={require('../../assets/images/Vector.png')} /> 355
            Players
          </Text>
          <Text style={{color: '#727682'}}>
            {/* Icon/Font Awesome Free/Solid/C/chart-area */}
            <FontAwesomeIcon color="#727682" icon={faChartArea} /> View Chart
          </Text>
        </View>
        <View style={{borderRadius: 100, marginVertical: 20}}>
          {/* <Text>--------------------------</Text> */}
          <Progress percentage={50} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#B5C0C8'}}>232 predicted under</Text>
          <Text style={{color: '#B5C0C8'}}>123 predicted over</Text>
        </View>
      </View>
      <Modalize
        scrollEnabled={false}
        withReactModal
        modalHeight={screenHeight * 0.5}
        ref={modalizeRef}>
        {/* Content of your bottom sheet */}
        <View style={bottomSheetStyle.bottomSheetContent}>
          <Prediction val={value} />
          {/* Add your additional content here */}
        </View>
      </Modalize>
    </View>
  );
}

const bottomSheetStyle = {
  button: {
    // marginTop: 100,
    backgroundColor: 'rgba(98, 49, 173, 1)',
    // padding: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  bottomSheetContent: {
    padding: 16,
  },
};
