<script>
  export let url
  export let title
  export let date
</script>

<div class="card">
  <img src={url} alt={title} />
  <p>{title} <i>{date}</i></p>
</div>

<style type="text/scss">
  p {
    color: var(--clr);
  }
  img {
    max-width: 440px;
  }
</style>
