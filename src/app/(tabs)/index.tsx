import products from "@/assets/data/products";
import Colors from "@/src/constants/Colors";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

const product = products[0]

export default function TabOneScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image source={{ uri: product?.image }} style={styles.image} />
        <Text style={styles.title}>{product?.name}</Text>
        <Text style={styles.price}>&#8377;{product?.price}/-</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.background,
    padding: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    color: Colors.light.tint
  },
  image:{ 
    width: "100%", 
    aspectRatio: 1
  }
});
