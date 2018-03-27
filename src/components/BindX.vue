<template>
    <scroller class="scroller" >
        <div :ref="'box'" class="box" @touchstart="ontouchstart"  @appear="onappear"></div>
    </scroller>
</template>

<style scoped>
    .scroller {
        flex: 1;
    }
    .box {
        border-width: 2px;
        border-style: solid;
        border-color: #BBBBBB;
        width: 250px;
        height: 250px;
        margin-top: 250px;
        margin-left: 250px;
        background-color: #EEEEEE;
        margin-bottom:500px;
    }
</style>

<script>
/* eslint-disable */
  import bindingx from 'weex-bindingx';
 
  export default {
    data () {
      return {
        x: 0,
        y: 0,
        flag: 0
      }
    },
    methods: {
      onappear () {
        this.bind();
      },
      bind () {
        var box = this.$refs.box
        bindingx.bind({
          anchor: box,
          eventType: 'pan',
          props: [
            {
              element: box,
              property: 'transform.translateX',
              expression: {
                origin: `x+${this.x}`,
                transformed: `{\"type\":\"+\",\"children\":[{\"type\":\"Identifier\",\"value\":\"x\"},{\"type\":\"NumericLiteral\",\"value\":\"${this.x}\"}]}`
              }
            },
            {
              element: box,
              property: 'transform.translateY',
              expression: {
                origin: `y+${this.y}`,
                transformed: `{\"type\":\"+\",\"children\":[{\"type\":\"Identifier\",\"value\":\"y\"},{\"type\":\"NumericLiteral\",\"value\":\"${this.y}\"}]}`
              }
            }
          ]
        }, (e) => {
          if (e.state === 'end') {
            this.x += e.deltaX;
            this.y += e.deltaY;
          }
        });
      },
      ontouchstart (event) {
        this.bind();
      }
    }
  }
</script>