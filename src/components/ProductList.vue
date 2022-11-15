<template>
  <ul>
    <li v-for="(item, index) in productsStore.all" :key="index">
      {{item.title}} - {{item.price}}
      <button @click="cartStore.addProductsToCart(item)" :disable="!item.inventory">添加到购物车</button>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import {useProductsStore} from '../store/products'
import {useCartStore} from '../store/cart'

const productsStore = useProductsStore()
const cartStore = useCartStore()

// 加载所有数据
productsStore.loadAllProducts()
</script>