<template>
  <div class="example">
    <Carsoul />
    <PageHeader />
  </div>
</template>

<script>
// @ is an alias to /src
import PageHeader from '@/components/Header.vue';
import Carsoul from '@/components/Carsoul.vue';

export default {
  name: 'Example',
  components: {
    PageHeader,
    Carsoul,
  },
};
</script>

<style lang="scss">
@import '@/assets/css/style.scss';
.example{
    background: map-get($color,bg);
}
.scroll{
    padding-top: $header_height;
    header{
        position: fixed;
        width: 100%;
        top: 0;
    }
}
h1{
    @include font(40px,25px,map-get($color,fz))
}
h3{
    @include font(30px,20px,map-get($color,fz));
}
p{
    @include font(20px,14px,map-get($color,fz));
}
</style>
