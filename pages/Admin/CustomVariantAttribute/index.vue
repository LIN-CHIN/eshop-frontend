<template>
  <div class="flex flex-col mt-5 lg:item">
    <QueryBar>
      <template #queryColumnContent>
        <div class="flex flex-col items-left justify-start
                  lg:flex-row lg:items-center lg:justify-center
                  pt-3 pb-3 mr-3 ml-3 lg:w-1/4">
          <label class="block text-gray-500 font-bold
                      md:text-right mb-1 md:mb-0 pr-4" for="number">
            屬性代碼
          </label>
          <input type="text"
                 id="number"
                 placeholder="屬性代碼"
                 class="input input-bordered max-w-xs
                      focus:outline-none focus:border-gray-300 focus:shadow-md" />
        </div>
        <div class="flex flex-col items-left justify-start
                  lg:flex-row lg:items-center lg:justify-center
                  pt-3 pb-3 mr-3 ml-3 lg:w-1/4">
          <label class="block text-gray-500 font-bold
                      md:text-right mb-1 md:mb-0 pr-4" for="name">
            屬性名稱
          </label>
          <input type="text"
                 id="name"
                 placeholder="屬性名稱"
                 class="input input-bordered max-w-xs
                      focus:outline-none focus:border-gray-300 focus:shadow-md" />
        </div>
        <div class="flex flex-col items-left justify-start
                  lg:flex-row lg:items-center lg:justify-center
                  pt-3 pb-3 mr-3 ml-3 lg:w-1/4">
          <label class="block text-gray-500 font-bold
              md:text-right mb-1 md:mb-0 pr-4" for="attributeType">
            屬性類型
          </label>
          <select id="attributeType"
                  class="select select-bordered border-gray-300 w-full max-w-xs
                         lg:w-52">
            <option selected>請選擇</option>
            <option>文字</option>
            <option>數字</option>
            <option>顏色</option>
            <option>下拉選單</option>
          </select>
        </div>
        <div class="flex flex-col items-left justify-start w-auto
                  lg:flex-row lg:items-center lg:justify-center
                  pt-3 pb-3 mr-3 ml-3 lg:w-1/4">
          <label class="block text-gray-500 font-bold
              md:text-right mb-1 md:mb-0 pr-4" for="isSystemDefault">
              系統預設
          </label>
          <select id="isSystemDefault"
                  class="select select-bordered border-gray-300 w-full max-w-xs
                         lg:w-48">
            <option selected>請選擇</option>
            <option>是</option>
            <option>否</option>
          </select>
        </div>
        <div class="flex flex-col items-left justify-start
                  lg:flex-row lg:items-center lg:justify-center
                  pt-3 pb-3 mr-3 ml-3 lg:w-1/4">
          <label class="block text-gray-500 font-bold
              md:text-right mb-1 md:mb-0 pr-4" for="isEnable">
              是否啟用
          </label>
          <select id="isEnable"
                  class="select select-primary border-gray-300 w-full max-w-xs
                         lg:w-48">
            <option selected>請選擇</option>
            <option>是</option>
            <option>否</option>
          </select>
        </div>
      </template>
    </QueryBar>
    <QueryTable>
      <!-- insert modal content -->
      <template #insertModalContent>
        <div class="modal-box max-w-5xl">
          <h2 class="font-bold text-lg">新增自訂變種屬性</h2>
          <form class="w-full py-4">
            <div class="flex flex-wrap -mx-3 mb-6 p-5
                      border border-gray-200 rounded-lg shadow-md">
              <h3 class="w-full mb-6">基本資訊</h3>
              <div class="w-full lg:w-auto px-3 mb-5">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="number">
                  屬性代碼
                </label>
                <input class="appearance-none block w-full bg-gray-200
                          text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight
                          focus:outline-none focus:bg-white"
                        id="number"
                        type="text"
                        placeholder="Jane">
                <p class="text-red-500 text-xs italic">Please fill out this field.</p>
              </div>
              <div class="w-full lg:w-auto px-3 mb-5">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="name">
                  屬性名稱
                </label>
                <input class="appearance-none block w-full bg-gray-200
                          text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight
                            focus:outline-none focus:bg-white focus:border-gray-500"
                      id="name"
                      type="text"
                  placeholder="Doe">
              </div>
              <div class="w-full lg:w-auto px-3 mb-5">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="attributeType">
                  屬性類型
                </label>
                <div class="relative">
                  <select class="block appearance-none w-full bg-gray-200 border border-gray-200
                            text-gray-700 py-3 px-4 pr-8 rounded leading-tight
                            focus:outline-none focus:bg-white focus:border-gray-500"
                          id="attributeType">
                    <option selected>請選擇</option>
                    <option>文字</option>
                    <option>數字</option>
                    <option>顏色</option>
                    <option>下拉選單</option>
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
              <div class="w-full px-3 mb-5">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="brand">
                  備註
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border
                          border-gray-200 rounded py-3 px-4 leading-tight
                            focus:outline-none focus:bg-white focus:border-gray-500"
                      id="brand"
                      type="text"
                      placeholder="備註">
              </div>
              <!-- checkbox group start-->
              <div class="form-control w-full px-3 mb-5
                          flex flex-col items-start flex-wrap
                          lg:flex-row lg:justify-start">
                <label class="label cursor-pointer">
                  <input type="checkbox"
                         checked
                         name="isEnable"
                         class="checkbox checkbox-sm mr-2
                                lg:ml-3" />
                  <span class="label-text">是否啟用</span>
                </label>
              </div>
              <!-- checkbox group end-->
            </div>
            <div class="flex flex-wrap -mx-3 mb-2 p-5
                        border border-gray-200 rounded-lg shadow-md">
              <h3 class="w-full mb-6">屬性的選項清單</h3>
              <!-- custom attribute option name -->
              <div class="w-full lg:w-auto px-3 mb-5">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="variantAttrOptionName">
                  變種屬性選項名稱
                </label>
                <input class="appearance-none block w-full bg-gray-200
                          text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight
                            focus:outline-none focus:bg-white focus:border-gray-500"
                      id="variantAttrOptionName"
                      type="text"
                  placeholder="option name">
              </div>
              <!-- custom attribute option value -->
              <!-- string type -->
              <div class="w-full lg:w-auto px-3 mb-5">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="stringOptionValue">
                  變種屬性選項值
                </label>
                <input class="appearance-none block w-full bg-gray-200
                          text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight
                            focus:outline-none focus:bg-white focus:border-gray-500"
                      id="stringOptionValue"
                      type="text"
                  placeholder="value">
              </div>
              <!-- number type -->
              <div class="w-full lg:w-auto px-3 mb-5">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="numberOptionValue">
                  變種屬性選項值
                </label>
                <input class="appearance-none block w-full bg-gray-200
                          text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight
                            focus:outline-none focus:bg-white focus:border-gray-500"
                      id="numberOptionValue"
                      type="number"
                  placeholder="1">
              </div>
              <!-- color type -->
              <div class="w-full lg:w-auto px-3 mb-5">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="colorOptionValue">
                  變種屬性選項值
                </label>
                <input class="w-full" id="colorOptionValue" type="color" value="#6590D5">
                <span class="text-xs" >#6590D5</span>
              </div>
              <!-- dropDownList type -->
              <div class="w-full lg:w-auto px-3 mb-5">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="selectOptionValue">
                  變種屬性選項值
                </label>
                <div class="relative">
                  <select class="block appearance-none w-full bg-gray-200 border border-gray-200
                            text-gray-700 py-3 px-4 pr-8 rounded leading-tight
                            focus:outline-none focus:bg-white focus:border-gray-500"
                          id="selectOptionValue">
                    <option selected>請選擇</option>
                    <option>固定商品</option>
                    <option>可變商品</option>
                    <option>軟體</option>
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
              <!-- add option button  -->
              <div class="w-full lg:w-auto px-3 mb-5
                          flex flex-row items-center
                          lg:mb-0">
                <button class="btn btn-primary" @click.stop.prevent="">
                  加入
                </button>
              </div>
              <!-- table start -->
              <div class="w-full px-3 mb-5">
                  <table class="table table-sm table-zebra border-t-2 border-b-2 border-gray-300">
                    <thead>
                      <tr>
                        <th></th>
                        <th>屬性名稱</th>
                        <th>屬性值</th>
                        <th>刪除</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="hover">
                        <th>1</th>
                        <td>Canada</td>
                        <td>12/16/2020</td>
                        <td class="flex">
                          <button class="btn btn-xs pl-0 pr-0 mr-1
                                  bg-transparent border-0 shadow-transparent outline-none
                                  hover:bg-transparent hover:outline-2 hover:outline-gray-300"
                                  @click.stop.prevent="">
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
              <!-- table end -->
            </div>
          </form>
          <!-- button group -->
          <div class="modal-action mt-0">
            <button class="btn btn-primary">新增</button>
            <!-- cancel button -->
            <form method="dialog">
              <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
          </div>
        </div>
      </template>
      <!-- edit modal content -->
      <template #editModalContent>
        <div class="modal-box max-w-5xl">
          <h2 class="font-bold text-lg">編輯自訂變種屬性</h2>
          <form class="w-full py-4">
            <div class="flex flex-wrap -mx-3 mb-6 p-5
                      border border-gray-200 rounded-lg shadow-md">
              <h3 class="w-full mb-6">基本資訊</h3>
              <div class="w-full lg:w-auto px-3 mb-5">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="name">
                  屬性名稱
                </label>
                <input class="appearance-none block w-full bg-gray-200
                          text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight
                            focus:outline-none focus:bg-white focus:border-gray-500"
                      id="name"
                      type="text"
                  placeholder="Doe">
              </div>
              <div class="w-full px-3 mb-5">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="brand">
                  備註
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border
                          border-gray-200 rounded py-3 px-4 leading-tight
                            focus:outline-none focus:bg-white focus:border-gray-500"
                      id="brand"
                      type="text"
                      placeholder="備註">
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-2 p-5
                        border border-gray-200 rounded-lg shadow-md">
              <h3 class="w-full mb-6">屬性的選項清單</h3>
              <!-- custom attribute option name -->
              <div class="w-full lg:w-auto px-3 mb-5">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="variantAttrOptionName">
                  變種屬性選項名稱
                </label>
                <input class="appearance-none block w-full bg-gray-200
                          text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight
                            focus:outline-none focus:bg-white focus:border-gray-500"
                      id="variantAttrOptionName"
                      type="text"
                  placeholder="option name">
              </div>
              <!-- custom attribute option value -->
              <!-- string type -->
              <div class="w-full lg:w-auto px-3 mb-5">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="stringOptionValue">
                  變種屬性選項值
                </label>
                <input class="appearance-none block w-full bg-gray-200
                          text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight
                            focus:outline-none focus:bg-white focus:border-gray-500"
                      id="stringOptionValue"
                      type="text"
                  placeholder="value">
              </div>
              <!-- number type -->
              <div class="w-full lg:w-auto px-3 mb-5">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="numberOptionValue">
                  變種屬性選項值
                </label>
                <input class="appearance-none block w-full bg-gray-200
                          text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight
                            focus:outline-none focus:bg-white focus:border-gray-500"
                      id="numberOptionValue"
                      type="number"
                  placeholder="1">
              </div>
              <!-- color type -->
              <div class="w-full lg:w-auto px-3 mb-5">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="colorOptionValue">
                  變種屬性選項值
                </label>
                <input class="w-full" id="colorOptionValue" type="color" value="#6590D5">
                <span class="text-xs" >#6590D5</span>
              </div>
              <!-- dropDownList type -->
              <div class="w-full lg:w-auto px-3 mb-5">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="selectOptionValue">
                  變種屬性選項值
                </label>
                <div class="relative">
                  <select class="block appearance-none w-full bg-gray-200 border border-gray-200
                            text-gray-700 py-3 px-4 pr-8 rounded leading-tight
                            focus:outline-none focus:bg-white focus:border-gray-500"
                          id="selectOptionValue">
                    <option selected>請選擇</option>
                    <option>固定商品</option>
                    <option>可變商品</option>
                    <option>軟體</option>
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
              <!-- add option button  -->
              <div class="w-full lg:w-auto px-3 mb-5
                          flex flex-row items-center
                          lg:mb-0">
                <button class="btn btn-primary" @click.stop.prevent="">
                  加入
                </button>
              </div>
              <!-- table start -->
              <div class="w-full px-3 mb-5">
                  <table class="table table-sm table-zebra border-t-2 border-b-2 border-gray-300">
                    <thead>
                      <tr>
                        <th></th>
                        <th>屬性代碼</th>
                        <th>屬性名稱</th>
                        <th>屬性值</th>
                        <th>刪除</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="hover">
                        <th>1</th>
                        <th>UUID</th>
                        <td>Canada</td>
                        <td>12/16/2020</td>
                        <td class="flex">
                          <button class="btn btn-xs pl-0 pr-0 mr-1
                                  bg-transparent border-0 shadow-transparent outline-none
                                  hover:bg-transparent hover:outline-2 hover:outline-gray-300"
                                  @click.stop.prevent="">
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
              <!-- table end -->
            </div>
          </form>
          <!-- button group -->
          <div class="modal-action mt-0">
            <button class="btn btn-primary">新增</button>
            <!-- cancel button -->
            <form method="dialog">
              <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
          </div>
        </div>
      </template>
    </QueryTable>
    <Pagination></Pagination>
  </div>
</template>

<script setup lang="ts">
</script>
