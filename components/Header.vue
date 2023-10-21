<template>
    <header class="py-1 shadow fixed top-0 w-full bg-white z-20">
        <nav class="custom-container flex justify-between items-center">
            <a href="#first-slider">
                <img src="/logo.png" alt="" class="h-[80px] object-contain" />
            </a>
            <ul class="flex gap-10">
                <li>
                    <a href="#" class="active-color">Home</a>
                </li>
                <li>
                    <a href="#">Service</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
            </ul>
            <div></div>
        </nav>
    </header>
</template>
<style scoped>
ul li a {
    color: #4d4946;
    font-size: 20px;
}
.normal-color {
    color: #4d4946;
}
.active-color {
    color: #f9a61f;
}
</style>