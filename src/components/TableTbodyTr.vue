<template>
  <tr>
    <slot name="td1">
      <slot name="td1-1">
        <slot name="td1-1-1">
          <slot name="td1-1-2" />
        </slot>
      </slot>
    </slot>
    <slot name="td2">
      <slot name="td2-1">
        <slot name="td2-1-1">
          <slot name="td2-1-2" />
        </slot>
      </slot>
    </slot>
    <slot name="td3">
      <slot name="td3-1">
        <slot name="td3-1-1">
          <slot name="td3-1-2" />
        </slot>
      </slot>
    </slot>
    <slot name="td4">
      <slot name="td4-1">
        <slot name="td4-1-1">
          <slot name="td4-1-2" />
        </slot>
      </slot>
    </slot>
    <slot name="td5">
      <slot name="td5-1">
        <slot name="td5-1-1">
          <slot name="td5-1-2" />
        </slot>
      </slot>
    </slot>
  </tr>
</template>

<script>
export default {
  name: 'TbodyTr',

};
</script>
<style lang="scss">
@import '@/assets/css/style.scss';
tbody{
  td{
    position: relative;
    @include media_query(md){
      padding-left: times(3,'%');
      &::before{
        position: absolute;
        left: 0;
        width: times(3,'%');
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
