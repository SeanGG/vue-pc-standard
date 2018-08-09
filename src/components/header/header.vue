<template>
  <section class="header">
    <el-row :gutter="0">
      <el-col :span="16">
        <section class="logo">pc项目样例</section>
      </el-col>
      <el-col :span="8" class="tr">
        <section class="menu">
          <section class="user-name">
            {{user.name}}
          </section>
          <section class="menu-list">
            <section class="menu-cell" :key="index" v-for="(item, index) in menuList" @click="md('item.key')">
              {{item.name}}
            </section>
          </section>
        </section>
      </el-col>
    </el-row>
  </section>
</template>
<style lang="scss" scoped src="./header.scss"></style>

<script>
export default {
  name: 'Header',
  data () {
    return {
      user: {
        name: 'test'
      },
      menuList: [
        {
          name: '密码修改',
          key: 'resetPassword'
        },
        {
          name: '登出',
          key: 'logout'
        }
      ]
    }
  },
  computed: {
  },
  created () {
  },
  methods: {
    md (key) {
      this.$router.push({
        path: key
      })
    }
  }
}
</script>
