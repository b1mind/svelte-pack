<script> 
  const user = 'World'
  let count = 0
</script>

<main>
  <p>Hello {user}</p>
  <button on:click={() => count++}>Clicked {count}</button>
</main>

<style lang="scss">

  main {
    p {
      color: red;
    }
  }

</style>