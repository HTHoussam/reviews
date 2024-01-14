import { StatusBar } from "expo-status-bar";
import { useCallback, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [title, setTitle] = useState("my title");

  const handleTextChange = useCallback(
    (enteredText) => {
      setTitle(enteredText);
    },
    [setTitle]
  );
  const handlePressButton = useCallback(() => {
    console.log(title);
  }, [title]);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text>Enter you notes {title}</Text>
        <TextInput
          onChangeText={handleTextChange}
          placeholder="Note"
          style={styles.input}
        />
      </View>
      <Button onPress={handlePressButton} title="button" color={"red"} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 30,
  },
  inputContainer: {
    paddingTop: 50,
    alignItems: "center",
    textAlign: "center",
    gap: 4,
    borderBottomColor: "black",
  },
  input: {
    marginBottom: 10,
    fontSize: 14,
    borderRadius: 8,
  },
});
