<template>
    <div class="menu-body">
        <menu-item :data="menuData"></menu-item>
    </div>
</template>

<script>
    export default {
        data(){
          return{
              //菜单树的数据
              menuData:[
                  {name:'存储',url:'/overview',level:1,icon:'icon-icon1',isOpen:false,id:1,
                   children:[
                      {name:'server1',url:'/add',level:2,isOpen:false,id:11,
                        children:[
                            {name:'server1-1',url:'/index',level:3,isOpen:false,id:111,
                                children:[
                                    {name:'server2-1',url:'/com',level:4,isOpen:false,id:1111,
                                        children:[
                                            {name:'server2-1-1',url:'/end',level:5,id:11111,isOpen:false}
                                        ]},
                                    {name:'server2-2',url:'/font',level:4,id:2222,isOpen:false}
                                ]},
                            {name:'server2-1',level:3,url:'/hehe',isOpen:false,id:222,
                                children:[
                                    {name:'server2-1',url:'/side',level:4,isOpen:false,id:3232,
                                        children:[
                                            {name:'server2-1-1',url:'/name',level:5,id:34223,isOpen:false}
                                        ]},
                                    {name:'server2-2',level:4,url:'/login',id:2222,isOpen:false}
                                ]
                            },
                            {name:'菜单1-1-3',url:'/haha',level:3,isOpen:false,id:333}
                        ]},
                      {name:'server2',url:'/overview/xcd',level:2,id:22,isOpen:false},
                      {name:'server3',url:'/overview/dcf', level:2,id:33,isOpen:false},
                  ]},
                  {name:'菜单二',url:'/overview/edf',level:1,icon:'icon-cunchu1',isOpen:false,id:2},
                  {name:'菜单三',url:'/overview/cxw',level:1,icon:'icon-bp-',isOpen:false,id:3},
                  {name:'菜单四',url:'/overview/dse',level:1,isOpen:false,id:4,
                    children:[
                        {name:'菜单4-1',url:'/overview/csd',level:2,id:41,isOpen:false},
                        {name:'菜单4-2',url:'/overview/ll',level:2,id:42,isOpen:false},
                        {name:'菜单4-3',url:'/overview/sww',level:2,id:43,isOpen:false}
                    ]}
              ]
          }
        },
        methods: {
        }
    }
</script>

<style lang="scss">
   .menu-body{
       width: 200px;
       height: 100%;
       overflow-y: auto;
       float: left;
   }
   .ant-menu{
       width:200px !important;
   }
</style>
