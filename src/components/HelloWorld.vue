<template>
  <div>
    <h1>{{mainStore.count}}</h1>
    <p>{{mainStore.foo}}</p>
    <ul>
      <li v-for="(item, index) in mainStore.arrList" :key="index">{{item}}</li>
    </ul>
    <p>{{mainStore.count10}}</p>
    <p>{{mainStore.count10}}</p>
    <p>{{mainStore.count10}}</p>
    <hr>

    <h1>{{count}}</h1>
    <p>{{foo}}</p>

    <hr>
    <p>
      <button @click="handleChangeState">修改数据</button>
    </p>
  </div>
</template>
<script lang="ts" setup>
import { useMainStore } from '../store'
import { storeToRefs } from 'pinia'

// 得到容器实例
const mainStore = useMainStore()

console.log(mainStore.count)

// 结构出Store中的数据，这是有问题的，因为这样拿到的数据不是响应式的，是一次性的
// Pinia 其实就是把 state 数据都做了 reactive处理的
// const {count,foo} = mainStore

// 解决办法就是使用 storeToRefs
// 把解构出来的数据做 ref 响应式代理
const {count ,foo} = storeToRefs(mainStore)

// 这里的count外面被包裹了一层ref
console.log(count)
console.log(count.value)

const handleChangeState = () => {
  // 方式一：最简单的方式修改数据
  // mainStore.count++
  // mainStore.foo = 'hello'

  // 方式二：如果需要修改多个数据，建议使用 $patch 批量修改，具有性能优化的效果
  // mainStore.$patch({
  //   count: mainStore.count + 1,
  //   foo: 'hello',
  //   arrList: [...mainStore.arrList, 4]
  // })

  // 方式三：更好的批量更新的方式$patch 一个函数，批量更新
  // mainStore.$patch(state => {
  //   state.count++
  //   state.foo = 'hello'
  //   state.arrList.push(555)
  // })

  // 方式四：逻辑比较多的时候，可以封装到 actions 做处理
  mainStore.changeState(10)
}

</script>
<style>
  
</style>