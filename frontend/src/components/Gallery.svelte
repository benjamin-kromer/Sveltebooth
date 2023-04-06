<script>
   const images = []
  </script>
  
  <h1>Gallery View</h1>
  <div class="ui segment">
    <div class="ui stackable four column grid">
      {#each images as src}
        <div class=" column"><img {src} alt="pic" width="100%" height="100%" /></div>
      {/each}
    </div>
  </div>
  <div class="ui segment" />
  