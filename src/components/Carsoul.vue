<template>
  <div
    class="kv"
    @mouseenter="closeTime"
    @mouseleave="setTime"
  >
    <div class="carsoul_container">
      <div
        v-for="(item,index) in items"
        :key="index"
        class="carsoul_item"
      />
      <div
        class="prev"
        @click="directChangeIndex(-1)"
      >
        &#60;
      </div>
      <div
        class="next"
        @click="directChangeIndex(1)"
      >
        &#62;
      </div>
      <div class="dots">
        <div
          v-for="(item,index) in items"
          :key="index"
          class="dot"
          @click="dotChangeIndex(index)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carsoul',
  data() {
    return {
      index: 0,
      items: [
        '1.jpg',
        '2.jpg',
        '3.jpg',
      ],
      timer: null,
    };
  },
  mounted() {
    this.slider();
    this.setTime();
  },
  methods: {
    directChangeIndex(direct) {
      this.index += direct;
      this.changeIndexHandler();
    },
    dotChangeIndex(index) {
      this.index = index;
      this.changeIndexHandler();
    },
    changeIndexHandler() {
      this.index = (this.index + this.items.length) % this.items.length;
      this.slider();
    },
    slider() {
      const carsoulItems = document.querySelectorAll('.carsoul_item');
      const dot = document.querySelectorAll('.dot');
      this.items.forEach((el, i) => {
        carsoulItems[i].classList.remove('items_active');
        dot[i].classList.remove('dot_active');
      });
      carsoulItems[this.index].classList.add('items_active');
      dot[this.index].classList.add('dot_active');
    },
    setTime() {
      this.timer = setInterval(() => {
        this.index += 1;
        this.changeIndexHandler();
      }, 3000);
    },
    closeTime() {
      clearInterval(this.timer);
    },
  },
};
</script>
<style lang="scss">
@import '@/assets/css/style.scss';
.kv{
    >.carsoul_container{
        position: relative;
    }
    .carsoul_item{
        display: none;
        width: 100%;
        height: 0;
        padding-top: 33.333%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50% 50%;
        &:nth-child(1){
            background-image: url("../assets/1.jpg");
        }
        &:nth-child(2){
            background-image: url("../assets/2.jpg");
        }
        &:nth-child(3){
            background-image: url("../assets/3.jpg");
        }
    }
    .prev{
        left: times(2);
        position: absolute;
        z-index: 1;
        top: 0;
        bottom: 0;
        margin:auto;
        width: $limit_width;
        height: $limit_width;
        line-height: $limit_width;
        text-align: center;
        border: 1px solid map-get($color,dark);
        cursor: pointer;
        background: map-get($color,sub);
        color: map-get($color,light);
        display: none;
    }
    .next{
        right: times(2);
        position: absolute;
        z-index: 1;
        top: 0;
        bottom: 0;
        margin:auto;
        width: $limit_width;
        height: $limit_width;
        line-height: $limit_width;
        text-align: center;
        border: 1px solid map-get($color,dark);
        cursor: pointer;
        background: map-get($color,sub);
        color: map-get($color,light);
        display: none;
    }
    .dots{
        position: absolute;
        z-index: 1;
        left: 0;
        right: 0;
        bottom: times(2);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .dot{
        width: $limit_width;
        height: $limit_line_height;
        background: map-get($color,light);
        cursor: pointer;
        margin: 0 times(1);

    }
    .dot_active{
        position: relative;
        &:after{
            content: "";
            width: 0;
            height: $limit_line_height;
            display: block;
            background: map-get($color,sub);
            position: absolute;
            top: 0;
            left: 0;
            animation: loading_time 3000ms linear forwards;
        }
        @keyframes loading_time {
            0%{
                width: 0;
            }
            100%{
                width: 100%;
            }
        }
    }
    .items_active{
        display: block;
        animation: item_animate .5s;
        @keyframes item_animate {
            0%{
                opacity: 0.6;
            }
            100%{
                opacity: 1;
            }
        }
    }
}
.kv:hover .prev,.kv:hover .next{
    display: block;
}
.kv:hover .dots .dot_active:after{
    animation: "";
}
</style>
