<template>
  <div class="overflow-x-auto border-gray-500 lg:container lg:mx-auto">
    <!-- btn insert start -->
    <div class="ml-5 mb-5
                  lg:flex lg:flex-row lg:justify-end">
      <button class="btn btn-outline" onclick="my_modal_1.showModal()">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
          <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
        </svg>
      </button>
    </div>
    <!-- btn insert end -->
    <!-- table start -->
    <table class="table table-sm table-zebra border-t-2 border-b-2 border-gray-300">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Job</th>
          <th>company</th>
          <th>location</th>
          <th>Last Login</th>
          <th>Favorite Color</th>
          <th>啟用/停用</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr class="hover">
          <th>1</th>
          <td>Cy Ganderton</td>
          <td>Quality Control Specialist</td>
          <td>Littel, Schaden and Vandervort</td>
          <td>Canada</td>
          <td>12/16/2020</td>
          <td>Blue</td>
          <td>
            <input type="checkbox" class="toggle toggle-success" checked />
          </td>
          <td class="flex">
            <svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960"
              width="24">
              <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11
                        26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5
                        30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57
                        57-29-28Z" />
            </svg>
            <svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960"
              width="24">
              <path d="M280-120q-33
                        0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0
                        33-23.5
                        56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160
                        0h80v-360h-80v360ZM280-720v520-520Z" />
            </svg>
          </td>
        </tr>
        <tr class="hover">
          <th>2</th>
          <td>Hart Hagerty</td>
          <td>Desktop Support Technician</td>
          <td>Zemlak, Daniel and Leannon</td>
          <td>United States</td>
          <td>12/5/2020</td>
          <td>Purple</td>
          <td></td>
          <td></td>
        </tr>
        <tr class="hover">
          <th>3</th>
          <td>Brice Swyre</td>
          <td>Tax Accountant</td>
          <td>Carroll Group</td>
          <td>China</td>
          <td>8/15/2020</td>
          <td>Red</td>
          <td></td>
          <td></td>
        </tr>
        <tr class="hover">
          <th>4</th>
          <td>Marjy Ferencz</td>
          <td>Office Assistant I</td>
          <td>Rowe-Schoen</td>
          <td>Russia</td>
          <td>3/25/2021</td>
          <td>Crimson</td>
          <td></td>
          <td></td>
        </tr>
        <tr class="hover">
          <th>5</th>
          <td>Yancy Tear</td>
          <td>Community Outreach Specialist</td>
          <td>Wyman-Ledner</td>
          <td>Brazil</td>
          <td>5/22/2020</td>
          <td>Indigo</td>
          <td></td>
          <td></td>
        </tr>
        <tr class="hover">
          <th>6</th>
          <td>Irma Vasilik</td>
          <td>Editor</td>
          <td>Wiza, Bins and Emard</td>
          <td>Venezuela</td>
          <td>12/8/2020</td>
          <td>Purple</td>
          <td></td>
          <td></td>
        </tr>
        <tr class="hover">
          <th>7</th>
          <td>Meghann Durtnal</td>
          <td>Staff Accountant IV</td>
          <td>Schuster-Schimmel</td>
          <td>Philippines</td>
          <td>2/17/2021</td>
          <td>Yellow</td>
          <td></td>
          <td></td>
        </tr>
        <tr class="hover">
          <th>8</th>
          <td>Sammy Seston</td>
          <td>Accountant I</td>
          <td>O'Hara, Welch and Keebler</td>
          <td>Indonesia</td>
          <td>5/23/2020</td>
          <td>Crimson</td>
          <td></td>
          <td></td>
        </tr>
        <tr class="hover">
          <th>9</th>
          <td>Lesya Tinham</td>
          <td>Safety Technician IV</td>
          <td>Turner-Kuhlman</td>
          <td>Philippines</td>
          <td>2/21/2021</td>
          <td>Maroon</td>
          <td></td>
          <td></td>
        </tr>
        <tr class="hover">
          <th>10</th>
          <td>Zaneta Tewkesbury</td>
          <td>VP Marketing</td>
          <td>Sauer LLC</td>
          <td>Chad</td>
          <td>6/23/2020</td>
          <td>Green</td>
          <td></td>
          <td></td>
        </tr>
        <tr class="hover">
          <th>11</th>
          <td>Andy Tipple</td>
          <td>Librarian</td>
          <td>Hilpert Group</td>
          <td>Poland</td>
          <td>7/9/2020</td>
          <td>Indigo</td>
          <td></td>
          <td></td>
        </tr>
        <tr class="hover">
          <th>12</th>
          <td>Sophi Biles</td>
          <td>Recruiting Manager</td>
          <td>Gutmann Inc</td>
          <td>Indonesia</td>
          <td>2/12/2021</td>
          <td>Maroon</td>
          <td></td>
          <td></td>
        </tr>
        <tr class="hover">
          <th>13</th>
          <td>Florida Garces</td>
          <td>Web Developer IV</td>
          <td>Gaylord, Pacocha and Baumbach</td>
          <td>Poland</td>
          <td>5/31/2020</td>
          <td>Purple</td>
          <td></td>
          <td></td>
        </tr>
        <tr class="hover">
          <th>14</th>
          <td>Maribeth Popping</td>
          <td>Analyst Programmer</td>
          <td>Deckow-Pouros</td>
          <td>Portugal</td>
          <td>4/27/2021</td>
          <td>Aquamarine</td>
          <td></td>
          <td></td>
        </tr>
        <tr class="hover">
          <th>15</th>
          <td>Moritz Dryburgh</td>
          <td>Dental Hygienist</td>
          <td>Schiller, Cole and Hackett</td>
          <td>Sri Lanka</td>
          <td>8/8/2020</td>
          <td>Crimson</td>
          <td></td>
          <td></td>
        </tr>
        <tr class="hover">
          <th>16</th>
          <td>Reid Semiras</td>
          <td>Teacher</td>
          <td>Sporer, Sipes and Rogahn</td>
          <td>Poland</td>
          <td>7/30/2020</td>
          <td>Green</td>
          <td></td>
          <td></td>
        </tr>
        <tr class="hover">
          <th>17</th>
          <td>Alec Lethby</td>
          <td>Teacher</td>
          <td>Reichel, Glover and Hamill</td>
          <td>China</td>
          <td>2/28/2021</td>
          <td>Khaki</td>
          <td></td>
          <td></td>
        </tr>
        <tr class="hover">
          <th>18</th>
          <td>Aland Wilber</td>
          <td>Quality Control Specialist</td>
          <td>Kshlerin, Rogahn and Swaniawski</td>
          <td>Czech Republic</td>
          <td>9/29/2020</td>
          <td>Purple</td>
          <td></td>
          <td></td>
        </tr>
        <tr class="hover">
          <th>19</th>
          <td>Teddie Duerden</td>
          <td>Staff Accountant III</td>
          <td>Pouros, Ullrich and Windler</td>
          <td>France</td>
          <td>10/27/2020</td>
          <td>Aquamarine</td>
          <td></td>
          <td></td>
        </tr>
        <tr class="hover">
          <th>20</th>
          <td>Lorelei Blackstone</td>
          <td>Data Coordiator</td>
          <td>Witting, Kutch and Greenfelder</td>
          <td>Kazakhstan</td>
          <td>6/3/2020</td>
          <td>Red</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <!-- table end -->
  </div>
</template>
