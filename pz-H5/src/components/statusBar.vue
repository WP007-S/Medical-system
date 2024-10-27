<template>
    <div class="od-banner">
      <img class="od-banner-icon" src="../../public/images/od_bg_icon.png" mode="widthFix" />
      <div class="od-jd" :class="[`od-jd-${item}`]">
        <div class="od-jd-out">
          <div class="od-jd-in"></div>
        </div>
        <div class="vp-flex od-jd-text">
          <div class="vp-flex_1">
            <text class="od-jd-st-0">填写订单</text>
          </div>
          <div class="vp-flex_1">
            <text class="od-jd-st-10">在线支付</text>
          </div>
          <div class="vp-flex_1">
            <text class="od-jd-st-20">专人服务</text>
          </div>
          <div class="vp-flex_1">
            <text class="od-jd-st-30">服务完成</text>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive, getCurrentInstance, onMounted } from "vue";
  const { proxy } = getCurrentInstance();
  const { item } = defineProps(["item"]);
  </script>
  
  <style lang="less" scoped>
  .vp-flex {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
  .vp-flex_1 {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-tap-highlight-color: transparent;
  }
  .od-banner {
    overflow: hidden;
    position: relative;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAABCAIAAACpCl0xAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHrSURBVHjadFVBcgMxCEP3Prtv6vfUrI1A2JvMtJPYGIQQgJ+/X0YgPh+uv/V1nTCI9ZORJthGaVyWrFehU9qX/cvP9d+d9Ieyf4uVqMxPRpf/jfm5SRs+vsxVzOd19Yq8gbmZrnaUJueJtrBjPHd+klJ3aNSRA8uAF0o8rnJg1ihOTizZ5tKeJttN7AHvKNYNu3jAWeJWyMVJKJ2T/9e4h+dR4vPJi4eLik2Rp4uhZOabjTNLK1IhreUzp8MFB8Mj06YaSwxU0Z8LsYQkVDfLmNWe1ZhWTHwcwcCYp0MNb9pbqt0pmkyWu4aBBdy0yLNXXorl6nbGfdqEpQydLz4oTm7N4xgFEXkUUhst68VhkpTw6YKpFnB+8CrLcZ6xNnMFuSLegU51Cm/pBkbOaLpVSND4FgbUcCihz5Igrh68dSL9LoaiNIxWqJ17W4XNjcLcspF2JbMYhLSQtvjwOmu6UZl9wtUEPX811zn1CGt1Sxv3KknFbZcZBTWqsqjDLHAkqx66V0mSUOqh2kmnsHL4oCHjy3iTWrLv1bYs1bF7xJpq20Snfw4T06EG+15qFJ3FftQIDMYlqeRjLC8czUWtbFiXsReJ+FVKYcSf67sHQl/5KGkaplpt/aiWyeK39WS2tJWL6CmUMv8XYABQPZBxCZSO0gAAAABJRU5ErkJggg==)
      repeat-y center;
    background-size: 100%;
  }
  .od-banner-icon {
    position: absolute;
    top: 15px;
    right: -10px;
    width: 65px;
    opacity: 0.6;
  }
  
  .od-jd {
    margin: 30px 20px;
  }
  .od-jd-out {
    background: #ffffff;
    border: 2.5px solid #ffffff;
    height: 10px;
    line-height: 10px;
    border-radius: 25px;
    overflow: hidden;
    position: relative;
  }
  .od-jd-in {
    height: 10px;
    line-height: 10px;
    border-radius: 25px;
    overflow: hidden;
    width: 0%;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAABCAIAAACpCl0xAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHrSURBVHjadFVBcgMxCEP3Prtv6vfUrI1A2JvMtJPYGIQQgJ+/X0YgPh+uv/V1nTCI9ZORJthGaVyWrFehU9qX/cvP9d+d9Ieyf4uVqMxPRpf/jfm5SRs+vsxVzOd19Yq8gbmZrnaUJueJtrBjPHd+klJ3aNSRA8uAF0o8rnJg1ihOTizZ5tKeJttN7AHvKNYNu3jAWeJWyMVJKJ2T/9e4h+dR4vPJi4eLik2Rp4uhZOabjTNLK1IhreUzp8MFB8Mj06YaSwxU0Z8LsYQkVDfLmNWe1ZhWTHwcwcCYp0MNb9pbqt0pmkyWu4aBBdy0yLNXXorl6nbGfdqEpQydLz4oTm7N4xgFEXkUUhst68VhkpTw6YKpFnB+8CrLcZ6xNnMFuSLegU51Cm/pBkbOaLpVSND4FgbUcCihz5Igrh68dSL9LoaiNIxWqJ17W4XNjcLcspF2JbMYhLSQtvjwOmu6UZl9wtUEPX811zn1CGt1Sxv3KknFbZcZBTWqsqjDLHAkqx66V0mSUOqh2kmnsHL4oCHjy3iTWrLv1bYs1bF7xJpq20Snfw4T06EG+15qFJ3FftQIDMYlqeRjLC8czUWtbFiXsReJ+FVKYcSf67sHQl/5KGkaplpt/aiWyeK39WS2tJWL6CmUMv8XYABQPZBxCZSO0gAAAABJRU5ErkJggg==)
      repeat-y center;
    background-size: 100%;
  }
  .od-jd-text {
    text-align: center;
    padding-top: 15px;
  }
  .od-jd-text text {
    color: #ffffff;
    font-size: 13px;
    opacity: 0.7;
  }
  
  .od-jd-0 .od-jd-in {
    width: 12%;
  }
  .od-jd-0 .od-jd-st-0 {
    opacity: 1;
    font-weight: bold;
  }
  .od-jd-10 .od-jd-in {
    width: 37%;
  }
  .od-jd-10 .od-jd-st-10 {
    opacity: 1;
    font-weight: bold;
  }
  .od-jd-20 .od-jd-in {
    width: 64%;
  }
  .od-jd-20 .od-jd-st-20 {
    opacity: 1;
    font-weight: bold;
  }
  .od-jd-30 .od-jd-in {
    width: 100%;
  }
  .od-jd-30 .od-jd-st-30 {
    opacity: 1;
    font-weight: bold;
  }
  .od-jd-40 .od-jd-in {
    width: 100%;
    background: #999999;
  }
  </style>
  