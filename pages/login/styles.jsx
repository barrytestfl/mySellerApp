import { StyleSheet,Dimensions } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"#FFF",
    },
    titleText: {
      position: 'absolute',
      top: Dimensions.get('screen').height * 0.1,
      alignSelf: 'center',
      color: '#000',
      fontFamily: 'byekan',
      fontSize: 28,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
    },
    bottomView: {
      backgroundColor: '#fff', 
      position: 'absolute',
      bottom: 90,
      left: 0,
      right: 0,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingTop: 10,
      paddingBottom: 20,
      paddingHorizontal: 20,
    },
    loginText: {
      fontFamily: 'byekan',
      fontSize: 24,
      marginTop: 12,
      marginBottom: 4,
    },
    inputView: {
      height: 50,
      borderRadius: 10,
      backgroundColor:"#FFF",
      marginTop: 10,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      borderColor:"#000",
      borderWidth:1,
      padding:11,
      margin:20
    },
    inputIcon: {
      paddingHorizontal: 8,
      
    },
    input: {
      height: 40,
      flex: 1,
      textAlign: "left",
      fontSize: 16,
      color: '#333',
      backgroundColor:"#FFF",
      
    },
    loginButton: {
      backgroundColor: '#00CED1',
      paddingVertical: 10,
      borderRadius: 8,
      marginTop: 10,
      margin:25
    },
    loginButtonText: {
      color: '#fff',
      fontFamily: 'byekan',
      alignSelf: 'center',
      fontSize: 18,
    },
    registerText: {
      alignSelf: 'center',
      marginTop: 12,
      fontFamily: 'byekan',
      fontSize: 16,
    },
    fpText: {
      marginTop: 10,
      alignSelf: 'flex-end',
      fontFamily: 'byekan',
      fontSize: 16,
      color: '#5352ed',
    },
  });
export default styles;