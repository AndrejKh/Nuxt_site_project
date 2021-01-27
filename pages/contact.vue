<template>
  <main class="container mx-auto px-4 mt-28 md:mt-20 h-screen">
    <h1
      class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
    >
      Contact
    </h1>

    <form class="w-full max-w-lg">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Username
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="GrahamSH"
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-password"
          >
            Message
          </label>
          <textarea
            class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
            id="message"
          ></textarea>
          <p class="text-gray-600 text-xs italic">
            What do you want to tell me? Write above.
          </p>
        </div>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3">
          <button
            class="shadow bg-indigo-500 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
            @click="send()"
          >
            Send
          </button>
        </div>
        <div class="md:w-2/3"></div>
      </div>
    </form>
  </main>
</template>
<script>
export default {
  head() {
    return {
      title: `About - GrahamSH`
    };
  },
  methods: {
    async send() {
      const version = "";
      console.log("Sending");
      const body = {
        version,
        userAgent: navigator.userAgent,
        language: navigator.language,
        content: document.querySelector("#message").value,
        username: document.querySelector("#grid-first-name").value
      };

      const res = await fetch("https://grahamsh-contact.glitch.me/send", {
        method: "POST",
        body: JSON.stringify(body)
      });
      res;
    }
  }
};
</script>
