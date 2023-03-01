/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Home from './Screens/Home';
import Help from './Screens/Help';
import Phone from './Screens/Phone';
import MyCard from './Screens/MyCard';
import Login1 from './Screens/Login1';
import Login2 from './Screens/Login2';
import MyMoney from './Screens/MyMoney';
import Profile from './Screens/Profile';
import Privacy from './Screens/Privacy';
import Feedback from './Screens/Feedback';
import Followers from './Screens/Followers';
import VerifyCode from './Screens/VerifyCode';
import NewPassword from './Screens/NewPassword';
import EditProfile from './Screens/EditProfile';
import CardSection from './Screens/CardSection';
import SplashScreen from './Screens/SplashScreen';
import UsernameEmail from './Screens/UsernameEmail';
import AccountVerify from './Screens/AccountVerify';
import StreamCategory from './Screens/StreamCategory';
import PaymentSection from './Screens/PaymentSection';
import TimeLineSection from './Screens/TimeLineSection';
import BottomNavigation from './Screens/BottomNavigation';
import TermsandCondition from './Screens/TermsandCondition';
import { NavigationContainer } from '@react-navigation/native';
import SubscriptionSection from './Screens/SubscriptionSection';
import NotificationSection from './Screens/NotificationSection';
import SuccessfullyRegistered from './Screens/SuccessfullyRegistered';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='SplashScreen'>

        <Stack.Screen name="Login2" component={Login2} />
        <Stack.Screen name="Login1" component={Login1} />
        <Stack.Screen name="VerifyCode" component={VerifyCode} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
        <Stack.Screen name="SuccessfullyRegistered" component={SuccessfullyRegistered} />

        {/* <Stack.Screen name="Help" component={Help} /> */}
        {/* <Stack.Screen name="Home" component={Home} /> */}
        {/* <Stack.Screen name="MyCard" component={MyCard} /> */}
        {/*<Stack.Screen name="Profile" component={Profile} /> */}
        {/* <Stack.Screen name="Profile" component={Profile} /> */}
        {/* <Stack.Screen name="Followers" component={Followers} /> */}
        {/* <Stack.Screen name="CardSection" component={CardSection} /> */}
        {/* <Stack.Screen name="EditProfile" component={EditProfile} /> */}
        {/* <Stack.Screen name="AccountVerify" component={AccountVerify} /> */}
        {/* <Stack.Screen name="PaymentSection" component={PaymentSection} /> */}
        {/* <Stack.Screen name="TimeLineSection" component={TimeLineSection} /> */}
        {/* <Stack.Screen name="SubscriptionSection" component={SubscriptionSection} /> */}
        {/* <Stack.Screen name="NotificationSection" component={NotificationSection} /> */}
        {/* <Stack.Screen name="Phone" component={Phone} />
        <Stack.Screen name="Privacy" component={Privacy} />
        <Stack.Screen name="Feedback" component={Feedback} />
        <Stack.Screen name="MyMoney" component={MyMoney} />
        <Stack.Screen name="UsernameEmail" component={UsernameEmail} />
        <Stack.Screen name="StreamCategory" component={StreamCategory} />
        <Stack.Screen name="TermsandCondition" component={TermsandCondition} />
      <Stack.Screen name="SuccessfullyRegistered" component={SuccessfullyRegistered} /> */}
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
