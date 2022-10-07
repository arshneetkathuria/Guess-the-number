import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess:{guess}</Text>
    </View>
  );
}
export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 30,
    borderColor: Colors.primary800,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
    padding: 12,
    backgroundColor: Colors.accent500,
    elevation: 8,
  },
  itemText: {
    fontFamily: "open-sans",
  },
});
