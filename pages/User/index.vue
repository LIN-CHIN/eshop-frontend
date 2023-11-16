<template>
  <div class="flex flex-col mt-5">
    <!-- query start -->
    <form class="w-full flex flex-col items-left flex-wrap
                 lg:flex-row items-cente
                 border-y-2 mb-5">
      <div class="flex flex-col items-left justify-start
                  lg:flex-row lg:items-center lg:justify-center
                  pt-3 pb-3 mr-3 ml-3 lg:w-1/5">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold
                        md:text-right mb-1 md:mb-0 pr-4" for="inline-user-number">
            使用者帳號
          </label>
        </div>
        <div class="md:w-2/3">
          <input type="text"
                  id="inline-user-number"
                  placeholder="UserNumber"
                  class="input input-bordered max-w-xs
                      focus:outline-none focus:border-gray-300 focus:shadow-md" />
        </div>
      </div>
      <div class="flex flex-col items-left justify-start
                  lg:flex-row lg:items-center lg:justify-center
                  pt-3 pb-3 mr-3 ml-3 lg:w-1/5">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold
                      md:text-right mb-1 md:mb-0 pr-4" for="inline-user-name">
            使用者名稱
          </label>
        </div>
        <div class="md:w-2/3">
          <input type="text"
                 id="inline-user-name"
                 placeholder="UserName"
                 class="input input-bordered max-w-xs
                      focus:outline-none focus:border-gray-300 focus:shadow-md" />
        </div>
      </div>
      <div class="flex flex-col items-left justify-start
                  lg:flex-row lg:items-center lg:justify-center
                  pt-3 pb-3 mr-3 ml-3 lg:w-1/5">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold
                      md:text-right mb-1 md:mb-0 pr-4" for="inline-mail">
            E-Mail
          </label>
        </div>
        <div class="md:w-2/3">
          <input type="text"
                 id="inline-mail"
                 placeholder="UserName"
                 class="input input-bordered max-w-xs
                      focus:outline-none focus:border-gray-300 focus:shadow-md" />
        </div>
      </div>
      <div class="flex flex-col items-left justify-start
                  lg:flex-row lg:items-center lg:justify-center
                  pt-3 pb-3 mr-3 ml-3 lg:w-1/5">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold
                      md:text-right mb-1 md:mb-0 pr-4" for="inline-user-t">
            使用者名稱
          </label>
        </div>
        <div class="md:w-2/3">
          <input type="text"
                  id="inline-user-t"
                  placeholder="UserName"
                  class="input input-bordered max-w-xs
                      focus:outline-none focus:border-gray-300 focus:shadow-md" />
        </div>
      </div>
      <div class="flex flex-col items-left justify-start
                  lg:flex-row lg:items-center lg:justify-center
                  pt-3 pb-3 mr-3 ml-3 lg:w-1/5">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold
                      md:text-right mb-1 md:mb-0 pr-4" for="inline-user-t">
            使用者名稱
          </label>
        </div>
        <div class="md:w-2/3">
          <input type="text"
                  id="inline-user-t"
                  placeholder="UserName"
                  class="input input-bordered max-w-xs
                      focus:outline-none focus:border-gray-300 focus:shadow-md" />
        </div>
      </div>
      <div class="flex flex-col items-left justify-start
                  lg:flex-row lg:items-center lg:justify-center
                  pt-3 pb-3 mr-3 ml-3 lg:w-1/5">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold
                      md:text-right mb-1 md:mb-0 pr-4" for="inline-user-t">
            名稱
          </label>
        </div>
        <div class="md:w-2/3">
          <input type="text"
                  id="inline-user-t"
                  placeholder="UserName"
                  class="input input-bordered max-w-xs
                      focus:outline-none focus:border-gray-300 focus:shadow-md" />
        </div>
      </div>
    </form>
    <!-- query end -->
    <QueryTable></QueryTable>
    <Pagination></Pagination>
  </div>
</template>

<script setup lang="ts">
</script>
