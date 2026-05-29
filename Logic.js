import React,{useState, useEffect, use} from "react";
import{View, TouchableOpacity, TextInput,FlatList} from "react-native";




function UserList(){
    const [data, setData] = useState([]);

    function fetchData(text){
        setTimeout(() => {
        var result = fetch("https://api.api-ninjas.com/v2/randomuser?{text")
        setData(result) 
        }, 2000);
    }

    //[1,1,2,2,3,3,3,4,4,4,4]
    fuction findUnqiue(arr){
        var uni
    }
    

    return(
        <View>
            <TextInput placeholder="Enter Mobile Number"
             onChangeText={(text) => fetchData(text)} />
             <FlatList/>
        </View>
    )

}
export default UserList

const Styles= StyleSheet.create({
    container: {
        flex:1
    }
})