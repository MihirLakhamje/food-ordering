import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import products from "@assets/data/products";
import { PizzaSize, Product } from "@/types";
import Button from "@components/Button";
import { useCart } from "@/providers/CardProvider";

const size: PizzaSize[] = ["S", "M", "L", "XL"];

export default function productDetailsScreen() {
  const { id } = useLocalSearchParams();
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = React.useState<PizzaSize>("M");
  const product = products.find((p: Product) => p.id.toString() == id);
  const { push } = useRouter();
  function handleAddToCart() {
    if (!product) return <Text>Product not found</Text>;
    addItem(product, selectedSize);
    push("/cart");
  }
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product?.name }} />
      <Image source={{ uri: product?.image }} style={styles.image} />
      <Text>Select size</Text>
      <View style={styles.sizes}>
        {size &&
          size.map((s) => (
            <Pressable
              onPress={() => setSelectedSize(s)}
              key={s}
              style={[
                styles.size,
                { backgroundColor: s === selectedSize ? "lightgray" : "white" },
              ]}
            >
              <Text style={styles.sizeText}>{s}</Text>
            </Pressable>
          ))}
      </View>
      <Text style={styles.price}>${product?.price}</Text>
      <Button text="Add to cart" onPress={handleAddToCart} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: "auto",
  },
  sizes: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  sizeText: {
    fontSize: 20,
    fontWeight: "600",
  },
  size: {
    backgroundColor: "lightgray",
    width: 40,
    aspectRatio: 1,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});
