import React from 'react'
import { FlatList, Image, Text, View, StyleSheet, Button, Pressable } from 'react-native'
import { ProductData } from '../constant'
const ProductCard = () => {
  return (
    <View style={styles.container}>
        <FlatList
            data={ProductData}
            numColumns={2}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image
                        source={item.imageUrl}
                        style={styles.image}
                        
                        />
                    <Text style={styles.title}>{item.name}</Text>
                    <View style={styles.last}>
                        <Text style={styles.price}>${item.price}</Text>
                        <Pressable style={styles.button}>
                            <Text> > </Text>
                        </Pressable>
                    </View>
                    </View>
                )}
        />
    </View>
  )
}

export default ProductCard

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'row',
    },
    card: {
        
        backgroundColor: '#1E1E1E',
        borderRadius: 20,
        padding: 10,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 180,
        height: 240,
        
    },
    image: {
        width: 180,
        height: 150,
        borderRadius: 10,
        marginBottom: 10,
        resizeMode: 'contain',
        
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        
    },
    last:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
    },
    price: {
        fontSize: 14,
        color: 'limegreen',
    },
    button:{
        backgroundColor: 'limegreen',
        borderRadius: 5,
        padding: 2,
    }
})
