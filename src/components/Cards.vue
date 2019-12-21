<template>
  <div
    class="card"
  >
    <div class="pic" />
    <div class="des">
      <slot
        name="title"
      />
      <slot
        name="des1"
      />
      <slot
        name="des2"
      />
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
    .title{
        margin-top: times(1);
    }
    .content{
        margin-top: times(1);
        @include elli(3);
        @extend %ellinone;
    }
    .big_content{
      margin-top: times(1);
    }
}
</style>
