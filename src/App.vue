<template>
  <div id="app">
    <el-container>
      <el-header height="auto">
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside width="auto">
          <LeftMenu></LeftMenu>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
      <el-footer height="auto">
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="scss" src="@/assets/styles/common.scss"></style>
