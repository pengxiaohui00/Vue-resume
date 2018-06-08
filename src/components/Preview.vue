<template>
    <div id="preview">
        <section >
        <h2>个人信息</h2>
        <p>姓名：<span>{{resume.profile.name  || "请填写您的姓名"}}</span></p>
        <p>城市：<span>{{resume.profile.city  || "请填写您所在城市名称"}}</span></p>
        <p>出生年月：<span>{{resume.profile.birth  || "请填写您的出生年月"}}</span> </p>
         <hr>
        </section>
       
        <section v-if = "filter(resume.workHistory).length > 0" >
            <h2>工作经历</h2>
            <ul>
                <li v-for = "workHistory in filter(resume.workHistory)">
                    <h3>公司：<span>{{workHistory.company}}</span></h3>
                    <p>工作内容：<span>{{workHistory.content}}</span></p>
                </li>
            </ul>
            <hr>
        </section>

        <section v-if = "filter(resume.studyHistory).length > 0" >
            <h2>教育背景</h2>
            <ul>
                <li v-for = "studyHistory in filter(resume.studyHistory)">
                    <p>学校：<span>{{studyHistory.school}}</span><p>
                    <p>在校时间：<span>{{studyHistory.duration}}</span></p>
                    <p>学位：<span>{{studyHistory.degree}}</span></p>
                </li>
            </ul>
            <hr>
        </section>
         
        <section v-if = "filter(resume.projects).length > 0" >
            <h2>项目经历</h2>
            <ul>
                <li v-for = "projects in filter(resume.projects)">
                    <h3>项目名称：<span>{{projects.name}}</span></h3>
                    <p>项目内容：<span>{{projects.content}}</span></p>
                </li>
            </ul>
            <hr>
        </section>
         
        <section v-if = "filter(resume.awards).length > 0" >
            <h2>获奖情况</h2>
            <ul>
                <li v-for = "projects in filter(resume.awards)">
                    <h3>获奖名称：<span>{{awards.name}}</span></h3>
                    <p>获奖详情：<span>{{awards.content}}</span></p>
                </li>
            </ul>
            <hr>
        </section>   
        <section >
        <h2>联系方式</h2>
        <p>QQ:<span>{{ resume.contact.qq|| "请填写您的QQ"}}</span></p>
        <p>微信：<span>{{resume.contact.wechat  || "请填写您的微信"}}</span></p>
        <p>邮箱：<span>{{resume.contact.email || "请填写您的邮箱"}}</span></p>
        <p>手机：<span>{{resume.contact.phone  || "请填写您的手机"}}</span></p>
        <hr>
        </section>
    </div>   
</template>

<script>
export default {
    props:['resume'],
    methods:{
        filter(array){ //找出非空对象
            return  array.filter( item => !this.isEmpty(item))
        },
        isEmpty(object){ //只要有一个value 不是false,就返回false
            let empty = true;
            for(let key in object){
                if(object[key]){
                    empty = false;
                    break 
                }

            }
            return empty;
        }
    }
}
</script>

<style>
#preview{
    min-height: 100px;
}
</style>
