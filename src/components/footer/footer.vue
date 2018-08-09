<template>
  <section class="footer">
    <el-row :gutter="0">
      <el-col :span="24">
        <section class="copyright">@copyright pc项目样例</section>
      </el-col>
    </el-row>
  </section>
</template>
<style lang="scss" scoped src="./footer.scss"></style>

<script>
export default {
  name: 'Footer',
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
