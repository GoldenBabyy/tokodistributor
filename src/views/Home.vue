<template>
  <div class="wrapper">
    <div class="container">
      <div class="container__top">
        <img class="container__top--pattern" alt="thumbnail" src="../assets/pattern.svg" />
        <div class="container__top--header" ref="header">
          <div class="header">
            <IconLogo class="logo" />
            <router-link to="/design-system">
              <Button size="xs" v-if="!isMobile">Daftar Sekarang</Button>
            </router-link>
          </div>
        </div>
        <div class="container__top--content">
          <div class="content">
            <span class="content__title">{{title}}</span>
            <span class="content__desc">Dapatkan harga khusus premium  yang lebih murah hingga 60%+  dengan menjadi Reseller Premium</span>
            <div class="content__button">
              <router-link to="/design-system">
                <Button size="lg" :fullWidth="isMobile">
                  <span>Daftar Sekarang</span>
                  <IconChevronRight />
                </Button>
              </router-link>
            </div>
          </div>
          <img class="content__thumbnail" alt="thumbnail" src="../assets/thumbnail.png">
          <img class="content__pattern top" alt="thumbnail" src="../assets/pattern-top.svg" v-if="!isMobile">
          <img class="content__pattern bottom" alt="thumbnail" src="../assets/pattern-bottom.svg" v-if="!isMobile">
        </div>
      </div>
    </div>
    <div class="container__center">
      <div class="container__center--content">
        <div class="content">
          <span class="content__title">Harga lebih murah hingga 60%+</span>
          <span class="content__desc">Dapatkan harga khusus Reseller Premium yang lebih murah hingga 60%+ dari harga normal. Dengan harga lebih murah tentunya margin kamu bisa lebih besar, dong! </span>
        </div>
        <img class="content__thumbnail" alt="thumbnail" src="../assets/thumbnail-2.png"/>
      </div>
    </div>
    <div class="container">
      <div class="container__bottom">
        <div class="container__bottom--top">
          <img class="logo" alt="logo" src="../assets/logo.svg">
          <span class="desc">Unduh Aplikasi Tokodistributor</span>
        </div>
        <div class="container__bottom--bottom">
          <div class="left">
            <img class="google-play" alt="thumbnail" src="../assets/google-play.svg">
            <div class="social-media">
              <IconInstagram class="social-media__icon"/>
              <IconYoutube class="social-media__icon"/>
              <IconLinkedin class="social-media__icon"/>
              <IconFacebook class="social-media__icon"/>
            </div>
          </div>
          <div class="right">
            <div class="right__content">
              <span class="right__content--title">{{contactTitle}}</span>
              <span class="right__content--desc">{{contactDesc}}</span>
            </div>
            <img alt="thumbnail" src="../assets/whatsapp.svg"/>
          </div>
        </div>
        <img class="container__bottom--pattern" alt="thumbnail" src="../assets/pattern.svg" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/design-system/components/button/Button'
import IconChevronRight from '@/design-system/components/icons/ChevronRight'
import IconInstagram from '@/design-system/components/icons/Instagram'
import IconFacebook from '@/design-system/components/icons/Facebook'
import IconLinkedin from '@/design-system/components/icons/Linkedin'
import IconYoutube from '@/design-system/components/icons/Youtube'
import IconLogo from '@/design-system/components/icons/Logo'

export default {
  name: 'Home',
  components: {
    Button,
    IconChevronRight,
    IconFacebook,
    IconInstagram,
    IconLinkedin,
    IconYoutube,
    IconLogo
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  computed: {
    isMobile () {
      return window.innerWidth < 641
    },
    title () {
      if (this.isMobile) return 'Reselling dengan Penghasilan Lebih dari 10jt/bulan'
      return 'Reselling lebih Untung dengan Penghasilan Lebih dari 10jt/ bulan'
    },
    contactTitle () {
      if (this.isMobile) return '24 Jam'
      return 'Chat Kami'
    },
    contactDesc () {
      if (this.isMobile) return 'Customer Support'
      return 'di Whatsapp'
    },
    scrollY () {
      return window.scrollY
    }
  },
  methods: {
    handleScroll () {
      const scrollTrigger = 60
      if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
        this.$refs.header.classList.add('onscroll')
      } else {
        this.$refs.header.classList.remove('onscroll')
      }
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="scss" scoped>
@import '@/design-system/tokens/ds-alias-tokens';

@mixin mobile {
  @media screen and (max-width: 640px) {
    @content;
  }
}

@mixin desktop {
  @media screen and (min-width: 641px), print {
    @content;
  }
}

@mixin widescreen {
  @media screen and (min-width: 1441px), print {
    @content;
  }
}

@mixin custom-screen($from, $to) {
  @media screen and (min-width: $from) and (max-width: $to - 1px) {
    @content;
  }
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  @include mobile {
    --content-title: #{$td-text-heading-2};
    --content-desc: #{$td-text-body-2};
    --pattern-scale: 1.5;
  }
  @include desktop {
    --content-title: #{$td-text-heading-2};
    --content-desc: #{$td-text-body-2};
    --pattern-scale: 1;
  }
  @include widescreen {
    --content-title: #{$td-text-heading-1};
    --content-desc: #{$td-text-body-1};
    --pattern-scale: 1;
  }
  .container {
    display: flex;
    justify-content: center;
    width: 100%;
    background: $td-color-brand-gradient;
    &__top {
      position: relative;
      display: flex;
      flex-direction: column;
      width: 100%;
      z-index: 9;
      max-width: 980px;
      @include mobile { margin: 0 24px; }
      @include desktop { margin: 0 40px; }
      &--header {
        --color-logo: #{$td-color-white-icon-default};
        position: relative;
        left: 0;
        z-index: 99;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: transparent;
        width: 100%;
        transition: all .3s ease-in-out;
        @include mobile { padding: 24px 0; }
        @include desktop { padding: 12px 0; }
        &.onscroll {
          --color-logo: #{$td-color-red-icon-default};

          position: fixed;
          background-color: $td-color-neutral-background-white-true;
          @include mobile { padding: 12px 22px 14px; }
          .header {
            @include desktop { max-width: 980px; }
            @include custom-screen(641px, 1050px) { padding: 0 40px; }
          }
        }
        .logo {
          width: 199px;
          height: 30px;
          color: var(--color-logo);
        }
        .header {
          display: flex;
          justify-content: space-between;
          width: 100%;
          @include widescreen { max-width: 1080px; }
        }
      }
      &--content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        @include desktop { padding: 24px 0 40px; }
        @include mobile {
          flex-wrap: wrap;
          padding: 24px 0 50px;
        }
        .content {
          display: flex;
          flex-direction: column;
          @include desktop {
            margin-right: 16px;
            max-width: 410px;
          }
          &__title {
            font: var(--content-title);
            color: $td-color-white-text-default;
            white-space: break-spaces;
            -webkit-text-stroke: .6px $td-color-neutral-background-white-true;
          }
          &__desc {
            font: var(--content-desc);
            color: $td-color-gray-text-low-1;
            margin-top: 8px;
          }
          &__button { margin-top: 24px; }
          &__thumbnail {
            width: 280px;
            @include mobile {
              margin: 20px auto 0;
            }
          }
          &__pattern {
            position: absolute;
            z-index: -1;
            &.top {
              top: 0;
              right: -12%;
            }
            &.bottom {
              bottom: 0;
              left: -5%;
            }
          }
        }
      }
      &--pattern {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        margin: auto;
        width: 100%;
        z-index: -1;
        transform: translateX(-50%) scale(var(--pattern-scale));
        -webkit-transform: translateX(-50%) scale(var(--pattern-scale));
      }
    }
    &__center {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      &--content {
        display: flex;
        justify-content: space-between;
        width: 100%;
        max-width: 980px;
        @include desktop { margin: 60px 40px; }
        @include mobile {
          flex-wrap: wrap;
          margin: 24px;
        }
        .content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          @include desktop {
            max-width: 410px;
            margin-right: 16px;
          }
          &__title {
            font: var(--content-title);
            color: $td-color-gray-text-high-1;
            white-space: break-spaces;
            -webkit-text-stroke: .6px $td-color-gray-text-high-1;
          }
          &__desc {
            font: var(--content-desc);
            color: $td-color-gray-text-high;
            margin-top: 8px;
          }
          &__thumbnail {
            @include mobile {
              width: 280px;
              margin: 16px auto 0;
            }
            @include desktop { width: 280px; }
            @include widescreen { width: 330px; }
          }
        }
      }
    }
    &__bottom {
      position: relative;
      display: flex;
      flex-direction: column;
      max-width: 980px;
      width: 100%;
      @include mobile { margin: 24px 40px; }
      @include desktop { margin: 40px; }
      &--top {
        display: flex;
        flex-direction: column;
        justify-content: center;
        @include mobile { align-items: center; }
        .logo {
          @include mobile() {
            width: 200px;
            height: 19px;
          }
          @include desktop {
            width: 357px;
            height: 35px;
          }
        }
        .desc {
          font: var(--content-desc);
          color: $td-color-white-text-default;
          margin-top: 24px;
          white-space: nowrap;
        }
      }
      &--bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 9;
        @include mobile { flex-direction: column; }
        .left {
          display: flex;
          flex-direction: column;
          @include mobile() { align-items: center; }
          @include desktop { align-items: flex-start; }
          .google-play {
            margin: 12px 0;
            cursor: pointer;
          }
          .social-media {
            cursor: pointer;
            & *:not(:last-child) { margin-right: 15px; }
          }
        }
        .right {
          display: flex;
          background: $td-color-neutral-background-white-true;
          height: fit-content;
          padding: 12px 24px;
          border-radius: 82px;
          cursor: pointer;
          @include mobile { margin-top: 18px; }
          &__content {
            display: flex;
            flex-direction: column;
            margin-right: 12px;
            &--title {
              color: $td-color-gray-text-high-1;
              font: $td-text-body-bold-1;
            }
            &--desc {
              color: $td-color-gray-text-med-1;
              font: $td-text-small;
            }
          }
        }
      }
      &--pattern {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        margin: auto;
        width: 100%;
        transform: translateX(-50%) scale(var(--pattern-scale));
        -webkit-transform: translateX(-50%) scale(var(--pattern-scale));
      }
    }
  }
}
</style>
