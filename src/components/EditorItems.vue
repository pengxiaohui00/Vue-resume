<template>
    <div>
        <h2>{{title}}</h2>
        <!-- {{keys}} -->
               <el-form >
               <div class="container" v-for="(work,index ) in items" :key ="index">
                  <el-form-item  v-for="key in keys" v-bind:label="labels[key]||key" :key="key">
              <el-input v-model="work[key]"></el-input>
              </el-form-item>
              <i class="el-icon-circle-close" v-on:click="removeWorkHistory(index)"></i>
              <hr>
               </div>
              <el-button type="primary" plain icon="el-icon-plus" v-on:click="addWorkHistoty()">添加一项</el-button>
              </el-form>
    </div>
</template>
<script>
export default {
    props:['items','labels','title'],
    computed:{
        keys(){
            return Object.keys(this.items[0])
        }
    },
    methods:{
    addWorkHistoty (){
        const empty = {}
        this.keys.map((key) => {
          empty[key] = ''
        })
      this.items.push({
        company:'',content:''
      })
    },
    removeWorkHistory(index){
      this.items.splice(index,1)
    }
    }
}

</script>
