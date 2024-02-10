import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withClamp,
  withSpring,
} from 'react-native-reanimated';

const Interpolate = () => {
  const [clicked, setClicked] = useState(false);
  const animations = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    // to change size (width and height)
    const size = interpolate(animations.value, [1, 0], [100, 200]);

    // to change bgc ( color)
    const bgc = interpolateColor(
      animations.value,
      [1, 0],
      ['purple', 'orange'],
    );

    // to change bgc ( color)
    const borderRadius = interpolate(animations.value, [1, 0], [10, 100]);
    return {
      width: size,
      height: size,
      backgroundColor: bgc,
      borderRadius: borderRadius,
    };
  });

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View
        style={[
          {
            width: 100,
            height: 100,
            backgroundColor: 'orange',
            borderRadius: 10,
          },
          animatedStyle,
        ]}
      />
      <TouchableOpacity
        onPress={() => {
          animations.value = clicked ? withSpring(0) : withSpring(1);
          setClicked(!clicked);
        }}
        style={{
          backgroundColor: 'dodgerblue',
          borderRadius: 10,
          padding: 10,
          paddingHorizontal: 20,
          marginTop: 50,
        }}>
        <Text style={{color: '#fff'}}>Animate</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Interpolate;
