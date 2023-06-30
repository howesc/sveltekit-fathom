<script lang="ts">
	import '../app.css';
	import { logStore } from '$lib/stores.js';

	export let data;

	$logStore = 'set value in +layout.svelte';
</script>

<div>
	+layout.svelte

	<pre>
    {JSON.stringify({ data }, null, 2)}
  </pre>

	<pre>
    {JSON.stringify({ $logStore }, null, 2)}
  </pre>
</div>

<slot />
