import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import React from "react";

//local imports
import HomeScreen from "./src/screens/HomeScreen";
import DetailScreen from "./src/screens/DetailScreen";
import CreateScreen from "./src/screens/CreateTodo";
import EditScreen from "./src/screens/EditScreen";
import { Provider } from "./src/context/BlogContext";

const Routes = {
  Home: HomeScreen,
  Detail: DetailScreen,
  Create: CreateScreen,
  Edit: EditScreen,
};

const RouteConfigs = {
  initialRouteName: "Home",
  defaultNavigationOptions: {
    title: "ToDo App",
  },
};

const navigator = createStackNavigator(Routes, RouteConfigs);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
