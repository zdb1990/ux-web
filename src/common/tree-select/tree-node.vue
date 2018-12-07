<template>
    <li class="ats-tree-node"
        :class="{'is-expanded':node.expanded}"
        @click.stop="handleClick(node,$event)"
    >
    <!-- 树组件样式 -->
        <div class="ats-tree-node_content" 
            v-show="node.visible"
            :style="{'padding-left':(node[treeProps.level]-1)*16+'px'}"
            :class="{'is-current':currentNodeid===node.id}"
        >
        <!-- 图标 -->
        <div class="ats-tree-node_icon icon">
             <span 
                v-if="node[treeProps.children]&&node[treeProps.children].length"
                 class="ats-tree-node__expand-icon icon"
                 :class="{ expanded: node.expanded }"> 
             </span>
        </div>
           <!-- :title="handleTitleVisible(node[treeProps.label])" -->
        <span class="ats-tree-node_label">{{node[treeProps.label]}}</span> 
     </div>
     <!-- 有子元素接着循环 -->
      <ul class="ats-tree-node_children" v-if="node.expanded">
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
    </li>
</template>

<script>
 export default{
     name: 'treeNode',
 }
</script>

<style lang="scss">
 .ats-tree-node{
   //子元素点击划过的样式
   .ats-tree-node__content{
       text-indent: 5px;
       line-height: 36px;
       height: 36px;
       cursor: pointer;
       white-space: nowrap;
       &:hover{
           background: rgb(228,232,241)
       }
       &.is-cursor{
           background: rgb(4,137,224);
           color:#fff;
       }
   }
  //图标写的样式
   .ats-input__icon{
      display: inline-block;
      vertical-align: middle;
      cursor: pointer;
      width:0;
      height: 0;
      margin-left: 10px;
      border: 6px solid transparent;
      border-right-width:0; 
      border-left-color:rgb(151,169,190);
      border-left-width: 7px;
      transform: rotate(0);
      transition: transform .3s ease-in-out;
      //展开样式
      &.expanded{
          transform: rotate(90deg);
      }
   }
 }
</style>