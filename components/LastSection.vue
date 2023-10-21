<template>
    <div id="last-section" class="min-h-screen relative">
        <div class="custom-left"></div>
        <div class="custom-right"></div>
        <div class="flex justify-center items-center pt-[90px]">
            <div class="space-y-10">
                <h1 class="get-your-life-style text-center pt-5">
                    Get Your Life Style
                </h1>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-16 badge">
                    <div>
                        <h2>Apple Juice</h2>
                        <p>on Tuesday</p>
                    </div>
                    <div>
                        <h2>Orange Juice</h2>
                        <p>on Monday</p>
                    </div>
                    <div>
                        <h2>Peach Juice</h2>
                        <p>on Wednesday</p>
                    </div>
                </div>
                <div class="top-[65px]">
                    <ThreeBottle />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
function checkVisible(elm: any) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight
    );
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}
function toCheckIfVisible() {
    setTimeout(() => {
        // check if the element is on the screen
        const orangeSection: any = document.getElementById("orange-section");
        const customCircle: any = document.getElementById("custom-circle");
        const checkingStatus = checkVisible(orangeSection);
        if (checkingStatus) {
            customCircle.style.width = "80vw";
            customCircle.style.height = "80vw";
        } else {
            // if true, make it default value
            // else, change the value to be active values
            customCircle.style.width = "100vw";
            customCircle.style.height = "100vw";
        }
    }, 100);
}
if (process.client) {
    toCheckIfVisible();
    window.onscroll = () => {
        toCheckIfVisible();
    };
}
</script>
<style scoped>
.center-position {
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
.get-your-life-style {
    font-family: "Lilita One";
    font-size: 64px;
    color: #fff;
}
.badge {
    font-family: "League Spartan", sans-serif;
    font-size: 24px;
    font-weight: bold;
    color: #4d4946;
    text-align: center;
}
.badge p {
    font-weight: lighter;
}
.custom-left {
    width: 50vw;
    height: 50vw;
    border-radius: 50%;
    background-color: #b1e4ff;
    position: absolute;
    z-index: -1;
    left: -0%;
    top: -0%;
    transform: translate(-5%, -50%);
}
.custom-right {
    width: 60vw;
    height: 60vw;
    border-radius: 50%;
    background-color: #fad4e3;
    position: absolute;
    z-index: -1;
    right: -0%;
    top: -0%;
    transform: translate(5%, -60%);
}
</style>