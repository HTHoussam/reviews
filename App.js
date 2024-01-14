import { StatusBar } from "expo-status-bar";
import { useCallback, useState } from "react";
import {
  Button,
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [title, setTitle] = useState("");
  const [notesList, setNotesList] = useState([]);

  const handleTextChange = useCallback(
    (enteredText) => {
      setTitle(enteredText);
    },
    [setTitle]
  );
  const handlePressButton = useCallback(() => {
    if (title.length <= 0) return;
    setNotesList((prev) => [...prev, title]);
    setTitle("");
  }, [title]);
  const handleDeleteItem = useCallback((itemIndex) => {
    setNotesList((prev) => prev.filter((item, index) => index !== itemIndex));
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text>Enter you notes {title}</Text>
        <TextInput
          value={title}
          onChangeText={handleTextChange}
          placeholder="Note"
          style={styles.input}
        />
      </View>
      <Button onPress={handlePressButton} title="button" color={"red"} />
      <ScrollView>
        <FlatList
          data={notesList}
          renderItem={({ item, index }) => (
            <View style={styles.listItemWrapper} key={item}>
              <Text style={styles.listText}>{item}</Text>
              <Pressable onPress={() => handleDeleteItem(index)}>
                <View style={styles.pressableIconWrapper}></View>
              </Pressable>
            </View>
          )}
        />
      </ScrollView>
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
  listText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  listItemWrapper: {
    padding: 5,
    marginTop: 4,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pressableIconWrapper: {
    backgroundColor: "red",
    width: 30,
    height: 30,
  },
});
