<script>
  const url = 'https://smastrom.dev';
  const title = 'Simone Mastromattei - Frontend Developer';
  const description = "Hello. My name is Simone. I'm a frontend developer based in Italy.";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />

  <!-- PWA -->
  <meta name="theme-color" content="white" />
  <link rel="manifest" href="/manifest.webmanifest" crossorigin="anonymous" />
  <link rel="apple-touch-icon" sizes="192x192" href="/icon-192.png" />
  <link rel="apple-touch-icon" sizes="512x512" href="/icon-512.png" />

  <!--  Open Graph  -->
  <meta property="og:type" content="article" />
  <meta property="og:url" content={url} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content="/og-image.png" />

  <!-- Twitter -->
  <meta property="twitter:url" content={url} />
  <meta property="twitter:title" content={title} />
  <meta property="twitter:description" content={description} />
  <meta property="twitter:image" content="/og-image.png" />
</svelte:head>
