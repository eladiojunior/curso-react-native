import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class CheckboxButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
      label: props.label || "Checkbox"
    }
  }

  selectedClick = () => {
    this.setState({
      isSelected: !this.state.isSelected
    });
    if (this.props.onSelected)
      this.props.onSelected(!this.state.isSelected);
  }

  render() {
    return (
      <View style={{
        flexDirection: "row",
        padding: 5,
        alignItems: "center"
      }}>
        <TouchableOpacity
          onPress={this.selectedClick}>
          <View style={{
            height: 24,
            width: 24,
            borderWidth: 2,
            borderColor: '#000',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            {
              this.state.isSelected ?
                <View style={{
                  height: 12,
                  width: 12,
                  backgroundColor: '#000',
                }} />
                : null
            }
          </View>
        </TouchableOpacity>
        <Text style={{
          width: "100%",
          paddingLeft: 5
        }}
          onPress={this.selectedClick}>{this.state.label}</Text>
      </View>
    );
  }
}
export default CheckboxButton;