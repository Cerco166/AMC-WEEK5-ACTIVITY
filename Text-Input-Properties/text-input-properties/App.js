import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Alert } from 'react-native';
import {Ionicons} from '@expo/vector-icons';


const HandleUserInput = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const HandleSubmit = () => {
    Alert.alert(
      'Submitted Text:',
      `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nPassword: ${password}`
    );
  };

  const validateEmail = (text) => {
    setEmail(text);
    if (!text.includes('@')) {
      setError('Invalid Email Address');
    } else {
      setError('');
    }
  };

  return (
    <View style={styles.container}>
    <Ionicons name="person" size={20} color="gray" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="FIRST NAME"
        autoFocus={true} // Only this field should have autofocus
        onChangeText={(value) => setFirstName(value)}
      />

      <TextInput
        style={styles.input}
        placeholder="LAST NAME"
        onChangeText={(value) => setLastName(value)}
      />

      <TextInput
        style={styles.input}
        placeholder="EMAIL ADDRESS"
        keyboardType="email-address" // Fixed typo
        onChangeText={validateEmail}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="PHONE NUMBER"
        keyboardType="phone-pad"
        onChangeText={(value) => setPhone(value)}
      />

      <TextInput
        style={styles.input}
        placeholder="PASSWORD"
        maxLength={12}
        secureTextEntry={true}
        onChangeText={(value) => setPassword(value)}
        returnKeyType="done"
        onSubmitEditing={HandleSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    paddingHorizontal: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default HandleUserInput;