<template>
    <div id="editor">
        <nav>
            <ol>
                <li v-for = "i in  [0,1,2,3,4,5]"
                    v-bind:class ="{active:currentTab === i}"
                    v-on:click ="currentTab = i">
                      <svg class="icon" >
                  <use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
                 </svg>
                </li>
                <!-- <li v-bind:class="{active:currentTab === 0}" v-on:click="currentTab = 0">
                    <svg class="icon " >
                  <use xlink:href="#icon-shenfen"></use>
                 </svg>
                </li>
                <li v-bind:class="{active:currentTab === 1}" v-on:click="currentTab = 1">
                    <svg class="icon" >
                  <use xlink:href="#icon-gongzuo"></use>
                 </svg>
                </li>
                <li v-bind:class="{active:currentTab === 2}" v-on:click="currentTab = 2">
                    <svg class="icon" >
                  <use xlink:href="#icon-keyanxiangmu"></use>
                 </svg>
                </li>
                <li v-bind:class="{active:currentTab === 3}" v-on:click="currentTab = 3">
                    <svg class="icon" >
                  <use xlink:href="#icon-aixin_fuzhi"></use>
                 </svg>
                </li>
                <li v-bind:class="{active:currentTab === 4}" v-on:click="currentTab = 4">
                    <svg class="icon" >
                  <use xlink:href="#icon-jiangbei"></use>
                 </svg>
                </li>
                <li v-bind:class="{active:currentTab === 5}" v-on:click="currentTab = 5">
                    <svg class="icon" >
                  <use xlink:href="#icon-dianhua"></use>
                 </svg>
                </li>        -->
            </ol>
        </nav>

        <ol class="panes">
            <!-- <li v-for= "i in [0,1,2,3,4,5]" v-bind:class="{active: currentTab === i}">
                tab {{i}}
                </li> -->

          <li v-bind:class="{active:currentTab ===0}">
          <EditorProfile v-bind:profile="resume.profile"/>
       </li>
            <li v-bind:class ="{active:currentTab ===1}">
              <EditorItems v-bind:items='resume.workHistory' v-bind:labels="{company:'公司',content:'工作内容'}" title="工作经历"/>
            </li>
            <li v-bind:class ="{active:currentTab ===2}">
              <EditorItems v-bind:items="resume.studyHistory" v-bind:labels="{school:'学校',duration:'时间',degree:'学位'}" title="学习经历"/>
            <li v-bind:class ="{active:currentTab ===3}">
              <EditorItems v-bind:items="resume.projects" v-bind:labels="{name:'项目名称',content:'工作内容'}" title="项目经历"/>
            </li>
            <li v-bind:class ="{active:currentTab ===4}">
              <EditorItems v-bind:items="resume.awards" v-bind:labels="{name:'获奖名称',content:'获奖详情'}" title="获奖经历"/>              
            </li>
            <li v-bind:class ="{active:currentTab ===5}">
              <EditorContact v-bind:contact="resume.contact"/>
              </li>  
        </ol>
    </div>
</template>

<script>
import    EditorProfile  from './EditorProfile'
import    EditorItems    from './EditorItems'
import    EditorContact    from './EditorContact'
export default {
  components:{EditorProfile,EditorItems,EditorContact},
  props:['resume'],
  data() {
    return {
      currentTab: 0,
      icons: [
        "shenfen",
        "gongzuo",
        "drxx18",
        "keyanxiangmu",
        "jiangbei",
        "dianhua"
      ],
    }
  },
  methods:{
   
  },
  created(){
      // console.log(this.profile)
      // setTimeout(()=>{
      //     console.log(this.profile)
      // },10000)
  }
}
</script>


<style lang='scss'>
#editor {
  min-height: 100px;
  display: flex;
  > nav {
    background-color: #000;
    width: 80px;

    > ol > li {
      padding: 16px 0;
      text-align: center;

      > .icon {
        width: 30px;
        height: 30px;
      }
    }
    li.active {
      background-color: #ccc;
      > .icon {
        fill: #f00;
      }
    }
  }
  > .panes {
    flex:1;
    .container{
     position: relative;
     .el-icon-circle-close{
       position: absolute;
       font-size: 20px;
       right: 0 ;
       top: 0;
     }
    }
    > li {
      display: none;
      padding: 20px;
      color: rgb(0, 183, 255);
      height: 100%;
      overflow: auto;
    }
    > li.active {
      display: block;
    }
  }
}
</style>
