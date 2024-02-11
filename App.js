import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import { ProductsProvider } from "./context";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const EmptyReactComponent = () => {
  return <></>;
};
const BottomNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          title: "Home",
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          title: "404",
        }}
        name="Empty"
        component={EmptyReactComponent}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <ProductsProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="bottomTabs"
            component={BottomNavigation}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ProductsProvider>
  );
}
