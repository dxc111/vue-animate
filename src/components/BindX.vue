<template>
  <div class="container" >
      <div class="border">
        <div class="box" ref="my" @touchstart="onTouchStart">
          <div class="head">
            <div class="avatar"></div>
            <span class="username">Foo</span>
          </div>
          <div class="content">
            <span class="desc">Weex is a framework for building Mobile cross-platform UI. Rax is a universal JavaScript library with a largely React-compatible API.</span>
          </div>
          <div class="footer">
            <span class="action">SHARE</span>
            <span class="action" style="color:#7C4DFF">EXPLORE</span>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
  .container {
    flex: 1;
    background-color:#eeeeee;
  }
  .border{
    height:60vh;
    padding-left:35px;
    padding-right:35px;
    padding-top:100px;
  }
  .box {
    height: 200px;
    background-color:#651FFF;
  }
  .head {
    background-color:#651FFF;
    height:60px;
    flex-direction:row;
    align-items:center;
  }
  .content{
    height:120px;
    background-color:#651FFF;
    padding-left:24px;
    padding-top:24px;
    padding-right:24px;
    box-sizing:border-box;
  }
  .footer {
    height:45px;
    background-color: #fff;
    align-items:center;
    justify-content:flex-end;
    padding-right:25px;
    flex-direction:row;
    box-sizing:border-box;
  }
  .action {
    padding-right:20px;
  }
  .desc {
    color:#fff;
    padding-left:24px;
  }
  .avatar {
    width:48px;
    height:48px;
    border-radius:50%;
    background-color:#CDDC39;
    margin-left:36px;
    margin-right:48px;
  }
  .username {
    color:#fff;
  }
</style>

<script>
/* eslint-disable */
import bindingx from 'weex-bindingx';

export default {
  data () {
    return {
      gesToken: 0
    }
  },
  methods: {
    onTouchStart (event) {
      var my = this.$refs.my
      var gesTokenObj = bindingx.bind({
            anchor: my,
            eventType: 'pan',
            props: [
                {
                  element: my, 
                  property: 'transform.translateX',
                  expression: 'x+0'
                },
                {
                  element: my, 
                  property: 'opacity',
                  expression: '1-abs(x)/600'
                }
              ]
          }, function(e) {
            // nope
          })
      this.gesToken = gesTokenObj.token
    }
  },
  beforeDestroy () {
    bindingx.unbind({
      eventType: 'pan',
      token:self.gesToken
    })
  }
}
</script>