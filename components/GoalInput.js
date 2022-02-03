import React, { useState } from 'react';
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Modal,
} from 'react-native';

const GoalInput = (props) => {
  const [goal, setGoal] = useState('');
  const handleChange = (e) => {
    setGoal(e);
  };
  const handleAdd = () => {
    props.press(goal);
    setGoal('');
  };
  return (
    <Modal
      visible={props.visible}
      animationType='slide'
    >
      <View style={styles.inputCont}>
        <TextInput
          style={styles.input}
          placeholder='add a goal'
          onChangeText={handleChange}
          value={goal}
        />
        <View style={styles.button}>
          <View style={styles.btn}>
            <Button
              title='Cancel'
              color='red'
              onPress={props.onCancel}
            />
          </View>
          <View style={styles.btn}>
            <Button
              title='Add'
              onPress={handleAdd}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputCont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    width: '80%',
    padding: 4,
    color: 'black',
    marginBottom: 8,
  },
  button: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btn: {
    width: '40%',
  },
});

export default GoalInput;
