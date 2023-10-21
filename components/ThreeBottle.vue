<template>
    <div class="custom-container">
        <div
            class="grid grid-cols-1 md:grid-cols-3 w-full items-center justify-between text-center custom-bottom relative"
        >
            <div class="parent-image">
                <img
                    src="/last/apple-bottle.svg"
                    alt="First 1"
                    class="object-contain max-h-[350px] left-rotating"
                />
            </div>
            <div class="parent-image">
                <img
                    src="/last/orange-bottle.svg"
                    alt="First 1"
                    class="object-contain max-h-[350px] left-rotating"
                />
            </div>
            <div class="parent-image">
                <img
                    src="/last/peach-bottle.svg"
                    alt="First 1"
                    class="object-contain max-h-[350px] right-rotating"
                />
            </div>
        </div>
        <div class="custom-shadow"></div>
    </div>
</template>
<style scoped>
.parent-image {
    display: flex;
    justify-content: center;
    position: relative;
}
.custom-bottom {
    z-index: 2;
}
.custom-shadow {
    width: 100%;
    height: 40px;
    border-radius: 50%;
    background-color: #dfd4cc;
    position: relative;
    top: -25px;
    z-index: 0;
}
.left-rotating {
    transform: rotate(0deg);
    transition: all 0.3s ease-in-out;
    transform-origin: center left;
}
.left-rotating:hover {
    transform: rotate(-7deg) scale(1.1);
}
.right-rotating {
    transform: rotate(0deg);
    transition: all 0.3s ease-in-out;
    transform-origin: center left;
}
.right-rotating:hover {
    transform: rotate(7deg) scale(1.1);
}
</style>
