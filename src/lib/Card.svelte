<script>
    export let header;
    export let description;
    export let url;
</script>

<a class="card1" href={url}>
    <h3>{header}</h3>
    <p class="small">{description}</p>
    <div class="go-corner" href="#">
      <div class="go-arrow">
        →
      </div>
    </div>
  </a>