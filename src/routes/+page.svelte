<script>
	import { goto } from '$app/navigation';
</script>

<svelte:head>
	<title>OpenQQuantify - Logistical AI for Electronic Design</title>
</svelte:head>

<div class="flex flex-col min-h-screen">
	<div class="flex flex-1">
		<div class="w-1/2 p-12 flex flex-col bg-black text-white">
			<h1 class="text-3xl font-bold mb-24">
				<span>Open</span><span class="text-red-500">Q</span><span>Quantify</span>
			</h1>
			
			<main class="flex-1 flex flex-col justify-center">
				<h2 class="text-5xl font-bold mb-8 leading-tight">
					<div><span class="text-amber-400">The next step</span> in</div>
					<div>
						<span class="text-amber-400">logistical AI</span> 
						<span class="text-white">designed for</span>
					</div>
					<div>the electronic sector</div>
				</h2>
				<p class="text-xl text-gray-300 mb-12 leading-relaxed">
					Manage your electronic design workflow with OpenQQuantify.
				</p>
				<button class="border border-white px-8 py-4 rounded-sm text-xl hover:bg-white hover:text-black transition-colors mb-8 flex items-center w-fit backglow-hover">
					Get Early Access
					<svg class="text-amber-400 ml-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M11.8675 6.95278L5.54592 6.95277L5.54591 5.28612L14.7126 5.28613L14.7126 14.4528L13.0459 14.4528L13.046 8.13129L5.87379 15.3035L4.69528 14.125L11.8675 6.95278Z" fill="currentColor"></path>
					</svg>
				</button>
				<p class="text-lg">
					<span class="text-gray-400">OR try</span> 
					<a href="https://openq.vercel.app/" class="text-amber-400 hover:underline">Our Demo Version</a>, 
					<span class="text-gray-400">built for quick exploration</span>
				</p>
			</main>
			
			<footer class="mt-24 text-lg text-gray-400">
				<a href="https://openq.vercel.app/" class="hover:text-white">Contact Us</a>
			</footer>
		</div>
		
		<div class="w-1/2 bg-[#1b191b] p-12 flex flex-col text-black">
			<div class="flex justify-end mb-24">
				<button class="pushable">
					<span class="shadow"></span>
					<span class="edge"></span>
					<span class="front">
						Launch App
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M11.8675 6.95278L5.54592 6.95277L5.54591 5.28612L14.7126 5.28613L14.7126 14.4528L13.0459 14.4528L13.046 8.13129L5.87379 15.3035L4.69528 14.125L11.8675 6.95278Z" fill="currentColor"></path>
						</svg>
					</span>
				</button>
			</div>
			
			<div class="flex-1 flex items-center justify-center">
				<video 
					class="w-full h-auto max-h-full object-contain"
					muted 
					 autoplay 
					 playsinline 
					 preload="auto" 
					 loop 
				>
					<source src="https://signet-web-assets-public.s3.ap-southeast-1.amazonaws.com/signet-animation.mp4" type="video/mp4">
				</video>
			</div>
			
			<footer class="mt-24 text-lg text-gray-400 text-right">

			</footer>
		</div>
	</div>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		color: white;
	}

	h1 span:nth-child(2) {
		color: #ef4444; /* This is the hex code for Tailwind's red-500 */
	}

	.backglow-hover {
		transition: text-shadow 0.3s ease;
	}

	.backglow-hover:hover {
		text-shadow: 0 0 3px #f59e0b, 0 0 9px #f59e0b;
	}

	.pushable {
		position: relative;
		border: none;
		background: transparent;
		padding: 0;
		cursor: pointer;
		outline-offset: 4px;
		transition: filter 250ms;
	}

	.shadow {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 4px;
		background: hsl(0deg 0% 0% / 0.25);
		will-change: transform;
		transform: translateY(2px);
		transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
	}

	.edge {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 4px;
		background: linear-gradient(
			to left,
			hsl(45deg 100% 25%) 0%,
			hsl(45deg 100% 35%) 8%,
			hsl(45deg 100% 35%) 92%,
			hsl(45deg 100% 25%) 100%
		);
	}

	.front {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		padding: 12px 42px;
		border-radius: 4px;
		font-size: 1.25rem;
		color: black;
		font-weight: 600;
		background: hsl(45deg 100% 50%);
		will-change: transform;
		transform: translateY(-4px);
		transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
	}

	.front svg {
		margin-left: 8px;
		vertical-align: middle;
		position: relative;
		top: 3px; /* Adjust this value as needed */
	}

	.pushable:hover {
		filter: brightness(110%);
	}

	.pushable:hover .front {
		transform: translateY(-6px);
		transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
	}

	.pushable:active .front {
		transform: translateY(-2px);
		transition: transform 34ms;
	}

	.pushable:hover .shadow {
		transform: translateY(4px);
		transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
	}

	.pushable:active .shadow {
		transform: translateY(1px);
		transition: transform 34ms;
	}

	.pushable:focus:not(:focus-visible) {
		outline: none;
	}

	/* Existing backglow-hover styles for other buttons */
	.backglow-hover {
		display: flex;
		align-items: center;
		transition: text-shadow 0.3s ease;
		color: white;
		border-color: white;
	}

	.backglow-hover:hover {
		text-shadow: 0 0 3px #f59e0b, 0 0 9px #f59e0b;
	}

	.backglow-hover svg {
		vertical-align: middle;
		position: relative;
		top: 1px; /* Adjust this value as needed */
	}
</style>