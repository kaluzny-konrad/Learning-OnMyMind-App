<script lang="ts">
	import { onMount } from 'svelte';
	import {
		getTimerFromStore,
		addTimerToStore,
		startTimerInStore,
		stopTimerInStore,
	} from '../../stores/timerStore';
	import { moveMindToTopInStore } from '../../stores/mindStore';
	import type MindTimer from '../../types/MindTimer';
	import TimeVizualizer from './TimeVizualizer.svelte';

	import StartPath from '../../icons/StartPath.svelte';
	import PausePath from '../../icons/PausePath.svelte';
	import Icon from '../../icons/Icon.svelte';

	export let mindId: string;
	export let active: boolean;
	let timer: MindTimer;
	$: isRunning = false;
	$: time = 0;

	onMount(() => {
		timer = getTimerFromStore(mindId) ?? addTimerToStore(mindId);
		refreshTimer();
		requestAnimationFrame(refreshTimer);
	});

	function startTimer() {
		startTimerInStore(mindId);
		moveMindToTopInStore(mindId);
		requestAnimationFrame(refreshTimer);
	}

	function pauseTimer() {
		stopTimerInStore(mindId);
	}

	function refreshTimer() {
		isRunning = timer.isRunning;
		time = timer.getTimeElapsed();
		requestAnimationFrame(refreshTimer);
	}
</script>

<div
	data-testid="timer"
	class="flex items-center justify-center space-x-4 text-center"
>
	<TimeVizualizer {time} />
	{#if active}
		{#if isRunning}
			<button
				class="round-button gray-button"
				data-testid="pause-timer"
				on:click={pauseTimer}
			>
				<span class="sr-only">Stop timer</span>
				<Icon>
					<PausePath />
				</Icon>
			</button>
		{:else}
			<button
				class="round-button blue-button"
				data-testid="start-timer"
				on:click={startTimer}
			>
				<span class="sr-only">Run timer</span>
				<Icon>
					<StartPath />
				</Icon>
			</button>
		{/if}
	{/if}
</div>
