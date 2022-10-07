import { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import PrimaryButton from "../Components/ui/PrimaryButton";
import Colors from "../constants/Colors";
import Title from "../Components/ui/Title";
import Card from "../Components/ui/Card";
import InstructionText from "../Components/ui/InstructionText";

function StartGameScreen({ onPickNumber }) {
  const [enteredValue, setEnteredValue] = useState("");
  const { width, height } = useWindowDimensions();

  function numberInputHandler(enteredText) {
    setEnteredValue(enteredText);
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid!", "Number has to be between 1 nad 99.", [
        { text: "Okay", style: "destructive", onPress: resetHandler },
      ]);
      return;
    }
    onPickNumber(chosenNumber);
  }
  function resetHandler() {
    setEnteredValue("");
  }

  const marginTopDistance = height < 450 ? 30 : 100;
  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
              value={enteredValue}
              style={styles.numberInput}
              maxLength={2}
              onChangeText={numberInputHandler}
              keyboardType="number-pad"
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: { flex: 1 },
  rootContainer: {
    alignItems: "center",
  },
  inputContainer: {
    marginHorizontal: 16,
    marginTop: 36,
    padding: 16,
    backgroundColor: Colors.primary800,
    elevation: 8,
    borderRadius: 10,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    fontFamily: "open-sans-bold",
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer: {
    flex: 1,
  },
  instructionText: {
    fontSize: 22,
    color: Colors.accent500,
    fontFamily: "open-sans",
  },
});
