
import { StyleSheet,Dimensions } from "react-native";
import { COLORS, SIZE } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
     
    backgroundColor: 'transparent',
    elevation: 0,
    //
    //backgroundColor:"#ebf0f7",
    justifyContent: "center",
    fontFamily: "byekan",
 
  },
  header:{
    backgroundColor: "#00CED1",
    fontFamily: "byekan",
  },
  headerContent:{
    padding:25,
    alignItems: 'center',
    fontFamily: "byekan",
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginTop:1,
  },
  nameHeader:{
    fontFamily: "byekan",
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  profileDetail:{
    fontFamily: "byekan",
    alignSelf: 'center',
    marginTop:160,
    alignItems: 'center',
    flexDirection: 'row',
    position:'absolute',
    backgroundColor: "#ffffff",
  
  },
  detailContent:{
    fontFamily: "byekan",
    margin:10,
    alignItems: 'center'
  },
  title:{
    fontSize:20,
    color: "#00CED1",
    fontFamily: "byekan",
  },
  countHeader:{
    fontSize:18,
    fontFamily: "byekan",
  },
  bodyContent: {
    fontFamily: "byekan",
    flex: 1,
    alignItems: 'center',
    padding:30,
    marginTop:40
  },
  textInfo:{
    fontFamily: "byekan",
    fontSize:18,
    marginTop:20,
    color: "#696969",
  },
  buttonContainer: {
    fontFamily: "byekan",
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00CED1",
  },
  description:{
    fontFamily: "byekan",
    fontSize:20,
    color: "#00CED1",
    marginTop:10,
    textAlign: 'center'
  },
  //########################



  contentList:{
    fontFamily: "byekan",
    flex:1,
    marginTop:15,
  },
  cardContent: {
    marginLeft:20,
    marginTop:10,
    fontFamily: "byekan",
  },
  image:{
    width:90,
    height:90,
    borderRadius:45,
    borderWidth:2,
    borderColor:"#ebf0f7"
  },

  card:{
    fontFamily: "byekan",
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginLeft: 20,
    marginRight: 20,
    marginTop:20,
    backgroundColor:"white",
    padding: 10,
    flexDirection:'row',
    borderRadius:30,
  },

  name:{
    fontFamily: "byekan",
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"#3399ff",
    fontWeight:'bold'
  },
  count:{
    fontFamily: "byekan",
    fontSize:14,
    flex:1,
    alignSelf:'center',
    color:"#6666ff"
  },
  followButton: {
    fontFamily: "byekan",
    marginTop:10,
    height:35,
    width:100,
    padding:10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "white",
    borderWidth:1,
    borderColor:"#dcdcdc",
  },
  followButtonText:{
    fontFamily: "byekan",
    color: "#2d2d2d",
    fontSize:12,
  },

  //########################
labeleheader:{ fontFamily: "byekan", textAlign: "right", fontSize: 20, flex: 1 },
row:{
  fontFamily: "byekan",
  paddingTop: 4,
  flexDirection: "row-reverse",
  textAlign: "center",
  justifyContent: "space-between",
},
rowvalue:{
  fontFamily: "byekan",
  flex:3 ,
  textAlign: "left",
  borderRadius: 8,
}

});


export default styles;
