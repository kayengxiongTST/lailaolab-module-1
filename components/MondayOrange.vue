<template>
    <div class="text-center">
        <h1>Monday Mood</h1>
        <h2>for your best day!</h2>

        <div class="relative custom-width h-[200px]">
            <img
                src="/oranges/updates/moday-bg.svg"
                class="object-contain max-h-[520px] absolute z-20"
            />
            <img
                src="/oranges/updates/orange-0.svg"
                class="object-contain max-h-[420px] absolute z-10"
            />
            <img
                src="/oranges/updates/orange-1.svg"
                class="object-contain max-h-[420px] relative small"
            />
            <img
                src="/oranges/updates/orange-2.svg"
                class="object-contain max-h-[420px] relative small"
            />
            <div class="image-shadow"></div>
        </div>
        <div class="custom-big-text space-x-[250px]">
            <span>ORANGE</span>
            <span>JUICE</span>
        </div>
    </div>
</template>
<style scoped>
h1 {
    font-size: 64px;
    color: #ffffff;
    font-family: "Lilita One";
}
h2 {
    color: #fff;
    font-size: 24px;
}
.custom-width {
    width: 1300px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 150px;
}
img.small {
    transform: scale(0.8);
    top: 40px;
}
.image-shadow {
    width: 400px;
    height: 40px;
    background-color: #d9982e;
    position: absolute;
    border-radius: 50%;
    top: 290px;
}
.custom-big-text {
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 20px;
    color: #f58501;
    top: 90px;
    font-family: "Lilita One", sans-serif;
    font-size: 140px;
    -webkit-text-stroke: 3px white;
    font-weight: bold;
}
</style>