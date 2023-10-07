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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBarChart,
  faBarsProgress,
  faChartSimple,
  faHome,
  faMagnifyingGlass,
  faTrophy,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();
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

export function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{header: () => null, headerShown: false}}
      initialRouteName={Routes.Home}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <FontAwesomeIcon
              icon={faHome}
              size={size}
              color={focused ? 'rgba(98, 49, 173, 1)' : color}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 10,
                color: focused ? 'rgba(98, 49, 173, 1)' : 'black', // Change the label color here
              }}>
              Home
            </Text>
          ),
        }}
        name={Routes.Home}
        component={Home}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <FontAwesomeIcon
              icon={faTrophy}
              size={size}
              color={focused ? 'rgba(98, 49, 173, 1)' : color}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 10,
                color: focused ? 'rgba(98, 49, 173, 1)' : 'black', // Change the label color here
              }}>
              League
            </Text>
          ),
        }}
        name={'League'}
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size={size}
              color={focused ? 'rgba(98, 49, 173, 1)' : color}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 10,
                color: focused ? 'rgba(98, 49, 173, 1)' : 'black', // Change the label color here
              }}>
              Research
            </Text>
          ),
        }}
        name={'Research'}
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <FontAwesomeIcon
              icon={faChartSimple}
              size={size}
              color={focused ? 'rgba(98, 49, 173, 1)' : color}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 10,
                color: focused ? 'rgba(98, 49, 173, 1)' : 'black', // Change the label color here
              }}>
              Leaderboard
            </Text>
          ),
        }}
        name={'Leaderboard'}
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <FontAwesomeIcon
              icon={faUser}
              size={size}
              color={focused ? 'rgba(98, 49, 173, 1)' : color}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 10,
                color: focused ? 'rgba(98, 49, 173, 1)' : 'black', // Change the label color here
              }}>
              Profile
            </Text>
          ),
        }}
        name={Routes.Profile}
        component={Profile}
      />
    </Tab.Navigator>
  );
}

const MainMenuNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{header: () => null, headerShown: false}}
      initialRouteName={Routes.Home}>
      <Tab.Screen name={Routes.Home} component={Home} />
      <Tab.Screen name={'League'} component={Home} />
      <Tab.Screen name={'Research'} component={Home} />
      <Tab.Screen name={'Leaderboard'} component={Home} />
      <Tab.Screen name={Routes.Profile} component={Profile} />
    </Tab.Navigator>
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
