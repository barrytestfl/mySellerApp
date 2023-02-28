import { StyleSheet } from "react-native";
import { COLORS, SIZE } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    
    flex:1,
    flexDirection:"column",
    justifyContent:"center",
    backgroundColor:'#FFFFFF',
    marginTop:25,
     
  },
  card:{
    justifyContent:"center",
    height:50,
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
 
    margin:20,
    backgroundColor:"#00CED1",
    padding: 10,
    flexDirection:'row',
    borderRadius:8
  },
  cardItem:{
    
    justifyContent: "space-between",
    padding:1
  },
  cardButton:{
    flexDirection: "row",
    justifyContent: "space-around",
    paddingLeft: 2,
    paddingRight: 2,
  },
  contentList:{
      flex:2,
      width: "100%",
       marginTop: 10,
       marginBottom: 10
       
  },
  centeredView: {
    flex: 1,
    flexDirection:"column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    maxHeight:"75%"
  },
  modalView: {
    flex:1,
    width: "80%",
    margin: 5,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 5,
    alignItems: "stretch",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
    
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    fontFamily: "byekan",
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
    fontFamily: "byekan",
  },
  buttonClose: {
    fontFamily: "byekan",
    backgroundColor: "#00CED1",
  },
  closebutton:{
    position:"absolute",
    zIndex:9999,
    backgroundColor: "#FFF",
    padding: 5,
    shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.5,
  shadowRadius: 4,
 borderRadius:15
},
  textStyle: {
    fontFamily: "byekan",
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    fontFamily: "byekan",
    marginTop: 10,
    marginRight: 50,
    paddingBottom:12,
    textAlign: "left",
    fontSize:20,
    fontWeight:"bold"
  },
  modalForm:{
   
    justifyContent:"flex-end",
    borderTopWidth:2,
    flex:1,
    flexDirection:"column",
    alignItems:"center"
  }
});

export default styles;
