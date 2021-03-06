import { StyleSheet, Dimensions } from "react-native";
import { headerColor, verdeTexto, deleteColor, azulDark } from "../../Common/constans";

export const style = StyleSheet.create({
  titulo: {
    textAlign: "center",
    fontSize: 26,
    fontFamily: "delgado",
    marginTop: 30,
    marginBottom: 15,
    color: `${headerColor}`,
    fontWeight:'bold'
    
  },
  texto: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: "sans-bold",
    color:verdeTexto ,
    
  },
  textoContainer:{
    justifyContent: "center",
    backgroundColor: "white",
    height: 60,
    width:"87%",
    borderRadius:5,
    borderColor:'#e6e3e3',
    borderWidth:1
  },

  confirmar: {
    width: 167,
    height: 60,
    backgroundColor: `${deleteColor}`,
    
    alignSelf: "center",
  },
  tituloConfirmar: {
    fontSize: 18,
    textAlign: "center",
    textTransform: "uppercase",
    color: "white",
    fontWeight: "400",
  },
  mainAccount: {
    width: 250,
    fontSize: 16,
    textAlign: "center",
    textTransform: "uppercase",
    color: "#4F9FFF",
    fontWeight: "500",
    alignSelf: "center",
  },

  accountContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 30,
    width: Dimensions.get("window").width - 50,
    backgroundColor: "#F7F5FE",
    elevation: 7,
    alignSelf: "center",
    paddingBottom: 30,
    borderRadius: 20,
  },
  tex: {
    color: verdeTexto,
    fontSize: 17,
  },
  texDark: {
    color: azulDark,
    fontSize: 17,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 25,
    alignItems: "center",
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    margin:10,
    width:"40%"
  },
  textStyle: {
    color: "white",
    fontFamily:'regular',
    textAlign: "center",
    fontSize:18
  },
  modalText: {
    fontSize:22,
    fontFamily:'nunito',
    marginBottom: 15,
    textAlign: "center"
  }
});
