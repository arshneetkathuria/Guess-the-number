import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/Colors";
function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}
export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 16,
    marginTop: deviceWidth < 380 ? 18 : 36,
    padding: 16,
    backgroundColor: Colors.primary800,
    elevation: 8,
    borderRadius: 10,
    alignItems: "center",
  },
});
