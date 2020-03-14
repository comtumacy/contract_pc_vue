<template>
    <div class="login">
      <span class="title">合同签约管理系统</span>
      <div class="content">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="账号" prop="username">
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>
        </el-form>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="密码" prop="password">
            <el-input v-model="ruleForm.password" show-password></el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary" class="button" v-on:click="enter">登录</el-button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'login',
  components: {},
  props: [],
  created () {
  },
  data () {
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  methods: {
    enter () {
      this.$axios({
        method: 'post',
        url: `${this.$global.url}get/login`,
        data: {
          username: this.ruleForm.username,
          password: this.ruleForm.password
        }
      }).then(res => {
        if (res.data.info === '登录成功') {
          this.$message.success(res.data.info)
          this.$store.dispatch('token_actions', res.data.token)
          this.$store.dispatch('username_actions', res.data.username)
          setTimeout(() => {
            this.$router.push('/index')
          }, 1000)
        } else {
          this.$message.error(res.data.info)
        }
      })
    }
  },
  mounted () {
    document.onkeydown = () => {
      const _key = window.event.keyCode
      if (_key === 13) {
        this.enter()
      }
    }
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
  .login
    position: fixed
    display: flex
    flex-flow column nowrap
    justify-content center
    align-items center
    top 0
    left 0
    right 0
    bottom 0
    width 100%
    height 100%
    background url("../../assets/bg.jpg")
  .title
    bottom: 100px
    position: relative
    font-size: 50px
    color: #fff
  .content
    position: relative
    width: 500px
    height 220px
    background-color: #fff
    padding-top: 60px
    padding-right: 70px
  .button
    position: relative
    top 10px
    left: 100px
    width: 400px
</style>
