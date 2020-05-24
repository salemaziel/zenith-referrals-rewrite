import React from 'react'

import { TouchableOpacity, Text } from 'react-native'
//import TestButton from './testbutton'

//const TestB = () => (
//class TestB extends React.Component {

//render() {

//return (
const TestB = () => (
<>
    <div style={{
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        textAlign: 'center',
        display: 'flex',
        margin: 'auto',
        padding: '1rem'
    }}>

{/*<TestButton /> */}

<TouchableOpacity
  onPress={() => alert('what up, mobile native alert')}
  style={{
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  }}
>
  <Text style={{ color: 'white' }}>Click me</Text>
</TouchableOpacity> 

    </div>

</>
)


export default TestB