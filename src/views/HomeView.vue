<template>
  <div>
    <div class="top rellax" data-rellax-speed="10">
      <p style="font-family: '站酷高端黑 Regular'; font-size: 30px;">LOGOHERE</p>
      <p>home</p>
      <p>about</p>
      <p>home</p>
      <p>about</p>
      <div style="display: inline-block;">
        <div class="btn">
          <span style="z-index: 5; padding: 10px;">123456</span>
        </div>
      </div>
    </div>
    <div style="height: 1000px;">
      <div style="height: 200px;" class="rellax center" data-rellax-speed="10">
        <h1 class="hello">你好,欢迎加入</h1>
        <h1 class="md">123456</h1>
      </div>
      <div class="rellax r4" data-rellax-speed="-2" style="left: 10%; top: -5%; position: absolute; z-index: -5;">
        <img src="../assets/r4.svg" />
      </div>
      <div class="rellax r3" data-rellax-speed="7" style="left: 30%; bottom: -15%; position: absolute; z-index: -5;">
        <img src="../assets/r1.svg" />
      </div>
      <div class="rellax r2" data-rellax-speed="1" style="right: 30%; top: -5%; position: absolute; z-index: -5;">
        <img src="../assets/r2.svg" />
      </div>
      <div class="rellax r1" data-rellax-speed="10" style="right: 10%; bottom: -30%; position: absolute; z-index: -5;">
        <img src="../assets/r3.svg" />
      </div>
    </div>
    <div class="sideBtnLike">
      <img src="../assets/like.svg" style="height: 26px; margin-top: 3px;" />
    </div>
    <div class="sideBtnLight">
      <img src="../assets/light.svg" style="height: 26px; margin-top: 3px;" />
    </div>
    <div class="sideBtnDark">
      <img src="../assets/dark.svg" style="height: 26px; margin-top: 3px;" />
    </div>
  </div>
</template>
<script>
import Rellax from 'rellax'
export default {
  data() {
    return {
    }
  },
  mounted() {
    this.setUpRellax()
  },
  methods: {
    setUpRellax() {
      var rellax = new Rellax('.rellax');
    }
  }
}
</script>
<style>
.top {
  position: absolute;
  top: 5%;
  left: 50%;
  translate: -50% -50%;
  animation-duration: 1.5s;
  animation-name: slide_top;
}

@keyframes slide_top {
  from {
    top: 0;
    opacity: 0;
  }

  to {
    top: 5%;
    opacity: 1;
  }
}

p {
  display: inline-block;
  margin-left: 20px;
  margin-right: 20px;
  vertical-align: middle;
}

.center {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  animation-duration: 1.5s;
  animation-name: slidein;
  letter-spacing: 4px;
}

h1 {
  font-size: 55px;
  font-family: "zhengfang";
  color: black;
}

.hello {
  margin-right: 200px;
}

.md {
  background: -webkit-linear-gradient(37deg, rgba(0, 211, 255, 1) 0%, rgba(0, 255, 252, 1) 54%, rgba(0, 176, 255, 1) 94%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-left: 200px;
  margin-top: -20px;
}

@keyframes slidein {
  from {
    transform: scale(1.5);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
}

.r1 {
  animation-duration: 2.5s;
  animation-name: slide_r1;
}

@keyframes slide_r1 {
  0% {
    opacity: 0;
    bottom: -40%;
  }

  40% {
    opacity: 0;
    bottom: -40%;
  }

  100% {
    opacity: 1;
    bottom: -30%;
  }
}

.r2 {
  animation-duration: 2.5s;
  animation-name: slide_r2;
}

@keyframes slide_r2 {
  0% {
    opacity: 0;
    top: -15%;
  }

  40% {
    opacity: 0;
    top: -15%;
  }

  100% {
    opacity: 1;
    top: -5%;
  }
}

.r3 {
  animation-duration: 2.5s;
  animation-name: slide_r3;
}

@keyframes slide_r3 {
  0% {
    opacity: 0;
    bottom: -25%;
  }

  40% {
    opacity: 0;
    bottom: -25%;
  }

  100% {
    opacity: 1;
    bottom: -15%;
  }
}

.r4 {
  animation-duration: 2.5s;
  animation-name: slide_r4;
}

@keyframes slide_r4 {
  0% {
    opacity: 0;
    top: -15%;
  }

  40% {
    opacity: 0;
    top: -15%;
  }

  100% {
    opacity: 1;
    top: -5%;
  }
}

.sideBtnLike {
  background-color: black;
  position: fixed;
  right: 2%;
  top: 42%;
  height: 32px;
  width: 32px;
  border-radius: 16px;
  animation-duration: 2.5s;
  animation-name: slide_btn_like;
  cursor: pointer;
}

@keyframes slide_btn_like {
  0% {
    opacity: 0;
    top: 45%;
  }

  40% {
    opacity: 0;
    top: 45%;
  }

  100% {
    opacity: 1;
    top: 42%;
  }
}

.sideBtnLight {
  background-color: black;
  position: fixed;
  right: 2%;
  top: 47%;
  height: 32px;
  width: 32px;
  border-radius: 16px;
  animation-duration: 2.7s;
  animation-name: slide_btn_light;
  cursor: pointer;
}

@keyframes slide_btn_light {
  0% {
    opacity: 0;
    top: 50%;
  }

  40% {
    opacity: 0;
    top: 50%;
  }

  100% {
    opacity: 1;
    top: 47%;
  }
}

.sideBtnDark {
  background-color: black;
  position: fixed;
  right: 2%;
  top: 52%;
  height: 32px;
  border-radius: 16px;
  width: 32px;
  animation-duration: 2.9s;
  animation-name: slide_btn_dark;
  cursor: pointer;
}

@keyframes slide_btn_dark {
  0% {
    opacity: 0;
    top: 55%;
  }

  40% {
    opacity: 0;
    top: 55%;
  }

  100% {
    opacity: 1;
    top: 52%;
  }
}

.sideBtnLike:hover {
  background-color: rgba(0, 176, 255, 1);
}

.sideBtnLight:hover {
  background-color: rgba(0, 176, 255, 1);
}

.sideBtnDark:hover {
  background-color: rgba(0, 176, 255, 1);
}

.btn {
  position: relative;
  vertical-align: middle;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 15px;
  padding-right: 15px;
  color: #fff;
  font-family: "zhengfang";
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 10px;
  cursor: pointer;
  background-color: #000;
}

.btn::before {}

.btn::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transform: scaleX(0);
  border-radius: 10px;
  background-color: rgba(0, 176, 255, 1);
  transform-origin: 100% 50%;
  transition: transform 0.2s cubic-bezier(0.405, 0.07, 0.575, 0.995) 0.1s, transform-origin 0.1s cubic-bezier(0.405, 0.07, 0.575, 0.995) 0s;
  transition-duration: 0.2s, 0.1s;
  transition-timing-function: cubic-bezier(0.405, 0.07, 0.575, 0.995), cubic-bezier(0.405, 0.07, 0.575, 0.995);
  transition-delay: 0.1s, 0s;
  transition-property: transform, transform-origin;
}

.btn:hover::before {}

.btn:hover::after {
  transform: scaleX(1);
}

/* CDN 服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
  font-family: "站酷高端黑 Regular";
  font-weight: 400;
  src: url("//at.alicdn.com/wf/webfont/rAyo1FZXxunD/Zx342eHxwsxa.woff2") format("woff2"),
    url("//at.alicdn.com/wf/webfont/rAyo1FZXxunD/jC8nvUoYmJgl.woff") format("woff");
  font-display: swap;
}
</style>