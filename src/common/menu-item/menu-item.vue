<template>
    <div class="menu-box">
         <ul class="menu-main">
            <li class="menu-item" v-for="(menu,index) in data" :key="index" @click.stop.prevent="singTap(menu)">
                <!-- 判断是否有子元素显示展开箭头 -->
                 <router-link tag='div' :to='menu.url' active-class="bg-color" class="item-list" :style="{'padding-left':menu.level*padLef+'px'}" >
                      <slot v-if=" menu.children && menu.children.length>0 ">
                        <!-- <span class="pull-left" :style="menu.isOpen ? 'transform: rotate(-180deg)':'transform:rotate(0deg)'"><i class="icon iconfont icon-jiantou-copy-copy-copy"></i></span>   -->
                        <i class="icon iconfont icon-jiantou-copy-copy-copy ionc-rotate" :style="menu.isOpen ? 'transform: rotate(-180deg)':'transform:rotate(0deg)'"></i>
                      </slot>
                      <!-- 有图标的item -->
                      <span class="item-title"><i v-if="menu.icon" :class="'icon iconfont '+menu.icon"></i>{{menu.name}}</span>
                 </router-link>
                <menu-item v-if="menu.children" :data="menu.children"  :class="menu.isOpen ? 'open':'menu-tree'"></menu-item>
            </li>
         </ul>
    </div>
</template>

<script>
   export default{
       name:'MenuItem',
       props:['data'],
       created(){
       },
       data(){ 
           return{
             //层级的padding
             padLef:'10',
             activeIndex:0
           }
       },
       methods:{
            setData(data,id){
                // console.log(data);
               if(data&&data.length){
                   data.map(value=>{
                       if(value.id===id){
                           if(!value['isOpen']&&value.children&&value.children.length){
                                   value.children.map(item=>{
                                       item['isOpen']=false;
                                   })
                           }
                           value['isOpen']=!value['isOpen'];
                        }else{
                            value['isOpen']=false;
                            if(value.children&&value.children.length){
                                this.setData(value.children);
                            }
                        }
                    })
               }
            },
           singTap(item){
              //设置一个空数组把当前点击的那一项，去掉便利把所有的兄弟的全置成false
              this.setData(this.data,item.id);  
              console.log(item);
           }
       }
   }
</script>

<style lang="scss">
   /* li宽 */
   .menu-item{
       background: #000000;
       color:#ffffff;
       box-sizing: border-box;
   }
   /* 里面每个div的宽 */
   .item-list{
     padding-right: 10px;
     height: 50px;
     line-height: 50px;
     position: relative;
     &:hover{
           background: #626161;
     }
   }
   /* 更多的菜单 */
   .pull-left{
       display: block;
       width:16px;
       height: 16px;
    //    float: right;
       position: absolute;
       right: 20px;
       transition: .5s all ease;
   }
   /* 图标 */
   .iconfont{
       margin-right: 5px;
   }
   .ionc-rotate{
       display: block;
       position: absolute;
       right: 20px;
       transition: .5s all ease;
       margin-right: 0px;
   }
  /* 菜单列表样式*/
  /*子菜单收起*/
    .menu-tree{
         display: none;
         overflow: hidden;
    }
    .open{
        display: block;
        animation: hideIndex 2s ease-in;
        -moz-animation: hideIndex  2s ease-in; /* Firefox */
        -webkit-animation: hideIndex  2s ease-in; /* Safari and Chrome */
        -o-animation: hideIndex  2s ease-in; /* Opera */
    }
    @keyframes hideIndex{
        0%{ transform: translateY(-800px, 0); opacity: 0 };
        75%{transform: translateY(-50px, 0); opacity: 0.8 };
        100%{ transform: translateY(0, 0);opacity: 1 }
    }

  .bg-color{
       background: #626161;
  }
</style>


