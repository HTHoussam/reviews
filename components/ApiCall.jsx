import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { StyleSheet, Pressable } from "react-native";
import { useCallback } from "react";
import { deleteProduct } from "../api/mutation";

const ApiCall = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    const fetchApi = async () => {
      const result = await fetch("https://dummyjson.com/products");
      const data = await result.json();

      setProducts(data.products);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };
    fetchApi();
  }, []);

  const handleDeleteItem = useCallback(
    (itemId) => {
      const oldData = [...products];
      deleteProduct(itemId)
        .then(() => {
          console.log("deleted");
        })
        .catch(() => {
          setProducts(oldData);
        });
      setProducts((prev) => prev.filter((item) => itemId !== item.id));
    },
    [products]
  );

  if (isLoading) {
    return <ActivityIndicator color={"red"} size={"large"} />;
  }
  return (
    <View>
      <FlatList
        style={{
          marginVertical: 4,
          gap: 14,
          marginBottom: 10,
        }}
        data={products}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.listItemWrapper} key={item}>
              <Text style={styles.listText}>{item.title}</Text>
              <Pressable
                onPress={() => {
                  handleDeleteItem(item.id);
                }}
              >
                <View style={styles.pressableIconWrapper}></View>
              </Pressable>
            </View>
          );
        }}
      />
    </View>
  );
};
export default ApiCall;
const styles = StyleSheet.create({
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
