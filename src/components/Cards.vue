<template>
  <div
    class="card"
  >
    <div
      class="pic"
      :style="{ backgroundImage: 'url('+require('../assets/'+image)+')' }"
    />
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
  props: {
    image: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss">
@import '@/assets/css/style.scss';
.card{
    .pic{
        height: 0;
        padding-top: 75%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50% 50%;
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
