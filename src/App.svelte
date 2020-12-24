<script>
  import { redditPostData } from './data/redditStore'
  import Card from './components/Card.svelte'

  const user = 'World'
  let count = 0
</script>

<header>
  <h1>This is Svelte-Pack!</h1>
  <p>Hello {user}</p>

  <button on:click={() => count++}>
    Clicked
    {count}
    {count === 1 ? 'time' : 'times'}
  </button>
</header>

<main>
  {#each $redditPostData as post}
    <Card thumb={post.thumb} title={post.title} date={post.created} />
  {/each}
</main>

<style lang="scss">
  //< style more

  $max: 1200px;

  header {
    max-width: $max;
    margin: 1rem auto;
  }

  main {
    max-width: $max;
    margin: 10px auto;
    padding: 1rem;
    display: grid;
    place-content: center;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  //< end me
</style>
