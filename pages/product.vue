<template>
  <div class="pages-product">
    <section>
      <div class="product-one pl-15 relative flex flex-col">
        <img class="product-one-bg absolute" src="~/assets/images/product/1-bg.png" alt="">
        <h1 class="mt-70">The ASAP</h1>
        <h1>Smart Platform</h1>
        <h3 class="mt-6">Intelligent Campaigns. Efficient Reach.<br />
          Break the Barriers of ios Growth.</h3>
        <div class="img-box absolute">
          <img src="~/assets/images/product/1-nav.png" alt=""></img>
          <img class="img-box-line absolute" src="~/assets/images/product/1-line.png" alt=""></img>
          <img class="img-box-trend absolute" src="~/assets/images/product/1-trend.png" alt=""></img>
          <img class="img-box-img absolute" src="~/assets/images/product/1-img.png" alt=""></img>
        </div>
      </div>
    </section>
    <section>
      <div class="product-two relative flex flex-col -mt-1 items-center">
        <img class="absolute top-0 left-0 product-two-bg" src="~/assets/images/product/2-bg.png" alt="">
        <img src="~/assets/images/product/2-data.png" alt="">
      </div>
    </section>
    <section>
      <div class="product-three flex flex-col items-center">
        <img src="~/assets/images/product/2-smart.png" class="mt-40" alt="">
        <img src="~/assets/images/product/2-industry.png" class="mt-40" alt="">
        <img src="~/assets/images/product/2-winning.png" class="mt-40" alt="">
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.pages-product {
  .product-one {
    height: 953px;
    &-bg {
      height: 953px;
      top: 0;
      left: 0;
      object-fit: contain;
      z-index: -1;
    }
    .img-box {
      top: 50%;
      left: 60%;
      transform: translate(-60%, -50%);
      width: 1114px;
      height: 656px;
      z-index: -1;
      &-line {
        bottom: -90px;
        left: 40px;
        width: 1019px;
        height: 442px;
      }
      &-trend {
        top: 40px;
        right: 90px;
        width: 723px;
        height: 452px;
      }
      &-img {
        bottom: -40px;
        left: -170px;
        width: 374px;
        height: 284px;
      }
    }
  }
  .product-two {
    padding-top: 40px;
    &-bg {
      z-index: -1;
    }
  }
  .product-three {
    background-color: #E9F0FF;
  }
  h1 {
    font-size: 56px;
  }
  h2 {
    font-size: 30px;
  }
  h3 {
    font-size: 24px;
  }
}
</style>