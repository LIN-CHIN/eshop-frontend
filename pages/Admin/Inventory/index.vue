<template>
  <div class="flex flex-col mt-5 lg:item">
    <QueryBar>
      <template #queryColumnContent>
        <div class="flex flex-col items-left justify-start
                  lg:flex-row lg:items-center lg:justify-center
                  pt-3 pb-3 mr-3 ml-3 lg:w-1/4">
          <label class="block text-gray-500 font-bold
                      md:text-right mb-1 md:mb-0 pr-4" for="productNumber">
            商品編號
          </label>
          <input type="text"
                 id="productNumber"
                 placeholder="商品編號"
                 class="input input-bordered max-w-xs
                      focus:outline-none focus:border-gray-300 focus:shadow-md" />
        </div>
        <div class="flex flex-col items-left justify-start
                  lg:flex-row lg:items-center lg:justify-center
                  pt-3 pb-3 mr-3 ml-3 lg:w-1/4">
          <label class="block text-gray-500 font-bold
                      md:text-right mb-1 md:mb-0 pr-4" for="productName">
            商品名稱
          </label>
          <input type="text"
                 id="productName"
                 placeholder="商品名稱"
                 class="input input-bordered max-w-xs
                      focus:outline-none focus:border-gray-300 focus:shadow-md" />
        </div>
        <div class="flex flex-col items-left justify-start
                  lg:flex-row lg:items-center lg:justify-center
                  pt-3 pb-3 mr-3 ml-3 lg:w-1/4">
          <label class="block text-gray-500 font-bold
                      md:text-right mb-1 md:mb-0 pr-4" for="inventoryQuantity">
            庫存數量
          </label>
          <input type="number"
                 id="inventoryQuantity"
                 placeholder="庫存數量"
                 class="input input-bordered max-w-xs
                      focus:outline-none focus:border-gray-300 focus:shadow-md" />
        </div>
        <div class="flex flex-col items-left justify-start
                  lg:flex-row lg:items-center lg:justify-center
                  pt-3 pb-3 mr-3 ml-3 lg:w-1/4">
          <label class="block text-gray-500 font-bold
                      md:text-right mb-1 md:mb-0 pr-4" for="supplier">
            供應商
          </label>
          <input type="text"
                 id="supplier"
                 placeholder="供應商"
                 class="input input-bordered max-w-xs
                      focus:outline-none focus:border-gray-300 focus:shadow-md" />
        </div>
        <div class="flex flex-col items-left justify-start
                  lg:flex-row lg:items-center lg:justify-center
                  pt-3 pb-3 mr-3 ml-3 lg:w-1/4">
          <label class="block text-gray-500 font-bold
                      md:text-right mb-1 md:mb-0 pr-4" for="brand">
            品牌
          </label>
          <input type="text"
                 id="brand"
                 placeholder="品牌"
                 class="input input-bordered max-w-xs
                      focus:outline-none focus:border-gray-300 focus:shadow-md" />
        </div>
        <div class="flex flex-col items-left justify-start
                  lg:flex-row lg:items-center lg:justify-center
                  pt-3 pb-3 mr-3 ml-3 lg:w-1/4">
          <label class="block text-gray-500 font-bold
              md:text-right mb-1 md:mb-0 pr-4" for="productType">
            商品類型
          </label>
          <select id="productType"
                  class="select select-bordered border-gray-300 w-full max-w-xs
                         lg:w-52">
            <option selected>請選擇</option>
            <option>Star Wars</option>
            <option>Harry Potter</option>
          </select>
        </div>
        <div class="flex flex-col items-left justify-start w-auto
                  lg:flex-row lg:items-center lg:justify-center
                  pt-3 pb-3 mr-3 ml-3 lg:w-1/4">
          <label class="block text-gray-500 font-bold
              md:text-right mb-1 md:mb-0 pr-4" for="isComposite">
              組合產品
          </label>
          <select id="isComposite"
                  class="select select-bordered border-gray-300 w-full max-w-xs
                         lg:w-48">
            <option selected>請選擇</option>
            <option>是</option>
            <option>否</option>
          </select>
        </div>
        <div class="flex flex-col items-left justify-start w-auto
                  lg:flex-row lg:items-center lg:justify-center
                  pt-3 pb-3 mr-3 ml-3 lg:w-1/4">
          <label class="block text-gray-500 font-bold
              md:text-right mb-1 md:mb-0 pr-4" for="isCompositeOnly">
              組合產品使用
          </label>
          <select id="isCompositeOnly"
                  class="select select-primary border-gray-300 w-full max-w-xs
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
    <QueryTable
      @insert-click-event="resetInsertDailog"
      @edit-click-event="resetEditDailog"
      :delete-title=deleteTitle
      :table-content="tableContent">
      <!-- insert modal content -->
      <template #insertModalContent>
        <div class="modal-box max-w-5xl">
            <h2 class="font-bold text-lg">新增商品庫存</h2>
            <br>
            <Step :stepDatas = stepDatas></Step>
            <!-- step1 select product type start -->
            <div v-show="stepDatas[0].isActive">
              <form class="w-full py-4" ref="frmInsertStep1">
                <div class="flex flex-wrap -mx-3 mb-6 p-5
                          border border-gray-200 rounded-lg shadow-md">
                  <h3 class="w-full mb-6">選擇商品類型</h3>
                  <div class="w-full lg:w-auto px-3 mb-5">
                    <label class="block uppercase tracking-wide
                                  text-gray-700 text-xs font-bold mb-2"
                          for="productType">
                      產品類型
                    </label>
                    <div class="relative">
                      <select class="block appearance-none w-full bg-gray-200 border border-gray-200
                                text-gray-700 py-3 px-4 pr-8 rounded leading-tight
                                focus:outline-none focus:bg-white focus:border-gray-500"
                              id="productType">
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
                </div>
              </form>
              <!-- button group -->
              <div class="modal-action mt-0">
                <button class="btn btn-primary" @click.stop.prevent="ToNextStep(1)">下一步</button>
                <!-- cancel button -->
                <form method="dialog">
                  <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
              </div>
            </div>
            <!-- step1 select product type end -->
            <!-- step2 select customAttributes start -->
            <div v-show="stepDatas[1].isActive">
              <form class="w-full py-4" ref="frmInsertStep2">
                  <div class="flex flex-wrap -mx-3 mb-2 p-5
                            border border-gray-200 rounded-lg shadow-md">
                  <h3 class="w-full mb-6">可變商品資訊</h3>
                  <!-- custom attribute key -->
                  <div class="w-full lg:w-auto px-3 mb-5">
                    <label class="block uppercase tracking-wide
                                  text-gray-700 text-xs font-bold mb-2"
                        for="productNumber">
                    屬性代碼
                    </label>
                    <div class="relative">
                      <select class="block appearance-none w-full bg-gray-200 border border-gray-200
                                text-gray-700 py-3 px-4 pr-8 rounded leading-tight
                                focus:outline-none focus:bg-white focus:border-gray-500"
                              id="productType">
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
                  <!-- custom attribute value -->
                  <div class="w-full lg:w-auto px-3 mb-5">
                    <label class="block uppercase tracking-wide
                                  text-gray-700 text-xs font-bold mb-2"
                          for="productNumber">
                      屬性值
                    </label>
                    <div class="relative">
                      <select class="block appearance-none w-full bg-gray-200 border border-gray-200
                                text-gray-700 py-3 px-4 pr-8 rounded leading-tight
                                focus:outline-none focus:bg-white focus:border-gray-500"
                              id="productType">
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
                  <div class="w-full lg:w-auto px-3 mb-5
                              flex flex-row items-center
                              lg:mb-0">
                    <button class="btn btn-primary" @click.stop.prevent="">
                      加入
                    </button>
                  </div>
                  <!-- table start -->
                  <div class="w-full px-3 mb-5">
                      <table class="table table-sm table-zebra border-t-2
                                    border-b-2 border-gray-300">
                        <thead>
                          <tr>
                            <th></th>
                            <th>屬性代碼</th>
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
                <button class="btn btn-primary" @click.stop.prevent="ToUpStep(2)">上一步</button>
                <button class="btn btn-primary" @click.stop.prevent="ToNextStep(2)">下一步</button>
                <!-- cancel button -->
                <form method="dialog">
                  <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
              </div>
            </div>
            <!-- step2 select customAttributes end -->
            <!-- step3 start -->
            <div v-show="stepDatas[2].isActive">
              <form class="w-full py-4" ref="frmInsertStep3">
                <div class="flex flex-wrap -mx-3 mb-6 p-5
                          border border-gray-200 rounded-lg shadow-md">
                  <h3 class="w-full mb-6">基本資訊</h3>
                  <!-- productNumber -->
                  <div class="w-full lg:w-auto px-3 mb-5">
                    <label class="block uppercase tracking-wide
                                  text-gray-700 text-xs font-bold mb-2"
                          for="productNumber">
                      商品代碼
                    </label>
                    <input class="appearance-none block w-full bg-gray-200
                              text-gray-700 border border-red-500
                              rounded py-3 px-4 mb-3 leading-tight
                              focus:outline-none focus:bg-white"
                            id="productNumber"
                            type="text"
                            placeholder="A0001">
                    <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                  </div>
                  <!-- productName -->
                  <div class="w-full lg:w-auto px-3 mb-5">
                    <label class="block uppercase tracking-wide
                                  text-gray-700 text-xs font-bold mb-2"
                          for="productName">
                      商品名稱
                    </label>
                    <input class="appearance-none block w-full bg-gray-200
                              text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight
                                focus:outline-none focus:bg-white focus:border-gray-500"
                          id="productName"
                          type="text"
                      placeholder="商品名稱">
                  </div>
                  <!-- inventoryQuantity -->
                  <div class="w-full lg:w-auto px-3 mb-5">
                    <label class="block uppercase tracking-wide
                                text-gray-700 text-xs font-bold mb-2"
                          for="inventoryQuantity">
                      庫存數量
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border
                              border-gray-200 rounded py-3 px-4 leading-tight
                                focus:outline-none focus:bg-white focus:border-gray-500"
                          id="inventoryQuantity"
                          type="number"
                          placeholder="1">
                  </div>
                  <!-- inventoryAlert -->
                  <div class="w-full lg:w-auto px-3 mb-5">
                    <label class="block uppercase tracking-wide
                                  text-gray-700 text-xs font-bold mb-2"
                          for="inventoryAlert">
                      庫存警告數
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border
                              border-gray-200 rounded py-3 px-4 leading-tight
                                focus:outline-none focus:bg-white focus:border-gray-500"
                          id="inventoryAlert"
                          type="number"
                          placeholder="10">
                  </div>
                  <!-- supplier -->
                  <div class="w-full lg:w-auto px-3 mb-5">
                    <label class="block uppercase tracking-wide
                                  text-gray-700 text-xs font-bold mb-2"
                          for="supplier">
                      供應商
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border
                              border-gray-200 rounded py-3 px-4 leading-tight
                                focus:outline-none focus:bg-white focus:border-gray-500"
                          id="supplier"
                          type="text"
                          placeholder="供應商">
                  </div>
                  <!-- brand -->
                  <div class="w-full lg:w-auto px-3 mb-5">
                    <label class="block uppercase tracking-wide
                                  text-gray-700 text-xs font-bold mb-2"
                          for="brand">
                      品牌
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border
                              border-gray-200 rounded py-3 px-4 leading-tight
                                focus:outline-none focus:bg-white focus:border-gray-500"
                          id="brand"
                          type="text"
                          placeholder="品牌">
                    <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                  </div>
                  <!-- remarks -->
                  <div class="w-full px-3 mb-5">
                    <label class="block uppercase tracking-wide
                                  text-gray-700 text-xs font-bold mb-2"
                          for="remarks">
                      備註
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border
                              border-gray-200 rounded py-3 px-4 leading-tight
                                focus:outline-none focus:bg-white focus:border-gray-500"
                          id="remarks"
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
                            name="isComposite"
                            class="checkbox checkbox-sm mr-2" />
                      <span class="label-text">是否為組合產品</span>
                    </label>
                    <label class="label cursor-pointer">
                      <input type="checkbox"
                            checked
                            name="isCompositeOnly"
                            class="checkbox checkbox-sm mr-2
                                    lg:ml-3" />
                      <span class="label-text">是否只能讓組合產品使用</span>
                    </label>
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
              </form>
              <!-- insert button group -->
              <div class="modal-action mt-0">
                <button class="btn btn-primary" @click.stop.prevent="ToUpStep(3)">上一步</button>
                <button class="btn btn-primary">新增</button>
                <!-- cancel button -->
                <form method="dialog">
                  <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
              </div>
            </div>
        </div>
      </template>
      <!-- edit modal content -->
      <template #editModalContent>
        <div class="modal-box max-w-5xl">
          <h2 class="font-bold text-lg">編輯庫存</h2>
          <form class="w-full py-4" ref="editForm">
            <div class="flex flex-wrap -mx-3 mb-6 p-5
                      border border-gray-200 rounded-lg shadow-md">
              <h3 class="w-full mb-6">基本資訊</h3>
              <!-- id -->
              <div class="w-full lg:w-auto px-3 mb-5">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="inventoryId">
                  系統id
                </label>
                <input class="appearance-none block w-full bg-gray-200
                          text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight
                            focus:outline-none focus:bg-white focus:border-gray-500"
                        disabled
                        id="inventoryId"
                        type="number">
                <p class="text-red-500 text-xs italic">Please fill out this field.</p>
              </div>
              <!-- productName -->
              <div class="w-full lg:w-auto px-3 mb-5">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="productName">
                  商品名稱
                </label>
                <input class="appearance-none block w-full bg-gray-200
                          text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight
                            focus:outline-none focus:bg-white focus:border-gray-500"
                      id="productName"
                      type="text"
                  placeholder="A0001">
              </div>
              <!-- inventoryQuantity -->
              <div class="w-full lg:w-auto px-3 mb-5">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="inventoryQuantity">
                  庫存數量
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border
                          border-gray-200 rounded py-3 px-4 leading-tight
                            focus:outline-none focus:bg-white focus:border-gray-500"
                      id="inventoryQuantity"
                      type="number"
                      placeholder="1">
              </div>
              <!-- inventoryAlert -->
              <div class="w-full lg:w-auto px-3 mb-5">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="inventoryAlert">
                  庫存警告數
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border
                          border-gray-200 rounded py-3 px-4 leading-tight
                            focus:outline-none focus:bg-white focus:border-gray-500"
                      id="inventoryAlert"
                      type="number"
                      placeholder="10">
              </div>
              <!-- supplier -->
              <div class="w-full lg:w-auto px-3 mb-5">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="supplier">
                  供應商
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border
                          border-gray-200 rounded py-3 px-4 leading-tight
                            focus:outline-none focus:bg-white focus:border-gray-500"
                      id="supplier"
                      type="text"
                      placeholder="供應商">
              </div>
              <!-- brand -->
              <div class="w-full lg:w-auto px-3 mb-5">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="brand">
                  品牌
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border
                          border-gray-200 rounded py-3 px-4 leading-tight
                            focus:outline-none focus:bg-white focus:border-gray-500"
                      id="brand"
                      type="text"
                      placeholder="品牌">
                <p class="text-red-500 text-xs italic">Please fill out this field.</p>
              </div>
              <!-- remarks -->
              <div class="w-full px-3 mb-5">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="remarks">
                  備註
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border
                          border-gray-200 rounded py-3 px-4 leading-tight
                            focus:outline-none focus:bg-white focus:border-gray-500"
                      id="remarks"
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
                         name="isComposite"
                         class="checkbox checkbox-sm mr-2" />
                  <span class="label-text">是否為組合產品</span>
                </label>
                <label class="label cursor-pointer">
                  <input type="checkbox"
                         checked
                         name="isCompositeOnly"
                         class="checkbox checkbox-sm mr-2
                                lg:ml-3" />
                  <span class="label-text">是否只能讓組合產品使用</span>
                </label>
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
          </form>
          <!-- button group -->
          <div class="modal-action mt-0">
            <button class="btn btn-primary">儲存</button>
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
import { type TableContent } from '../../../components/QueryTable.vue';

interface stepObject
{
  id: number,
  name: string,
  isActive: boolean
}

const deleteTitle : string = '庫存商品';
/**
 * 所有Step資料的集合
 * 也是要傳給<Step>的資料
 */
const stepDatas = ref<stepObject[]>(
  [
    {
      id: 1,
      name: '選擇商品類型',
      isActive: true,
    },
    {
      id: 2,
      name: '建立自訂屬性',
      isActive: false,
    },
    {
      id: 3,
      name: '建立商品資訊',
      isActive: false,
    },
  ],
);

const frmInsertStep1 = ref<InstanceType<typeof HTMLFormElement>>();
const frmInsertStep2 = ref<InstanceType<typeof HTMLFormElement>>();
const frmInsertStep3 = ref<InstanceType<typeof HTMLFormElement>>();
const editForm = ref<InstanceType<typeof HTMLFormElement>>();
const tableContent: TableContent = {
  head: ['商品代碼', '商品名稱', '商品庫存數量'],
  body: [
    {
      content: ['A001', '商品1', '1'],
    },
    {
      content: ['A002', '商品2', '2'],
    },
  ],
};

/**
 * 切換到上一步
 * @param id 該步驟的id
 */
const ToUpStep = (id: number) => {
  const currentIndex = stepDatas.value.findIndex((data) => data.id === id);
  if (currentIndex > 0) {
    stepDatas.value[currentIndex].isActive = false;
    stepDatas.value[currentIndex - 1].isActive = true;
  }
};

/**
 * 切換到下一步
 * @param id 該步驟的id
 */
const ToNextStep = (id: number) => {
  const currentIndex = stepDatas.value.findIndex((data) => data.id === id);
  if (currentIndex < stepDatas.value.length - 1) {
    stepDatas.value[currentIndex].isActive = false;
    stepDatas.value[currentIndex + 1].isActive = true;
  }
};

/**
 * 重置新增視窗中的所有資料
 *
 */
const resetInsertDailog = () => {
  frmInsertStep1.value?.reset();
  frmInsertStep2.value?.reset();
  frmInsertStep3.value?.reset();

  stepDatas.value.forEach((step, i) => {
    if (step.id === 1) {
      stepDatas.value[i].isActive = true;
    } else {
      stepDatas.value[i].isActive = false;
    }
  });
};

/**
 * 重置新增視窗中的所有資料
 *
 */
const resetEditDailog = () => {
  editForm.value?.reset();
};

</script>
