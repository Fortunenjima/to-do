import { Pressable, Text, View } from "react-native"

type Props ={
    title: string;
    backgroundColor: string;
    onPress: () => void;
    disabled?:boolean;
}
export const CustomButton = ({ title, backgroundColor, onPress, disabled }: Props) => {
  return (
    <Pressable
    disabled={disabled}
      style={({pressed}) => [{
        padddingVertical: 5,
        backgroundColor: backgroundColor,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 5,
        marginTop: 20,
        borderRadius: 10,
        flex: 1,
        height: 50,
        opacity: pressed ? 0.5 : 1,
     
      }, {
           opacity: disabled ? 0.4 : 1,
      }]}
      onPress={onPress}
    >
      <Text style={{ fontSize: 20, color: "black" }}>{title}</Text>
    </Pressable>
  );
};