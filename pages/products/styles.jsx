import { StyleSheet } from "react-native";
import { COLORS, SIZE } from "../../constants/theme";

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
    backgroundColor:"#FFFFFF"
  },
  list: {
    paddingHorizontal: 2,
    backgroundColor:"#FFFFFF",
  },
  listContainer:{
    alignItems:'center'
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card:{
    shadowColor: '#333',
    shadowOffset: {
      width: 2,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 4,
    backgroundColor:"white",
    flexBasis: '47%',
    marginHorizontal: 4,
    elevation: 12,

    borderWidth:1,
    borderRadius:10,
    borderColor:"#787474"
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    flex: 1,
    height: 200,
     
    width: "100%",
     
  },
  /******** card components **************/
  title:{
    fontSize:14,
    flex:1,
     
    lineHeight:22
  },
  price:{
    fontSize:11,
    fontFamily: "byekan",
    flexWrap:"nowrap",
    color: "green",
    marginTop: 5
  },
  buyNow:{
    color: "purple",
  },
  icon: {
    width:25,
    height:25,
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
    fontFamily: "byekan",
  },
  socialBarlabel: {
    fontFamily: "byekan",
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  socialBarButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "byekan",
  },
  /**************modal***************/
  
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
  },
  buttonClose: {
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
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "byekan",
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
   
    justifyContent:"flex-start",
    borderTopWidth:2,
    flex:1,
    flexDirection:"column",
    alignItems:"center",
    
  },
  dataContainer:{
    
    borderRadius:15,
    justifyContent:"flex-start",
    alignItems:"center",
    textAlign:"right",
    fontFamily: "byekan",
    width:"100%",
    backgroundColor:"#FFF",
  
},
labelInput:{
    alignContent:"flex-end",
    alignSelf:"flex-end",
    color:COLORS.black,
    fontSize:SIZE.h3, 
    textAlign:"right",
    fontFamily: "byekan",
},
textInput:{
    color:COLORS.black,
    fontSize:SIZE.h3,
    fontFamily: "byekan",
    borderWidth:1,
    paddingHorizontal:15,
    paddingVertical:12,
    width:"100%",
    marginVertical:15,
    textAlign:"right",
    borderRadius:8
},
Hcard:{
  justifyContent:"center",
  height:50,
  fontFamily: "byekan",
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
HcardItem:{
  fontFamily: "byekan",
  justifyContent: "space-between",
  padding:1
},
cardButton:{
  fontFamily: "byekan",
  flexDirection: "row",
  justifyContent: "space-around",
  paddingLeft: 2,
  paddingRight: 2,
},

});  
export default styles;
