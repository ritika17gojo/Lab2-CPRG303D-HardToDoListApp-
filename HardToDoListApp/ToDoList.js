import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {Task} from './Task';
import {styles as commonStyles} from '../App';

const ToSoList = ({tasks}) => (
    <ScrollView style={commonStyles.tasksContainer}>
        {tasks.map((task, index) => (
            <Task key={index} task={task} />
        ))}
    </ScrollView>
);

const styles= StyleSheet.create({
    tasksContainer: {
        flex:1,
        paddingHorizontal:20,
        paddingVertical: 10,
    }
});

export {ToDoList};
