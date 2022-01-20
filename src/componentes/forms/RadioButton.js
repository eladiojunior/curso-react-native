import React from 'react';
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';

class RadioButton extends React.Component {
    constructor(props){
    super(props);
    this.state = {
      radioSelected: 1
    }
  }


  radioClick(id) {
    this.setState({
      radioSelected: id
    })
  }

  render() {

    const products = [{id: 1},{id: 2},{id: 3}];

    return (
      products.map((val) => {
        return (
          <TouchableOpacity key={val.id} onPress={this.radioClick.bind(this, val.id)}>
            <View style={{
              height: 24,
              width: 24,
              borderRadius: 12,
              borderWidth: 2,
              borderColor: '#000',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {
                val.id == this.state.radioSelected ?
                  <View style={{
                    height: 12,
                    width: 12,
                    borderRadius: 6,
                    backgroundColor: '#000',
                  }} />
                  : null
              }
            </View>
          </TouchableOpacity>
        )
      })
    );
  }
}
export default RadioButton;