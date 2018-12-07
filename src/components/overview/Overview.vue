<template>
    <div class="overview-body">
      <tree-select 
         :treeData="treeData" 
         :treeProps="treeProps"
         v-model="treeSelected"
         :multiple="false"
         placeholder="请选择部门"
         @errorCallback="showTreeError"
         @setSelectedId="setSelectedId"
      ></tree-select>
      <!-- errorCallback错误的提示 -->
      <!-- setSelectedId选中的id -->
    </div>
</template>

<script>
//引入树数据
import Data from './../../data/data';

export default {
    data () {
        return {
            treeSelected:'',
            treeData:window.Data,
            treeProps:{
                label: "name",
                children: "children",
                level:"level"
            },
        }
      },
      created(){
          console.log(this.treeData);
      },
      methods:{
          showTreeError(){

          },
          setSelectedId(){

          }
      }
  }
</script>

<style lang="scss">

</style>
