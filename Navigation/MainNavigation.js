import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
// import Home from '../screens/Home/Home';
// import Profile from '../screens/Profile/Profile';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View, Text, FlatList, Image} from 'react-native';
import ProfileTabTitle from '../Components/ProfileTabTitle/ProfileTabTitle';
import Home from '../Screens/Home/Home';
import Profile from '../Screens/Profile/Profile';
// import ProfileTabTitle from '../components/ProfileTabTitle/ProfileTabTitle';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const ProfileTabs = createMaterialTopTabNavigator();

const Card = props => {
  console.log(props);
  return (
    <View
      style={{
        flexDirection: 'row',
        borderRadius: 5,
        backgroundColor: 'white',
        margin: 16,
        padding: 20,
      }}>
      <Image source={require('../assets/images/logoB.png')} />
      <View>
        <Text
          style={{
            color: '#333',
            fontFamily: 'Monstserrat',
            fontSize: 14,
            fontWeight: 600,
            paddingHorizontal: 16,
          }}>
          {props?.item?.title}
        </Text>
        <Text
          style={{
            color: '#727682',
            paddingHorizontal: 16,
            flexWrap: 'wrap',
            width: '80%',
            fontWeight: 500,
          }}>
          {props?.item?.desc}
        </Text>
      </View>
    </View>
  );
};

const Tab1 = () => {
  const data = [
    {
      id: 1,
      title: 'First Stripe Earned',
      desc: 'Top 10% of highest spending players in a month',
    },
    {
      id: 2,
      title: 'Born Winner',
      desc: 'Top 10% of highest spending players in a month',
    },
    {
      id: 3,
      title: 'Trader of the Month',
      desc: 'Won 7 under-over games in a row',
    },
    {
      id: 4,
      title: 'Rising Star',
      desc: 'Top 10% of highest spending players in a month',
    },
    {
      id: 5,
      title: 'Jackpot',
      desc: 'Top 10% of highest spending players in a month',
    },
    {
      id: 6,
      title: 'Impossible',
      desc: 'Top 10% of highest spending players in a month',
    },
  ];
  return (
    <View>
      <FlatList data={data} renderItem={Card} />
    </View>
  );
};

export const ProfileTabsNavigation = () => {
  return (
    <ProfileTabs.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: '#6231AD',
        },
        tabBarStyle: {
          zIndex: 0,
          elevation: 0,
        },
      }}>
      <ProfileTabs.Screen
        name={'Tab1'}
        options={{
          tabBarLabel: ({focused}) => (
            <ProfileTabTitle isFocused={focused} title={'Game Played'} />
          ),
        }}
        component={Tab1}
      />
      <ProfileTabs.Screen
        name={'Tab2'}
        options={{
          tabBarLabel: ({focused}) => (
            <ProfileTabTitle isFocused={focused} title={'Badges'} />
          ),
        }}
        component={Tab1}
      />
    </ProfileTabs.Navigator>
  );
};

const MainMenuNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{header: () => null, headerShown: false}}>
      <Drawer.Screen name={Routes.Home} component={Home} />
      <Drawer.Screen name={Routes.Profile} component={Profile} />
    </Drawer.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{header: () => null, headerShown: false}}
      initialRouteName={Routes.Home}>
      <Stack.Screen name={'Drawer'} component={MainMenuNavigation} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
