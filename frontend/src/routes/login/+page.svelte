<script>
const onNameSubmit = (name) =>{
    console.log(name)
}
let name ="anonymous";
</script>

<form class="ui form">
    <div class="field">
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label>Wann tag your pic with a nickname?</label>
      <input type="text" name="name" placeholder="anonymous" bind:value={name}>
    </div>
    <div class="field">
    </div>
    <button on:click|preventDefault={onNameSubmit} class="ui button" type="submit">Submit</button>
  </form>