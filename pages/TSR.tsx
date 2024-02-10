import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const TSR = () => {
  const [clicked, setClicked] = useState(false);
  const animation = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => {
    // ## for translation on x-axis
    return {transform: [{translateX: animation.value}]};

    // ## for translation on y-axis
    // return {transform: [{translateY: animation.value}]};

    // ## for rotation (note: value pass by this)
    // return {transform: [{rotate: `${animation.value}deg`}]};

    // ## for scale (note: value pass in the range of 0 - 1)
    // return {transform: [{scale: animation.value}]};
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
          animation.value = withSpring(clicked ? 100 : -100);
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

export default TSR;
