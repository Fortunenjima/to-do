import { Todo } from '@/components/Todos'
import { Alert } from 'react-native';
import {create} from 'zustand'
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Store = {
    todo: Todo[];
    addTodo: (todo: Todo) => void;
    deleteTodo: (name: string) => void;
    toggleTodo: (name: string) => void;
}

export const useTodo = create<Store>()(persist(
    (set) => ({

    }),
    {
        name: 'todo-storage',
        storage: createJSONStorage(() => AsyncStorage),
    }
)
);