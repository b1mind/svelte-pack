<script>
  import { questions } from './data/questionStore'
  import { redditPostData } from './data/redditStore'
  import Card from './components/Card.svelte'

  const user = 'World'
  let count = 0
</script>

<main>
  <h1>This is Svelte-Pack!</h1>
  <p>Hello {user}</p>

  <button on:click={() => count++}>
    Clicked
    {count}
    {count === 1 ? 'time' : 'times'}
  </button>

  {#each $redditPostData as post}
    <Card url={post.img} title={post.title} date={post.created} />
  {/each}

  {#each $questions as q}
    <h3>{q.question}</h3>

    <p>
      {#each q.answers as a}{a.text} = {a.votes} <br />{/each}
    </p>
  {/each}
</main>

<style lang="scss">
  $max: 1200px;

  main {
    max-width: $max;
    margin: 10px auto;
    display: grid;
    place-content: center;
  }
</style>
