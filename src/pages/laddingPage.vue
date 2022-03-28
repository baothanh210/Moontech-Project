<template>
<!-- Header -->
    <section id="hello" class="h-252 lg:h-235 ">
        <div class="relative w-full h-full bg-header bg-no-repeat bg-cover bg-bottom overflow-hidden">
            <div class="container">
                <header class="lg:pt-8 font-gotham">
                    <div class="flex flex-col lg:flex-row items-center flex-wrap">
                        <div class="mt-8 lg:mt-0 w-full lg:w-auto lg:flex-grow flex flex-row justify-between">
                            <button @click="isShowMenu" class=" lg:hidden w-8 h-8">
                                <i class="fas fa-bars text-white w-full h-full object-cover"></i>
                            </button>
                            <a href="/">
                                <img srcset="/images/logos/logoMoontech.png 2x" alt="">
                            </a>
                        </div>
                        <div :class="keyMenu.active ? 'left-0 w-full' : '-left-full w-0'"  class="z-50 duration-1000 lg:left-auto fixed flex flex-col w-full h-[100vh] bg-[#222067] p-5 lg:p-0 lg:bg-transparent lg:w-auto lg:h-auto lg:relative lg:flex lg:flex-row items-center lg:gap-14">
                            <button @click="isShowMenu" class="lg:hidden w-6 h-6 ml-auto mt-3">
                                <i class="fa-solid fa-x text-white w-full h-full object-cover"></i>
                            </button>
                            <ul class="w-full pt-3 lg:pt-0 lg:w-auto text-header-DODO flex flex-col lg:flex-row text-base lg:gap-10 items-center justify-center text-center">
                                <div class="w-full lg:w-auto relative">
                                    <li class="relative z-10 leading-13"><a class=" block hover:font-bold text-hover" href="#hello">Hello</a></li>
                                    <div class="hidden lg:block w-4 h-4 absolute top-2 -left-2 ">
                                        <img src="/images/icons/ellipseHello.png" alt="" class="w-full h-full">
                                    </div>
                                </div>
                                <li class="w-full lg:w-auto leading-13"><a class="block hover:font-bold  text-hover" href="#wwd">What We Do</a></li>
                                <li class="w-full lg:w-auto leading-13"><a class="block hover:font-bold  text-hover" href="#hww">How We Work</a></li>
                                <li class="w-full lg:w-auto leading-13"><a class="block hover:font-bold  text-hover" href="#why">Why Us</a></li>
                                <li class="w-full lg:w-auto leading-13"><a class="block hover:font-bold  text-hover" href="#pfl">Portfolio</a></li>
                                <li class="w-full lg:w-auto leading-13"><a class="block hover:font-bold  text-hover" href="#faq">FAQs</a></li>
                            </ul>
                            <div class="hover:bg-gray-50 border-3 rounded-[100px] mt-auto lg:mt-0 text-center">
                                <a class="block hover:text-black text-white font-bold py-4 px-10" href="">Get in touch</a>
                            </div>
                        </div>
                    </div>
                </header>
                <div class="pt-5 lg:pt-25 flex lg:flex-wrap flex-col h-full ">
                    <div class="order-2 w-full lg:w-1/2">
                        <div data-aos="fade" class=" text-3xl md:text-[64px] font-bold text-white"> 
                            <span data-aos="flip-up" data-aos-delay="300" >Take your project</span>
                            <div data-aos="slide-up" data-aos-duration="800" class="flex items-center gap-5">
                                <span class="text-tothe">to the</span> 
                                <span class="text-[#FFFCE3] text-moon border-b-4 border-[#3DD1FF] ">moon</span>
                                <div class="hidden md:block w-10 h-12">
                                    <img src="/images/icons/rocket.png" alt="" class="w-full h-full object-cover">
                                </div>
                            </div>
                        </div>
                        <div class="text-white pt-10">
                            <div class="pb-16">
                                <p class="font-normal">Moontech is a business with high expertise and deep understanding in the blockchain field. We provide the most   practical solutions and advice to make your project.</p>
                            </div>
                            <div class="flex items-center gap-6">
                                <div class="hover:bg-opacity-40 inline-block border-4 border-[#37377e] rounded-[100px] bg-[#4239C3]">
                                    <a class="block font-bold py-4 px-5 md:px-10" href="">View Showreel</a>
                                </div>
                                <div class=" w-14 h-14">
                                    <a href="#">
                                        <img src="/images/icons/buttonPlay.png" alt="" class="w-full h-full object-cover">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up-right" data-aos-duration="800" class="order-1 lg:absolute lg:bottom-27 lg:right-0 lg:order-2 w-full lg:w-1/2 ">
                        <div class="w-63 h-74">
                            <img src="/images/icons/astronaut.png" alt="" class="w-full h-full object-cover">
                        </div>
                    </div>
                </div>
            </div>
            <div class="hidden lg:block absolute bottom-0 -right-20 w-50 h-50 ">
               <img src="/images/icons/moon.png" alt="" class="w-full h-full object-cover">
            </div>
        </div>
    </section>
<!-- What we do -->
    <section id="wwd" class="relative h-200">
        <div class="absolute w-full h-full bg-wwd bg-no-repeat bg-top">
            <div class="container font-gotham lg:pt-3 ">
                    <div class="flex flex-col gap-5 items-center justify-center">
                        <span class="text-base font-bold text-[#4239C3]">What we do</span>
                        <div class="text-xl md:text-5xl font-bold">
                            <span>We bring you more value</span>
                            <div class="flex flex-row gap-2 lg:gap-4 items-center justify-center">
                                <span class="textWWD">reaching</span>
                                <span>the space</span>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="pt-25 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
                        <card-img image="/images/icons/Image-1.png" title="Blockchain Consulting" content="Consulting, solving difficult problems for fledgling projects in the blockchain market."></card-img>
                        <card-img image="/images/icons/Image-2.png" title="NFT Marketplace" content="Design, build and operate NFT marketplace according to specific requirements of customers.."></card-img>
                        <card-img image="/images/icons/Image-3.png" title="Game Landing- page" content="Design and program a specific landing page for the project's blockchain game.."></card-img>
                    </div> -->
                    <div class="pt-25 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
                        <div v-for="(card,index) in ListCard" :key="index" >
                            <card-img :image="card.image" :title="card.title" :content="card.content" ></card-img>
                        </div>
                    </div>
            </div>
            <div class="absolute -bottom-34 hidden lg:block">
                <img src="/images/icons/hubble.png" alt="" class="w-40">
            </div>
        </div>
    </section>
<!--How we work  -->
    <section id="hww" class="relative h-420 md:h-500 mt-250 md:mt-110 lg:mt-0">
            <div class="relative w-full h-full bg-hww  bg-no-repeat bg-cover bg-bottom overflow-hidden">
                    <div class="container font-gotham lg:pt-3">
                        <div class="hidden lg:block">
                            <Clouds />
                        </div>
                        <div class="flex flex-col gap-5 items-center justify-center pt-56">
                            <span class="text-base font-bold text-[#3DD1FF]">How We Work</span>
                            <div class="text-xl md:text-5xl font-bold text-white">
                                <span>Expert at Innovation Exist</span>
                                <div class="flex flex-row gap-2 lg:gap-4 items-center justify-center">
                                    <span>of</span>
                                    <span class="textHWW">Collaboration</span>
                                </div>
                            </div>
                        </div>
                        <!-- Slider HWW -->
                        <swiper class=""
                        parallax
                        grabCursor
                        :navigation="{nextEl:'.nextArrow', prevEl:'.prevArrow' }">

                            <swiper-slide v-for="slide in listTokenItem" :key="slide">
                                <div class="h-full w-full">
                                    <TokenSliderVue :image="slide.image" :number="slide.number" :title="slide.title" :content="slide.content"></TokenSliderVue>
                                </div>
                            </swiper-slide>
                            <!-- <button @click="swiperClick.slideNext()">Slide to the next slide</button> -->
        
                            <div class="relative z-20  md:ml-3/5 flex gap-6 md:transform md:-translate-y-10">
                                <button class="nav-indicator prevArrow bg-blue-700 hover:bg-opacity-40 w-11 h-11 border border-white rounded-1/2 flex items-center justify-center">
                                    <img src="/images/icons/leftArrow.png" alt="" class="w-3 h-2 object-cover"> 
                                </button>
                            
                                <button class="nav-indicator nextArrow  bg-blue-700 hover:bg-opacity-40 w-11 h-11 border border-white rounded-1/2 flex items-center justify-center">
                                    <img src="/images/icons/rightArrow.png" alt="" class="w-3 h-2 object-cover">
                                </button>
                            </div>
                        </swiper>
                    </div>
                    <!-- Why it’s better together -->
                    <div id="why" class="overflow-hidden hidden lg:block pt-27 pb-5 text-center">
                        <span data-aos="slide-left" data-aos-duration="1000" class="block  text-9xl text-why- font-bold">Why it’s better together</span>
                    </div>
                    <div class="container">
                        <div class=" lg:w-1/2 flex flex-col text-white pt-20 lg:pt-40">
                            <div class="pb-8 max-w-118">
                                <span class="text-base lg:text-lg font-normal ">A short blurb about your knowledge and expertise. A summary of your experience in about 2 or three sentences.</span>
                            </div>

                            <div class="flex flex-col gap-5">
                                <span class="text-[#3DD1FF] font-medium ">WHAT YOU GET FROM US:</span>
                                <div class="flex flex-col gap-4 font-thin">
                                    <div class="flex items-center gap-4">
                                        <div class="w-5 h-5 flex-none">
                                            <img src="/images/icons/tick.png" alt="" class="w-full h-full object-cover">
                                        </div>
                                        <span class="text-sm lg:text-base">Optimize your resources and guide you to success.</span>
                                    </div>
                                    <div class="flex items-center gap-4">
                                        <div class="w-5 h-5 flex-none">
                                            <img src="/images/icons/tick.png" alt="" class="w-full h-full object-cover">
                                        </div>
                                        <span class="text-sm lg:text-base">Provide you with in-depth and up-to-date blockchain knowledge.</span>
                                    </div>
                                    <div class="flex items-center gap-4">
                                        <div class="w-5 h-5 flex-none">
                                            <img src="/images/icons/tick.png" alt="" class="w-full h-full object-cover">
                                        </div>
                                        <span class="text-sm lg:text-base">Analyze and solve problems, helping your project go further..</span>
                                    </div>
                                    <div class="flex items-center gap-4">
                                        <div class="w-5 h-5 flex-none">
                                            <img src="/images/icons/tick.png" alt="" class="w-full h-full object-cover">
                                        </div>
                                        <span class="text-sm lg:text-base">Help you connect with experts, and become part of the community.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
    </section>
<!-- Partner  -->
    <section id="pfl">
        <div class="container pt-12 font-gotham">
            <div class="flex flex-col gap-5 items-center justify-center">
                <span class="text-base font-bold text-[#4239C3]">Partner</span>
                <div class="text-xl md:text-5xl font-bold">
                    <div class="flex flex-row gap-2 lg:gap-4 items-center justify-center">
                        <span class="text-creative">Creative</span>
                        <span>Solution</span>
                    </div>
                    <span>for All Your Problem</span>
                </div>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-23 pt-10">
                <div class="flex flex-col justify-between">
                    <div>
                        <img src="/images/brands/acervn.png" alt="" class="w-full h-full object-contain">
                    </div>
                    <div>
                        <img src="/images/brands/nhgGr.png" alt="" class="w-full h-full object-contain">
                    </div>
                </div>
                <div class="flex flex-col justify-between">
                    <div>
                        <img src="/images/brands/BAEMIN.png" alt="" class="w-full h-full object-contain">
                    </div>
                    <div>
                        <img src="/images/brands/discova.png" alt="" class="w-full h-full object-contain">
                    </div>
                </div>
                <div class="flex flex-col justify-between">
                    <div>
                        <img src="/images/brands/cakevn.png" alt="" class="w-full h-full object-contain">
                    </div>
                    <div>
                        <img src="/images/brands/macintosh.png" alt="" class="w-full h-full object-contain">
                    </div>
                </div>
                <div class="flex flex-col items-center justify-between">
                    <div class="flex-grow">
                        <img src="/images/brands/bee.png" alt="" class="w-full h-full object-contain">
                    </div>
                    <div>
                        <img src="/images/brands/traveloka.png" alt="" class="w-full h-full object-contain">
                    </div>
                </div>
                <div class=" flex flex-col ">
                    <div class="flex-grow">
                        <img src="/images/brands/inmac.png" alt="" class="w-full h-full object-contain">
                    </div>
                    <div>
                        <img src="/images/brands/Sauter.png" alt="" class="w-full h-full object-contain">
                    </div>
                </div>
            </div>
        </div>
    </section>
<!-- Question -->
    <section id="faq">
        <div class="h-230 relative w-full h-full bg-wwd bg-no-repeat bg-cover bg-bottom mt-12">
            <div class="container font-gotham pt-12">
                <div class="max-w-175 mx-auto text-center">
                    <span class="text-lg md:text-5xl font-bold">Frequently Asked Questions</span>
                    <div class="text-base text-[#524974] pt-5">
                        <span class="font-thin">A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</span>
                    </div>
                </div>
                <div class=" max-w-175 mt-10 border rounded-3xl max-w-175 mx-auto ">
                    <div v-for="(item,index) in listQuestion" :key="index" >
                        <div v-if="index < indexShowMoreItem" class="border-b-1">
                            <div  @click="item.isHidden = !item.isHidden"
                             :class="item.isHidden && index == 0 ? 'bg-[#4E72D9] text-white rounded-t-xl hover:rounded-t-xl' :item.isHidden && index == listQuestion.length -1 ? 'bg-[#4E72D9] text-white rounded-b-xl ' :item.isHidden && index == 3 && indexShowMoreItem == 4 ? 'bg-[#4E72D9] text-white rounded-b-xl'  : item.isHidden ? 'bg-[#4E72D9] text-white' :''" 
                             class="hover:bg-[#4E72D9] hover:text-white  flex flex-col py-5 px-8 md:py-9 md:px-12 ring-0 cursor-pointer">
                                <div class="flex items-center">
                                    <span class="flex-grow text-sm lg:text-xl font-bold">{{item.title}}</span>
                                    <div v-if="!item.isHidden" class=" w-7 h-7 transform translate-x-5">
                                        <img src="/images/icons/btnDown.png" alt="" class="w-full h-full object-contain">
                                    </div>
                                    <div  v-if="item.isHidden" class=" w-7 h-7 transform translate-x-5" >
                                        <img src="/images/icons/btnUp.png" alt="" class="w-full h-full object-contain">
                                    </div>
                                </div>
                                <div @click="item.isHidden = !item.isHidden" :class="item.isHidden ? 'h-30 pt-6' : 'h-0 '" class="overflow-hidden duration-400 text-base">
                                    <span class="font-thin">{{item.content}}</span>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="mt-12 text-center text-white">
                    <button @click="showMoreItem" class="hover:bg-opacity-80  bg-[#4239C3] inline-block py-4 border-4 border-gray-300 px-10 rounded-[100px]">
                        <span class="text-base font-bold" >See More</span>
                    </button>
                </div>
            </div>
            <footer class="pt-25">
                <div class="w-67 h-79 mx-auto transform relative z-10 transform -translate-y-13">
                    <img src="/images/icons/HigherPresent1.png" alt="" class="w-full h-full object-cover">
                </div>
                <div class="h-auto relative bg-footer bg-no-repeat bg-cover w-full h-full">
                    <div class="absolute bottom-full w-full transform translate-y-2">
                        <img src="/images/backgrounds/Rock-bg.png" alt="" class="w-full h-full object-cover">
                    </div>
                    <div class="container font-gotham font-thin grid grid-cols-2 md:grid-cols-8 lg:grid-cols-12 pt-5 lg:pt-2 gap-5">
                        <div class="col-span-2 md:col-span-5 lg:max-w-93">
                        <img srcset="/images/logos/logoMoontech.png 2x" alt="">
                        <p class="text-sm text-white text-opacity-58 pt-10">We provide the most practical solutions and advice to make your project.</p>
                        <div class="flex flex-col md:flex-row gap-8 text-[#3DD1FF] text-sm pt-20">
                            <a href="" class="text-hover" >Terms and Conditions</a>
                            <a href="" class="text-hover">Privacy Policy</a>
                        </div>
                        </div>
                        <div class="col-span-2">
                            <span class="text-xl font-bold text-white ">Company</span>
                            <div class="flex flex-col gap-6 pt-8 text-white text-opacity-58">
                                <a href="" class="text-hover">About us</a>
                                <a href="" class="text-hover">Projects</a>
                                <a href="" class="text-hover">What we do</a>
                                <a href="" class="text-hover">FAQs</a>
                            </div>
                        </div>
                        <div class=" col-span-2 lg:pl-5 md:col-span-5 lg:col-span-3">
                            <span class="text-xl font-bold text-white ">Resources</span>
                            <div class="flex flex-col gap-6 pt-8 text-white text-opacity-58">
                                <a href="" class="text-hover">Blog</a>
                                <a href="" class="text-hover">Funds</a>
                                <a href="" class="text-hover">Investors</a>
                                <a href="" class="text-hover">Publishers</a>
                            </div>
                        </div>
                        <div class="lg:transform lg:-translate-x-15 col-span-2">
                            <span class="text-xl font-bold text-white ">Contact</span>
                            <div class="flex flex-col gap-6 pt-8 text-white text-opacity-58">
                                <div class="flex items-center gap-2">
                                    <div class="w-8 h-8 flex items-center justify-center bg-white rounded-1/2 flex-none">
                                        <a class="flex-none text-hover" href="">
                                            <img srcset="/images/icons/facebook.png 2x" alt="">
                                        </a>
                                    </div>
                                    <a href="" class="text-hover">@moon_tech</a>
                                </div>
                                <div class="flex items-center gap-2">
                                    <div class="w-8 h-8 flex items-center justify-center bg-white rounded-1/2 flex-none">
                                        <a href="" class="text-hover">
                                            <img srcset="/images/icons/twitter.png 2x" alt="">
                                        </a>
                                    </div>
                                    <a href="" class="text-hover">@moon_tech</a>
                                </div>
                                <div class="flex items-center gap-2">
                                    <div class="w-8 h-8 flex items-center justify-center bg-white rounded-1/2 flex-none">
                                        <a  href="" class="text-hover">
                                            <img srcset="/images/icons/letter.png 2x" alt="">
                                        </a>
                                    </div>
                                    <a href="" class="text-hover">moontech@codihaus.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container pb-6">
                        <div class="w-full h-[1px] bg-white bg-opacity-20 mt-10">
                        </div>
                        <div class="flex flex-col text-center font-thin md:flex-row gap-3 items-center justify-between pt-6 text-white text-opacity-58">
                            <span>All rights are reserved © 2022 Moon Tech.</span>
                            <span>Website Development by CodiHaus.</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </section>
</template>
<script setup>
import SwiperCore,{Navigation, Parallax} from "swiper"
import { Swiper, SwiperSlide } from 'swiper/vue';
  // Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import {computed, reactive, ref} from 'vue'
import cardImg from '../components/card.vue'
import TokenSliderVue from '../components/TokenSlider.vue';
import Clouds from '../components/Clouds.vue'
import {useStore} from 'vuex'
    SwiperCore.use([Navigation,Parallax])
    const store = useStore()
    store.dispatch("fetchAllTokenItemList")
    store.dispatch("fetchAllQuestionsList")
    store.dispatch("fetchAllCardList")
    const listTokenItem = computed(()=> store.state.tokenItemList)
    const listQuestion = computed(() => store.state.questionList)
    const ListCard = computed(() => store.state.cardList)
    const keyMenu = reactive({
        active:false
    })
    const objShowMoreItem = reactive({
        active:false
    })
    const indexShowMoreItem= ref(4)
    const isShowMenu = () => {
        keyMenu.active = !keyMenu.active
    }
    
    const showMoreItem = () => {
        objShowMoreItem.active = !objShowMoreItem.active
        if(objShowMoreItem.active){
            indexShowMoreItem.value = listQuestion.value.length
        }
        else{
            indexShowMoreItem.value = 4
        }
    }

</script>
<style lang="scss">
    @import "../assets/scss/class";
</style>

<!-- --------------------------------CSS Swiper ------------------------------------------- -->
<style>
*{
  padding:0;
  margin:0;
}
/* 
.swiper-button-prev{
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background-color: rgba(76, 79, 142, 0.8);
    position: absolute;
    top: 80%;
    left: 60%;
    color: white;
    text-align: center;
}
.swiper-button-next{
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background-color: rgba(76, 79, 142, 0.8);
    position: absolute;
    top: 80%;
    right: 30%;
    color: white;
    text-align: center;
}
.swiper-button-prev::after,
.swiper-button-next::after{
    font-size: 15px;
} */
</style>

