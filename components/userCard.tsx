import * as React from 'react';
import { Card, IconButton, Paragraph } from 'react-native-paper';
import { UserCardProps } from '../interfaces/userCardProps';
import { StyleSheet } from 'react-native';

interface Props extends UserCardProps {
  navigation: any;
}

const UserCard = ({ name, email, phone, navigation }: Props) => {
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
          onPress={() => navigation.navigate('Editar', { name, email, phone })}
        />
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
