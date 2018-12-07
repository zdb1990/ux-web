<template>
   <!-- 最外层的选择框 v-clickoutside当鼠标点击指令所绑定的元素外部,就会触发绑定方法 -->
   <div class="ats-tree" v-clickoutside="handleCloseTree">
       <!-- 里面的input框 -->
      <div class="ats-input" @mouseenter="hovering=true" @mouseleave="hovering=false">
          <!-- 默认没有展开的输入框 并且里面有选中值 -->
          <div class="ats-input-single" v-if="!this.multiple">
              <i class="ats-input__icon icon iconfont icon-jiantou"
                  :class="{'is-reverse':treeVisible,'icon iconfont icon-shanchu':showCloseIcon}"
                  @click="handleCloseTree(!treeVisible)"
              ></i>
              <!-- input框 -->
              <input type="text" 
               class="el_input_inner"
               v-model="treeSelected"
               :placeholder="placetext"
               @input="handleFilter"
               @focus="treeVisible=true"
               @blur="handleAutoComplete"
              >
          </div>
      </div>
      <!-- 点击input框展现子内容 -->
      <div v-show="treeVisible" class="ats-tree-scrollbar">
          <div class="ats-tree-wrapper">
              <ul class="ats-tree-nodes">
                  <tree-node
                    v-for="child in node[treeProps.children]"
                    :node="child"
                    :key="child.id"
                    :treeProps="treeProps"
                    :currentNodeId="currentNodeId"
                    :eventHub="eventHub"
                    :query="query"
                    :isQuery="isQuery"
                >
                 </tree-node>
              </ul>
          </div>
      </div>
   </div>
</template>
<script>
 //处理用户输入不那么频繁的想后台请求
 import {debounce} from "throttle-debounce";
 //引入子节点
 import treeNode from "./tree-node";
 export default {
    name:'tree-select',
    components:{
        treeNode
    },
    props: {
        //定义值的类型必须用工厂方式返回
        treeData:{
            type:Array,
            default:[]
        },
        //接受传入的props将其转换
        treeProps:{
            type:Object,
            //设置默认的值
            default:{
                label:'label',
            }
        },
        placeholder:{
            type:String,
            default:'请选择'
        },
        value:{

        },
        multiple:{
            type:Boolean
        }
    },
    computed:{
        //显示删除的图标 必须是hovering 他选中的值不为空 还不是展开的
        showCloseIcon(){
            return this.hovering && this.value !==undefined && this.value!=='' &&!this.multiple;
        }
    },
    data(){
      return{
          //选中的值
          treeSelected:'',
          //传入的placeholder
          placetext:this.placeholder,
          //鼠标划上
          hovering:false,
          //是否显示
          treeVisible:false
      }
    },
    methods:{
      //关闭树
      handleCloseTree(val){
          console.log(val);
          this.handleFilter();
      },
      //input框里输入时
      handleFilter:debounce(1000,function(){

      }),
      //input框失去焦点时
      handleAutoComplete(){

      }
    },
    watch:{
       treeData(val){
            console.log(val);
       }
    }
  }
</script>

<style lang="scss">
   .ats-tree{
       display: inline-block;
       position: relative;
       .ats-input{
           position: relative;
           //向下的图标
           .icon-jiantou{
               cursor: pointer;
               //向下箭头旋转
               &.is-reverse{
                   transform:rotateZ(180deg);
               }
           }
       }
       //input 框样式
       .el_input_inner{
           width:360px;
           //去掉input原有的样式
           -webkit-appearance:none;
           -moz-appearance: none;
           appearance: none;
           background-color: #ffffff;
           background-image: none;
           border-radius:4px;
           border:1px solid rgb(191,204,207);
           box-sizing: border-box;
           color:rgb(31,46,61);
           display: block;
           //继承父元素的字体
           font-size: inherit;
           height: 36px;
           line-height: 1;
           outline: 0;
           padding: 3px 10px;
           transition: border-color .2s cubic-bezier(.645,.045,.355,1);
       }
       //图表样式
       .ats-input__icon{
           position: absolute;
           width: 35px;
           height: 100%;
           right:0;
           top:0;
           text-align: center;
           color:#bfcbd9;
           transition: all .3s;
       }
       .ats-input__icon:after {
            content: '';
            height: 100%;
            width: 0;
            display: inline-block;
            vertical-align: middle;
      }
      //下拉框样式
      .ats-tree-scrollbar{
          top:40px;
          min-width: 360px;
          min-height: 300px;
          position: absolute;
          z-index: 1000;
          background: #ffffff;
          border: 1px solid #d1dbe5;
          transition:all 0.1s linear;
      }
      .ats-tree-wrapper{
          background-color: #ffffff;
      }
}
</style>