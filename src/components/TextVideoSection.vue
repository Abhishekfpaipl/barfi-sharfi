<!-- ExperienceCentre.vue -->
<template>
    <section class="experience-section">
        <div class="container-fluid p-0">
            <div class="row g-0">
                <!-- Left Content Column -->
                <div class="col-lg-6 content-col">
                    <div class="content-wrapper">
                        <h1 class="title">VISIT OUR EXPERIENCE CENTRE</h1>
                        <p class="description">
                            Transform your daily routine with Carolieto's revolutionary
                            line of smart products. From advanced bidet features to
                            automated cleaning and sleek design, elevate your
                            bathroom experience with technology that brings
                            comfort, hygiene, and convenience to a whole new level.
                        </p>
                        <button class="explore-btn">EXPLORE NOW</button>
                    </div>
                </div>

                <!-- Right Video Column -->
                <div class="col-lg-6 video-col">
                    <div class="video-wrapper">
                        <video autoplay loop muted playsinline class="background-video">
                            <source :src="videoSource" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <!-- Logo Overlay -->
                    <img src="https://carolieto.com/uploads/logo.png" alt="Carolieto" class="logo-overlay">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ExperienceCentre',
    props: {
        videoSource: {
            type: String,
            required: true,
            default: 'https://carolieto.com/uploads/kitchenbath/1725867288_1710744392_carolieto video (2).mp4'
        }
    }
}
</script>

<style scoped>
.experience-section {
    position: relative;
    background-color: #0A324B;
    overflow: hidden;
}

.content-col {
    min-height: 600px;
    display: flex;
    align-items: center;
}

.content-wrapper {
    padding: 4rem;
    max-width: 600px;
    margin: 0 auto;
}

.title {
    font-size: 2.5rem;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 2rem;
    line-height: 1.2;
}

.description {
    color: #ffffff;
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    opacity: 0.9;
}

.explore-btn {
    background: transparent;
    border: none;
    color: #ffffff;
    font-size: 1rem;
    font-weight: 600;
    padding: 0;
    position: relative;
    cursor: pointer;
}

.explore-btn::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #C69C6D;
}

.video-col {
    position: relative;
    height: 600px;
}

.video-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.background-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.logo-overlay {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 120px;
    height: auto;
    z-index: 2;
}

@media (max-width: 991.98px) {
    .content-wrapper {
        padding: 2rem;
    }

    .title {
        font-size: 2rem;
    }

    .video-col {
        height: 400px;
    }
}

@media (max-width: 767.98px) {
    .content-col {
        min-height: auto;
    }

    .title {
        font-size: 1.75rem;
    }

    .video-col {
        height: 300px;
    }
}
</style>