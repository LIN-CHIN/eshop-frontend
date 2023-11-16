<template>
  <div class="flex flex-col mt-5 lg:item">
    <!-- query start -->
    <form class="w-full flex flex-col items-left flex-wrap
                 lg:flex-row lg:items-center lg:border-t-0
                 lg:container lg:mx-auto lg:justify-center">
      <div class="flex flex-col items-left justify-start
                  lg:flex-row lg:items-center lg:justify-center
                  pt-3 pb-3 mr-3 ml-3 lg:w-1/4">
        <div class="">
          <label class="block text-gray-500 font-bold
                      md:text-right mb-1 md:mb-0 pr-4" for="inline-user-t">
            使用者名稱
          </label>
        </div>
        <div class="">
          <input type="text" id="inline-user-t"
                 placeholder="UserName"
                 class="input input-bordered max-w-xs
                      focus:outline-none focus:border-gray-300 focus:shadow-md" />
        </div>
      </div>
      <div class="flex flex-col items-left justify-start
                  lg:flex-row lg:items-center lg:justify-center
                  pt-3 pb-3 mr-3 ml-3 lg:w-1/4">
        <div class="">
          <label class="block text-gray-500 font-bold
                      md:text-right mb-1 md:mb-0 pr-4" for="inline-user-name">
            使用者名稱
          </label>
        </div>
        <div class="">
          <input type="text" id="inline-user-name"
                 placeholder="UserName"
                 class="input input-bordered max-w-xs
                      focus:outline-none focus:border-gray-300 focus:shadow-md" />
        </div>
      </div>
      <div class="flex flex-col items-left justify-start
                  lg:flex-row lg:items-center lg:justify-center
                  pt-3 pb-3 mr-3 ml-3 lg:w-1/4">
        <div class="">
          <label class="block text-gray-500 font-bold
                      md:text-right mb-1 md:mb-0 pr-4" for="inline-mail">
            E-Mail
          </label>
        </div>
        <div class="">
          <input type="text" id="inline-mail"
                 placeholder="UserName"
                 class="input input-bordered max-w-xs
                      focus:outline-none focus:border-gray-300 focus:shadow-md" />
        </div>
      </div>
      <div class="flex flex-col items-left justify-start
                  lg:flex-row lg:items-center lg:justify-center
                  pt-3 pb-3 mr-3 ml-3 lg:w-1/4">
        <div class="">
          <label class="block text-gray-500 font-bold
                      md:text-right mb-1 md:mb-0 pr-4" for="inline-user-t">
            使用者名稱
          </label>
        </div>
        <div class="">
          <input type="text" id="inline-user-t"
                 placeholder="UserName"
                 class="input input-bordered max-w-xs
                      focus:outline-none focus:border-gray-300 focus:shadow-md" />
        </div>
      </div>
      <div class="flex flex-col items-left justify-start
                  lg:flex-row lg:items-center lg:justify-center
                  pt-3 pb-3 mr-3 ml-3 lg:w-1/4">
        <div class="">
          <label class="block text-gray-500 font-bold
                      md:text-right mb-1 md:mb-0 pr-4" for="inline-user-t">
            使用者名稱
          </label>
        </div>
        <div class="">
          <input type="text" id="inline-user-t"
                 placeholder="UserName"
                 class="input input-bordered max-w-xs
                      focus:outline-none focus:border-gray-300 focus:shadow-md" />
        </div>
      </div>
      <div class="flex flex-col items-left justify-start
                  lg:flex-row lg:items-center lg:justify-center
                  pt-3 pb-3 mr-3 ml-3 lg:w-1/4">
        <div class="">
          <label class="block text-gray-500 font-bold
                      md:text-right mb-1 md:mb-0 pr-4" for="inline-user-t">
            名稱
          </label>
        </div>
        <div class="">
          <input type="text" id="inline-user-t"
                 placeholder="UserName"
                 class="input input-bordered max-w-xs
                      focus:outline-none focus:border-gray-300 focus:shadow-md" />
        </div>
      </div>
    </form>
    <!-- query end -->
    <!-- Open the modal using ID.showModal() method -->
    <dialog id="my_modal_1" class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Hello!</h3>
        <p class="py-4">Press ESC key or click the button below to close</p>
        <div class="modal-action">
          <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
    <QueryTable></QueryTable>
    <Pagination></Pagination>
  </div>
</template>

<script setup lang="ts">
</script>
