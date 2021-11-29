<template>
<div class="login-page">
    <h4 class="title">登录</h4>
    <van-form class="login-form" @submit="onSubmit">
        <van-field
            v-model="username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">提交</van-button>
        </div>
    </van-form>
</div>
</template>
<style scoped lang="less">
.login-page {
    overflow: hidden;
    height: 100vh;
    width: 100vw;
    background: linear-gradient(-90deg, #4caf50 1px, transparent 1px) 0% 0% / 20px 20px, linear-gradient(#4caf50 1px, transparent 1px) 0% 0% / 20px 20px;
}

.title {
    font-size: 26px;
    margin: 15vh 0 5vh 0;
    text-align: center;
    color: #4caf50;
    letter-spacing: 26px;
    text-indent: 26px;
}

.login-form {
    margin: 4vh 5vw;
    padding: 4vh 5vw;
    background-color: rgb(76 175 80 / 60%);
    border-radius: 10px;
}

.van-cell {
    background-color: transparent;
}

/deep/ .van-field__label{
    color: #ffeb3b;
}

/deep/ .van-field__control {
    color: #fff;
}

/deep/ input::-webkit-input-placeholder{
    color: #ffeb3b;
}
</style>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
