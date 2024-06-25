import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useCart } from '@/providers/CardProvider';
import CartListItem from '@/components/CartListItem';

export default function CardScreen() {
  const { items } = useCart();
  return (
    <View>
      <FlatList data={items}  renderItem={({ item }) => <CartListItem cartItem={item} />} keyExtractor={(item) => item.id} contentContainerStyle={{ gap: 20, padding: 10 }}  />
    </View>
  )
}