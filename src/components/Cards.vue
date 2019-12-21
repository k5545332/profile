<template>
  <div
    class="card"
  >
    <div class="pic" />
    <div class="des">
      <slot name="title" />
      <slot name="des" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',

};
</script>
<style lang="scss">
@import '@/assets/css/style.scss';
.card{
    .pic{
        height: 0;
        padding-top: 75%;
    }
}
</style>
