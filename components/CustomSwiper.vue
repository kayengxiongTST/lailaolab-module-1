<template>
    <Swiper
        :modules="[SwiperAutoplay, SwiperEffectCreative]"
        :slides-per-view="1"
        :loop="true"
        :effect="'creative'"
        :autoplay="{
            delay: 8000,
            disableOnInteraction: true,
        }"
        :creative-effect="{
            prev: {
                shadow: false,
                translate: ['-20%', 0, -1],
            },
            next: {
                translate: ['100%', 0, 0],
            },
        }"
    >
        <SwiperSlide v-for="slide in 10" :key="slide">
            <div class="bg-indigo-200 p-10">
                <strong>{{ slide }}</strong>
            </div>
        </SwiperSlide>
    </Swiper>
</template>