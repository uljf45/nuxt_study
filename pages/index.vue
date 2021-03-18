<template>
  <div class="container">
    <div class="empty block1 animate-init" to="fadeInBottom">

    </div>
    <div class="layer" :style="{'background-position-y': positionY1 + 'px'}">
      <Logo />
      <h1 class="title NuxtLogo">
        site
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green NuxtLogo"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey NuxtLogo"
        >
          GitHub
        </a>
      </div>
    </div>
    <div class="empty"></div>
    <div class="box">
      <div class="box-left animate-init" to="fadeInLeft"></div>
      <div class="box-right animate-init" to="fadeInRight"></div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'test',
  data () {
    return {
      flow: this.$store.state.options.flow,
      count: this.$store.state.count,
      options: this.$store.state.options,
      positionY1: 0,
      Y1: 220,
      ratio: 0.5
    }
  },
  computed: {
    computedCount () {
      return this.$store.state.count
    },
    computedFlow () {
      return this.$store.state.options.flow
    }
  },
  async asyncData (ctx) {
    // console.log(ctx)
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    this.animateElements = [...document.querySelectorAll('.animate-init')]
    
    let bgT = document.querySelector('.layer')
    this.Y1 = bgT.offsetTop * this.ratio
    this.handleScroll()
  },
  beforeDestroy () {
    console.log("🚀 ~ file: index.vue ~ line 72 ~ beforeDestroy ~ 'remove event listener'", 'remove event listener')
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      console.log('in scroll')
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
      this.positionY1 = this.Y1 - scrollTop * this.ratio
      this.checkAnimateElements()
    },
    checkAnimateElements() {
      for (let i = this.animateElements.length - 1; i >= 0; i--) {
        let item = this.animateElements[i]
        let rect = item.getBoundingClientRect()
        if (rect.top < (window.innerHeight || document.body.clientHeight ) && rect.bottom > 0) {
          this.$nextTick(() => {
            item.classList.add(item.getAttribute('to'))
          })
          this.animateElements.splice(i,1)
        }
      }
      if (this.animateElements.length == 0) {
        window.removeEventListener('scroll', this.handleScroll)
      }
    }
  },
  

}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
}
.empty {
  width: 100%;
  height: 400px;
}
.block1 {
  background: rgb(28, 77, 16);
}
.layer {
  width: 100%;
  height: 400px;
  padding: 10px 0;
  background: url('/images/background-1.jpg') no-repeat 0 220px,linear-gradient(45deg, #181f27, #15222a, #132028);
  background-attachment: fixed;
  background-position-x: 0;
  background-position-y: 220px;
}
.title {
  color: #fff;
}
.links {
  padding-top: 15px;
}
.animate-init {
  opacity: 0;
}
.box {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 400px;
  overflow-x: hidden;
  &-left {
    flex: 1;
    background: lightcoral;
  }
  &-right {
    flex: 1;
    background: lightblue;
  }
}


.fadeInRight {
  animation: fadeInRight 1s forwards;
}
.fadeInLeft {
  animation: fadeInLeft 1s forwards;
}

@keyframes fadeInLeft {
   0% {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  100% {
    opacity: 1;
     transform: none;
  }
}
@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  100% {
    opacity: 1;
     transform: none;
  }
}

.fadeInBottom {
  animation: fadeInBottom 1s forwards;
}

@keyframes fadeInBottom {
  0% {
    opacity: 0;
    transform: translate3d(0,100%,0);
  }

  100% {
    opacity: 1;
    transform: none;
  }
}
</style>
