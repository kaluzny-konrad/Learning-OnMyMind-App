<script lang="ts">
	import MindSection from '../lib/common/mind/MindSection.svelte';
	import Pomodoro from '../lib/common/pomodoro/PomodoroTimer.svelte';
</script>

<svelte:head>
	<title>OnMyMind</title>
	<meta
		name="description"
		content="An app to track multiple tasks running in parallel with Pomodoro rules and stat tracking."
	/>
</svelte:head>

<Pomodoro />
<MindSection />
