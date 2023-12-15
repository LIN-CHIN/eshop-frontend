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
      @insert-click-event="ResetInsertDailog"
      @edit-click-event="ResetEditDailog"
      :delete-title=deleteTitle
      :table-content="tableContent">
      <!-- insert modal content -->
      <template #insertModalContent>
        <div class="modal-box max-w-5xl">
          <h2 class="font-bold text-lg">新增商品庫存</h2>
          <br>
          <Step :stepDatas = stepDatas></Step>
          <!-- step1 select product type start -->
          <div v-show="stepDatas.find(f => f.order === 1)?.isActive">
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
                            id="productType"
                            ref="selectProductType">
                      <option value="" selected>請選擇</option>
                      <option value="fixed">固定商品</option>
                      <option value="variant">可變商品</option>
                      <option value="software">軟體</option>
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
          <!-- step2 select customAttributes start -->
          <div v-show="stepDatas.find(f => f.order === 2)?.isActive">
            <form class="w-full py-4" ref="frmInsertStep2">
                <div class="flex flex-wrap -mx-3 mb-2 p-5
                          border border-gray-200 rounded-lg shadow-md">
                <h3 class="w-full mb-6">可變商品資訊</h3>
                <!-- custom attribute key -->
                <div class="w-full lg:w-auto px-3 mb-5">
                  <label class="block uppercase tracking-wide
                                text-gray-700 text-xs font-bold mb-2"
                      for="attributeNumber">
                  屬性代碼
                  </label>
                  <div class="relative">
                    <select class="block appearance-none w-full bg-gray-200 border border-gray-200
                              text-gray-700 py-3 px-4 pr-8 rounded leading-tight
                              focus:outline-none focus:bg-white focus:border-gray-500"
                            id="attributeNumber"
                            ref="selectAttributeNumber">
                      <option v-for="(opt, index ) in attributeNumberOptions" :key="index"
                            :value="opt.key"
                            :selected="opt.selected">
                        {{ opt.value }}
                      </option>
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
                        for="attributeValue">
                    屬性值
                  </label>
                  <div class="relative">
                    <select class="block appearance-none w-full bg-gray-200 border border-gray-200
                              text-gray-700 py-3 px-4 pr-8 rounded leading-tight
                              focus:outline-none focus:bg-white focus:border-gray-500"
                            id="attributeValue"
                            ref="selectAttributeValue">
                      <option v-for="(opt, index) in attributeValueOptions" :key="index"
                              :value="opt.key"
                              :selected="opt.selected">
                        {{ opt.value }}
                      </option>
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
                  <button class="btn btn-primary" @click.stop.prevent="AddcustomVariantAttribute">
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
                        <tr class="hover" v-for="(row, index) in attributes" :key="index">
                          <th>{{ row.index }}</th>
                          <td hidden>{{ row.key }}</td>
                          <td>{{ row.keyName }}</td>
                          <td hidden>{{ row.value }}</td>
                          <td>{{ row.valueName }}</td>
                          <td class="flex">
                            <button class="btn btn-xs pl-0 pr-0 mr-1
                                    bg-transparent border-0 shadow-transparent outline-none
                                    hover:bg-transparent hover:outline-2 hover:outline-gray-300"
                                    @click.stop.prevent="DeleteAttribute(row.index)">
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
          <!-- step3 check customAttributes -->
          <div v-show="stepDatas.find(f => f.order === 3)?.isActive">
            <form class="w-full py-4" ref="frmInsertStep2">
              <div v-for="(attribute, index) in combinedResults" :key="index">
                <div class="flex flex-wrap -mx-3 mb-2 p-5 relative
                          border border-gray-200 rounded-lg shadow-md">
                <h3 class="w-full mb-6">組合{{ index + 1 }}</h3>
                <!-- table start -->
                <div class="w-full px-3 mb-5">
                    <table class="table table-sm table-zebra border-t-2
                                  border-b-2 border-gray-300">
                      <thead>
                        <tr>
                          <th>屬性代碼</th>
                          <th>屬性值</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="hover" v-for="(data, index) in attribute" :key="index">
                          <th >{{ data.value.index }}</th>
                          <td >{{ data.value.key }}</td>
                          <td>{{ data.value.keyName }}</td>
                          <td hidden>{{ data.value.value }}</td>
                          <td>{{ data.value.valueName }}</td>
                        </tr>
                      </tbody>
                    </table>
                    <button class="btn btn-xs absolute top-[-5px] right-[-10px] h-auto
                                    bg-white border-0 shadow-transparent outline-none
                                    hover:bg-white hover:outline-1 hover:outline-gray-300"
                                  @click.stop.prevent="DeleteCompositeAttributes(index)">
                      <svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960"
                        width="24">
                        <path d="M280-120q-33
                          0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0
                          33-23.5
                          56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160
                          0h80v-360h-80v360ZM280-720v520-520Z" />
                      </svg>
                    </button>
                </div>
                <!-- table end -->
                </div>
              </div>
            </form>
            <!-- button group -->
            <div class="modal-action mt-0">
              <button class="btn btn-primary" @click.stop.prevent="ToUpStep(3)">上一步</button>
              <button class="btn btn-primary" @click.stop.prevent="ToNextStep(3)">下一步</button>
              <!-- cancel button -->
              <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
            </div>
          </div>
          <!-- step4 start -->
          <div v-show="stepDatas.find(f => f.order === 4)?.isActive">
            <form class="w-full py-4" ref="frmInsertStep3">
              <div v-if="combinedResults.length > 0 ">
                <div class="flex flex-wrap -mx-3 mb-6 p-5
                        border border-gray-200 rounded-lg shadow-md"
                   v-for="(result, index) in combinedResults" :key="index">
                <h3 class="w-full mb-6">
                  基本資訊 ( {{ result.map(attr => attr.value.valueName).join("、") }} )
                </h3>
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
              </div>
              <div v-else>
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
              </div>
            </form>
            <!-- insert button group -->
            <div class="modal-action mt-0">
              <button class="btn btn-primary" @click.stop.prevent="ToUpStep(4)">上一步</button>
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
import { type StepDatas } from '../../../components/Step.vue';
import { type DropDownList } from '../../../ts/Interfaces/ddr';

/** 變種屬性的json */
interface VariantAttributeJson {
  index: number,
  key: string,
  keyName: string, // 顯示用的名稱
  value: string
  valueName:string, // 顯示用的名稱
}

/** 群組屬性清單 */
interface GroupAttributes{
  key: string,
  value: VariantAttributeJson[]
}

/** 排列組合的結果 */
interface CombineResult{
  key: string,
  value: VariantAttributeJson,
}

/** 表單元件區 */
const frmInsertStep1 = ref<InstanceType<typeof HTMLFormElement>>();
const frmInsertStep2 = ref<InstanceType<typeof HTMLFormElement>>();
const frmInsertStep3 = ref<InstanceType<typeof HTMLFormElement>>();
const editForm = ref<InstanceType<typeof HTMLFormElement>>();

/** 下拉選單元件區 */
const selectProductType = ref<InstanceType<typeof HTMLSelectElement>>();
const selectAttributeNumber = ref<InstanceType<typeof HTMLSelectElement>>();
const selectAttributeValue = ref<InstanceType<typeof HTMLSelectElement>>();

/** Datas */
const deleteTitle : string = '庫存商品';
let attributeIndex: number = 1;
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

const attributeNumberOptions: DropDownList[] = [
  {
    key: '',
    value: '請選擇',
    selected: true,
  },
  {
    key: 'color',
    value: '顏色',
    selected: false,
  },
  {
    key: 'size',
    value: '尺寸',
    selected: false,
  },
];

const attributeValueOptions: DropDownList[] = [
  {
    key: '',
    value: '請選擇',
    selected: true,
  },
  {
    key: 'red',
    value: '紅色',
    selected: false,
  },
  {
    key: 'bule',
    value: '藍色',
    selected: false,
  },
  {
    key: 's',
    value: 's',
    selected: false,
  },
  {
    key: 'm',
    value: 'm',
    selected: false,
  },
];
/** 所有Step資料的集合，也是要傳給<Step>的資料 */
const stepDatas = ref<StepDatas[]>(
  [
    {
      order: 1,
      name: '選擇商品類型',
      isActive: true,
    },
    {
      order: 2,
      name: '建立變種屬性',
      isActive: false,
    },
    {
      order: 3,
      name: '確認變種屬性',
      isActive: false,
    },
    {
      order: 4,
      name: '建立商品資訊',
      isActive: false,
    },
  ],
);

/** 屬性清單 */
const attributes = ref<VariantAttributeJson[]>([]);

/** 排列組合後的結果 */
const combinedResults = ref<CombineResult[][]>([]);

/**
 * 將屬性做排列組合
 * @param groupAttribtes
 *  將屬性按照key分類好的屬性清單 ex:
 * [
 *  {
 *    "key": "color",
 *    "value": [
 *      {
 *        "key": "red",
 *        "value": "紅色",
 *      }
* *     {
 *        "key": "blue",
 *        "value": "藍色",
 *      }
 *    ]
 *  },
 *  {
 *    "key": "size",
 *    "size":  [
 *      ....類推
 *    ]
 *  }
 * ]
 * @param current 目前已排好的組合，將每一次組合好的內容推進結果
 * @param depth 陣列深度，比如上述有兩個分類 color 和 size 深度就是2
 */
function CombineAttribute(
  groupAttribtes: GroupAttributes[],
  current: CombineResult[] = [],
  depth: number = 0,
) : CombineResult[][] {
  if (depth === groupAttribtes.length) {
    return [current];
  }

  const result: CombineResult[][] = [];

  groupAttribtes[depth].value.forEach((groupAttribte) => {
    const next: CombineResult[] = current.slice();
    const temp: CombineResult = {
      key: groupAttribtes[depth].key,
      value: {
        index: groupAttribte.index,
        key: groupAttribte.key,
        keyName: groupAttribte.keyName,
        value: groupAttribte.value,
        valueName: groupAttribte.valueName,
      },
    };
    next.push(temp);
    result.push(...CombineAttribute(groupAttribtes, next, depth + 1));
  });

  return result;
}

/** 設定屬性的排列組合 */
const SetCombinations = () => {
  const keys: string[] = [];
  const groupAttributes: GroupAttributes[] = [];

  // 取得所有屬性的key
  attributes.value.forEach((obj) => {
    if (!keys.includes(obj.key)) {
      keys.push(obj.key);
    }
  });

  // 將所有key做分組
  keys.forEach((element) => {
    const filter = attributes.value
      .filter((attribute) => attribute.key === element);

    groupAttributes.push({ key: element, value: filter });
  });

  combinedResults.value = CombineAttribute(groupAttributes);
};

/**
 * 切換到上一步
 * @param order 目前步驟的order
 */
const ToUpStep = (order: number) => {
  // 第一步不能使用
  if (order === 1) {
    return;
  }

  const currentIndex = stepDatas.value.findIndex((data) => data.order === order);

  // 如果是最後一步 && 類型不等於可變商品
  if (order === 4 && selectProductType.value?.value !== 'variant') {
    stepDatas.value[currentIndex].isActive = false;
    stepDatas.value[currentIndex - 3].isActive = true;
  } else {
    stepDatas.value[currentIndex].isActive = false;
    stepDatas.value[currentIndex - 1].isActive = true;
  }
};

/**
 * 切換到下一步
 * @param order 目前步驟的order
 */
const ToNextStep = (order: number) => {
  const currentIndex : number = stepDatas.value.findIndex((data) => data.order === order);

  // 如果沒有選擇類型就不可以使用下一步
  if (selectProductType.value?.value === '') {
    return;
  }

  // 如果是第一頁，且商品類型不等於可變商品，就直接跳過自訂屬性頁籤
  if (order === 1 && selectProductType.value?.value !== 'variant') {
    stepDatas.value[currentIndex].isActive = false;
    stepDatas.value[currentIndex + 3].isActive = true;
  } else {
    stepDatas.value[currentIndex].isActive = false;
    stepDatas.value[currentIndex + 1].isActive = true;
  }

  if (order === 2) {
    // 執行排列組合的功能
    SetCombinations();
  }
};

/** 重置新增視窗中的所有資料 */
const ResetInsertDailog = () => {
  frmInsertStep1.value?.reset();
  frmInsertStep2.value?.reset();
  frmInsertStep3.value?.reset();
  attributes.value = [];

  // 清空下拉選單
  if (selectAttributeNumber.value) {
    selectAttributeNumber.value.value = '';
  }

  if (selectAttributeValue.value) {
    selectAttributeValue.value.value = '';
  }

  // 重置step狀態
  stepDatas.value.forEach((step, i) => {
    if (step.order === 1) {
      stepDatas.value[i].isActive = true;
    } else {
      stepDatas.value[i].isActive = false;
    }
  });
};

/** 重置新增視窗中的所有資料 */
const ResetEditDailog = () => {
  editForm.value?.reset();
};

/** 加入自訂變種屬性 */
const AddcustomVariantAttribute = () => {
  // 只要value為 null 或 undefined 就不做事
  if (!selectAttributeNumber.value || !selectAttributeValue.value) {
    return;
  }

  // 只要選項的文字 null 或 undefined就不做事
  if (!selectAttributeNumber.value.selectedOptions[0].textContent
      || !selectAttributeValue.value.selectedOptions[0].textContent) {
    return;
  }

  if (selectAttributeNumber.value.value === '') {
    alert('屬性代碼不可為空');
    return;
  }

  if (selectAttributeValue.value.value === '') {
    alert('屬性值不可為空');
    return;
  }

  const key: string = selectAttributeNumber.value.value;
  const attrValue: string = selectAttributeValue.value.selectedOptions[0].textContent;

  // 檢查是否有存在相同屬性 + 相同值
  attributes.value?.forEach((element : VariantAttributeJson) => {
    if (element.key === key && element.value === attrValue) {
      // TODO: 不要使用alert
      alert('已存在相同的屬性');
    }
  });

  const attribute : VariantAttributeJson = {
    index: attributeIndex,
    key: selectAttributeNumber.value.value,
    keyName: selectAttributeNumber.value.selectedOptions[0].textContent,
    value: selectAttributeValue.value.value,
    valueName: selectAttributeValue.value.selectedOptions[0].textContent,
  };

  // 加入attributes 陣列中
  attributes.value?.push(attribute);
  attributeIndex += 1;

  // 清空下拉選單
  selectAttributeNumber.value.value = '';
  selectAttributeValue.value.value = '';
};

/**
 * 刪除屬性
 * @param index 要刪除的索引位置
 */
const DeleteAttribute = (index: number) => {
  const target: number = attributes.value.findIndex((attr) => attr.index === index);
  if (target !== -1) {
    attributes.value.splice(target, 1);
  }
};

/**
 * 刪除排列組合後的屬性
 * @param index
 */
const DeleteCompositeAttributes = (index : number) => {
  // 先複製一份原始陣列
  const newArray : CombineResult[][] = [...combinedResults.value];

  // 刪除指定索引的元素
  newArray.splice(index, 1);

  // 將新陣列賦值回原始的 combinedResults.value
  combinedResults.value = newArray;
};

</script>
