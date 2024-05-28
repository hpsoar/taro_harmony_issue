import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import Taro from '@tarojs/taro'
import './index.scss'

const app = Taro.getApp()

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
    console.log(`${app}`)
  })

  return (
    <View className='index'>
      <Text>Hello world!</Text>
    </View>
  )
}
