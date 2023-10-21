<template>
    <div id="first-slider" class="min-h-screen bg-[#FFF4EA] pt-[90px]">
        <div class="custom-container">
            <div class="grid grid-cols-1 md:grid-cols-2 h-full">
                <div class="h-full relative py-16">
                    <FirstSliderImages />
                </div>
                <div class="custom-slider-height flex pt-[90px]">
                    <div class="space-y-2">
                        <h1 class="lilita text-[64px] text-[#F9A61F]">
                            LAILAOLAB Brand
                        </h1>
                        <div class="normal-color space-y-5">
                            <p>
                                "Our fresh fruit juice is made with only the
                                finest ingredients and is packed with vitamins
                                and minerals. It's the perfect way to start your
                                day or to refuel after a workout.
                            </p>
                            <div>
                                <ul class="flex gap-10 pl-5">
                                    <li>Orange Juice</li>
                                    <li>Apple Juice</li>
                                    <li>Peach Juice</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.custom-slider-height {
    height: calc(100vh - 90px);
}
.normal-color {
    color: #4d4946;
    font-size: 24px;
}
</style>