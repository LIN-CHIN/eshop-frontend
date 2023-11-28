<template>
  <div class="overflow-x-auto border-gray-500 lg:container lg:mx-auto">
    <!-- btn insert start -->
    <div class="ml-5 mb-5
                  lg:flex lg:flex-row lg:justify-end">
      <button class="btn btn-outline" @click="insertClick">
        <svg xmlns="http://www.w3.org/2000/svg" height="12" viewBox="0 -960 960 960" width="24">
          <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
        </svg>
      </button>
    </div>
    <!-- insert dialog start-->
    <dialog id="insert_modal" ref="insertModal" class="modal">
      <slot name="insertModalContent"></slot>
    </dialog>
    <!-- edit dialog start -->
    <dialog id="dialog_edit" ref="editModal" class="modal">
      <slot name="editModalContent"></slot>
    </dialog>
    <!-- delete dialog start -->
    <dialog id="dialog_delete" ref="deleteModal" class="modal">
      <div class="modal-box">
        <form method="dialog">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h3 class="font-bold text-lg">刪除{{props.deleteTitle}}</h3>
        <p class="py-4">確定要刪除嗎</p>
        <div class="modal-action">
          <button class="btn btn-primary">確定</button>
        </div>
      </div>
    </dialog>

    <!-- table start -->
    <table class="table table-sm table-zebra border-t-2 border-b-2 border-gray-300">
      <thead>
        <tr>
          <th></th>
          <th v-for="(headContent, index) in tableContent?.head" :key="index">
            {{ headContent }}
          </th>
          <th>啟用/停用</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr class="hover" v-for="(item, index) in tableContent?.body.length" :key="index">
          <th>{{ startFromOne ? index + 1 : index }}</th>
          <td v-for="(bodyContent, i) in tableContent?.body[index].content" :key="i">
            {{ bodyContent }}
          </td>
          <td>
            <input type="checkbox" class="toggle toggle-success" checked />
          </td>
          <td class="flex">
            <!-- edit button -->
            <button class="btn btn-xs pl-0 pr-0 mr-1
                    bg-transparent border-0 shadow-transparent
                    outline-none hover:bg-transparent hover:outline-2 hover:outline-gray-300"
              @click="editClick">
              <svg class="cursor-pointer " xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960"
                width="24">
                <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11
                          26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5
                          30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57
                          57-29-28Z" />
              </svg>
            </button>
            <!-- delete button -->
            <button class="btn btn-xs pl-0 pr-0 mr-1
                    bg-transparent border-0 shadow-transparent
                    outline-none hover:bg-transparent hover:outline-2 hover:outline-gray-300"

                    @click="deleteClick(1)">
              <svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960"
                width="24">
                <path d="M280-120q-33
                          0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0
                          33-23.5
                          56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160
                          0h80v-360h-80v360ZM280-720v520-520Z" />
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
/**
 * 表格Tbody的interface
 */
interface TableBody
{
  content: string[]
}

/**
 * 所有表格的內容Interface
 */
export interface TableContent
{
  head: string[]
  body: TableBody[]
}

const insertModal = ref<HTMLDialogElement>();
const editModal = ref<HTMLDialogElement>();
const deleteModal = ref<HTMLDialogElement>();
let deleteId : number | null;

const props = withDefaults(defineProps<{
  deleteTitle: string,
  tableContent: TableContent,
  startFromOne?:boolean,
}>(), {
  startFromOne: true,
});

type Emit = {
  /**
   * 新增按鈕的點擊事件:
   * 開啟dialog之前要做的某件事情
   */
  (e: 'insertClickEvent'): void,

  /**
   * 編輯按鈕的點擊事件:
   * 開啟dialog之前要做的某件事情
   */
  (e: 'editClickEvent'): void
}
const emit = defineEmits<Emit>();

/**
 * 新增按鈕的點擊事件
 * 開啟dialog之前，呼叫父元件提供的function
 */
const insertClick = () => {
  emit('insertClickEvent');
  insertModal.value?.showModal();
};

/**
 * 編輯按鈕的點擊事件
 * 開啟dialog之前，呼叫父元件提供的function
 */
const editClick = () => {
  emit('editClickEvent');
  editModal.value?.showModal();
};

/**
 * 刪除按鈕(垃圾桶icon)的點擊事件
 */
const deleteClick = (id: number) => {
  deleteId = id;
  deleteModal.value?.showModal();
};

</script>
