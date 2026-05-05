<script setup>
import thumbnail from '../assets/Thumbnail.png'
</script>

<template>
  <section class="creative-kits">
    <div class="container">

      <h2 class="kits-title">CREATIVE KITS</h2>

      <p class="kits-subtitle">
        FREE SOCIAL MEDIA TEMPLATES
      </p>

      <!-- IMAGE -->
      <a 
        href="https://www.canva.com/templates/EAEvfdv6Qrg/" 
        target="_blank" 
        class="kits-preview"
      >
        <img :src="thumbnail" alt="Creative Kit" />
        <span>Preview</span>
      </a>

      <!-- BUTTON -->
      <a 
        href="https://www.canva.com/templates/EAEvfdv6Qrg/" 
        target="_blank" 
        class="btn-primary kits-download"
      >
        DOWNLOAD
      </a>

    </div>
  </section>
</template>

<style scoped>
.creative-kits {
  padding: 80px 20px;
  text-align: center;
}

/* spacing */
.kits-download {
  display: inline-block;
  margin-top: 25px;
}

/* hover effect */
.kits-preview {
  position: relative;
  display: inline-block;
  border-radius: 12px;
  overflow: hidden;
}

.kits-preview img {
  width: 100%;
  max-width: 400px;
  transition: transform 0.4s ease;
}

/* overlay */
.kits-preview::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.4);
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* label */
.kits-preview span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  opacity: 0;
  transition: 0.3s;
}

/* desktop hover only */
@media (hover: hover) and (pointer: fine) {
  .kits-preview:hover img {
    transform: scale(1.08);
  }

  .kits-preview:hover::after {
    opacity: 1;
  }

  .kits-preview:hover span {
    opacity: 1;
  }
}
</style>