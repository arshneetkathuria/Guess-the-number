import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import Colors from "../constants/Colors";
import Title from "../Components/ui/Title";
import PrimaryButton from "../Components/ui/PrimaryButton";
function GameOverScreen({ userNumber, roundsNumber, onStartGame }) {
  const { width, height } = useWindowDimensions();
  let imageSize = 300;
  if (width < 380) {
    imageSize = 150;
  }
  if (height < 300) {
    imageSize = 80;
  }
  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title style={styles.title}>Game Over!</Title>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/images/success.png")}
            style={[styles.image, imageStyle]}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed{" "}
          <Text style={styles.highlightText}>{roundsNumber}</Text> round to
          guess the number{" "}
          <Text style={styles.highlightText}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartGame}>Start Game</PrimaryButton>
      </View>
    </ScrollView>
  );
}
export default GameOverScreen;

const styles = StyleSheet.create({
  // screen: { flex: 1 },
  rootContainer: {
    // height: "100%",
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    padding: 16,
    textTransform: "uppercase",
  },
  imageContainer: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    // borderRadius: deviceWidth < 380 ? 75 : 150,
    borderColor: Colors.primary800,
    borderWidth: 2,
    overflow: "hidden",
    marginTop: 30,
    marginBottom: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlightText: {
    fontFamily: "open-sans-bold",
    color: Colors.primary800,
  },
});
