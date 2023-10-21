<template>
    <div id="orange-section" class="relative">
        <div class="flex justify-center">
            <div
                id="custom-circle"
                class="custom-circle circle-color absolute bg-smaller"
            >
                <div class="let-s-try relative">
                    <a
                        href="#orange-section"
                        class="relative main-clicking"
                        @click="onClickTryMe"
                    >
                        <div class="arrow-icons">
                            <Icon
                                name="iconamoon:arrow-up-2-bold"
                                class="text-5xl"
                            />
                        </div>
                        <div class="arrow-icons">
                            <Icon
                                name="iconamoon:arrow-up-2-bold"
                                class="text-5xl"
                            />
                        </div>
                    </a>
                    <h1>Let's try</h1>
                </div>
            </div>
        </div>
        <div class="h-screen bg-color">
            <div
                id="main-text"
                class="main-text cursor-pointer"
                @click="onMondayNext"
            >
                <MondayOrange v-if="isMonday" />
                <TuesdayOrange v-if="isTuesday" />
                <WednesdaySection v-if="isWednesday" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const isMonday = ref(true);
const isTuesday = ref(false);
const isWednesday = ref(false);
function onClickTryMe() {
    const customCircle: any = document.getElementById("custom-circle");
    setTimeout(() => {
        customCircle.style.width = "80vw";
        customCircle.style.height = "80vw";
    }, 300);
}
function onMondayNext() {
    const custom: any = document.getElementById("custom-circle");

    if (isMonday.value) {
        isMonday.value = false;
        isTuesday.value = true;
        custom.style.backgroundColor = "#43A9E1";
    } else if (isTuesday.value) {
        isTuesday.value = false;
        isWednesday.value = true;
        custom.style.backgroundColor = "#F273A1";
    } else if (isWednesday.value) {
        isMonday.value = true;
        isWednesday.value = false;
        custom.style.backgroundColor = "#FAAF35";
    }
}
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
.circle-color {
    background-color: #faaf35;
}
.bg-color {
    background-color: #ffdca3;
}
.let-s-try {
    text-align: center;
    color: #fff7eb;
}
.let-s-try h1 {
    font-family: "Lilita One";
    font-size: 56px;
    color: #fff7eb;
}
.arrow-icons:nth-child(2) {
    position: relative;
    top: -30px;
}
.bg-smaller {
    /* display: none; */
    /* width: 80vw !important;
    height: 80vw !important;
    top: 0;
    border-radius: 50%;
    top: -20vh; */
}
.custom-circle {
    width: 100vw;
    height: 100vw;
    top: 0;
    border-radius: 50%;
    top: -20vh;
    transition: all 0.5s ease-in-out;
}
.main-text {
    position: absolute;
    left: 50%;
    top: 35%;
    transform: translate(-50%, -50%);
}
.main-clicking {
    position: relative;
    animation: jumping 2s ease-in-out infinite;
    top: 0px;
}

@keyframes jumping {
    0%,
    100% {
        top: 0px;
    }
    50% {
        top: 12px;
    }
}
.main-clicking .arrow-icons:nth-child(2) {
    position: relative;
    animation: icons-jumping 3s ease-in-out infinite;
    top: -30px;
}
@keyframes icons-jumping {
    0%,
    100% {
        top: -30px;
    }
    50% {
        top: -36px;
    }
}
</style>