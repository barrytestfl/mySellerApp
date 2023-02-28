import { StyleSheet } from "react-native";
import { COLORS, SIZE } from "../../constants/theme";

const styles=StyleSheet.create({
    container:{paddingHorizontal:20,paddingTop:20},
    title:{
        fontFamily: 'byekan',
        fontWeight:"bold",
        color:COLORS.black,
        fontSize:SIZE.h1
        
    },
    subTitle:{fontFamily: 'byekan',
        fontWeight:"bold",
        color:COLORS.black,
        fontSize:SIZE.h4
    },
    textInput:{
        fontFamily: 'byekan',
        borderWidth:0,
        fontSize:SIZE.h2,
        paddingVertical:5,
        marginVertical:5,
        color:COLORS.black,
        fontSize:SIZE.h4,
        textAlign:"right",
        paddingRight:12
    },
    button:{fontFamily: 'byekan',
        backgroundColor:COLORS.primary,
        padding:20,
        borderRadius:12,
        marginHorizontal:20,
        marginTop:55,
       
    },
    textButton:{fontFamily: 'byekan',textAlign:"center",fontSize:SIZE.h4,fontWeight:"bold",color:COLORS.white}
});

export default styles;