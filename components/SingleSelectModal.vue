<template>
  <div>
    <dialog ref="singleSelectModal" id="singleSelectModal" class="modal">
      <div class="modal-box">
        <form method="dialog">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h3 class="font-bold text-lg">Hello!</h3>
        <p class="py-4">Press ESC key or click on ✕ button to close</p>
      </div>
    </dialog>
  </div>
</template>

<script setup lang="ts">
const singleSelectModal = ref<HTMLDialogElement>();

const OpenSingleSelectModal = () => {
  singleSelectModal.value?.showModal();
};

defineExpose({
  OpenSingleSelectModal,
});
</script>
