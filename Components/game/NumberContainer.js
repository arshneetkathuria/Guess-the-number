import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/Colors";
function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}
export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    margin: deviceWidth < 380 ? 10 : 24,
    padding: deviceWidth < 380 ? 10 : 24,
    borderWidth: 2,
    borderColor: Colors.accent500,
    borderWidth: 4,
  },
  numberText: {
    fontSize: deviceWidth < 380 ? 28 : 36,
    color: Colors.accent500,
    fontWeight: "bold",
    textAlign: "center",
  },
});
