"use client";

const ListCardDropDown = () => {
    return <>

            <div>
                <div class="relative inline-block text-left p-3">
                <input type="checkbox" id="dropdown" class="peer hidden" />

                {/* ---------DATO ------ */}
                    {/* Trigger-knap  */}
                    <label for="dropdown"
                        class="inline-flex items-center justify-center w-30 px-2 py-2 rounded-2xl cursor-pointer text-blue-400 border-2 border-blue-400 hover:bg-amber-200">
                        Dato
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

                <div class="relative inline-block text-left p-3">
                <input type="checkbox" id="dropdown" class="peer hidden" />

                {/* ---------KATEGORI ------ */}
                    {/* Trigger-knap  */}
                    <label for="dropdown"
                        class="inline-flex items-center justify-center w-30 px-2 py-2 rounded-2xl cursor-pointer text-blue-400 border-2 border-blue-400 hover:bg-amber-200">
                        Kategori
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

                <div class="relative inline-block text-left p-3">
                <input type="checkbox" id="dropdown" class="peer hidden" />

                {/* ---------BØRN ------ */}
                    {/* Trigger-knap  */}
                    <label for="dropdown"
                        class="inline-flex items-center justify-center w-30 px-2 py-2 rounded-2xl cursor-pointer text-blue-400 border-2 border-blue-400 hover:bg-amber-200">
                        Børn
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

            
    
        </>;
};

export default ListCardDropDown;