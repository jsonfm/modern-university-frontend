<template>
    <div
        class="p-8 w-full min-w-[300px] max-w-[400px] min-h-[200px] rounded-2xl border border-black hover:border-none transition-[200ms]"
    >
        <div class="flex items-center justify-between">
            <div class="px-2 py-1 rounded-full border border-black">/ Bachelor</div>
            <div>-></div>
        </div>
        <div class="mt-[30%]">lorem ipsum dolor sit amet, consectetur.</div>
    </div>
</template>

<script setup lang="ts">
const { type, name } = defineProps<{
    type: string;
    name: string;
}>();
</script>
