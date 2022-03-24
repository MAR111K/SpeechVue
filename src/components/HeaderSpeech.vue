<template>
    <div>
    <button @click="recordBut"></button>
    <input type="text">
    </div>
</template>
<script>
export default {
    name:"Header",
    props:{
        isRecord:{type:Boolean}
    },
     methods:{
    recordBut(){
      isRecord=!this.isRecord
    }
  },
}
</script>