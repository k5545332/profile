<template>
  <footer>
    <div class="container grid_container">
      <div class="item_group col-lg-16-nogutter col-md-24-nogutter clearfix">
        <div class="groups col-lg-12 col-sm-24">
          <h3>{{ title }}</h3>
          <div class="card_group">
            <Card
              :image="items[0].image"
            >
              <p slot="des1">
                {{ items[0].des }}
              </p>
            </Card>
            <Card
              :image="items[1].image"
            >
              <p slot="des1">
                {{ items[1].des }}
              </p>
            </Card>
            <Card
              :image="items[2].image"
            >
              <p slot="des1">
                {{ items[2].des }}
              </p>
            </Card>
          </div>
        </div>
        <div class="groups col-lg-12 col-sm-24">
          <h3>{{ title }}</h3>
          <div class="card_group">
            <Card
              :image="items[0].image"
            >
              <p slot="des1">
                {{ items[0].des }}
              </p>
            </Card>
            <Card
              :image="items[1].image"
            >
              <p slot="des1">
                {{ items[1].des }}
              </p>
            </Card>
            <Card
              :image="items[2].image"
            >
              <p slot="des1">
                {{ items[2].des }}
              </p>
            </Card>
          </div>
        </div>
      </div>
      <Card
        :image="items[0].image"
        class="big_card col-lg-8 col-md-24"
      >
        <p
          slot="des1"
          class="big_content"
        >
          {{ items[0].des }}
          {{ items[0].des }}
        </p>
        <p
          slot="des2"
          class="big_content"
        >
          {{ items[0].des }}
          {{ items[0].des }}
          {{ items[0].des }}
          {{ items[0].des }}
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
      title: 'Items',
      items: [
        {
          name: 'Zelda',
          des: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is
          simply dummy text of the printing and typesetting industry.`,
          image: '1.jpg',
        },
        {
          name: 'Persona 5',
          des: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is
          simply dummy text of the printing and typesetting industry.`,
          image: '2.jpg',
        },
        {
          name: 'DQ11',
          des: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is
          simply dummy text of the printing and typesetting industry.`,
          image: '3.jpg',
        },
        {
          name: 'RDR2',
          des: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is
          simply dummy text of the printing and typesetting industry.`,
          image: '4.jpg',
        },
      ],
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
  }
  .big_card{
    .pic{
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
