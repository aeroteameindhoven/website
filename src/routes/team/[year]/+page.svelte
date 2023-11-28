<script lang="ts">
  const pictures = import.meta.glob("/src/members/*/*.jpg", {
    eager: true,
    // as: "raw"
    query: {
      enhanced: true
    }
  });

  export let data;
</script>

<nav>
  <menu>
    {#each data.entries as page}
      <li><a href="/team/{page.year}">{page.year}</a></li>
    {/each}
  </menu>
</nav>

<pre>{JSON.stringify(
    {
      year: data.year,
      file_name: data.file_name,
      team_csv: data.team_csv
    },
    undefined,
    2
  )}</pre>

{#each data.members as member}
  <enhanced:img
    src={pictures[member.photo]}
    sizes="(min-width:1920px) 800px, (min-width:1080px) 600px, (min-width:768px) 400px"
    alt="{member.first_name} {member.last_name}"
  />
  <h2>{member.first_name} {member.last_name}</h2>
  <p>
    {#if member.time !== undefined}{member.time}{/if}
    {member.function}
  </p>
  <ul>
    {#each member.subteams as subteam}
      <li>{subteam}</li>
    {/each}
  </ul>
  <p>
    {#if member.study_level !== undefined}{member.study_level}{/if}
    {#if member.study !== undefined}{member.study}{/if}
  </p>
  <address>
    <a href="mailto:{member.email}">Email</a>
    <br />
    <a href="https://www.linkedin.com/in/{member.linkedin}">Linkedin</a>
  </address>
{/each}
