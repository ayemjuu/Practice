import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdminScreen from './screens/AdminScreen';
import LoginScreen from './screens/LoginScreen';
import LogoutScreen from './screens/Admin/LogoutScreen';
import TodaDriverScreen from './screens/Admin/TodaDriverScreen';

import RegistrationScreen from './screens/Admin/RegistrationScreen';
import UserScreen from './screens/Admin/UserScreen';
import ReportsScreen from './screens/Admin/ReportsScreen';

import LoadingScreen from './screens/LoadingScreen';
import PassengerScreen from './screens/Admin/Registration/PassengerScreen';
import DriverScreen from './screens/Admin/Registration/DriverScreen';







const Stack = createNativeStackNavigator();

const App = () => {




  return (

    <NavigationContainer>
      
      {/* <Stack.Navigator initialRouteName="Login"> */}
      <Stack.Navigator initialRouteName="Loading" options={{ headerShown: false }}>
       
        <Stack.Screen name="Admin" component={AdminScreen} options={{headerShown: false}}/>
        <Stack.Screen name="TODA Drivers" component={TodaDriverScreen} />
        <Stack.Screen name="User" component={UserScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} options={{headerShadowVisible: false,
          headerTitle: () => null, 
          // TO REMOVE THE HEADER TEXTS

        }} />
        <Stack.Screen name="Reports" component={ReportsScreen} />
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false, headerLeft: null,
         gestureEnabled: false, }} />
        <Stack.Screen name="Logout" component={LogoutScreen} />
        
        <Stack.Screen name="Loading" component={LoadingScreen} options={{headerShown: false}}/>

        <Stack.Screen name="Passenger" component={PassengerScreen} />
        <Stack.Screen name="Driver" component={DriverScreen} />
        
        

        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;