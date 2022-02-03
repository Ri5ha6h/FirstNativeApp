import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const GoalItem = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={props.onDelete.bind(
        this,
        props.id
      )}
    >
      <View style={styles.item}>
        <Text style={styles.goal}>
          {props.goal}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#D1D5DB',
    padding: 8,
    marginVertical: 5,
  },
  goal: {
    color: 'red',
  },
});

export default GoalItem;
