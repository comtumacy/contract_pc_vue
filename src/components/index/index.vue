<template>
  <div class="index">
    <div class="table">
      <el-table
        :data="tableData"
        height="600"
        border
        style="width: 100%"
        max-height="500">
        <el-table-column
          :prop="title1[index]"
          :label="title2[index]"
          width="180"
          align="center"
          header-align="center"
          :fixed="index === 0 ? true : false"
          v-for="(item, index) in title1"
          :key="index">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  components: {},
  props: [],
  created () {
    this.$axios({
      method: 'post',
      url: `${this.$global.url}get/info`,
      data: {
        token: this.$store.getters.token_getters,
        username: this.$store.getters.username_getters
      }
    }).then(res => {
      this.tableData = res.data.content
      this.title1 = res.data.title1
      this.title2 = res.data.title2
    })
  },
  data () {
    return {
      tableData: [],
      title1: [],
      title2: []
    }
  },
  computed: {},
  watch: {},
  methods: {
  },
  mounted () {
  },
  updated () {
  },
  beforeDestroy () {
  },
  destroyed () {
  }
}
</script>

<style lang="stylus">
  .index
    position relative
    display: flex
    justify-content center
    align-items center
    flex-flow column nowrap
  .table
    position: relative
    top 200px
    width 1500px
</style>
