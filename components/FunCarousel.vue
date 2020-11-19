<template>
  <div>
    <div class="pic-ctn">
      <img src="https://picsum.photos/200/300?t=1" alt="" class="pic">
      <img src="https://picsum.photos/200/300?t=2" alt="" class="pic">
      <img src="https://picsum.photos/200/300?t=3" alt="" class="pic">
      <img src="https://picsum.photos/200/300?t=4" alt="" class="pic">
      <img src="https://picsum.photos/200/300?t=5" alt="" class="pic">
    </div>
    
    <div class="cont-float" style="--background:#3C3B3D; --text:white;">
      <div class="multi-button">
        <!--Don't need to say how many buttons there will be, handled on lines 42-93--><button class="fas fa-heart"></button></div>
       <div class="container"></div>
    </div>
    <div class="cont-float">
      <div class="multi-button">
        <button class="fas fa-heart"></button>
        <button class="fas fa-clipboard"></button>
      </div>
      <div class="container"></div>
    </div>
    <div class="cont-float" style="--background:#EC87C0; --text:white;">
      <div class="multi-button"><button class="fas fa-heart"></button>
        <button class="fas fa-comment"></button>
        <button class="fas fa-share-alt"></button>
      </div>
      <div class="container"></div>
    </div>
    <div class="cont-float" style="--background:#5D9CEC; --text:white;">
        <div class="multi-button"><button class="fas fa-heart"></button><button class="fas fa-comment"></button><button class="fas fa-share-alt"></button><button class="fas fa-trash"></button></div>
        <div class="container"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>
<style scoped lang="scss">
    .cont-float {
        // --background:#FFFFFF;
        // --text:black;
        position: relative;
        height:12rem;
        box-shadow:0 0 2rem -1rem rgba(0,0,0,.05);
        .multi-button {
            z-index:0;
            position: absolute;
            top:1.25rem;
            left:1.25rem;
            border-radius:100%;
            width:0rem;
            height:0rem;
            transform: translate(-50%, -50%);
            transition: .25s cubic-bezier(0.25, 0, 0, 1);
            button {
                display: grid;
                place-items: center;
                position: absolute;
                width:2em;
                height:2rem;
                border:none;
                border-radius:100%;
                background:var(--background);
                color:var(--text);
                transform: translate(-50%, -50%);
                cursor: pointer;
                transition: .25s cubic-bezier(0.25, 0, 0, 1);
                box-shadow:0 0 0rem -.25rem var(--background);
                &:hover {
                    background:var(--text);
                    color:var(--background);
                    box-shadow:0 0 1rem -.25rem var(--background);
                }
                &:first-child:nth-last-child(1),
                &:first-child:nth-last-child(1) ~ * { //If there is 1 child
                    &:nth-child(1) {
                        left:25%;
                        top:25%;
                    }
                }
                &:first-child:nth-last-child(2),
                &:first-child:nth-last-child(2) ~ * { //If there are 2 children
                    &:nth-child(1) {
                        left:37.5%;
                        top:18.75%;
                    }
                    &:nth-child(2) {
                        left:18.75%;
                        top:37.5%;
                    }
                }
                &:first-child:nth-last-child(3),
                &:first-child:nth-last-child(3) ~ * { //If there are 3 children
                    &:nth-child(1) {
                        left:50%;
                        top:15.625%;
                    }
                    &:nth-child(2) {
                        left:25%;
                        top:25%;
                    }
                    &:nth-child(3) {
                        left:15.625%;
                        top:50%;
                    }
                }
                &:first-child:nth-last-child(4), //If there are 4 children, if first child is also 4th item from bottom get self, and
                &:first-child:nth-last-child(4) ~ * { //If there are 4 children, if first child is also 4th item from bottom get siblings
                    &:nth-child(1) {
                        left:62.5%;
                        top:18.75%;
                    }
                    &:nth-child(2) {
                        left:37.5%;
                        top:18.75%;
                    }
                    &:nth-child(3) {
                        left:18.75%;
                        top:37.5%;
                    }
                    &:nth-child(4) {
                        left:18.75%;
                        top:62.5%;
                    }
                }
            }
        }
        .container {
            position: absolute;
            width:100%;
            height:100%;
            border-radius:1rem;
            background:var(--background);
            color:var(--text);
        }
        &:hover .multi-button, .multi-button:focus-within { //Hover or a button inside is focused
            width:10rem;
            height:10rem;
        }
    }





html, body {
  margin: 0;
  padding: 0;
}

.pic-ctn {
  width: 100vw;
  height: 200px;
}

@keyframes display {
  0% {
    transform: translateX(200px);
    opacity: 0;
  }
  10% {
    transform: translateX(0);
    opacity: 1;
  }
  20% {
    transform: translateX(0);
    opacity: 1;
  }
  30% {
    transform: translateX(-200px);
    opacity: 0;
  }
  100% {
    transform: translateX(-200px);
    opacity: 0;
  }
}

.pic-ctn {
  position: relative;
  width: 100vw;
  height: 300px;
  margin-top: 15vh;
}

.pic-ctn > img {
  position: absolute;
  top: 0;
  left: calc(50% - 100px);
  opacity: 0;
  animation: display 10s infinite;

}
/* img:hover { 
  /* animation-play-state: running; */



img:nth-child(2) {
  animation-delay: 2s;
}
img:nth-child(3) {
  animation-delay: 4s;
}
img:nth-child(4) {
  animation-delay: 6s;
}
img:nth-child(5) {
  animation-delay: 8s;
}
</style>