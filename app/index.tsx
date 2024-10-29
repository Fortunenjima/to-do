import { AddButton } from "@/components/AddButton";
import { AddTask } from "@/components/AddTask";
import { CustomButton } from "@/components/CustomButton";
import { Todo, Todos } from "@/components/Todos";
import { useTodo } from "@/Lib/zustand/useTodos";
import BottomSheet, {
  BottomSheetModal,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { useMemo, useRef, useState } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";

export default function Index() {
  const bottomRef = useRef<BottomSheet>(null);
  const todos = useTodo((state) => state.todo);
  const [category, setCategory] = useState('Personal');
  const snapShot = useMemo(() => ["70%"], []);
  const filteredTodos = useMemo(
    () => todos.filter(
      (todos) => todos.category.toLowerCase() === category.toLowerCase()
    ),
    [todos,category]
  );

  const openBottomSheet = () =>{
    bottomRef.current?.expand();
  }

  const closeBottomSheet = () => {
    bottomRef.current?.close()
  }


  const isActivePersonal = category === 'Personal'? 'skyblue' : '#eee';
  const isActiveWork = category === 'Work' ? 'skyblue' : '#eee';

  return (
    <View style={styles.container}>
      <Text style={styles.today}>Today</Text>
      <Text style={styles.date}>October 20, 2024</Text>
      <View style={styles.card}>
        <Text style={styles.cardText}>
          Keep it up! Complete your tasks. You are almost there!
        </Text>
      </View>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <CustomButton onPress= {() => setCategory('Personal')}  title={"Personal"} backgroundColor={isActivePersonal} />
        <CustomButton onPress= {() => setCategory('Work')} title={"Work"} backgroundColor={isActiveWork} />
      </View>
      <Todos todos={filteredTodos}  />
      <AddButton onPress={openBottomSheet} />
      <BottomSheet
        ref={bottomRef}
        snapPoints={snapShot}
        index={-1}
        enablePanDownToClose
      >
        <BottomSheetScrollView style={{ flex: 1 }}>
          <AddTask closeBottomSheet={closeBottomSheet}/>
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingHorizontal: 15,
  },
  today: {
    color: "#ccc",
    fontSize: 20,
  },
  date: { color: "black", fontSize: 30, fontWeight: "700" },
  card: {
    marginTop: 20,
    height: 150,
    width: "100%",
    backgroundColor: "skyblue",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: { color: "white", fontSize: 27, fontWeight: "600" },
});