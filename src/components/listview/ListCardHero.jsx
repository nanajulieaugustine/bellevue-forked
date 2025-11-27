"use client";

const ListCardHero = () => {
    return <>
        <div>
            <h1>FORESTILLINGER</h1>
            <h1>ARKIV</h1>

            <div>
            <div class="relative inline-block text-left">
  <input type="checkbox" id="dropdown" class="peer hidden" />

 {/* Trigger-knap  */}
  <label for="dropdown"
    class="inline-flex items-center justify-between w-40 px-4 py-2 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-700">
    Vælg menu
    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </label>

  {/* <!-- Dropdown-menu --> */}
  <div
    class="absolute left-0 mt-1 w-40 bg-white border border-gray-200 rounded shadow opacity-0 scale-95 origin-top 
           peer-checked:opacity-100 peer-checked:scale-100 transition-all duration-150">
    <ul class="py-1">
      <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">Option 1</a></li>
      <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">Option 2</a></li>
      <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">Option 3</a></li>
    </ul>
  </div>
</div>
            </div>
        </div>
    
        </>;
};

export default Footer;