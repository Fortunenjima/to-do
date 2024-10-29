import { StyleSheet, Text, TextInput, View } from "react-native";
import Label from "./Label";
import { CustomButton } from "./CustomButton";
import { useState } from "react";
import { useTodo } from "@/Lib/zustand/useTodos";
import { Todo } from "./Todos";

type Props = {
    closeBottomSheet: () => void;
}
export const AddTask = ({closeBottomSheet}: Props) => {
    const [value, setValue] = useState('');
    const addTodo = useTodo(state => state.addTodo)
    const [category, setcategory] = useState('Personal')
    console.log({category});
    const [Description,setDescription] = useState('')
    console.log(Description);
    
    

    console.log({value});
    const onSelectCategory = (cat: 'Personal' | 'Work') => {
        setcategory(cat)
    };

    const onCreateTodo = (todo: Todo) => {
     
    }

    const newTodo = {
        name: value,
        category,
        Description,
        iscompleted: false,

    };

    const isvalid = value.length > 2 && Description.length > 2
    console.log({isvalid, value, Description});

    const onAddTodo = () => {
      addTodo(newTodo);
      closeBottomSheet();
      setValue('');
      setDescription('');
    }

    const onCancel = () => {
      setValue('');
      setDescription('');
      closeBottomSheet();
    };

    const isActivePersonal = category === 'Personal'? 'skyblue' : '#eee';
  const isActiveWork = category === 'Work' ? 'skyblue' : '#eee';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Task</Text>
      <View style={styles.divider}></View>
      <View style={styles.inputContainer}>
        <Label text="Title Task" />
        <TextInput style={styles.input} placeholder="Add Task Name" placeholderTextColor="#ccc" 
        value={value}
        onChangeText={(text) => setValue(text)}/>
      </View>
      <View style={styles.inputContainer}>
        <Label text="Category" />
        <View style={{ flexDirection: "row", gap: 10 }}>
        <CustomButton onPress= {() => onSelectCategory('Personal')}title={"Personal"} backgroundColor={isActivePersonal} />
        <CustomButton onPress= {() => onSelectCategory('Work')}title={"Work"} backgroundColor={isActiveWork} />
      </View>
      </View>
      <View style={styles.inputContainer}>
        <Label text="Description" />
        <TextInput style={[styles.input, styles.textArea]} onChangeText={(text) => setDescription(text)} value={Description} placeholder="Add Description" placeholderTextColor="#ccc" />
      </View>
      <View style={[ styles.btnContainer, {marginTop: 50}]}>
        <CustomButton onPress={onCancel} title={"Cancel"} backgroundColor={"skyblue"} />
        <CustomButton onPress= {onAddTodo}title={"Create"} backgroundColor={"#eee"} disabled={!isvalid} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: "center",
  },
  divider: {
    backgroundColor: '#ccc',
    width: '60%',
    marginHorizontal: 'auto',
    height: 2,
    marginTop: 20,
  },
  inputContainer: {
marginTop: 20,
gap: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    height: 50,
    paddingHorizontal: 20,
    marginTop: 10,
    borderRadius: 10,
  },
  btnContainer: { flexDirection: 'row', gap: 20},
  textArea:{
    height:80,
    textAlignVertical: 'top',
  }
  
});