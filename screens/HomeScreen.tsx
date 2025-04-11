import React from 'react'
import ProductCard from '../components/ProductCard'
import { Image, View } from 'react-native'

const HomeScreen = () => {
  return (
    <View>
        <Image 
        source={require('../assets/images/product1.png')}
        style={{ width: '100%', height: 200, borderRadius: 10 }}
        
        />
        <ProductCard />
    </View>
  )
}

export default HomeScreen
