<template>
  <div class="home">
    <el-checkbox-group v-model="checkList" @change="checkboxChange">
      <el-checkbox v-for="(item,index) in list" :label="item.roleId" :key="index">{{item.roleName}}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      url: process.env.VUE_APP_URL,
      checkList: [], //具体的id
      list: [
        {
          "roleId": "11907925132423208",
          "roleName": "测试角色",
          "roleDesc": "请问请问",
          "enableStatus": 1
        },
        {
          "roleId": "11907612382564356",
          "roleName": "菜鸡",
          "roleDesc": "这是第一个角色wefsds df sdfs asdsdasdaasdasd",
          "enableStatus": 1
        },
        {
          "roleId": "11907925132423235",
          "roleName": "这是一个角色",
          "roleDesc": "这是一个角色描述",
          "enableStatus": 1
        }
      ], //数组
    }
  },
  methods: {
    checkboxChange(val) {
      console.log(val)
    }
  },
}
</script>
