<template>
  <footer>
    <div class="container grid_container">
      <div class="item_group col-lg-16-nogutter col-md-24-nogutter clearfix">
        <div class="groups col-lg-12 col-sm-24">
          <h3>{{ title }}</h3>
          <div class="card_group">
            <Card>
              <p slot="des1">
                {{ text }}
              </p>
            </Card>
            <Card>
              <p slot="des1">
                {{ text }}
              </p>
            </Card>
            <Card>
              <p slot="des1">
                {{ text }}
              </p>
            </Card>
          </div>
        </div>
        <div class="groups col-lg-12 col-sm-24">
          <h3>{{ title }}</h3>
          <div class="card_group">
            <Card>
              <p slot="des1">
                {{ text }}
              </p>
            </Card>
            <Card>
              <p slot="des1">
                {{ text }}
              </p>
            </Card>
            <Card>
              <p slot="des1">
                {{ text }}
              </p>
            </Card>
          </div>
        </div>
      </div>
      <Card class="big_card col-lg-8 col-md-24">
        <p
          slot="des1"
          class="big_content"
        >
          {{ text }}
          {{ text }}
        </p>
        <p
          slot="des2"
          class="big_content"
        >
          {{ text }}
          {{ text }}
          {{ text }}
          {{ text }}
        </p>
      </Card>
    </div>
  </footer>
</template>

<script>
import Card from '@/components/Cards.vue';

export default {
  name: 'Footer',
  components: {
    Card,
  },
  data() {
    return {
      title: 'Title H3',
      text: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ratione quisquam omnis quam eaa, dolorem doloribus`,
    };
  },
};

</script>

<style lang="scss">
@import '@/assets/css/style.scss';
footer{
  @extend %section_margin_top;
  padding: times(3) 0;
  background: map-get($color,main);
  .groups{
    .card{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: times(2);
      .pic{
        width: times(4,'%');
        padding-top: times(3,'%');
      }
      .des{
        width: times(6,'%');
        margin-left: times(1);
        @include elli(2);
        @extend %ellinone;
      }
    }
    &:nth-child(1){
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
      }
    }
    &:nth-child(2){
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
      }
    }
  }
  .big_card{
    .pic{
      background: url("../assets/1.jpg") no-repeat 50% 50% / cover;
      margin-top: times(2);
    }
  }
  h3{
    color: map-get($color,sub);
  }
  p{
    color: map-get($color,sub);
  }
}

</style>
