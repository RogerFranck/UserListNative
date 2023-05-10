import React from 'react';
import { View, ScrollView } from 'react-native';
import { user } from '../const/user';
import UserCard from '../components/userCard';

export default function UserList({ navigation }: any) {
  return (
    <View>
      <ScrollView>
        {user.map((e, i) => (
          <UserCard
            key={i}
            email={e.email}
            name={e.name}
            phone={e.phone}
            navigation={navigation}
          />
        ))}
      </ScrollView>
    </View>
  );
}
