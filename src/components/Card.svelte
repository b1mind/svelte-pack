<script>
  import { animate } from '../anime.js'

  export let thumb
  export let title
  export let date
</script>

<figure class="card" use:animate={{ type: 'from', duration: 1, opacity: 0, x: -100 }}>
  <div class="img"><img src={thumb} alt={title} /></div>
  <figcaption>{title} <i>- {date}</i></figcaption>
</figure>

<style type="text/scss">
  //< style like its 1989

  figure {
    display: grid;
    place-items: center;
    grid-template-columns: 2fr, 1fr;
    grid-template-rows: 1fr;
    background-color: var(--clr-two);
    border-radius: 0.25rem;
  }

  .img {
    width: 150px;
    max-height: 140px;

    margin: 1rem;
    padding: 0.5rem;
    text-align: center;
    background-color: #fff;
    border-radius: 0.25rem;
    overflow: hidden;

    img {
      max-width: 100%;
      object-fit: cover;
      border-radius: 0.25rem;
    }
  }

  figcaption {
    width: 100%;
    padding: 1rem;
    color: var(--clr);
    background-color: var(--clr-two-dark);
    i {
      display: block;
      font-size: 0.75rem;
    }
  }

  //< the end is near
</style>
