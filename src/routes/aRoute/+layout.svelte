<script lang="ts">
	import { logStore } from '$lib/stores.js';
	import { logIt } from '$lib/utils';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	export let data;
	const source = '+layout.svelte';

	$logStore = {
		routeDir: '/aRoute',
		routeId: $page.route.id,
		source,
		comment: 'value set in aRoute/+layout.svelte'
	};

	let onMountCount = 0;
	onMount(() => {
		onMountCount += 1;
		logIt({
			count: onMountCount,
			timestamp: new Date(),
			routeDir: '/aRoute',
			routeId: $page.route.id,
			source,
			action: 'onMount'
		});
	});
</script>

<div>
	aRoute/+layout.svelte

	<pre>
    {JSON.stringify({ data }, null, 2)}
  </pre>
</div>

<slot />
