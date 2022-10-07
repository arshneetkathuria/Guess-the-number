import { View, Text, Pressable, StyleSheet } from "react-native";
function PrimaryButton({ children, onPress }) {
  return (
    <View>
      <Pressable
        onPress={onPress}
        style={styles.buttonContainer}
        android_ripple={{ color: "#62043" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}
export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#72063c",
    borderRadius: 28,
    elevation: 8,
    margin: 4,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
