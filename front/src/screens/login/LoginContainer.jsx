import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logUser } from "../../redux/store/actions/users";
import Login from "./Login";

import { View } from "react-native";

export default ({ navigation }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.users.user);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isData, setIsData] = useState(true);

  const handleValueUsername = (username) => {
    setUsername(username);
    username.length > 0 && password.length > 0
      ? setIsData(false)
      : setIsData(true);
  };

  const handleValuePassword = (password) => {
    setPassword(password);
    username.length > 0 && password.length > 0
      ? setIsData(false)
      : setIsData(true);
  };

  const handleIsData = () => {
    username.length > 0 && password.length > 0
      ? setIsData(false)
      : setIsData(true);
  };

  const handleSubmit = () => {
    dispatch(logUser({ username: username, password: password })).then(
      (data) => {
        if (data.user._id) navigation.navigate("Home");
      }
    );
  };

  return (
    <View>
      <Login
        isData={isData}
        handleIsData={handleIsData}
        handleValueUsername={handleValueUsername}
        handleValuePassword={handleValuePassword}
        handleSubmit={handleSubmit}
        username={username}
        password={password}
        user={user}
        navigation={navigation}
      />
    </View>
  );
};
