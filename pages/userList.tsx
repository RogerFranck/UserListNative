import React from 'react'
import { Text, View } from 'react-native/types'
import { user } from '../const/user' 

export default function userList() {
  return (
    <View>
      {  user.map(e => <Text> {e.name} </Text>  ) }
    </View>
  )
}
