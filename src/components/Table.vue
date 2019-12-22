<template>
  <div class="table">
    <div class="container">
      <table>
        <thead>
          <TheadTr>
            <th slot="th1">
              {{ th1 }}
            </th>
            <th slot="th2">
              {{ th2 }}
            </th>
          </TheadTr>
        </thead>
        <tbody>
          <TbodyTr>
            <td slot="td1">
              <div
                slot="td1-1"
                class="title"
              >
                <h3
                  slot="td1-1-1"
                >
                  {{ title1 }}
                </h3>
                <span
                  slot="td1-1-2"
                >
                  {{ title2 }}
                </span>
              </div>
            </td>
            <td slot="td2">
              <div
                slot="td2-1"
                class="content"
              >
                <p
                  slot="td2-1-1"
                >
                  {{ content }}{{ content }}{{ content }}
                </p>
                <p
                  slot="td2-1-2"
                >
                  {{ linktext }}
                </p>
              </div>
            </td>
          </TbodyTr>
          <TbodyTr>
            <td slot="td1">
              <div
                slot="td1-1"
                class="title"
              >
                <h3
                  slot="td1-1-1"
                >
                  {{ title1 }}
                </h3>
                <span
                  slot="td1-1-2"
                >
                  {{ title2 }}
                </span>
              </div>
            </td>
            <td slot="td2">
              <div
                slot="td2-1"
                class="content"
              >
                <p
                  slot="td2-1-1"
                >
                  {{ content }}{{ content }}{{ content }}
                </p>
                <p
                  slot="td2-1-2"
                >
                  {{ linktext }}
                </p>
              </div>
            </td>
          </TbodyTr>
          <TbodyTr>
            <td slot="td1">
              <div
                slot="td1-1"
                class="title"
              >
                <h3
                  slot="td1-1-1"
                >
                  {{ title1 }}
                </h3>
                <span
                  slot="td1-1-2"
                >
                  {{ title2 }}
                </span>
              </div>
            </td>
            <td slot="td2">
              <div
                slot="td2-1"
                class="content"
              >
                <p
                  slot="td2-1-1"
                >
                  {{ content }}{{ content }}{{ content }}
                </p>
                <p
                  slot="td2-1-2"
                >
                  {{ linktext }}
                </p>
              </div>
            </td>
          </TbodyTr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import TheadTr from '@/components/TableTheadTr.vue';
import TbodyTr from '@/components/TableTbodyTr.vue';

export default {
  name: 'Table',
  components: {
    TheadTr,
    TbodyTr,
  },
  data() {
    return {
      th1: 'title',
      th2: 'content',
      title1: 'Title A',
      title2: 'Great!',
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Praesentium, unde. Quas nostrum provident fuga maiores porro quod optio, 
      molestias rerum ipsam quaerat magnam omnis eaque repudiandae esse 
      excepturi? Sequi, natus!`,
      linktext: 'GO',
    };
  },
};
</script>
<style lang="scss">
@import '@/assets/css/style.scss';
table{
  @extend %section_margin_top;
  tr,th,td{
    border: 1px solid map-get($color,dark);
    border-collapse: collapse;
    @include media_query(md){
      display: block;
    }
  }
  thead{
    tr{
      background: map-get($color,main);
    }
    th{
      color: map-get($color,light);
      padding: times(1) 0;
      &:nth-child(1){
        width: times(2,'%');
      }
      &:nth-child(2){
        width: times(8,'%');
      }
    }
  }
  tbody{
    tr{
      &:nth-child(even){
        background: map-get($color,bg);
        @include media_query(md){
          background: map-get($color,light);
        }
      }
    }
    td{
      @include media_query(md){
        &::before{
          background: map-get($color,dark);
          color: map-get($color,light);
          border: 1px solid map-get($color,fz);
        }
      }
      &:nth-child(1){
        position: relative;
        @include media_query(md){
          &::before{
            content: "title";
          }
        }
      }
      &:nth-child(2){
        position: relative;
        @include media_query(md){
          &::before{
            content: "Content";
          }
        }
      }
    }
    .title{
      position: absolute;
      width: 100%;
      height: 100%;
      @extend %flex_all_center;
      flex-direction: column;
      @include media_query(md){
        position: relative;
        padding: times(2);
        align-items: flex-start;
      }
      h3{
        color: map-get($color,sub);
      }
      &::before{
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 0;
        height: 0;
        border-top: times(4) solid map-get($color,sub);
        border-right: times(4) solid map-get($color,sub);
        border-bottom: times(4) solid transparent;
        border-left: times(4) solid transparent;
      }
      &::after{
        content: "HOT";
        position: absolute;
        top: 0;
        right: 0;
        width: times(6);
        height: times(6);
        line-height: times(6);
        color: map-get($color,light);
        transform: rotate(45deg);
        text-align: center;
      }
    }
    .content{
      padding: times(2);
      @extend %flex_all_center;
      @include media_query(md){
        flex-direction: column;
      }
      p{
        @include elli(3);
        @extend %ellinone;
        &:nth-child(2){
          padding: times(3) times(2);
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: times(1);
          background: map-get($color,sub);
          color: map-get($color,light);
          cursor: pointer;
          @include media_query(md){
            width: 100%;
            padding: times(1);
            margin-top: times(1);
          }
        }
      }
    }
  }
}
</style>
