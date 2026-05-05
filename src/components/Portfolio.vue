<script setup>
import { ref } from 'vue'

// ✅ IMAGES (leave these exactly as your originals if names differ)
import img1 from '../assets/Social-1.png'
import img2 from '../assets/Social-2.jpg'
import img3 from '../assets/Social-3.png'

// ✅ VIDEOS
import video1 from '../assets/PMax F1.mp4'
import video2 from '../assets/PMax Horse Racing.mp4'
import video3 from '../assets/PMax Soccer.mp4'
import video4 from '../assets/PMax Tennis.mp4'

// DATA
const images = [
  { src: img1 },
  { src: img2 },
  { src: img3 }
]

const videos = [
  { src: video1 },
  { src: video2 },
  { src: video3 },
  { src: video4 }
]

const videoRefs = []
const activeVideo = ref(null)

// FUNCTIONS
const playVideo = (index) => {
  videoRefs[index]?.play()
}

const pauseVideo = (index) => {
  if (videoRefs[index]) {
    videoRefs[index].pause()
    videoRefs[index].currentTime = 0
  }
}

const openVideo = (video) => {
  activeVideo.value = video
}

const closeVideo = () => {
  activeVideo.value = null
}
</script>

<template>
  <section class="portfolio">

    <!-- TITLE -->
    <h1 class="section-title">&lt;PORTFOLIO/&gt;</h1>
    <p class="subtitle">
      This is a body of work/skills I have learned through my career...
    </p>

    <!-- ===== IMAGE GRID (UNCHANGED STYLE) ===== -->
    <div class="image-grid">
      <div
        class="image-card"
        v-for="(image, index) in images"
        :key="index"
      >
        <img :src="image.src" />
      </div>
    </div>

    <!-- ===== VIDEO GRID (15% SMALLER) ===== -->
    <div class="video-grid">
      <div
        class="video-card"
        v-for="(video, index) in videos"
        :key="index"
        @click="openVideo(video)"
      >
        <video
          :ref="el => videoRefs[index] = el"
          :src="video.src"
          muted
          loop
          playsinline
          @mouseenter="playVideo(index)"
          @mouseleave="pauseVideo(index)"
        ></video>
      </div>
    </div>

    <!-- ===== MODAL ===== -->
    <div v-if="activeVideo" class="video-modal" @click.self="closeVideo">
      <video
        class="modal-video"
        :src="activeVideo.src"
        controls
        autoplay
      ></video>
    </div>

  </section>
</template>

<style scoped>

/* ===== SECTION ===== */
.portfolio {
  text-align: center;
  padding: 60px 20px;
}

/* TITLE */
.section-title {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.subtitle {
  color: #aaa;
  margin-bottom: 40px;
}

/* ===== IMAGE GRID (UNCHANGED LOOK) ===== */
.image-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  margin-bottom: 50px;
}

.image-card {
  border-radius: 20px;
  overflow: hidden;
}

.image-card img {
  width: 100%;
  display: block;
}



/* ===== VIDEO GRID (SMALLER + CENTERED) ===== */
.video-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  max-width: 85%;   /* 👈 THIS makes it 15% smaller */
  margin: 0 auto;   /* 👈 centers it */
}

/* VIDEO CARD */
.video-card {
  border-radius: 18px;
  overflow: hidden;
  cursor: pointer;
  background: #111;
}

.video-card video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

/* HOVER */
.video-card:hover video {
  transform: scale(1.08);
}

/* ===== MODAL ===== */
.video-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal-video {
  width: 80%;
  max-width: 900px;
  border-radius: 12px;
}

/* ===== MOBILE ===== */
@media (max-width: 768px) {
  .image-grid {
    grid-template-columns: 1fr;
  }

  .video-grid {
    grid-template-columns: 1fr;
    max-width: 95%;
  }

  .modal-video {
    width: 95%;
  }
}


</style>