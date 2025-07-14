<template>
  <div class="content-renderer">
    <template v-for="(item, index) in content" :key="index">
      <div v-if="item.type === 'video' && isYouTubeUrl(item.content)" class="youtube-responsive">
        <iframe v-bind="getProps(item)"></iframe>
      </div>
      <component v-else :is="getTag(item.type, item.content)" :key="index" v-bind="getProps(item)">
        <template v-if="item.type === 'ul' || item.type === 'ol'">
          <li v-for="(li, liIndex) in item.content" :key="liIndex">
            {{ li.content }}
          </li>
        </template>
        <template v-else-if="!isSelfClosing(item.type)">
          {{ item.content }}
        </template>
      </component>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ContentRenderer',
  props: {
    content: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getTag(type, content) {
      // Map type to HTML tag/component
      const map = {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        p: 'p',
        image: 'img',
        audio: 'audio',
        video: 'video',
        ul: 'ul',
        ol: 'ol',
        li: 'li',
        // Add more as needed
      }
      if (type === 'video' && this.isYouTubeUrl(content)) {
        return 'iframe'
      }
      return map[type] || 'div'
    },
    getProps(item) {
      // For self-closing tags like img, audio, video, set src
      if (item.type === 'image' || item.type === 'audio' || item.type === 'video') {
        return {
          src: item.content,
          controls: item.type !== 'image', // controls for audio/video
        }
      }
      if (item.type === 'video' && this.isYouTubeUrl(item.content)) {
        return {
          src: this.getYouTubeEmbedUrl(item.content),
          frameborder: '0',
          allow:
            'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
          allowfullscreen: true,
        }
      }
      return {}
    },
    isSelfClosing(type) {
      return ['image', 'audio', 'video'].includes(type)
    },
    isYouTubeUrl(url) {
      return /youtube\.com|youtu\.be/.test(url)
    },
    getYouTubeEmbedUrl(url) {
      // Convert normal YouTube URL to embed URL
      const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]+)/)
      return match ? `https://www.youtube.com/embed/${match[1]}` : url
    },
  },
}
</script>

<style scoped>
.content-renderer {
  margin-bottom: 100px;
}

.content-renderer img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 1rem auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.content-renderer audio,
.content-renderer video {
  width: 100%;
  max-width: 600px;
  display: block;
  margin: 1rem auto;
}

.content-renderer h1,
.content-renderer h2,
.content-renderer h3 {
  margin-top: 1.5rem;
  color: #121212;
}

.content-renderer h1,
.content-renderer h2 {
  font-size: 24px;
  color: #121212;
}

.content-renderer h2 {
  font-size: 18px;
}

.content-renderer p {
  color: #121212;
  font-size: 12px;
  text-align: justify;
  line-height: 18px;
  font-weight: normal;
  letter-spacing: 0.5px;
}

.content-renderer ul,
.content-renderer ol {
  margin: 1rem 0 1rem 2rem;
  padding-left: 1.5rem;
  font-size: 12px;
}

.content-renderer li {
  margin-bottom: 0.5rem;
  word-break: break-word;
}

.youtube-responsive {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  margin: 1rem 0;
}

.youtube-responsive iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
