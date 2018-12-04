<template>
    <div class="menu-box">
         <ul class="menu-main">
            <li class="menu-item" v-for="(menu,index) in data" :key="index" @click.stop.prevent="singTap(menu)">
                <!-- 判断是否有子元素显示展开箭头 -->
                 <router-link tag='div' :to='menu.url' active-class="bg-color" class="item-list" :style="{'padding-left':menu.level*padLef+'px'}" :class="{'bg-color':menu.id===activeIndex}">
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
                           console.log(this.activeIndex);
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
        height:0;
        overflow: hidden;
        opacity: 0;
        transition: 2s all ease;
    }
    .open{
        // height:200px;
        // height: none !important;
        // height: 400px;
        // min-height:100px;
        opacity: 1;
        overflow:visible;
        transition: 2s all ease;
    }
   
  .bg-color{
       background: #626161;
  }
</style>


