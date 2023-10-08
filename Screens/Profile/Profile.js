import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
// import {ProfileTabNavigator} from '../../navigation/MainNavigation';

import globalStyle from '../../assets/Styles/Global';
import style from './Style';
import {ProfileTabsNavigation} from '../../Navigation/MainNavigation';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faChessKnight,
  faMessage,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View contentContainerStyle={{flexGrow: 1}}>
        <View>
          <View
            style={[
              globalStyle.flex,
              {
                flexDirection: 'row',
                margin: 16,
                justifyContent: 'space-between',
                backgroundColor: 'white',
              },
            ]}>
            <Image source={require('../../assets/images/knight.png')} />
            <Text style={{fontSize: 14}}>Profile</Text>
            <TouchableOpacity style={style.messageIcon}>
              <FontAwesomeIcon icon={faMessage} size={20} color={'#898DAE'} />
              <View style={style.messageNumberContainer}>
                <Text style={style.messageNumber}>1</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              paddingHorizontal: 16,
              backgroundColor: 'white',
            }}>
            <Image
              style={style.profileImage}
              source={require('../../assets/images/Profile.png')}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 14,
                fontWeight: 600,
                color: '#4F4F4F',
                fontFamily: 'Montserrat',
              }}>
              Jina Simons
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 500,
                color: '#4F4F4F',
                fontFamily: 'Montserrat',
              }}>
              6000pts
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: '#4F4F4F',
                fontFamily: 'Montserrat',
                paddingBottom: 16,
              }}>
              I’m a software developer that has been in the crypto space since
              2012. And I’ve seen it grow and falter over a period of time.
              Really happy to be here!
            </Text>
            <View style={{flexDirection: 'row'}}>
              <FontAwesomeIcon color="#727682" icon={faSignOutAlt} />
              <Text
                style={{
                  color: '#727682',
                  fontWeight: '500',
                  fontSize: 14,
                  paddingLeft: 7,
                }}>
                Log out
              </Text>
            </View>
          </View>
        </View>
        <View style={style.border}>
          <Image
            style={{position: 'absolute', left: '50%', bottom: '85%'}}
            source={require('../../assets/images/star.png')}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              padding: 21,
            }}>
            <View style={{alignItems: 'center'}}>
              <Text style={{color: '#727682'}}>Under or Over</Text>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: '#4F4F4F',
                  fontFamily: 'Montserrat',
                }}>
                <Image source={require('../../assets/images/upg.png')} />
                81%
              </Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={{color: '#727682'}}>Top 5</Text>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: '#4F4F4F',
                  fontFamily: 'Montserrat',
                }}>
                <Image source={require('../../assets/images/dnr.png')} />
                -51%
              </Text>
            </View>
          </View>
        </View>

        <View style={{width: '100%', height: '100%'}}>
          <ProfileTabsNavigation />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
