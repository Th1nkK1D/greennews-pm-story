<template>
  <div
    class="flex flex-col justify-center m-1 rounded-xl px-3 py-6 md:px-8 text-center bg-white hover:bg-green-2 group space-y-2 flex-1"
    @click="$emit('click')"
  >
    <svg
      v-if="character === 1"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="text-green-1 group-hover:text-white mx-auto"
    >
      <path
        d="M7 19C8.10457 19 9 18.1046 9 17C9 15.8954 8.10457 15 7 15C5.89543 15 5 15.8954 5 17C5 18.1046 5.89543 19 7 19Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17 19C18.1046 19 19 18.1046 19 17C19 15.8954 18.1046 15 17 15C15.8954 15 15 15.8954 15 17C15 18.1046 15.8954 19 17 19Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 11V6M5 17H3V11L5 6H14L18 11H19C19.5304 11 20.0391 11.2107 20.4142 11.5858C20.7893 11.9609 21 12.4696 21 13V17H19H5ZM15 17H9H15ZM3 11H18H3Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>

    <svg
      v-else-if="character === 2"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="text-green-1 group-hover:text-white mx-auto"
    >
      <path
        d="M16 5.00024L19 8.00024L17 9.00024L21 13.0002L18 14.0002L22 18.0002H13"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15 21V18"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 13.0002L6 11.0002"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 12.0005L10 10.0005"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 21.0002V8.00024"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.82411 15.9951C5.38658 15.9694 4.95998 15.8483 4.57431 15.6401C4.18865 15.4319 3.85328 15.1417 3.59181 14.7899C3.33035 14.4382 3.14912 14.0334 3.06089 13.6041C2.97265 13.1748 2.97956 12.7314 3.08111 12.3051C2.71819 12.0034 2.43162 11.6203 2.2447 11.187C2.05778 10.7537 1.9758 10.2823 2.00543 9.81134C2.03505 9.34035 2.17545 8.88301 2.41519 8.47652C2.65494 8.07003 2.98725 7.72588 3.38511 7.47207C3.03648 6.85272 2.91906 6.12972 3.05377 5.43187C3.18848 4.73403 3.56657 4.10668 4.12068 3.6616C4.67478 3.21651 5.3689 2.98261 6.07938 3.00156C6.78985 3.0205 7.47052 3.29108 8.00011 3.76506C8.52982 3.29183 9.21027 3.0219 9.92034 3.00331C10.6304 2.98473 11.324 3.21871 11.8778 3.66359C12.4315 4.10848 12.8094 4.73541 12.9443 5.43282C13.0791 6.13022 12.9621 6.85284 12.6141 7.47207C13.0122 7.72565 13.3448 8.06968 13.5848 8.47613C13.8247 8.88259 13.9653 9.33998 13.995 9.81104C14.0247 10.2821 13.9428 10.7535 13.7558 11.1869C13.5689 11.6203 13.2822 12.0034 12.9191 12.3051C13.0241 12.7459 13.0278 13.2047 12.9301 13.6472C12.8324 14.0896 12.6357 14.5042 12.3548 14.8597C12.0739 15.2153 11.7161 15.5026 11.3083 15.7001C10.9005 15.8976 10.4532 16.0002 10.0001 16.0001H10.0011H6.00111L5.82411 15.9951Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>

    <svg
      v-else-if="character === 3"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="text-green-1 group-hover:text-white mx-auto"
    >
      <path
        d="M3 21H21"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5 21V7L13 3V21"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19 20.9998V10.9998L13 6.99976"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 9V9.01"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 12V12.01"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 15V15.01"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 18V18.01"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>

    <svg
      v-else-if="character === 4"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="text-green-1 group-hover:text-white mx-auto"
    >
      <path
        d="M4 21C5.147 16.98 5.983 12.973 6 9H12C12.017 12.973 12.853 16.98 14 21"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.5 13.0002H17C17.025 15.6122 17.894 18.2962 19 21.0002"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 5.00028C9.22717 4.68379 9.52797 4.42736 9.87642 4.25313C10.2249 4.0789 10.6105 3.99212 11 4.00028C11.3895 3.99212 11.7751 4.0789 12.1236 4.25313C12.472 4.42736 12.7728 4.68379 13 5.00028C13.2272 5.31677 13.528 5.57321 13.8764 5.74743C14.2249 5.92166 14.6105 6.00844 15 6.00028C15.3895 6.00844 15.7751 5.92166 16.1236 5.74743C16.472 5.57321 16.7728 5.31677 17 5.00028C17.2272 4.68379 17.528 4.42736 17.8764 4.25313C18.2249 4.0789 18.6105 3.99212 19 4.00028C19.3895 3.99212 19.7751 4.0789 20.1236 4.25313C20.472 4.42736 20.7728 4.68379 21 5.00028"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3 21H22"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>

    <svg
      v-else-if="character === 5"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="text-green-1 group-hover:text-white mx-auto"
    >
      <path
        d="M5 12H3L12 3L21 12H19"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5 12V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V12"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 12H14V16H10V12Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>

    <svg
      v-else
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="text-green-1 group-hover:text-white mx-auto"
    >
      <path
        d="M12 3L8 10H16L12 3Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17 20.0002C18.6569 20.0002 20 18.6571 20 17.0002C20 15.3434 18.6569 14.0002 17 14.0002C15.3431 14.0002 14 15.3434 14 17.0002C14 18.6571 15.3431 20.0002 17 20.0002Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 14.0002H5C4.44772 14.0002 4 14.448 4 15.0002V19.0002C4 19.5525 4.44772 20.0002 5 20.0002H9C9.55228 20.0002 10 19.5525 10 19.0002V15.0002C10 14.448 9.55228 14.0002 9 14.0002Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>

    <p class="group-hover:text-white mx-auto">
      {{ $t(`chapter3.action1.character${character}`) }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    character: {
      type: Number,
      required: true,
    },
  },
}
</script>
