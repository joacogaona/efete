import React, { useState, useEffect } from "react";
import CreateAgentForm from "./CreateAgentForm";
import { createAgent, editAgent } from "../../redux/store/actions/agents";
import { useDispatch, useSelector } from "react-redux";
import firebase from "../../firebase/index";
import { Alert } from "react-native";
import { YellowBox } from "react-native";
import _ from "lodash";

/* import uuid from "react-native-uuid"; */

const CreateAgentFormContainer = ({ navigation, route }) => {
  const [foto, setFoto] = useState("");
  const [ubicacion, setUbicacion] = useState({});
  
  const mode = useSelector(
    (state) => state.users.mode
  );

  useEffect(() => {
    route.params ? setFoto(route.params.uriFoto) : "No hay fotos";
  });

  const dispatch = useDispatch();

  const user = useSelector((state) => state.users.user);
  const getCoordsFromName = (loc) => {
    setUbicacion({ latitude: loc.lat, longitude: loc.lng });
  };
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [cuil, setCuil] = useState("");
  const [dailyAmount, setDailyAmount] = useState(0);

  function handlerName(text) {
    setName(text);
  }
  function handlerAddress(text) {
    setAddress(text.description);
  }

  function handlerCuil(text) {
    setCuil(text);
  }

  function handlerDailyAmount(text) {
    setDailyAmount(Number(text));
  }

  uploadImage = async (uri, agentId) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    /* let fotoUUID = uuid.v4(); */

    var ref = firebase
      .storage()
      .ref()
      .child("images/" + user._id + "-" + address);

    YellowBox.ignoreWarnings(["Setting a timer"]); //esto evita un warning por el await
    const _console = _.clone(console);
    console.warn = (message) => {
      if (message.indexOf("Setting a timer") <= -1) {
        _console.warn(message);
      }
    };

    return ref.put(blob).then(async (snapshot) => {
      await snapshot.ref.getDownloadURL().then((url) => {
        dispatch(
          editAgent({
            imageUrl: url,
            _id: agentId,
          })
        );
      });
    });
  };

  function handlerSubmit() {
    dispatch(createAgent(name, address, ubicacion, cuil, dailyAmount, user._id))
      .then((data) => {
        uploadImage(foto, data.newStore.id);
      })
      .catch((error) => {
        Alert.alert("Error al subir foto");
      });
  }

  return (
    <CreateAgentForm
      handlerName={handlerName}
      handlerAddress={handlerAddress}
      handlerCuil={handlerCuil}
      handlerDailyAmount={handlerDailyAmount}
      handlerSubmit={handlerSubmit}
      navigation={navigation}
      fotos={foto}
      name={name}
      address={address}
      cuil={cuil}
      mode={mode}
      notifyChange={(loc) => getCoordsFromName(loc)}
    />
  );
};
export default CreateAgentFormContainer;
