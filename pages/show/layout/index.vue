<template>
  <div>
    <!-- 头部 -->
    <div class="outer bg-white box-shadow-bottom">
      <div class="inner header">
        <div class="icon"></div>
        <nav class="nav"></nav>
        <div class="login-status">
          <div class="login-status-inner">您好，xxxxxx!
            <div class="hover-box"></div>
          </div>
          
        </div>
      </div>
    </div>
    <!-- 头部 结束 -->

    <!-- banner -->
    <div class="outer banner"></div>
    <!-- banner 结束 -->

    <!-- 公司简介 -->
    <div class="outer introduction">
      <div class="inner">
        <div class="intro"></div>
        <div class="pic"></div>
      </div>
    </div>
    <!-- 公司简介 结束 -->

    <!-- 业务 公告 -->
    <div class="outer business-low">
      <div class="bussiness inner">

      </div>
      <div class="law">
        <div class="inner">

        </div>
      </div>
    </div>
    <!-- 业务 公告 结束-->

    <div class="outer cooperators">
      <div class="inner coop1">
      </div>
    </div>
    <div class="outer coop2">
      <div class="inner"></div>
    </div>
    <div class="outer footer">
      <div class="footer1"></div>
      <div class="footer2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowLayout'
}
</script>

<style lang="scss">
  body {
    background: #f7f7f7;
  }
  .outer {
    position: relative;
    width: 100%;
    min-width: 1200px;
    max-width: 1920px;
    margin: auto;
  }
  .box-shadow-bottom {
    box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.25);
  }
  .inner {
    position: relative;
    width: 1200px;
    margin: auto;
  }
  .header {
    height: 120px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .icon {
    width: 192px;
    background: #d50200;
  }
  .nav {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .login-status {
    width: 174px;
    background: lightgoldenrodyellow;

    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
   
  }
  .login-status-inner {
    &:hover .hover-box {
      display: block;
    }
    .hover-box {
      position: absolute;
      right: 0;
      top: 72px;
      
      display: none;
      width: 224px;
      height: 142px;
      background: #FFFFFF;
      box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.06);
      border: 1px solid #E4E7ED;
    }
  }

  .banner {
    height: 500px;
    background: url(~/static/images/banner.jpg) no-repeat center center;
  }

  .introduction {
    position: relative;
    height: 720px;
    background: url(~/static/images/building.jpg) no-repeat center center;
    .inner {
      height: 100%;
      .pic {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 1200px;
        height: 230px;
        border: 1px solid #fff;
        background: url(~/static/images/pic.jpg) no-repeat center top;
      }
    }
  
  }
  .intro {
    background: lightslategrey;
    width: 560px;
    height: 400px;
  }

  .business-low {
    padding-top: 368px;
    .bussiness {
      top: 178px;
      left: 50%;
      margin-left: -600px;
      position: absolute;
      height: 380px;
      background: pink;
    }
    .law {
      padding-top: 270px;
      height: 838px;
      background: url(~/static/images/background-2.jpg) no-repeat center center;
      .inner {
        height: 474px;
        background: #fff;
      }
    }
  }

  .cooperators {
    height: 316px;
    background: #f7f7f7;
    .inner {
      height: 316px;
      background: lightseagreen;
    }
  }
  .coop2 {
    background: #fff;
    height: 143px;
    .inner {
      height: 100%;
      background: lightsalmon;
    }
  }

  .footer {

  }
  .footer1 {
    height: 212px;
    background: #313131;
  }
  .footer2 {
    height: 60px;
    background: #121212;
  }


</style>