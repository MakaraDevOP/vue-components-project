<template>
	<div class="font-bold text-3xl py-5">Recaptcha V3 </div>
	<div class="w-full flex justify-center items-center">
		<form
			class="w-full max-w-lg shadow-md p-5 border"
			@submit.prevent="onSubmit"
		>
			<div class="flex flex-wrap -mx-3 mb-6">
				<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
					<label
						class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-first-name"
					>
						First Name
					</label>
					<input
						class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						id="grid-first-name"
						type="text"
						placeholder="Jane"
					>
				</div>
				<div class="w-full md:w-1/2 px-3">
					<label
						class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-last-name"
					>
						Last Name
					</label>
					<input
						class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="grid-last-name"
						type="text"
						placeholder="Doe"
					>
				</div>
			</div>
			<div class="flex flex-wrap -mx-3 mb-6">
				<div class="w-full px-3">
					<label
						class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-password"
					>
						Password
					</label>
					<input
						class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="grid-password"
						type="password"
						placeholder="******************"
					>
					<p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
				</div>
			</div>
			<div class="flex flex-wrap -mx-3 mb-2">
				<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<label
						class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-city"
					>
						City
					</label>
					<input
						class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="grid-city"
						type="text"
						placeholder="Albuquerque"
					>
				</div>
				<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<label
						class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-state"
					>
						State
					</label>
					<div class="relative">
						<select
							class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-state"
						>
							<option>New Mexico</option>
							<option>Missouri</option>
							<option>Texas</option>
						</select>
						<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
							<svg
								class="fill-current h-4 w-4"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
							>
								<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
							</svg>
						</div>
					</div>
				</div>
				<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<label
						class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-zip"
					>
						Zip
					</label>
					<input
						class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="grid-zip"
						type="text"
						placeholder="90210"
					>
				</div>
			</div>
			<div>
				<vue-recaptcha
					ref="invisibleRecaptcha"
					@verify="onVerify"
					@expired="onExpired"
					size="visible"
					sitekey="6LermJsjAAAAAL50VvDW3ZxVPm4MzpbCMXxK7wNc"
				>
				</vue-recaptcha>
			</div>
			<div class="py-5">
				<button
					@click="recaptcha"
					type="submit"
					class="px-5 py-2 rounded-full bg-gray-900 hover:bg-gray-700 text-white shadow transition duration-150 ease-in-out"
				>Save</button>
			</div>
		</form>
	</div>
</template>
<script>
import { VueRecaptcha } from 'vue-recaptcha';
export default {
	components: { VueRecaptcha },
	data() {
		return {
		}
	},
	methods: {
		async onSubmit() {
			this.$refs.invisibleRecaptcha.execute();
			this.verify()
		},
		verify(response) {
			console.log(response)
		}
	}
}
</script>