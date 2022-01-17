import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import React from "react";

//local imports
import HomeScreen from "./src/screens/HomeScreen";
import DetailScreen from "./src/screens/DetailScreen";
import CreateScreen from "./src/screens/CreateTodo";
import EditScreen from "./src/screens/EditScreen";
import { Provider } from "./src/context/BlogContext";

const RouteConfigs = {
  Home: HomeScreen,
  Detail: DetailScreen,
  Create: CreateScreen,
  Edit: EditScreen,
};

const StackNavigatorConfig = {
  initialRouteName: "Home",
  defaultNavigationOptions: {
    title: "ToDo App",
  },
};

const navigator = createStackNavigator(RouteConfigs, StackNavigatorConfig);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
