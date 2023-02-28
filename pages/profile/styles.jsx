import { StyleSheet } from "react-native";
import { COLORS, SIZE } from "../../constants/theme";

const styles=StyleSheet.create({
    container:{ flex: 1,  
       
    },
    topContainer:{
    padding:15,
    alignItems:"center",
    backgroundColor:"#00CED1"
    },
    title:{
        color:COLORS.black,
        fontWeight:"bold",
        fontSize:SIZE.h1,
    },
    subTitle:{
        color:COLORS.black,
        fontSize:SIZE.h4,
        fontWeight:"800",
        paddingTop:3
    },
    dataContainer:{
        marginVertical:20,
        marginHorizontal:20,
        borderRadius:15,
        justifyContent:"center",
        alignItems:"center",
        textAlign:"right",
        marginTop:50,
        padding:15,
        width:"90%",
        backgroundColor:"#FFF",
      
    },
    labelInput:{
        alignContent:"flex-end",
        alignSelf:"flex-end",
        color:COLORS.black,
        fontSize:SIZE.h3, 
        textAlign:"right",
        
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
    buttonContainer:{ fontFamily: "byekan",margin:25,backgroundColor:"red",fontWeight:"bold",fontSize:SIZE.h3,borderRadius:8},
    button1:{ fontFamily: "byekan",backgroundColor:'#00CED1',marginVertical:10,marginHorizontal:30,padding:20,borderRadius:15,justifyContent:"center",alignItems:"center"},
    btnText:{ fontFamily: "byekan",color:COLORS.black,fontWeight:"bold",fontSize:SIZE.h3},
    text:{ fontFamily: "byekan",color:COLORS.black,fontWeight:"bold",fontSize:SIZE.h4,marginTop:10,textAlign:"center",  marginVertical:15}
});

export default styles;