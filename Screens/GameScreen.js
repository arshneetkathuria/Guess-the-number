import { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Alert,
  FlatList,
  useWindowDimensions,
} from "react-native";
import Title from "../Components/ui/Title";
import Colors from "../constants/Colors";
import NumberContainer from "../Components/game/NumberContainer";
import PrimaryButton from "../Components/ui/PrimaryButton";
import Card from "../Components/ui/Card";
import InstructionText from "../Components/ui/InstructionText";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../Components/game/GuessLogItem";

let minBoundary = 1;
let maxBoundary = 100;

//

function GameScreen({ userNumber, GameIsOver }) {
  const initialGuessedNumber = generateRandomNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuessedNumber);
  const [guessRounds, setGuessRounds] = useState([initialGuessedNumber]);
  const { width, height } = useWindowDimensions();
  const numberOfRounds = guessRounds.length;
  var content;

  useEffect(() => {
    if (currentGuess === userNumber) {
      GameIsOver(numberOfRounds);
    }
  }, [currentGuess, userNumber, GameIsOver]);

  function generateRandomNumber(min, max, exclude) {
    const rndmNumber = Math.floor(Math.random() * (max - min) + min);
    if (rndmNumber === exclude) return generateRandomNumber(min, max, exclude);
    else return rndmNumber;
  }

  function nextRandomNumber(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!!", "You know that this is wrong...", [
        { text: "Sorry!!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRandomNumber = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess
    );

    setCurrentGuess(newRandomNumber);
    setGuessRounds((prevRounds) => [newRandomNumber, ...prevRounds]);
  }

  if (width < 500) {
    content = (
      <>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
          <InstructionText style={styles.instructionText}>
            Higher or Lower?
          </InstructionText>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={nextRandomNumber.bind(this, "lower")}>
                <Ionicons name="md-remove" size={24} />
              </PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={nextRandomNumber.bind(this, "greater")}>
                <Ionicons name="md-add" size={24} />
              </PrimaryButton>
            </View>
          </View>
        </Card>
      </>
    );
  }
  if (width > 500) {
    content = (
      <>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextRandomNumber.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} />
            </PrimaryButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextRandomNumber.bind(this, "greater")}>
              <Ionicons name="md-add" size={24} />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={numberOfRounds - itemData.index}
              guess={itemData.item}
            >
              {itemData.item}
            </GuessLogItem>
          )}
          keyExtractor={(item) => item}
        ></FlatList>
      </View>
    </View>
  );
}
export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 24,
    margin: 16,
    alignItems: "center",
  },
  instructionText: {
    marginBottom: 16,
    fontFamily: "open-sans",
  },
  title: {
    fontSize: 24,
    fontFamily: "open-sans-bold",
    color: Colors.accent500,
    borderWidth: 2,
    borderColor: Colors.accent500,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
  },
  listContainer: {
    height: "53%",
    padding: 16,
  },
});
