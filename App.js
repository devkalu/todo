import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import React from "react";

//local imports
import HomeScreen from "./src/screens/HomeScreen";
import DetailScreen from "./src/screens/DetailScreen";
import CreateScreen from "./src/screens/CreateTodo";
import { Provider } from "./src/context/BlogContext";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Detail: DetailScreen,
    Create: CreateScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "ToDo App",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
