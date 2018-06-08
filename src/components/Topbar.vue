<template>
    <div id='topbar'>
        <div class="logo">
            VueResumer
        </div>
        <div class="action">
  <el-button type="primary">注册</el-button>
  <el-button type="success">登入</el-button>
  <el-button type="success" v-on:click="preview">预览</el-button>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        preview(){
            this.$emit('preview')
            console.log("a");
        }
    }
}
</script>


<style lang='scss'>

#topbar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    font-size: 20px;
}
</style>
