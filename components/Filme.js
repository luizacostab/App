import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Filme extends Component{

    render(){
        return(
        <>
        <Text>{this.props.data.Title}</Text>
        <Text>{this.props.data.Year}</Text>
        <Text>{this.props.data.Runtime}</Text>
        <Text>{this.props.data.Genre}</Text>
        <Text>{this.props.data.Director}</Text>
        </>
        )
    }
}

export default Filme;