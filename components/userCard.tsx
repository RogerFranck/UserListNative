import * as React from 'react';
import { Card, IconButton, Paragraph } from 'react-native-paper';
import { UserCardProps } from '../interfaces/userCardProps';
import { StyleSheet } from 'react-native';
import useDeleteData from '../hooks/useDeleteData';

interface Props extends UserCardProps {
  navigation: any;
  getData: Function;
}

const UserCard = ({ id, name, email, phone, navigation, getData }: Props) => {
  const isEdit = true;
  const { deleteUser } = useDeleteData(getData);
  return (
    <Card style={styles.card}>
      <Card.Title title={name} />
      <Card.Content>
        <Paragraph>Email: {email}</Paragraph>
        <Paragraph>Teléfono: {phone}</Paragraph>
      </Card.Content>
      <Card.Actions style={styles.actions}>
        <IconButton
          icon="pencil"
          onPress={() =>
            navigation.navigate('Form', {
              id,
              name,
              email,
              phone,
              isEdit
            })
          }
        />
        <IconButton icon="delete" onPress={() => deleteUser(id)} />
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '95%',
    margin: 8
  },
  actions: {
    alignSelf: 'flex-end'
  }
});

export default UserCard;
