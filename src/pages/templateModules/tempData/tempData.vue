<template>
  <section class="tmp">
    <el-table :data="tableData" ref="multipleTable" stripe style="width: 100%" max-height="250" highlight-current-row>
      <el-table-column type="selection" width="55" fixed>
      </el-table-column>
      <el-table-column type="index" label="序号" width="55" fixed>
      </el-table-column>
      <el-table-column prop="date" label="日期" width="180" sortable>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="100" :filters="filtersList" :filter-method="filterHandler">
      </el-table-column>
      <el-table-column prop="address" label="地址" width="180" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="address1" label="地址" width="180">
      </el-table-column>
      <el-table-column prop="address2" label="地址" min-width="280">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>
    <div class="block tr mb-10">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="100" layout="prev, pager, next, jumper" :total="1000" background>
      </el-pagination>
    </div>
    <el-row :gutter="10" class="mb-10">
      <el-col :span="24">
        <el-progress type="circle" :percentage="0"></el-progress>
        <el-progress type="circle" :percentage="25"></el-progress>
        <el-progress type="circle" :percentage="80" color="#8e71c7"></el-progress>
        <el-progress type="circle" :percentage="100" status="success"></el-progress>
        <el-progress type="circle" :percentage="50" status="exception"></el-progress>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="mb-10">
      <el-col :span="24">
        <el-progress :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="80" color="rgba(142, 113, 199, 0.7)"></el-progress>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="mb-10">
      <el-col :span="24">
        <el-progress :percentage="0"></el-progress>
        <el-progress :percentage="70"></el-progress>
        <el-progress :percentage="80" color="#8e71c7"></el-progress>
        <el-progress :percentage="100" status="success"></el-progress>
        <el-progress :percentage="50" status="exception"></el-progress>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="mb-10">
      <el-col :span="24">
        <el-tag>标签一</el-tag>
        <el-tag type="success">标签二</el-tag>
        <el-tag type="info">标签三</el-tag>
        <el-tag type="warning">标签四</el-tag>
        <el-tag type="danger">标签五</el-tag>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="mb-10">
      <el-col :span="24">
        <el-badge :value="12" class="item">
          <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge :value="3" class="item">
          <el-button size="small">回复</el-button>
        </el-badge>
      </el-col>
    </el-row>
  </section>
</template>
<style lang="scss" scoped src="./tempData.scss"></style>

<script>
export default {
  name: 'TempData',
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        address1: '上海市普陀区金沙江路 1518 弄',
        address2: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        address1: '上海市普陀区金沙江路 1518 弄',
        address2: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎1',
        address: '上海市普陀区金沙江路 1519 弄',
        address1: '上海市普陀区金沙江路 1518 弄',
        address2: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        address1: '上海市普陀区金沙江路 1518 弄',
        address2: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address1: '上海市普陀区金沙江路 1518 弄',
        address2: '上海市普陀区金沙江路 1518 弄',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        address1: '上海市普陀区金沙江路 1518 弄',
        address2: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        address1: '上海市普陀区金沙江路 1518 弄',
        address2: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        address1: '上海市普陀区金沙江路 1518 弄',
        address2: '上海市普陀区金沙江路 1518 弄'
      }],
      currentPage: 1
      // filtersList:[]
    }
  },
  computed: {
    filtersList () {
      let list = []
      let cfList = []
      this.tableData.map((item) => {
        cfList.push({ value: item.name, text: item.name })
      })
      list = cfList.reduce(function (newList, next) {
        // console.log(newList)
        if (newList.length > 0) {
          let cfStatus = false
          newList.map((item) => {
            if (item.value === next.value) {
              cfStatus = true
            }
          })
          if (!cfStatus) {
            newList.push(next)
          }
        } else {
          newList.push(next)
        }
        return newList
      }, [])
      // console.log(JSON.stringify(list))
      return list
    }
  },
  created () {
  },
  methods: {
    toggleSelection (rows) {
      console.log(rows)
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    filterHandler (value, row, column) {
      const property = column['property']
      return row[property] === value
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>
