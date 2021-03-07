import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import UserProfile212549Navigator from '../features/UserProfile212549/navigator';
import Tutorial212548Navigator from '../features/Tutorial212548/navigator';
import NotificationList212520Navigator from '../features/NotificationList212520/navigator';
import Settings212519Navigator from '../features/Settings212519/navigator';
import Settings212511Navigator from '../features/Settings212511/navigator';
import UserProfile212509Navigator from '../features/UserProfile212509/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
UserProfile212549: { screen: UserProfile212549Navigator },
Tutorial212548: { screen: Tutorial212548Navigator },
NotificationList212520: { screen: NotificationList212520Navigator },
Settings212519: { screen: Settings212519Navigator },
Settings212511: { screen: Settings212511Navigator },
UserProfile212509: { screen: UserProfile212509Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
