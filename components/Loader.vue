<template>
  <div class="container mx-auto h-screen">
    <div class="mt-6 loader relative">
      <div class="ball1 bg-red-600"></div>
      <div class="ball2 bg-red-600"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.loader {
  margin: 100px auto;
  width: 40px;
  height: 40px;
}
.ball1,
.ball2 {
  width: 15px;
  height: 15px;
  top: 0;
  left: 0;
  position: absolute;
  border-radius: 50%;

  -webkit-animation: anim 2.2s infinite linear;
  animation: anim 2.2s infinite linear;
}

.ball2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}

@-webkit-keyframes anim {
  25% {
    transform: translateX(42px) rotate(-90deg) scale(0.5);
    -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);
  }
  50% {
    transform: translateX(42px) translateY(42px) rotate(-179deg);
    -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);
  }
  50.1% {
    border-radius: 10%;
    transform: translateX(42px) translateY(42px) rotate(-180deg);
    -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
  }
  75% {
    transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
    -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg)
      scale(0.5);
  }
  100% {
    border-radius: 100%;
    transform: rotate(-360deg);
    -webkit-transform: rotate(-360deg);
  }
}

@keyframes anim {
  25% {
    transform: translateX(42px) rotate(-90deg) scale(0.5);
    -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);
  }
  50% {
    transform: translateX(42px) translateY(42px) rotate(-179deg);
    -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);
  }
  50.1% {
    border-radius: 10%;
    transform: translateX(42px) translateY(42px) rotate(-180deg);
    -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
  }
  75% {
    transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
    -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg)
      scale(0.5);
  }
  100% {
    border-radius: 100%;
    transform: rotate(-360deg);
    -webkit-transform: rotate(-360deg);
  }
}
</style>
