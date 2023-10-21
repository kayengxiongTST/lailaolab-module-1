<template>
    <div class="max-h-[420px] relative">
        <img
            src="/oranges/orange-full.svg"
            alt=""
            class="max-height object-contain absolute"
        />
        <!-- <img
            src="/oranges/apple-fruit.svg"
            alt=""
            class="max-height object-contain absolute"
        />
        <img
            src="/oranges/peach-fruit.svg"
            alt=""
            class="max-height object-contain absolute"
        /> -->
    </div>
</template>
<style scoped>
.max-height {
    max-height: 420px;
}
img:nth-child(1) {
    opacity: 1;
    /* animation: slider1 5s ease-in-out infinite 1s; */
}

img:nth-child(2) {
    opacity: 0;
    animation: slider2 5s ease-in-out infinite 2.5s;
}

img:nth-child(3) {
    opacity: 0;
    animation: slider3 5s ease-in-out infinite 4s;
}

@keyframes slider1 {
    0% {
        transform: rotate(0deg) scale(1);
        opacity: 0;
    }
    50% {
        transform: rotate(0deg) scale(0);
        opacity: 1;
    }
    100% {
        transform: rotate(4deg) scale(0);
        opacity: 0;
    }
}

@keyframes slider2 {
    0% {
        transform: rotate(5deg) scale(0);
        opacity: 0;
    }
    30% {
        transform: rotate(0deg) scale(1);
        opacity: 1;
    }
    100% {
        transform: rotate(4deg) scale(0);
        opacity: 0;
    }
}

@keyframes slider3 {
    0% {
        transform: rotate(5deg) scale(0);
        opacity: 0;
    }
    30% {
        transform: rotate(0deg) scale(1);
        opacity: 1;
    }
    100% {
        transform: rotate(4deg) scale(0);
        opacity: 0;
    }
}
</style>