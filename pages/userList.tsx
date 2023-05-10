import React from 'react';
import { View, ScrollView } from 'react-native';
import UserCard from '../components/userCard';
import useGetData from '../hooks/useGetData';

export default function UserList({ navigation }: any) {
  const { users } = useGetData()
  return (
    <View>
      <ScrollView>
        {users.map((e: any, i: number) => (
          <UserCard
            key={i}
            id={e.id}
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
