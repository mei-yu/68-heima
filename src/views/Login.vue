<template>
  <div>
  <van-nav-bar
  title="登录"
  left-arrow
  fixed
  placeholder
  @click-left="onClickLeft"
  />
  <logo></logo>
  <van-form @submit="login">
    <van-field
      v-model="username"
      name="帐号"
      label="帐号"
      placeholder="请输入用户名"
      :rules="rules.username"
    />
    <van-field
      v-model="password"
      type="password"
      name="密码"
      label="密码"
      placeholder="请输入密码"
      :rules="rules.password"
    />
    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit">
        提交
      </van-button>
    </div>
    <p>没有帐号？去<router-link to="/register">注册</router-link></p>
  </van-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      rules: {
        username: [
          { required: true, message: '请填写用户名', trigger: onchange },
          { pattern: /^\d{6,12}$/, message: 'q请输入6到12位数字', trigger: onchange }
        ],
        password: [
          { required: true, message: '请填写密码', trigger: onchange },
          { pattern: /^[a-z0-9]{3,12}$/, message: '请输入3到12位数字', trigger: onchange }
        ]
      }
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    async login () {
      const res = await this.$axios.post('/login', {
        username: this.username,
        password: this.password
      })
      const { message, statusCode } = res.data
      if (statusCode === 200) {
        this.$toast.success(message)
        this.$router.push('/user')
      } else {
        this.$toast.fail(message)
      }
    }
  }
}
</script>

<style lang='less'>
.van-nav-bar__title {
  font-weight: 700 !important;
}
p {
  font-size: 16px;
  text-align: right;
  padding-right: 30px;
  a {
  color: #c56;
 }
}
</style>
