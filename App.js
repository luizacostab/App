import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import api from './components/Api';
import Filme from './components/Filme';

 class App extends Component{

constructor(props){
  super(props);
  this.state ={
    filme:[]
  }
}

async componentDidMount(){
  const response = await api.get();
  this.setState({
    filme: response.data
  })
}
  render(){
    return (
      <View style={styles.container}>
       <Filme data = {this.state.filme}/>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;