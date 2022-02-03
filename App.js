import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Button,
  FlatList,
} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

const App = () => {
  const [list, setList] = useState([]);
  const [addMode, setAddMode] = useState(false);

  const handlePress = (goal) => {
    setList((items) => [
      ...items,
      {
        id: Math.random().toString(),
        value: goal,
      },
    ]);
    setAddMode(false);
  };

  const handleDelete = (goalId) => {
    setList((currentList) => {
      return currentList.filter(
        (goal) => goal.id !== goalId
      );
    });
  };

  const handleCancel = () => {
    setAddMode(false);
  };
  return (
    <View style={styles.container}>
      <Button
        title='Add Mode'
        onPress={() => setAddMode(true)}
      />
      <GoalInput
        onCancel={handleCancel}
        visible={addMode}
        press={handlePress}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={list}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={handleDelete}
            goal={itemData.item.value}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
});

export default App;
