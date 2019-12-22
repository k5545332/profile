<template>
  <div class="example">
    <Carsoul />
    <PageHeader />
    <ColCards />
    <OneSection>
      <h3
        slot="title"
        class="title"
      >
        {{ items[0].name }}
      </h3>
      <p slot="section1">
        {{ items[0].des }}{{ items[0].des }}
      </p>
      <p slot="section2">
        {{ items[0].des }}{{ items[0].des }}{{ items[0].des }}{{ items[0].des }}
      </p>
    </OneSection>
    <div class="sidebysidecard">
      <div class="container grid_container">
        <div
          class="col-lg-6-nogutter col-6-nogutter col-md-24-nogutter
        col-sm-24-nogutter clearfix floatdir"
        >
          <Card
            :image="items[0].image"
            class="col-lg-24 col-md-12 col-sm-24"
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
            :image="items[0].image"
            class="col-lg-24 col-md-12 col-sm-24"
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
        </div>
        <Card
          :image="items[0].image"
          class="big_card col-lg-18 col-18 col-md-24 col-sm-24 floatdir"
        >
          <p
            slot="des1"
            class="big_content"
          >
            {{ items[0].des }}
          </p>
          <p
            slot="des2"
            class="big_content"
          >
            {{ items[0].des }}{{ items[0].des }}{{ items[0].des }}{{ items[0].des }}
          </p>
        </Card>
      </div>
    </div>
    <Table />
    <div class="sidebysidecard sidebysidecard_sec">
      <div class="container grid_container">
        <div
          class="col-lg-6-nogutter col-6-nogutter col-md-24-nogutter
        col-sm-24-nogutter clearfix floatdir"
        >
          <Card
            :image="items[0].image"
            class="col-lg-24 col-md-12 col-sm-24"
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
            :image="items[0].image"
            class="col-lg-24 col-md-12 col-sm-24"
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
        </div>
        <Card
          :image="items[0].image"
          class="big_card col-lg-18 col-18 col-md-24 col-sm-24 floatdir"
        >
          <p
            slot="des1"
            class="big_content"
          >
            {{ items[0].des }}
          </p>
          <p
            slot="des2"
            class="big_content"
          >
            {{ items[0].des }}{{ items[0].des }}{{ items[0].des }}{{ items[0].des }}
          </p>
        </Card>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import PageHeader from '@/components/Header.vue';
import Carsoul from '@/components/Carsoul.vue';
import ColCards from '@/components/ColCards.vue';
import OneSection from '@/components/OneSection.vue';
import Card from '@/components/Cards.vue';
import Table from '@/components/Table.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Example',
  components: {
    PageHeader,
    Carsoul,
    ColCards,
    OneSection,
    Card,
    Table,
    Footer,
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
      ],
    };
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
.onesection{
    @extend %section_margin_top;
    p{
        margin-top: times(1);
    }
}
.sidebysidecard{
  @extend %section_margin_top;
  .big_card{
    .pic{
      padding-top: 56.25%;
    }
  }
}
.sidebysidecard_sec{
  .floatdir{
    float: right;
  }
}
</style>
