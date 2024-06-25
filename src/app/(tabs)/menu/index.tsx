import products from "@assets/data/products";
import ProductListItem from "@components/ProductListItem";
import { FlatList, SafeAreaView, ScrollView, View } from "react-native";

export default function TabOneScreen() {
  return (
    <SafeAreaView>
        <FlatList
          data={products}
          renderItem={({ item }) => <ProductListItem {...item} />}
          contentContainerStyle={{ gap: 20, padding: 10}}
        />
    </SafeAreaView>
  );
}
