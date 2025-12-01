<template>
  <div class="pages-home">
    <section class="mt-3">
      <div class="home1 relative flex flex-col pl-15">
        <img class="absolute home1-bg" src="~/assets/images/home/home1.png" alt="">
        <h1 class="mt-30">Apple Ads</h1>
        <h1>The Global App Growth Platform</h1>
        <h1>for Apple Ads</h1>
        <h3 class="mt-4">Our proprietary AsAP platform provides one-stop,<br />
          high-performance, and intelligent campaign management.
        </h3>
        <span class="mt-4" style="color: #777">91 Countries & Regions I 3,000+Apps Served I $80M+Annual Ad Spend I Global Reach</span>
        <img class="home1-bg-child1 mt-15" src="~/assets/images/home/home1-child1.png" alt="">
      </div>
    </section>
    <h1 class="text-center py-10">Why Choose Us?</h1>
    <section>
      <div style="width: 100%">
        <UCarousel loop v-slot="{ item }" :items="chooseItem" :autoplay="{ delay: 7000 }" fade>
          <img :src="item" alt="">
        </UCarousel>
      </div>
    </section>
    <h1 class="text-center py-10">Dual Assurance of Effectiveness and Efficiency</h1>
    <section>
      <div class="grid gap-15 grid-cols-3 px-15">
        <div class="flex flex-col home3-item items-center pt-6 pb-10 px-10" v-for="(item, k) of homeThreeList" :key="k">
          <img class="home3-img" :src="item.img" alt="">
          <h2 class="my-3">{{ item.title }}</h2>
          <p class="home3-item-desc" v-html="item.desc" />
        </div>
      </div>
    </section>
    <section class="mt-16">
      <div class="home4 relative flex flex-col justify-center">
        <img class="absolute home4-bg" src="~/assets/images/home/home4-bg.png" alt="">
        <img class="absolute home4-title mt-40" src="~/assets/images/home/home4-title.png" alt="">

        <!-- Centered icon stage with left/right buttons -->
        <div class="home4-carousel">

          <button class="home4-arrow relative left" type="button" @click="prevHomeItem">
            <img src="~/assets/images/home/home4-left-btn.png" class="home4-btn" alt="prev">
            <img src="~/assets/images/home/home4-left-arrow.png" class="absolute" alt="">
          </button>

          <div class="home4-stage" >
            <div class="home4-track">
              <div
                  class="home4-item"
                  v-for="(icon, i) in home4Icons"
                  :key="i"
                  @click="clickHomeItem(i)"
                  :class="{ active: i === home4Index }"
              >
                <img :src="icon" alt="client icon">
              </div>
            </div>

            <div class="home4-label">Lifestyle</div>
          </div>

          <button class="home4-arrow relative right" type="button" @click="nextHomeItem">
            <img src="~/assets/images/home/home4-right-btn.png" class="home4-btn" alt="next">
            <img src="~/assets/images/home/home4-right-arrow.png" class="absolute" alt="">
          </button>

        </div>
      </div>
    </section>
    <section style="margin-top: -110px">
      <div class="home5 relative flex flex-col items-center">
        <img class="home5-bg absolute" src="~/assets/images/home/home5-bg.png" alt=""></img>
        <h1 class="mt-16">Success Stories</h1>
        <div class="relative">
          <UCarousel loop v-slot="{ item }" :items="home5SwiperList" fade dots arrows
          >
            <div>
              <img class="h5-bg" :src="item.bg" alt="">
              <div class="absolute h5-img-box">
                <img :src="item.img" class="absolute h5-img" alt="">
              </div>
            </div>
          </UCarousel>
        </div>
      </div>
    </section>
    <div style="height: 300px"></div>
  </div>
</template>

<script setup lang="ts">
import choose1 from '~/assets/images/home/choose1.png'
import choose2 from '~/assets/images/home/choose2.png'
import choose3 from '~/assets/images/home/choose3.png'
import home31 from '~/assets/images/home/home3-1.png'
import home32 from '~/assets/images/home/home3-2.png'
import home33 from '~/assets/images/home/home3-3.png'
import home4Icon1 from '~/assets/images/home/home4-icon1.png'
import home4Icon2 from '~/assets/images/home/home4-icon2.png'
import home4Icon3 from '~/assets/images/home/home4-icon3.png'
import h5SwiperBg1 from '~/assets/images/home/h5-swiper-bg1.png'
import h5SwiperImg1 from '~/assets/images/home/h5-swiper-img1.png'
import h5SwiperBg2 from '~/assets/images/home/h5-swiper-bg2.png'
import h5SwiperImg2 from '~/assets/images/home/h5-swiper-img2.png'
import h5SwiperBg3 from '~/assets/images/home/h5-swiper-bg3.png'
import h5SwiperImg3 from '~/assets/images/home/h5-swiper-img3.png'

const chooseItem = ref([
  choose1,
  choose2,
  choose3
])

const home5SwiperList = ref([
  {
    bg: h5SwiperBg1,
    img: h5SwiperImg1
  },
  {
    bg: h5SwiperBg2,
    img: h5SwiperImg2
  },
  {
    bg: h5SwiperBg3,
    img: h5SwiperImg3
  }
])

const homeThreeList = ref([
  {
    img:  home31,
    title: 'Downloads',
    desc: `<strong>95%</strong> of downloads are generated by keywords automatically discovered through the ASAP Ad Platform.`
  },
  {
    img: home32,
    title: 'Strategy',
    desc: `Automated strategies enhance ad performance /Rol<strong>(↑15%-25%)</strong>/Cost<strong>(↓30%-50%)</strong>`
  },
  {
    img: home33,
    title: 'Efficiency',
    desc: `The ASAP Ad Platform delivers <strong>300%</strong> greater efficiency compared to manual or standard market operations.`
  },
])

const home4Icons = ref([home4Icon1, home4Icon2, home4Icon3])
// 默认选中中间的 icon
const home4Index = ref(Math.floor(home4Icons.value.length / 2))

function clickHomeItem(index: number) {
  if(home4Index.value === index) return
  console.log(index)
  const homeTrack = document.querySelector('.home4-track')
  if(home4Index.value < index) {
    if(index === 1) {
      homeTrack!!.style.transform = `translateX(0)`
    } else {
      homeTrack!!.style.transform = `translateX(-280px)`
    }
      homeTrack!!.style.transition = `transform 0.3s ease-in-out`
    } else {
      if(index === 1) homeTrack!!.style.transform = `translateX(0)`
      else homeTrack!!.style.transform = `translateX(280px)`
      homeTrack!!.style.transition = `transform 0.3s ease-in-out`
    }
  home4Index.value = index
}
function prevHomeItem() {
  if(home4Index.value === 0) return
  home4Index.value--
  const homeTrack = document.querySelector('.home4-track')
  if(home4Index.value === 1) homeTrack!!.style.transform = `translateX(0)`
  else homeTrack!!.style.transform = `translateX(280px)`
  homeTrack!!.style.transition = `transform 0.3s ease-in-out`
}
function nextHomeItem() {
  if(home4Index.value === 2) return
  home4Index.value++
  const homeTrack = document.querySelector('.home4-track')
  if(home4Index.value === 2) homeTrack!!.style.transform = `translateX(-280px)`
  else homeTrack!!.style.transform = `translateX(0)`
  homeTrack!!.style.transition = `transform 0.3s ease-in-out`
}


</script>

<style lang="scss">
.pages-home {
  .home1 {
    height: 953px;
    .home1-bg {
      z-index: -1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .home1-bg-child1 {
      width: 357px;
      object-fit: contain;
    }
  }
  .home5 {
    height: 1080px;
    .home5-bg {
      z-index: -1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .h5-bg {
      width: 100%;
    }
    .h5-img-box {
      //border: 1px solid red;
      top: 50%;
      left: 5%;
      transform: translateY(-50%);
      width: 40%;
      height: 443px;
      .h5-img {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: auto;
        height: 443px;
        object-fit: contain;
      }
    }

  }
  .home4 {
    height: 1185px;
    .home4-bg {
      z-index: -1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .home4-title {
      z-index: -1;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 1138px;
      height: 181px;
    }
  }
  /* center icon stage */
  .home4-carousel {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }

  .home4-arrow {
    background: transparent;
    border: none;
    padding: 0 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: transform 0.3s ease;
    
    //img {
    //  width: 64px;
    //  height: 64px;
    //  transition: transform 0.3s ease, opacity 0.3s ease;
    //}
    
    // 右箭头悬停动画
    &.right {
      &:hover {
        transform: translateX(5px);
        
        img.absolute {
          transform: translateX(8px);
        }
      }
      
      &:active {
        transform: translateX(2px) scale(0.95);
        
        img.absolute {
          transform: translateX(12px) scale(1.1);
        }
      }
      
      // 箭头持续的小幅摆动动画
      img.absolute {
        animation: arrowPulse 2s ease-in-out infinite;
      }
    }
    
    // 左箭头悬停动画
    &.left {
      &:hover {
        transform: translateX(-5px);
        
        img.absolute {
          transform: translateX(-8px);
        }
      }
      
      &:active {
        transform: translateX(-2px) scale(0.95);
        
        img.absolute {
          transform: translateX(-12px) scale(1.1);
        }
      }
      
      // 箭头持续的小幅摆动动画
      img.absolute {
        animation: arrowPulse 2s ease-in-out infinite;
      }
    }
  }
  
  // 右箭头脉冲动画
  @keyframes arrowPulse {
    0%, 100% {
      transform: translateX(0);
      opacity: 1;
    }
    50% {
      transform: translateX(4px);
      opacity: 0.8;
    }
  }
  
  // 左箭头脉冲动画（反向）
  @keyframes arrowPulseLeft {
    0%, 100% {
      transform: translateX(0);
      opacity: 1;
    }
    50% {
      transform: translateX(-4px);
      opacity: 0.8;
    }
  }
  
  // 左箭头使用反向动画
  .home4-arrow.left img.absolute {
    animation: arrowPulseLeft 2s ease-in-out infinite;
  }

  .home4-stage {
    margin-top: 140px;
    position: relative;
    width: 800px;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden; /* 隐藏溢出的内容 */
  }

  .home4-track {
    overflow: hidden;
    display: flex;
    padding: 0 12px;
    width: 800px;
    height: 360px;
    align-items: center;
    justify-content: center;
  }

  /* icon item baseline + inactive state */
  .home4-item {
    margin: 0 20px;
    width: 220px;
    height: 220px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 320ms ease, opacity 320ms ease;
    opacity: 0.8;
    transform: scale(0.8) translateY(-80px);
    cursor: pointer;
  }

  /* active center icon look */
  .home4-item.active {
    opacity: 1;
    transform: scale(1.2) translateY(10px);
    filter: drop-shadow(0 18px 30px rgba(0,0,0,0.25));
  }

  .home4-label {
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 28px;
    font-weight: 700;
    color: #fff;
    text-align: center;
  }

  .home3-item {
    background: linear-gradient(to bottom, #EDF4FE, #E7EEFE);
    border-radius: 36px;
    box-shadow: 4px 4px 6px rgba(238,245,255, 0.4), -4px -4px 6px rgba(233,239,255, 0.4);
  }
  .home3-img {
    width: 291px;
    height: 268px;
  }
  .home3-item-desc {
    line-height: 46px;
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

  [data-slot="viewport"] {
    overflow: hidden;
  }
  [data-slot="container"] {
    display: flex;
    flex-wrap: nowrap;
  }
  [data-slot="item"] {
    flex: 0 0 100%;
    min-width: 100%;
  }
  [data-slot="item"] img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
}
</style>