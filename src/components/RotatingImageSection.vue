<template>
    <div class="container luxury-container position-relative overflow-hidden">
        <div class="rotating-bg"></div>
        <h1 class="luxury-text text-center position-relative">
            <span class="d-block  display-1 fw-bold">LIVE THE</span>
            <span class="d-block  display-1 fw-bold">LUXURY WITH</span>
        </h1>
    </div>
</template>

<script>
export default {
    name: 'RotatingImageSection'
}
</script>

<style scoped>
.luxury-container {
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
}

@media (max-width: 768px) {
    .rotating-bg {
        width: 300px !important;
        height: 300px !important;
    }
}

.rotating-bg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 400px;
    background-image: url('https://carolieto.com/media/circle.png');
    background-size: contain;
    background-repeat: no-repeat;
    animation: rotate 20s linear infinite;
    opacity: 0.1;
}

.luxury-text {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    font-weight: bold;
    color: #003366;
    text-transform: uppercase;
    line-height: 1.2;
    z-index: 1;
}

@keyframes rotate {
    from {
        transform: translate(-50%, -50%) rotate(0deg);
    }

    to {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}
</style>