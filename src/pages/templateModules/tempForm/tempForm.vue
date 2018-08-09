<template>
  <section class="tmp">
    <section class="form-grid">
      <el-form ref="form" :model="form" label-width="80px">
        <el-row :gutter="10">
          <el-col :span="8">
            <el-form-item label="活动名称">
              <el-input v-model="form.input" placeholder="请输入内容"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="活动名称">
              <el-switch v-model="form.switchValue" active-color="#13ce66" inactive-color="#ff4949">
              </el-switch>
            </el-form-item>
          </el-col>
          <el-col :span="8">
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="活动名称">
              <el-select v-model="form.select1" placeholder="默认下拉框请选择">
                <el-option v-for="item in select1options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="活动名称">
              <el-select v-model="form.select2" disabled placeholder="禁用下拉框">
                <el-option v-for="item in select1options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="活动名称">
              <el-select v-model="form.select3" multiple filterable remote reserve-keyword placeholder="远程查询下拉框" :remote-method="remoteMethod" :loading="loading">
                <el-option v-for="item in select2options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="活动名称">
              <el-input-number v-model="form.number" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="活动名称">
              <el-radio-group v-model="form.radio2">
                <el-radio :label="1">备选项1</el-radio>
                <el-radio :label="2">备选项2</el-radio>
                <el-radio :label="3">备选项3</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="活动名称">
              <el-checkbox-group v-model="form.checkList">
                <el-checkbox label="复选框 A"></el-checkbox>
                <el-checkbox label="复选框 B"></el-checkbox>
                <el-checkbox label="复选框 C"></el-checkbox>
                <el-checkbox label="禁用" disabled></el-checkbox>
                <el-checkbox label="选中且禁用" disabled></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="活动名称">
              <!-- <el-slider v-model="sliderValue" :show-tooltip="false"></el-slider> -->
              <el-slider v-model="form.sliderValue"></el-slider>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="活动名称">
              <el-time-picker is-range v-model="form.timepickerValue" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" placeholder="选择时间范围">
              </el-time-picker>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="活动名称">
              <el-time-picker is-range arrow-control v-model="form.timepickerValue2" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" placeholder="选择时间范围">
              </el-time-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="活动名称">
              <el-date-picker v-model="form.datapickerValue" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="活动名称">
              <el-date-picker v-model="form.datapickerValue2" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="datapickerOptions">
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="活动名称">
              <el-rate v-model="form.rateValue" :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
              </el-rate>
            </el-form-item>
          </el-col>
          <!-- <el-col :span="8">
          <el-form-item label="活动名称">
            <el-rate v-model="rateValue2" :icon-classes="['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3']" void-icon-class="icon-rate-face-off" :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
            </el-rate>
          </el-form-item>
        </el-col> -->
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-transfer filterable :filter-method="filterMethod" filter-placeholder="请输入城市拼音" v-model="form.transferValue" :data="transferData">
            </el-transfer>
          </el-col>
        </el-row>
      </el-form>
    </section>
  </section>
</template>
<style lang="scss" scoped src="./tempForm.scss"></style>

<script>
export default {
  name: 'Temp',
  data () {
    const generateData2 = _ => {
      const data = []
      const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都']
      const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu']
      cities.forEach((city, index) => {
        data.push({
          label: city,
          key: index,
          pinyin: pinyin[index]
        })
      })
      return data
    }
    return {
      form: {
        input: '',
        select1: '',
        select2: '',
        select3: '',
        switchValue: '',
        radio2: '',
        checkList: [],
        number: 1,
        sliderValue: 0,
        timepickerValue: '',
        timepickerValue2: '',
        datapickerValue: '',
        datapickerValue2: '',
        rateValue: null,
        rateValue2: null,
        transferValue: []
      },

      select1options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      select2options: [],
      transferData: generateData2(),
      filterMethod (query, item) {
        return item.pinyin.indexOf(query) > -1
      },
      list: [],
      states: ['Alabama', 'Alaska', 'Arizona',
        'Arkansas', 'California', 'Colorado',
        'Connecticut', 'Delaware', 'Florida',
        'Georgia', 'Hawaii', 'Idaho', 'Illinois',
        'Indiana', 'Iowa', 'Kansas', 'Kentucky',
        'Louisiana', 'Maine', 'Maryland',
        'Massachusetts', 'Michigan', 'Minnesota',
        'Mississippi', 'Missouri', 'Montana',
        'Nebraska', 'Nevada', 'New Hampshire',
        'New Jersey', 'New Mexico', 'New York',
        'North Carolina', 'North Dakota', 'Ohio',
        'Oklahoma', 'Oregon', 'Pennsylvania',
        'Rhode Island', 'South Carolina',
        'South Dakota', 'Tennessee', 'Texas',
        'Utah', 'Vermont', 'Virginia',
        'Washington', 'West Virginia', 'Wisconsin',
        'Wyoming'],
      loading: false,
      datapickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      }
    }
  },
  mounted () {
    this.list = this.states.map(item => {
      return { value: item, label: item }
    })
  },
  computed: {
  },
  created () {
  },
  methods: {
    handleChange (value) {
      console.log(value)
    },
    // 远程查询下拉框
    remoteMethod (query) {
      if (query !== '') {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.select2options = this.list.filter(item => {
            return item.label.toLowerCase()
              .indexOf(query.toLowerCase()) > -1
          })
        }, 200)
      } else {
        this.select2options = []
      }
    }
  }
}
</script>
