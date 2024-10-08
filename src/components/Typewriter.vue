<script setup>
import { ref, reactive, onMounted } from "vue";
const interests = ref(["DevOps", "Web Dev", "Backend Dev"]);
const typeValue = ref("");
const typeStatus = ref(false);
const typingSpeed = 100;
const erasingSpeed = 100;
const newTextDelay = 2000;
const interestsArrayIndex = ref(0);
const charIndex = ref(0);

function typeText() {
  //   console.log(interests.value[interestsArrayIndex.value].length);
  //   console.log(interestsArrayIndex.value);
  if (charIndex.value < interests.value[interestsArrayIndex.value].length) {
    // console.log(interests.value[interestsArrayIndex]);
    if (!typeStatus.value) typeStatus.value = true;
    // console.log(charIndex.value);
    typeValue.value += interests.value[interestsArrayIndex.value].charAt(
      charIndex.value
    );
    charIndex.value += 1;
    setTimeout(typeText, typingSpeed);
  } else {
    typeStatus.value = false;
    // console.log("erase");
    setTimeout(eraseText, newTextDelay);
  }
}

function eraseText() {
  if (charIndex.value > 0) {
    if (!typeStatus.value) typeStatus.value = true;
    typeValue.value = interests.value[interestsArrayIndex.value].substring(
      0,
      charIndex.value - 1
    );
    charIndex.value -= 1;
    setTimeout(eraseText, erasingSpeed);
  } else {
    typeStatus.value = false;
    interestsArrayIndex.value += 1;
    if (interestsArrayIndex.value >= interests.value.length)
      interestsArrayIndex.value = 0;
    setTimeout(typeText, typingSpeed + 1000);
  }
}

onMounted(() => {
  setTimeout(typeText, newTextDelay);
});
</script>

<template>
  <!-- <div class="bg-coral-500"> -->
  <h1>
    I'm interested in
    <span class="typed-text font-rubik">{{ typeValue }}</span>
    <span class="blinking-cursor">|</span>
    <span class="cursor" :class="{ typing: typeStatus.value }">&nbsp;</span>
  </h1>
  <!-- </div> -->
</template>

<style lang="scss" scoped>
.container {
  width: 50%;
  height: 20vh;
  display: flex;
  max-width: fit-content;
  justify-content: center;
  align-items: center;
  margin: auto;
  position: relative;
  z-index: 1;
}
h1 {
  font-size: 1.5rem;
  font-family: "Rubik", sans-serif;
  font-weight: normal;
  span.typed-text {
    color: #98c1d9;
  }
}

// Cursor blinking CSS Starts...
.blinking-cursor {
  font-size: 1.5rem;
  color: white;
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}
@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: white;
  }
}
@-moz-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: white;
  }
}
@-webkit-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: white;
  }
}
@-ms-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: white;
  }
}
@-o-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: white;
  }
}
// Cursor blinking CSS Ends...
</style>
