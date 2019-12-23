<template>
  <div class="onesection">
    <div class="container">
      <slot name="title" />
      <slot name="section1" />
      <slot name="section2" />
      <slot name="section3" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'OneSection',
};

</script>
<style lang="scss">

.onesection{
    @extend %section_margin_top;
}
</style>
