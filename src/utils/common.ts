import {Dimensions} from 'react-native'

const {height: deviceHeight, width: deviceWidth}= Dimensions.get('window')

const hp= (percentage:number)=>{
    return (percentage/100)*deviceHeight;
}

const wp= (percentage:number)=>{
    return (percentage/100)*deviceWidth;
}