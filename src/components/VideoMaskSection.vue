<template>
    <div class="container d-flex justify-content-center align-items-center mb-5">

        <div class="bg-video mb-5">
            <img src="https://carolieto.com/media/logo-t.png" class="mask-image" alt="Logo">
            <video width="100%" muted autoplay loop playsinline class="">
                <source src="https://carolieto.com/media/ocean2.mp4" type="video/mp4">
            </video>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VideoMask',
    mounted() {
        const video = this.$el.querySelector('video');
        video.play().catch(error => {
            console.error('Error playing video:', error);
        });
    }
}
</script>
<style scoped>
@media (max-width:768px) {
    .bg-video {
        width: 100%
    }
}

.bg-video {
    position: relative;
    max-height: 80px;
    overflow: hidden;
    margin: auto !important;
    width: 500px;
}

.bg-video img {
    position: absolute;
    top: 0;
    left: 0%;
    width: 100%;
}
</style>