<template>
  <div class="colcards">
    <div class="container grid_container">
      <Card
        class="col-lg-6 col-6 col-md-12 col-sm-24"
      >
        <h3 slot="title">
          Zelda
        </h3>
        <p slot="des">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is
          simply dummy text of the printing and typesetting industry.
        </p>
      </Card>
      <Card
        class="col-lg-6 col-6 col-md-12 col-sm-24"
      >
        <h3 slot="title">
          Persona 5
        </h3>
        <p slot="des">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is
          simply dummy text of the printing and typesetting industry.
        </p>
      </Card>
      <Card
        class="col-lg-6 col-6 col-md-12 col-sm-24"
      >
        <h3 slot="title">
          DQ11
        </h3>
        <p slot="des">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is
          simply dummy text of the printing and typesetting industry.
        </p>
      </Card>
      <Card
        class="col-lg-6 col-6 col-md-12 col-sm-24"
      >
        <h3 slot="title">
          RDR2
        </h3>
        <p slot="des">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is
          simply dummy text of the printing and typesetting industry.
        </p>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Cards.vue';

export default {
  name: 'ColCards',
  components: {
    Card,
  },
};

</script>

<style lang="scss">
@import '@/assets/css/style.scss';
.colcards{
    @extend %section_margin_top;
    .card{
        &:nth-child(1){
            .pic{
                background: url("../assets/1.jpg") no-repeat 50% 50% / cover;
            }
        }
        &:nth-child(2){
            .pic{
                background: url("../assets/2.jpg") no-repeat 50% 50% / cover;
            }
        }
        &:nth-child(3){
            .pic{
                background: url("../assets/3.jpg") no-repeat 50% 50% / cover;
            }
        }
        &:nth-child(4){
            .pic{
                background: url("../assets/4.jpg") no-repeat 50% 50% / cover;
            }
        }
    }
}
</style>
