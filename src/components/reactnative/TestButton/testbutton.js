import React from 'react'

import { TouchableOpacity, Text } from 'react-native';

export const TestButton = () => (
  <TouchableOpacity
    onPress={() => alert('onPress')}
    style={{
      padding: 10,
      backgroundColor: 'blue',
      borderRadius: 5,
    }}
  >
    <Text style={{ color: 'white' }}>Click me</Text>
  </TouchableOpacity>
);