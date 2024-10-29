import{ StyleSheet, Text, View} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { Action } from './Actions';
import { Todo } from './Todos';
import { useState } from 'react';
import { useTodo } from '@/Lib/zustand/useTodos';

type Props = {
    item: Todo;
};



export const TodoItem = ({item}: Props) => {
  const onDeleteTodo = useTodo((state) => state.deleteTodo)
  const onToggleTodo = useTodo((state) => state.toggleTodo)

    const [visible, setVisible] = useState(false)
    const onVisible = () => setVisible(true)
    const onHide = () => setVisible(false)
    console.log({visible});
    

    return(
        <View style={styles.itemContainer }>
          <View style={{ flexDirection : 'row', gap:10, alignItems:'center'}}>
          <View style={styles.circle}>
            {item.iscompleted && (
              <FontAwesome name="check" color="white" size={20} />
            )}
          </View>
          <Text style={{ fontSize: 20 }}>{item.name}</Text>
          </View>
        <Action onHide={onHide} onVisible={onVisible} visible={visible} onDeleteTodo={onDeleteTodo} 
        onToggleTodo={onToggleTodo}
        name={item.name}
        isCompleted={item.iscompleted}/>
        </View>

    );
};


const styles = StyleSheet.create({
    itemContainer: {
      flexDirection: "row",
      justifyContent: 'space-between',
      gap: 10,
      backgroundColor: '#eee',
      paddingHorizontal: 10,
      paddingVertical: 20,
      borderRadius: 5,
  
    },
    circle: {
      backgroundColor: "#ccc",
      width: 20,
      height: 20,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center'
    },
  });