// CustomLiveIcon.js
import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';
import { Ionicons } from '@expo/vector-icons';

const CustomLiveIcon = ({ size, color }) => {
  return (
    <View>
      {/* Camera Icon */}
      <Ionicons name="videocam" size={size} color={color} />

      {/* Red Dot */}
      <Svg height={size} width={size} style={{ position: 'absolute', top: 0, right: 0 }}>
        <Circle cx={size} cy={0} r={5} fill="red" />
      </Svg>
    </View>
  );
};

export default CustomLiveIcon;
