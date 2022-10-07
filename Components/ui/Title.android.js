import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

function Title({ children, style }) {
  return <Text style={[styles.title, style]}>{children}</Text>;
}
export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    padding: 10,
    fontFamily: "open-sans-bold",
    color: "white",
    borderWidth: 2,
    borderColor: "white",
    textAlign: "center",
    width: 300,
    maxWidth: "80%",
  },
});
