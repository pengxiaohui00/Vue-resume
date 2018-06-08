<template>
  <div id="app" v-bind:class="{previewMode:previewMode}">
  <Topbar class="topbar"   v-on:preview="preview"/>
  <main>
     <Editor class="editor" v-bind:resume="resume"/>
   <Preview class="preview" v-bind:resume="resume"/>
  </main>
   <el-button type="success" id="exitpreview" v-on:click="exitpreview">退出预览</el-button>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import Editor from './components/Editor'
import Preview from './components/Preview'
export default {
  data() {
      return{
        previewMode:false,
        resume:{
       profile:{
          name:'', 
          city:'',
          birth:''
      },
      contact:{
          qq:'', 
          wechat:'',
          email:'',
          phone:''
      },
      workHistory:[
        {company:'',content:'',},
      ],
      studyHistory:[
        {school:'',duration:'',degree:''}
      ],
      projects:[
        {name:'',content:''}
      ],
      awards:[
        {name:'',content:''}
      ],
        }
      }
  },
  methods:{
      preview(){
        this.previewMode = true ;
      },
      exitpreview(){
         this.previewMode = false;
      },
  },
  components: {
    Topbar,Editor,Preview
  },

 
}
</script>

<style lang='scss'>

html,body,#app{
  height:100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.topbar{
  position: relative;
  z-index: 1;
  box-shadow: 0 0 5px hsla(0, 0, 0, 0.5);
  background-color: #fff;
  
}
.icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
    
#app main {
  display: flex;
  flex:1;
  background-color: #dddddd;
  box-shadow: 0 0 5px hsla(0, 0, 0, 0.5);
   >.editor {
   width: 40em;
   margin: 20px 10px 20px 20px;
   border-radius: 5px;
   background-color: #fff;
   overflow:auto; 
}
 >.preview{
   flex: 1;
   margin: 20px 20px 20px 10px;
   border-radius: 5px;
   background-color: #fff;
}
}
#app.previewMode #topbar{
  display:none;
}
#app.previewMode #editor{
  display: none;
}
#exitpreview{
  display:none;
}
.previewMode #exitpreview{
  display:inline-block;
  position: fixed;
  top:20px;
  right:20px;
}


</style>
