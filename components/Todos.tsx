import { FontAwesome } from "@expo/vector-icons";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { TodoItem } from "./Todo";

export type Todo = {
  name: string;
  category: string;
  iscompleted: boolean;
  Description: string;
}

type Props = {
  todos: Todo[];

};
export const Todos = ({ todos}: Props) => {
  return (
    <FlatList
    showsVerticalScrollIndicator={false}
      style={{ marginTop: 20 }}
      data={todos}
      renderItem={({ item }) => <TodoItem item={item} />
      }
      contentContainerStyle={{
        gap: 20,
      }}
      ListEmptyComponent={() =>(
        <Text style={{fontSize: 25, textAlign: "center", marginTop: 15}}>You don't have an upcoming Task.</Text>
      )}
    />
  );
};

