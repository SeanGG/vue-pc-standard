<template>
  <section class="tmp">
    <el-row :gutter="10" class="mb-10">
      <el-col :span="24">
        <el-alert title="成功提示的文案" type="success">
        </el-alert>
        <el-alert title="消息提示的文案" type="info">
        </el-alert>
        <el-alert title="警告提示的文案" type="warning">
        </el-alert>
        <el-alert title="错误提示的文案" type="error">
        </el-alert>
      </el-col>
    </el-row>

  </section>
</template>
<style lang="scss" scoped src="./tempNotice.scss"></style>

<script>
export default {
  name: 'tempNotice',
  data () {
    return {
    }
  },
  computed: {
  },
  created () {
  },
  methods: {
  }
}
</script>
