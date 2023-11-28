<script lang="ts">
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
  <h2>{member.first_name} {member.last_name}</h2>
  <p>{member.time} {member.function}</p>
  <ul>
    {#each member.subteams as subteam}
      <li>{subteam}</li>
    {/each}
  </ul>
  <p>{member.study_level} {member.study}</p>
  <p>{member.email}</p>
  <p>{member.linkedin}</p>
{/each}
