import Colors from "@constants/Colors";
import { Link } from "expo-router";
import { Image, Pressable, SafeAreaView, StyleSheet, Text } from "react-native";

type ProductListProps = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export const defaultImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

export default function ProductListItem({
  id,
  name,
  price,
  image,
}: ProductListProps) {
  return (
    <SafeAreaView>
      <Link href={`/menu/${id}`} asChild>
        <Pressable style={styles.container}>
          <Image
            source={{ uri: image || defaultImage }}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.price}>${price}/-</Text>
        </Pressable>
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.background,
    padding: 10,
    borderRadius: 20,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    color: Colors.light.tint,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});
