document.getElementById('nav_bar').innerHTML=`
            <div class="lg:border-0 border-b-2 border-[#179800] ">
                <header class=" lg:mb-10 mr-5">
                    <div class="navbar bg-base-100  flex justify-between ">
                        <div class="navbar-start ">
                            <div class="animate-pulse "><img src="c2-assets/logo-header.png" alt=""></a></div>
                        </div>
                        <div class="lg:hidden block"><i class="fa-solid fa-bars text-3xl"></i></div>
                        <div class="navbar-end hidden lg:flex">
                            <ul class="menu menu-horizontal px-1 relative right-85">
                                <li><a class="text-xl font-medium"><span class="relative flex size-3">
                                            <span
                                                class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                                            <span class="relative inline-flex size-3 rounded-full bg-sky-500"></span>
                                        </span> Product</a></li>
                                <li><a class="text-xl font-medium"><span class="relative flex size-3">
                                            <span
                                                class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                                            <span class="relative inline-flex size-3 rounded-full bg-sky-500"></span>
                                        </span> Services</a></li>
                                <li><a class="text-xl font-medium" href=""><span class="relative flex size-3">
                                            <span
                                                class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                                            <span class="relative inline-flex size-3 rounded-full bg-sky-500"></span>
                                        </span> Contact us</a></li>
                            </ul>
                            <ul class="list-none flex gap-2 mr-10  menu menu-horizontal px-1">
                                <li><i class="fa-solid fa-magnifying-glass text-xl"></i></li>
                                <li><a href=""><i class="fa-solid fa-cart-shopping text-xl"></i></a></li>
                
                                <a class=" cursor-pointer border-2 border-[#179800]  px-6 py-2 rounded-md">Login</a>
                                <a class="cursor-pointer bg-[#179800] text-white px-5 py-2 rounded-md">Register</a>
                            </ul>
                        </div>
                    </div>
                     </header>
            </div>
`
// services code part Here write 
document.getElementById('services').innerHTML=`
            <h1 class="text-[#179800] lg:text-4xl text-3xl font-semibold lg:mx-0 mx-5">Services</h1>
            <div class="lg:mt-[48px] mt-[25px] lg:mx-0 mx-5 flex lg:flex-row flex-col lg:gap-[24px] gap-0">
                <div class="p-[32px] bg-[#EFEBE3] rounded-xl grid justify-items-center">
                    <div class="bg-white p-5 rounded-full"><img src="c2-assets/service.png" alt=""></div>
                    <h2 class="text-2xl font-semibold py-2">24/7 Services</h2>
                    <p class="text-[#111111] text-center">In commerce and industry, 24/7 or 24-7 service (usually
                        pronounced "twenty-four seven") is service that is available at
                        any time and usually, every day.An alternate orthography for the numerical part includes 24×7.
                    </p>
                </div>
                <div class="p-[32px] bg-[#EFEBE3] rounded-xl grid justify-items-center lg:my-0 my-5">
                    <div class="bg-white p-5 rounded-full"><img src="c2-assets/delivery.png" alt=""></div>
                    <h2 class="text-2xl font-semibold py-2">Fast Delivery</h2>
                    <p class="text-[#111111] text-center">The page "Fast delivary" does not exist. You can create a
                        draft and submit it for review or request that a redirect be
                        created, but consider checking the search results below to see whether the topic is already
                        covered.
                    </p>
                </div>
                <div class="p-[32px] bg-[#EFEBE3] rounded-xl grid justify-items-center">
                    <div class="bg-white p-5 rounded-full"><img src="c2-assets/healthy.png" alt=""></div>
                    <h2 class="text-2xl font-semibold py-2">Healthy Products</h2>
                    <p class="text-[#111111] text-center">A healthy diet is a diet that maintains or improves overall
                        health. A healthy diet provides the body with essential
                        nutrition: fluid, macronutrients such as protein, micronutrients such as vitamins, and adequate
                        fibre and food energy
                    </p>
                </div>
            </div>
`

// Popular Product Part Here 
document.getElementById('popular_product').innerHTML=`
            <div class="container mx-auto">
                <h1 class="lg:text-4xl text-3xl font-bold text-[#179800] mb-[45px]  text-center">Popular Products</h1>
                <!-- card section -->
                <div class="flex lg:gap-[24px] gap-0 lg:flex-row flex-col justify-center justify-items-center ">
                    <!-- big card -->
                    <div class=" grid justify-center ">
                        <div class="rounded-lg  border-[#585141] lg:w-[424px] w-[400px] h-[402px]"
                            style="background: linear-gradient(180.00deg, rgb(67, 241, 75),rgb(222, 245, 229) 100%);">
                            <div class="p-6 relative -bottom-9">
                                <h3 class="text-white font-bold text-2xl">30% off</h3>
                                <p class="py-2">Discover a worlds of treats,toys,and essential hand picked for.</p>
                                <button class="px-7 py-3 rounded-md bg-white text-black font-semibold">Buy Now</button>
                            </div>
                            <div class="flex justify-end">
                                <img class="relative left-1 -top-12" src="c2-assets/vegetable-offer.png" alt="">
                            </div>
                        </div>
                    </div>
                    <!-- small card  -->
                    <div class="grid lg:grid-cols-3 grid-cols-2 lg:gap-5 gap-2 lg:h-[400px] w-auto lg:mt-0 mt-10">
                        <!-- small card details -->
                        <div class="bg-white flex py-[15px] px-[15px] rounded-lg">
                            <div class="bg-[#EFEBE3] p-2 rounded-xl"><img src="c2-assets/onion.jpeg" alt=""></div>
                            <div class="mx-5">
                                <h4 class="font-semibold"><i class="fa-solid fa-star text-[#FFC107]"></i> 4.0</h4>
                                <h4 class="font-semibold">Onion 1 KG</h4>
                                <h4 class="font-semibold">$39.99</h4>
                            </div>
                        </div>
                        <!-- small card details -->
                        <div class="bg-white flex py-[15px] px-[15px] rounded-lg">
                            <div class="bg-[#EFEBE3] p-2 rounded-xl"><img src="c2-assets/potato.jpeg" alt=""></div>
                            <div class="mx-5">
                                <h4 class="font-semibold"><i class="fa-solid fa-star text-[#FFC107]"></i> 4.5</h4>
                                <h4 class="font-semibold">Potato 1 KG</h4>
                                <h4 class="font-semibold">$39.99</h4>
                            </div>
                        </div>
                        <!-- small card details -->
                        <div class="bg-white flex py-[15px] px-[15px] rounded-lg">
                            <div class="bg-[#EFEBE3] p-2 rounded-xl"><img src="c2-assets/tomato.jpeg" alt=""></div>
                            <div class="mx-5">
                                <h4 class="font-semibold"><i class="fa-solid fa-star text-[#FFC107]"></i> 4.5</h4>
                                <h4 class="font-semibold">Tomato 500 g</h4>
                                <h4 class="font-semibold">$39.99</h4>
                            </div>
                        </div>
                        <!-- small card details -->
                        <div class="bg-white flex py-[15px] px-[15px] rounded-lg">
                            <div class="bg-[#EFEBE3] p-2 rounded-xl"><img src="c2-assets/onion.jpeg" alt=""></div>
                            <div class="mx-5">
                                <h4 class="font-semibold"><i class="fa-solid fa-star text-[#FFC107]"></i> 4.0</h4>
                                <h4 class="font-semibold">Onion 1 g</h4>
                                <h4 class="font-semibold">$39.99</h4>
                            </div>

                        </div>
                        <div class="bg-white flex py-[15px] px-[15px] rounded-lg">
                            <div class="bg-[#EFEBE3] p-2 rounded-xl"><img src="c2-assets/bean.jpeg" alt=""></div>
                            <div class="mx-5">
                                <h4 class="font-semibold"><i class="fa-solid fa-star text-[#FFC107]"></i> 4.5</h4>
                                <h4 class="font-semibold">Bean 750 g</h4>
                                <h4 class="font-semibold">$39.99</h4>
                            </div>

                        </div>
                        <div class="bg-white flex py-[15px] px-[15px] rounded-lg">
                            <div class="bg-[#EFEBE3] p-2 rounded-xl"><img src="c2-assets/potato.jpeg" alt=""></div>
                            <div class="mx-5">
                                <h4 class="font-semibold"><i class="fa-solid fa-star text-[#FFC107]"></i> 5.0</h4>
                                <h4 class="font-semibold">Potato 500 g</h4>
                                <h4 class="font-semibold">$39.99</h4>
                            </div>

                        </div>
                        <div class="bg-white flex py-[15px] px-[15px] rounded-lg">
                            <div class="bg-[#EFEBE3] p-2 rounded-xl"><img src="c2-assets/tomato.jpeg" alt=""></div>
                            <div class="mx-5">
                                <h4 class="font-semibold"><i class="fa-solid fa-star text-[#FFC107]"></i> 4.5</h4>
                                <h4 class="font-semibold">Tomato 500 g</h4>
                                <h4 class="font-semibold">$39.99</h4>
                            </div>

                        </div>
                        <div class="bg-white flex py-[15px] px-[15px] rounded-lg">
                            <div class="bg-[#EFEBE3] p-2 rounded-xl"><img src="c2-assets/onion.jpeg" alt=""></div>
                            <div class="mx-5">
                                <h4 class="font-semibold"><i class="fa-solid fa-star text-[#FFC107]"></i> 5.0</h4>
                                <h4 class="font-semibold">Onion 750 g</h4>
                                <h4 class="font-semibold">$39.99</h4>
                            </div>

                        </div>
                        <div class="bg-white flex py-[15px] px-[15px] rounded-lg">
                            <div class="bg-[#EFEBE3] p-2 rounded-xl"><img src="c2-assets/bean.jpeg" alt=""></div>
                            <div class="mx-5">
                                <h4 class="font-semibold"><i class="fa-solid fa-star text-[#FFC107]"></i> 4.5</h4>
                                <h4 class="font-semibold">Bean 1 KG</h4>
                                <h4 class="font-semibold">$39.99</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
`

// Arrival Offerrs
document.getElementById('arrival_offers').innerHTML=`
            <h1 class="text-[#179800] font-bold lg:text-4xl text-2xl mb-[48px] lg:ml-0 ml-5">Arrival & Offers</h1>
            <!-- card section -->
            <div class=" flex md:flex-row flex-col md:mb-[140px] -mb-20 gap-10 lg:p-0 p-5">
                <!-- card1 -->
                <div class="bg-[#115414] rounded-xl flex flex-between pt-[33px] lg:w-[780px] lg:gap-[50px] w-auto">
                    <div class="ml-[30px] grid align-middle">
                        <img class="lg:relative lg:top-5 lg:right-3 lg:my-0 my-8" src="c2-assets/dawat-logo.png" alt="">
                        <button
                            class="bg-[#63B76D] poppins  rounded-xl text-white poppins lg:text-2xl text-xl h-[55px] font-normal lg:px-6 px-1 lg:mb-0 mb-4">Cook
                            Exotic Dishes</button>
                        <p class="text-white text-3xl lg:-mt-6 lg:mb-0 mb-2 poppins">UP to <span class="font-bold">20%
                                OFF</span></p>
                    </div>
                    <div><img src="c2-assets/dawat-mock-up.png" alt=""></div>
                </div>
                <!-- card 2 -->
                <div class="bg-[#102861] rounded-xl flex flex-between pt-[33px] gap-[60px] lg:w-[580px] w-auto">
                    <div class="ml-[30px] grid align-middle">
                        <img class="relative top-5 right-3" src="c2-assets/india-gate-logo.png" alt="">
                        <button
                            class="bg-[#2A4D97] poppins  rounded-xl text-white poppins lg:text-2xl text-xl  h-[55px] font-normal px-5 lg:my-0 my-5">World’s
                            No.1 Rice</button>
                        <p class="text-white  text-3xl lg:-mt-6 lg:mb-0 mb-2 poppins">UP to <span class="font-bold">40%
                                OFF</span></p>
                    </div>
                    <div class="pr-10"><img src="c2-assets/india-gate-mock-up.png" alt=""></div>
                </div>
            </div>
            </div>
`
// connected people with us 
document.getElementById('connected_people').innerHTML=`
            <h1 class="lg:text-4xl text-2xl font-bold lg:my-10 my-5 text-[#179800] lg:ml-0 ml-5">Connect people</h1>
            <div class="stats shadow flex lg:flex-row flex-col">
                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="inline-block h-8 w-8 stroke-current ">
                            <i class="fa-regular fa-face-smile text-3xl text-blue-700"></i>
                        </svg>
                    </div>
                    <div class="stat-title">Happy Client</div>
                    <div class="stat-value">17K+</div>
                    <div class="stat-desc">2015 - Present</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="inline-block h-8 w-8 stroke-current text-green-400">
                            <i class="fa-solid fa-user text-3xl text-green-700"></i>
                        </svg>
                    </div>
                    <div class="stat-title">New Client</div>
                    <div class="stat-value">3,296</div>
                    <div class="stat-desc">Last Months</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="inline-block h-8 w-8 stroke-current text-yellow-400">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4">
                            </path>
                        </svg>
                    </div>
                    <div class="stat-title">New People</div>
                    <div class="stat-value">275</div>
                    <div class="stat-desc">Today</div>
                </div>
            </div>

            <!-- second part  -->
            <div class="lg:block hidden lg:flex lg:justify-center mt-10">
                <ul class="timeline">
                    <li>
                        <div class="timeline-start">2015</div>
                        <div class="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                class="h-5 w-5 text-red-600">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="timeline-end timeline-box">Start Buisness</div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div class="timeline-start">2017</div>
                        <div class="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                class="h-5 w-5 text-green-400">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="timeline-end timeline-box">Build 3 Barnches</div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div class="timeline-start">2020</div>
                        <div class="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                class="h-5 w-5 text-green-200">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="timeline-end timeline-box">Online Shop</div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div class="timeline-start">2022</div>
                        <div class="timeline-middle text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                class="h-5 w-5 text-yellow-400">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="timeline-end timeline-box">Build Khilgaon Branch</div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div class="timeline-start">2027</div>
                        <div class="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                class="h-5 w-5">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="timeline-end timeline-box">New Revaluation</div>
                    </li>
                </ul>
            </div>
`
// footer Part Here 
document.getElementById("footer_part").innerHTML=`
<div class="flex lg:flex-row flex-col justify-between lg:px-[140px]">
            <div>
                <img src="c2-assets/logo-footer.png" alt="">
                <p class="text-[#FFFFFFB3] py-2">Discover a world of treats, toys, and <br> essentials handpicked for
                    your furry <br> friends</p>
            </div>
            <div class="lg:my-0 my-[35px]">
                <ul class="text-xl grid gap-7">
                    <li>Product</li>
                    <li>Services</li>
                    <li>Contact us</li>
                </ul>
            </div>
            <div>
                <h2 class="mb-2 text-xl">Follow Us</h2>
                <div class="list-none flex gap-5">
                    <li><a href="" target="_blank"><i class="fa-brands fa-facebook text-white text-2xl"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-instagram text-white text-2xl"></i></a>
                    </li>
                    <li><a href=""><i class="fa-brands fa-linkedin text-white text-2xl"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-youtube text-2xl"></i></a></li>
                </div>

            </div>
        </div>
`