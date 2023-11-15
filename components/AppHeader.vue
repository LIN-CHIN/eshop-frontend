<template>
  <div class="navbar bg-base-200">
    <!-- navbar left start-->
    <div class="navbar-start lg:w-1/2 w-1/2">
      <!-- mobile navbar items start-->
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </label>
        <ul tabindex="0" class="menu menu-sm
      dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>所有商品</a></li>
          <li>
            <a>分類</a>
            <ul class="p-2">
              <li><a>上衣類</a></li>
              <li><a>褲子類</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- mobile navbar items end -->
      <a class="btn btn-ghost text-xl">daisy</a>
    </div>
    <!-- navbar left start end -->
    <!-- navbar center start-->
    <div class="navbar-center hidden lg:flex lg:w-1/3 w-auto justify-center">
      <div class="form-control">
        <input type="text" placeholder="Search" class="input input-bordered w-72 md:w-50 " />
      </div>
    </div>
    <!-- navbar center end -->
    <!-- navbar right start -->
    <div class="navbar-end flex-none lg:w-1/3 w-1/2 justify-end">
      <div class="hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li><a>所有商品</a></li>
          <li tabindex="0">
            <details>
              <summary>分類</summary>
              <ul class="p-2">
                <li><a>上衣類</a></li>
                <li><a>褲子類</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <!-- cart icon start-->
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <div class="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184
                  1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span class="badge badge-sm indicator-item">8</span>
          </div>
        </label>
        <div tabindex="0" class="mt-3 z-[1] card card-compact
        dropdown-content w-52 bg-base-100 shadow">
          <div class="card-body">
            <span class="font-bold text-lg">8 Items</span>
            <span class="text-info">Subtotal: $999</span>
            <div class="card-actions">
              <button class="btn btn-primary btn-block">View cart</button>
            </div>
          </div>
        </div>
      </div>
      <!-- cart icon end-->
      <!-- member icon start-->
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <div class="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
              <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113
              47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31
              126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5
              43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56
              0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33
              0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0
              33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
            </svg>
            <!-- <span class="badge badge-sm indicator-item">8</span> -->
          </div>
        </label>
        <div tabindex="0" class="mt-3 z-[1] card card-compact
        dropdown-content w-52 bg-base-100 shadow">
          <div class="card-body">
            <span class="font-bold text-lg">8 Items</span>
            <span class="text-info">Subtotal: $999</span>
            <div class="card-actions">
              <button class="btn btn-primary btn-block">View cart</button>
            </div>
          </div>
        </div>
      </div>
      <!-- member icon end-->
    </div>
    <!-- navbar right end -->
  </div>
</template>

<script setup lang="ts">
</script>
