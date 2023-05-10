import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import UserCard from '../components/userCard';
import useGetData from '../hooks/useGetData';
import FloatButton from '../components/common/floatButton';

export default function UserList({ navigation }: any) {
  const { users, getData } = useGetData();
  return (
    <View style={styles.container}>
      <ScrollView>
        {users.map((e: any, i: number) => (
          <UserCard
            key={i}
            id={e.id}
            email={e.email}
            name={e.name}
            phone={e.phone}
            navigation={navigation}
            getData={getData}
          />
        ))}
        <View style={styles.padding} />
      </ScrollView>
      <FloatButton
        clickHandler={() =>
          navigation.navigate('Form', {
            id: '',
            name: '',
            email: '',
            phone: ''
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  padding: {
    height: 100,
    width: '100%'
  }
});
