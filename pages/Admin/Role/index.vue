<template>
  <div class="flex flex-col mt-5 lg:item">
    <QueryBar>
      <template #queryColumnContent>
        <div class="flex flex-col items-left justify-start
                  lg:flex-row lg:items-center lg:justify-center
                  pt-3 pb-3 mr-3 ml-3 lg:w-1/4">
          <label class="block text-gray-500 font-bold
                      md:text-right mb-1 md:mb-0 pr-4" for="inline-user-t">
            使用者名稱
          </label>
          <input type="text"
                 id="inline-user-t"
                 placeholder="UserName"
                 class="input input-bordered max-w-xs
                      focus:outline-none focus:border-gray-300 focus:shadow-md" />
        </div>
        <div class="flex flex-col items-left justify-start
                  lg:flex-row lg:items-center lg:justify-center
                  pt-3 pb-3 mr-3 ml-3 lg:w-1/4">
          <label class="block text-gray-500 font-bold
                      md:text-right mb-1 md:mb-0 pr-4" for="inline-user-name">
            使用者名稱
          </label>
          <input type="text"
                 id="inline-user-name"
                 placeholder="UserName"
                 class="input input-bordered max-w-xs
                      focus:outline-none focus:border-gray-300 focus:shadow-md" />
        </div>
        <div class="flex flex-col items-left justify-start
                  lg:flex-row lg:items-center lg:justify-center
                  pt-3 pb-3 mr-3 ml-3 lg:w-1/4">
          <label class="block text-gray-500 font-bold
                      md:text-right mb-1 md:mb-0 pr-4" for="inline-mail">
            E-Mail
          </label>
          <input type="text"
                 id="inline-mail"
                 placeholder="UserName"
                 class="input input-bordered max-w-xs
                      focus:outline-none focus:border-gray-300 focus:shadow-md" />
        </div>
        <div class="flex flex-col items-left justify-start
                  lg:flex-row lg:items-center lg:justify-center
                  pt-3 pb-3 mr-3 ml-3 lg:w-1/4">
          <label class="block text-gray-500 font-bold
                      md:text-right mb-1 md:mb-0 pr-4" for="inline-user-t">
            使用者名稱
          </label>
          <input type="text"
                 id="inline-user-t"
                 placeholder="UserName"
                 class="input input-bordered max-w-xs
                      focus:outline-none focus:border-gray-300 focus:shadow-md" />
        </div>
        <div class="flex flex-col items-left justify-start
                  lg:flex-row lg:items-center lg:justify-center
                  pt-3 pb-3 mr-3 ml-3 lg:w-1/4">
          <label class="block text-gray-500 font-bold
                      md:text-right mb-1 md:mb-0 pr-4" for="inline-user-t">
            使用者名稱
          </label>
          <input type="text"
                 id="inline-user-t"
                 placeholder="UserName"
                 class="input input-bordered max-w-xs
                      focus:outline-none focus:border-gray-300 focus:shadow-md" />
        </div>
        <div class="flex flex-col items-left justify-start
                  lg:flex-row lg:items-center lg:justify-center
                  pt-3 pb-3 mr-3 ml-3 lg:w-1/4">
          <label class="block text-gray-500 font-bold
                      md:text-right mb-1 md:mb-0 pr-4" for="inline-user-t">
            名稱
          </label>
          <input type="text"
                 id="inline-user-t"
                 placeholder="UserName"
                 class="input input-bordered max-w-xs
                      focus:outline-none focus:border-gray-300 focus:shadow-md" />
        </div>
      </template>
    </QueryBar>
    <QueryTable>
      <template #insertModalContent>
        <h3 class="font-bold text-lg">新增使用者</h3>
        <form class="w-full max-w-lg py-4">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                     for="grid-first-name">
                First Name
              </label>
              <input class="appearance-none block w-full bg-gray-200
                        text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight
                        focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Jane">
              <p class="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                     for="grid-last-name">
                Last Name
              </label>
              <input class="appearance-none block w-full bg-gray-200
                        text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight
                          focus:outline-none focus:bg-white focus:border-gray-500"
                     id="grid-last-name"
                     type="text"
                placeholder="Doe">
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                     for="grid-city">
                City
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border
                        border-gray-200 rounded py-3 px-4 leading-tight
                          focus:outline-none focus:bg-white focus:border-gray-500"
                     id="grid-city"
                     type="text"
                placeholder="Albuquerque">
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                     for="grid-state">
                State
              </label>
              <div class="relative">
                <select class="block appearance-none w-full bg-gray-200 border border-gray-200
                           text-gray-700 py-3 px-4 pr-8 rounded leading-tight
                           focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                  <option>New Mexico</option>
                  <option>Missouri</option>
                  <option>Texas</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0
                          flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657
                           8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                     for="grid-zip">
                Zip
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border
                         border-gray-200 rounded py-3 px-4 leading-tight
                          focus:outline-none focus:bg-white focus:border-gray-500"
                     id="grid-zip"
                     type="text"
                placeholder="90210">
            </div>
          </div>
        </form>
        <div class="modal-action mt-0">
          <button class="btn">新增</button>
          <!-- cancel button -->
          <form method="dialog">
            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
        </div>
      </template>
      <template #editModalContent>
        <h3 class="font-bold text-lg">編輯使用者</h3>
        <form class="w-full max-w-lg py-4">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                     for="grid-first-name">
                First Name
              </label>
              <input class="appearance-none block w-full bg-gray-200
                          text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight
                          focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Jane">
              <p class="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                     for="grid-last-name">
                Last Name
              </label>
              <input class="appearance-none block w-full bg-gray-200
                          text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight
                            focus:outline-none focus:bg-white focus:border-gray-500"
                     id="grid-last-name"
                     type="text"
                placeholder="Doe">
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                     for="grid-city">
                City
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border
                          border-gray-200 rounded py-3 px-4 leading-tight
                            focus:outline-none focus:bg-white focus:border-gray-500"
                     id="grid-city"
                     type="text"
                placeholder="Albuquerque">
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                     for="grid-state">
                State
              </label>
              <div class="relative">
                <select class="block appearance-none w-full bg-gray-200 border border-gray-200
                            text-gray-700 py-3 px-4 pr-8 rounded leading-tight
                            focus:outline-none focus:bg-white focus:border-gray-500"
                         id="grid-state">
                  <option>New Mexico</option>
                  <option>Missouri</option>
                  <option>Texas</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0
                            flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657
                            8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                     for="grid-zip">
                Zip
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border
                          border-gray-200 rounded py-3 px-4 leading-tight
                            focus:outline-none focus:bg-white focus:border-gray-500"
                     id="grid-zip"
                     type="text"
                placeholder="90210">
            </div>
          </div>
        </form>
        <div class="modal-action mt-0">
          <button class="btn">儲存</button>
          <!-- cancel button -->
          <form method="dialog">
            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
        </div>
      </template>
    </QueryTable>
    <Pagination></Pagination>
  </div>
</template>

<script setup lang="ts">

</script>
