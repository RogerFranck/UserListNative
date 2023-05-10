import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

export default function FloatButton({ clickHandler }: any) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={clickHandler}
      style={styles.touchableOpacityStyle}
    >
      <View style={styles.circle}>
        <Text style={styles.text}>+</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchableOpacityStyle: {
    position: 'absolute',
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    backgroundColor: 'black',
    borderRadius: 35
  },
  text: {
    fontSize: 30
  },
  circle: {
    width: 70,
    height: 70,
    backgroundColor: 'white',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
