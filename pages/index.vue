<template>
  <div class="pages-home">
    <section>
      <div class="home1 relative flex flex-col pl-15">
        <img
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1 }"
            :duration="600"
            class="absolute home1-bg" src="~/assets/images/home/home1.png" alt="">
        <MotionGroup preset="slideVisibleLeft" :duration="600">
          <section>
            <h1 class="mt-30">Apple Ads <br />
              The Global App Growth Platform<br />
              for Apple Ads
            </h1>
          </section>
          <section>
            <h3 class="mt-4">Our proprietary AsAP platform provides one-stop,<br />
              high-performance, and intelligent campaign management.
            </h3>
          </section>
          <section>
            <span class="mt-4" style="color: #333">91 Countries & Regions I 3,000+Apps Served I $80M+Annual Ad Spend I Global Reach</span>
          </section>
          <section>
            <img class="home1-bg-child1 mt-15" src="~/assets/images/home/home1-child1.png" alt="">
          </section>
          <section>
            <h4 class="mt-8">Apple Ads Official Partner</h4>
          </section>
        </MotionGroup>

      </div>
    </section>
    <h1 class="text-center py-10"
        v-motion
        :initial="{
      opacity: 0,
      y: 60
    }"
        :duration="600"
        :visible="{
          opacity: 1,
          y: 0
        }"
    >Why Choose Us?</h1>
    <section>
      <div style="width: 100%">
        <UCarousel loop v-slot="{ item }" :items="chooseItem" :autoplay="{ delay: 7000 }" fade>
          <img :src="item" alt="">
        </UCarousel>
      </div>
    </section>
    <h1 class="text-center py-10"
        v-motion
        :initial="{
      opacity: 0,
      y: 60
    }"
        :duration="600"
        :visible="{
          opacity: 1,
          y: 0
        }"
    >Dual Assurance of Effectiveness and Efficiency</h1>
    <section>
      <div class="grid gap-15 grid-cols-3 px-15">
        <div class="flex flex-col home3-item items-center pt-6 pb-10 px-10" v-for="(item, k) of homeThreeList" :key="k">
          <img class="home3-img" :src="item.img" alt=""
                v-motion
               :initial="{ opacity: 0 }"
               :visible="{ opacity: 1 }"
               :delay="k*200"
               :duration="600"
          >
          <h2 class="my-3">{{ item.title }}</h2>
          <p class="home3-item-desc"
             v-motion
             :initial="{ opacity: 0, x: -100 }"
             :visible="{
          opacity: 1,
          y: 0,
          x: 0
        }"
             :delay="k*100"
             :duration="600"
             v-html="item.desc" />
        </div>
      </div>
    </section>
    <section class="mt-16">
      <div class="home4 relative flex flex-col justify-center">
        <img
            v-motion
            :initial="{ opacity: 0 }"
            :visible="{ opacity: 1 }"
            :duration="600"
            class="absolute home4-bg" src="~/assets/images/home/home4-bg.png" alt="">
        <img class="absolute home4-title mt-40" src="~/assets/images/home/home4-title.png" alt="">

        <!-- Centered icon stage with left/right buttons -->
        <div class="home4-carousel">

          <button class="home4-arrow relative left" type="button" @click="prevHomeItem">
            <img
                v-motion
                :initial="{
    x: -20,
    opacity: 0
  }"
                :duration="600"
                :enter="{
    x: 0,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
    },
  }"
                src="~/assets/images/home/home4-left-btn.png" class="home4-btn" alt="prev">
            <img
                v-motion
                :initial="{
    x: -20,
    opacity: 0
  }"
                :duration="600"
                :enter="{
    x: 0,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
    },
  }"
                src="~/assets/images/home/home4-left-arrow.png" class="absolute" alt="">
          </button>

          <div class="home4-stage" >
            <div class="home4-track track1 relative">
              <div
                  class="home4-item"
                  v-for="(icon, i) in home4Icons"
                  :key="i"
                  :class="{ active: i === home4Index }"
              >
                <img :src="icon" alt="client icon" style="flex-shrink: 0">
              </div>

              <div class="home4-label">Lifestyle</div>
            </div>

            <div class="home4-track track2 relative">
              <div
                  class="home4-item"
                  v-for="(icon, i) in home4Icons2"
                  :key="i"
                  :class="{ active: i === home4Index }"
              >
                <img :src="icon" alt="client icon" style="flex-shrink: 0">
              </div>
              <div class="home4-label">Social Networking</div>

            </div>
            <div class="home4-track track3 relative">
              <div
                  class="home4-item"
                  v-for="(icon, i) in home4Icons3"
                  :key="i"
                  :class="{ active: i === home4Index }"
              >
                <img :src="icon" alt="client icon" style="flex-shrink: 0">
              </div>
              <div class="home4-label">Productivity & utilities</div>
            </div>

            <div class="home4-track track4 relative">
              <div
                  class="home4-item"
                  v-for="(icon, i) in home4Icons4"
                  :key="i"
                  :class="{ active: i === home4Index }"
              >
                <img :src="icon" alt="client icon" style="flex-shrink: 0">
              </div>
              <div class="home4-label">others</div>
            </div>

          </div>



          <button class="home4-arrow relative right" type="button" @click="nextHomeItem">
            <img
                v-motion
                :initial="{
    x: 20,
    opacity: 0
  }"
                :duration="600"
                :enter="{
    x: 0,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
    },
  }"
                src="~/assets/images/home/home4-right-btn.png"class="home4-btn" alt="next">
            <img
                v-motion
                :initial="{
    x: 20,
    opacity: 0
  }"
                :duration="600"
                :enter="{
    x: 0,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
    },
  }"
                src="~/assets/images/home/home4-right-arrow.png" class="absolute" alt="">
          </button>

        </div>
      </div>
    </section>
    <section style="margin-top: -110px">
      <div class="home5 relative flex flex-col items-center">
        <img
            v-motion
            :initial="{ opacity: 0 }"
            :visible="{ opacity: 1 }"
            :duration="600"
            class="home5-bg absolute" src="~/assets/images/home/home5-bg.png" alt=""></img>
        <h1 class="mt-16"
            v-motion
            :initial="{
      opacity: 0,
      y: 60
    }"
            :duration="600"
            :visible="{
          opacity: 1,
          y: 0
        }"
        >Success Stories</h1>
        <div class="relative">
          <UCarousel ref="home5Carousel" loop v-slot="{ item }" :items="home5SwiperList" @select="onHome5Select"
                     :autoplay="{ delay: 7000 }" fade>
            <div :key="item.id">
              <img
                  v-motion
                  :initial="{ opacity: 0 }"
                  :visible="{ opacity: 1 }"
                  :duration="600"
                  class="h5-bg" :src="item.bg" alt="">
              <div class="absolute h5-img-box" :key="item.id">
                <img :src="item.img" class="absolute h5-img" alt="">
              </div>
            </div>
          </UCarousel>

          <!-- 自定义 dots（隐藏默认 dots） -->
          <div class="home5-dots" aria-hidden="false">
            <button
                v-for="(_, idx) in home5SwiperList"
                :key="idx"
                :class="['home5-dot', { active: idx === home5Index }]"
                @click="goHome5(idx)"
                :aria-label="`Go to slide ${idx + 1}`"
            >
              <span
                  v-if="idx === home5Index"
                  class="dot-fill"
              ></span>
            </button>
          </div>
        </div>
      </div>
    </section>
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
import home4Icon4 from '~/assets/images/home/home4-icon4.png'
import home4Icon5 from '~/assets/images/home/home4-icon5.png'
import home4Icon6 from '~/assets/images/home/home4-icon6.png'
import home4Icon7 from '~/assets/images/home/home4-icon7.png'
import home4Icon8 from '~/assets/images/home/home4-icon8.png'
import home4Icon9 from '~/assets/images/home/home4-icon9.png'
import home4Icon10 from '~/assets/images/home/home4-icon10.png'
import home4Icon11 from '~/assets/images/home/home4-icon11.png'
import home4Icon12 from '~/assets/images/home/home4-icon12.png'
import h5SwiperBg1 from '~/assets/images/home/h5-swiper-bg1.png'
import h5SwiperImg1 from '~/assets/images/home/h5-swiper-img1.png'
import h5SwiperBg2 from '~/assets/images/home/h5-swiper-bg2.png'
import h5SwiperImg2 from '~/assets/images/home/h5-swiper-img2.png'
import h5SwiperBg3 from '~/assets/images/home/h5-swiper-bg3.png'
import h5SwiperImg3 from '~/assets/images/home/h5-swiper-img3.png'
import h5SwiperBg4 from '~/assets/images/home/h5-swiper-bg4.png'
import h5SwiperImg4 from '~/assets/images/home/h5-swiper-img4.png'

const chooseItem = ref([
  choose1,
  choose2,
  choose3
])

const home5SwiperList = ref([
  {
    id: 1,
    bg: h5SwiperBg1,
    img: h5SwiperImg1
  },
  {
    id: 2,
    bg: h5SwiperBg2,
    img: h5SwiperImg2
  },
  {
    id: 3,
    bg: h5SwiperBg3,
    img: h5SwiperImg3
  },
  {
    id: 4,
    bg: h5SwiperBg4,
    img: h5SwiperImg4
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

const home4AllIcons = ref([home4Icon1, home4Icon2, home4Icon3, home4Icon4, home4Icon5, home4Icon6, home4Icon7, home4Icon8, home4Icon9, home4Icon10, home4Icon11, home4Icon12])
const home4Icons = ref([home4Icon1, home4Icon2, home4Icon3])
const home4Icons2 = ref([home4Icon4, home4Icon5, home4Icon6])
const home4Icons3 = ref([home4Icon7, home4Icon8, home4Icon9])
const home4Icons4 = ref([home4Icon10, home4Icon11, home4Icon12])
// 默认选中中间的 icon
const home4Index = ref(1)

function clickHomeItem(index: number) {
  if(home4Index.value === index) return
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

let iconGroup = 0 // 最大为4 每个代表三组icon
function prevHomeItem() {

  if(iconGroup > 0) {
    iconGroup--
    console.log('iconGroup', iconGroup)

    const homeTrack = document.querySelector(`.home4-stage`)
    homeTrack!!.scrollTo({
      left: iconGroup*800,
      behavior: 'smooth'
    })

  }
}
function nextHomeItem() {
  console.log('iconGroup', iconGroup)
  if(iconGroup < 3) {
    iconGroup++
    const homeTrack = document.querySelector(`.home4-stage`)
    homeTrack!!.scrollTo({
      left: iconGroup*800,
      behavior: 'smooth'
    })

  }
}


const home5Carousel = useTemplateRef('home5Carousel') // template ref to UCarousel instance
const home5Index = ref(0)

// 当 UCarousel 触发 select 事件时（它会 emit select(selectedIndex)）
function onHome5Select(index: number) {
  home5Index.value = index
}

// programmatically scroll carousel to index using exposed emblaApi
function goHome5(index: number) {
  home5Carousel.value?.emblaApi?.scrollTo(index)
  home5Index.value = index

  // const comp = home5Carousel.value
  // if (!comp) {
  //   home5Index.value = index
  //   return
  // }
  //
  // // emblaApi 在组件实例上以 emblaApi 这个 ref 暴露（@nuxt/ui 的 Carousel 实现）
  // try {
  //   const emblaRef = comp?.emblaApi
  //   if (emblaRef && emblaRef.value && typeof emblaRef.value.scrollTo === 'function') {
  //     emblaRef.value.scrollTo(index)
  //   } else {
  //     // fallback: update index (visual sync)
  //     home5Index.value = index
  //   }
  // } catch (e) {
  //   home5Index.value = index
  // }
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
    overflow: hidden; /* 隐藏溢出的内容 */
  }

  .home4-track {
    flex-shrink: 0;
    display: flex;
    flex-grow: 1;
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
  }

  /* active center icon look */
  .home4-item.active {
    opacity: 1;
    transform: scale(1.2) translateY(10px);
    filter: drop-shadow(0 18px 30px rgba(0,0,0,0.25));
  }

  .home4-label {
    position: absolute;
    bottom: -116px;
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
    font-weight: 700;
  }
  h2 {
    font-size: 30px;
  }
  h3 {
    font-size: 24px;
  }
  h4 {
    font-size: 20px;
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
    object-fit: contain;
  }

  /* 隐藏默认 UCarousel dots（保险） */
  .home5 [data-slot="dots"] {
    display: none !important;
  }

  /* 自定义 dots 容器（居中） */
  .home5-dots {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 6px;
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: center;
    z-index: 90;
    pointer-events: auto;
  }

  /* 小圆点基态 */
  .home5-dot {
    width: 60px;
    height: 8px;
    background: rgba(255,255,255);
    border-radius: 999px;
    border: 1px solid rgba(255,255,255,0.08);
    transition: all 260ms cubic-bezier(.2,.8,.2,1);
    cursor: pointer;
    padding: 0;
    box-shadow: none;
    position: relative;
    overflow: hidden;
  }

  /* 活跃的 pill 样式（类似你贴图的中间长条 + 渐变 + 阴影） */
  .home5-dot.active {
    //width: 60px;
    //height: 8px;
    //border-radius: 999px;
    //background: linear-gradient(90deg, #ffd84a 0%, #00e0ff 100%);
    //box-shadow: 0 10px 28px rgba(0,160,255,0.18), 0 4px 10px rgba(0,0,0,0.25);

    box-shadow: 0 10px 28px rgba(0,160,255,0.18), 0 4px 10px rgba(0,0,0,0.25);
    background: rgba(255,255,255);
  }

  .dot-fill {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    background: linear-gradient(90deg, #ffd84a 0%, #00e0ff 100%);
    border-radius: 999px;
    animation: fillDot 7s linear forwards;
  }

  @keyframes fillDot {
    to {
      width: 60px;
    }
  }

  /* 响应式 */
  @media (max-width: 640px) {
    .home5-dots { bottom: 18px; }
    .home5-dot { width: 10px; height: 10px; }
    .home5-dot.active { width: 44px; height: 8px; }
  }

}
</style>