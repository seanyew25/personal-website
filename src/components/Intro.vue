<script setup>
import Typewriter from "./Typewriter.vue";
window.addEventListener("load", function () {
  //   VANTA.NET({
  //     el: "#test",
  //     mouseControls: true,
  //     touchControls: true,
  //     gyroControls: false,
  //     minHeight: 200.0,
  //     minWidth: 200.0,
  //     scale: 1.0,
  //     scaleMobile: 1.0,
  //     color: 0x7e43ab,
  //   });
  VANTA.WAVES({
    el: "#test", // element selector string or DOM object reference
    color: 0x5588,
    waveHeight: 15,
    shininess: 30,
    waveSpeed: 1,
    zoom: 1.1,
  });
});
</script>

<template>
  <!-- <v-parallax
    src="/src/assets/bg.jpg"
    style="height: 50vh; align-items: center; position: relative"
  > -->
  <div id="test" style="height: 500px; display: flex">
    <!-- <div class="overlay"></div> -->
    <div>
      <div class="outer">
        <div class="h-fit text-white">
          <h1>Hello I'm Sean Yew 👋</h1>
        </div>
        <!-- <div class="inner">
          <img src="../assets/pfp.jpg" />
        </div> -->
      </div>
    </div>
  </div>
  <Typewriter />
  <!-- </v-parallax> -->
</template>

<style scoped>
.outer {
  @apply relative flex justify-start h-full items-center ml-5;
}

img {
  @apply rounded-full h-[100px];
}

.inner {
  @apply h-full mx-4;
}

h1 {
  @apply m-0 font-rubik;
}

.overlay {
  @apply absolute top-0 h-full w-full z-0 bg-white opacity-50;
}
</style>
