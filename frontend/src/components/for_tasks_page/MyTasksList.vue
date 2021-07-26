<template>
    <div class="my_task_list_wrapper">
        <div class="single_task">
            <div class="cube">
                <div class="side top"></div>
                <div class="side bottom"></div>

                <div class="side left"></div>
                <div class="side right"></div>

                <div class="side front"></div>
                <div class="side back"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.my_task_list_wrapper {
    padding: 20px 40px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

.single_task {
    position: relative;
    height: 200px;
}

.cube {
    width: 80px;
    height: 80px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform-style: preserve-3d;
    transform: rotateX(240deg) rotateY(-5deg) rotateZ(-155deg) translateX(50%) translateY(-25%);
}

.side {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    border-radius: 10%;
}

.top {
    transform: translateZ(-80px);
    background-color: grey;
}

.bottom {
    transform: translateZ(0);
    background-color: grey;
}

.front {
    transform: rotateX(90deg);
    transform-origin: bottom;
    background-color: red;
}

.back {
    transform: rotateX(-90deg);
    transform-origin: bottom;
    background-color: red;
}

.left {
    width: 80px;
    transform: translateZ(-80px) rotateY(90deg);
    transform-origin: right;
    background-color: grey;
}
</style>