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
        Title H3
      </h3>
      <p slot="section1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris n isi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in c ulpa qui officia deserunt mollit anim id
        est laborum.
      </p>
      <p slot="section2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris n isi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in c ulpa qui officia deserunt mollit anim id
        est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris n isi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in c ulpa qui officia deserunt mollit anim id
        est laborum.
      </p>
    </OneSection>
    <div class="sidebysidecard">
      <div class="container grid_container">
        <div
          class="col-lg-6-nogutter col-6-nogutter col-md-24-nogutter
        col-sm-24-nogutter clearfix floatdir"
        >
          <Card class="col-lg-24 col-md-12 col-sm-24">
            <h3
              slot="title"
              class="title"
            >
              title h3
            </h3>
            <p
              slot="des1"
              class="content"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is
              simply dummy text of the printing and typesetting industry.
            </p>
          </Card>
          <Card class="col-lg-24 col-md-12 col-sm-24">
            <h3
              slot="title"
              class="title"
            >
              title h3
            </h3>
            <p
              slot="des1"
              class="content"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is
              simply dummy text of the printing and typesetting industry.
            </p>
          </Card>
        </div>
        <Card class="big_card col-lg-18 col-18 col-md-24 col-sm-24 floatdir">
          <p
            slot="des1"
            class="big_content"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is
            simply dummy text of the printing and typesetting industry.
          </p>
          <p
            slot="des2"
            class="big_content"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is
            simply dummy text of the printing and typesetting industry.Lorem
            Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is
            simply dummy text of the printing and typesetting industry.Lorem
            Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is
            simply dummy text of the printing and typesetting industry.Lorem
            Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is
            simply dummy text of the printing and typesetting industry.
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
          <Card class="col-lg-24 col-md-12 col-sm-24">
            <h3
              slot="title"
              class="title"
            >
              title h3
            </h3>
            <p
              slot="des1"
              class="content"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is
              simply dummy text of the printing and typesetting industry.
            </p>
          </Card>
          <Card class="col-lg-24 col-md-12 col-sm-24">
            <h3
              slot="title"
              class="title"
            >
              title h3
            </h3>
            <p
              slot="des1"
              class="content"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is
              simply dummy text of the printing and typesetting industry.
            </p>
          </Card>
        </div>
        <Card class="big_card col-lg-18 col-18 col-md-24 col-sm-24 floatdir">
          <p
            slot="des1"
            class="big_content"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is
            simply dummy text of the printing and typesetting industry.
          </p>
          <p
            slot="des2"
            class="big_content"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is
            simply dummy text of the printing and typesetting industry.Lorem
            Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is
            simply dummy text of the printing and typesetting industry.Lorem
            Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is
            simply dummy text of the printing and typesetting industry.Lorem
            Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is
            simply dummy text of the printing and typesetting industry.
          </p>
        </Card>
      </div>
    </div>
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

export default {
  name: 'Example',
  components: {
    PageHeader,
    Carsoul,
    ColCards,
    OneSection,
    Card,
    Table,
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
  .card{
    .pic{
        background: url("../assets/1.jpg") no-repeat 50% 50% / cover;
    }
  }
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
