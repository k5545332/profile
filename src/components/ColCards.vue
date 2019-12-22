<template>
  <div class="colcards">
    <div class="container grid_container">
      <Card
        class="col-lg-6 col-6 col-md-12 col-sm-24"
        :image="items[0].image"
      >
        <h3
          slot="title"
          class="title"
        >
          {{ items[0].name }}
        </h3>
        <p
          slot="des1"
          class="content"
        >
          {{ items[0].des }}
        </p>
      </Card>
      <Card
        class="col-lg-6 col-6 col-md-12 col-sm-24"
        :image="items[1].image"
      >
        <h3
          slot="title"
          class="title"
        >
          {{ items[1].name }}
        </h3>
        <p
          slot="des1"
          class="content"
        >
          {{ items[1].des }}
        </p>
      </Card>
      <Card
        class="col-lg-6 col-6 col-md-12 col-sm-24"
        :image="items[2].image"
      >
        <h3
          slot="title"
          class="title"
        >
          {{ items[2].name }}
        </h3>
        <p
          slot="des1"
          class="content"
        >
          {{ items[2].des }}
        </p>
      </Card>
      <Card
        class="col-lg-6 col-6 col-md-12 col-sm-24"
        :image="items[3].image"
      >
        <h3
          slot="title"
          class="title"
        >
          {{ items[3].name }}
        </h3>
        <p
          slot="des1"
          class="content"
        >
          {{ items[3].des }}
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
  data() {
    return {
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
.colcards{
    @extend %section_margin_top;
}
</style>
