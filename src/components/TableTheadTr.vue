<template>
  <tr>
    <slot name="th1" />
    <slot name="th2" />
    <slot name="th3" />
    <slot name="th4" />
    <slot name="th5" />
  </tr>
</template>

<script>
export default {
  name: 'TheadTr',

};
</script>
<style lang="scss">

table{
  thead{
    tr{
      @include media_query(md){
          display: none;
      }
    }
  }
}
</style>
