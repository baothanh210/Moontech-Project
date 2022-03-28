<template>
<div class="relative">
    <div v-if="image" class="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-15 pt-13">
        <div class="lg:w-1/2">
            <div>
                <img :src="image" alt="" class="w-full h-full object-cover">
            </div>
        </div>
        <div class="relative lg:w-1/2">
            <div v-if="number" class="pb-37">
                <span class="text-10xl font-bold text-[#373695]">0{{number}}</span>
            </div>
            <div class="absolute top-24 md:left-20 flex flex-col justify-center gap-8 z-10 text-white">
                <span class="text-3xl font-bold">{{title}}</span>
                <span class="font-thin text-base">{{content}}</span>
                <div class=" flex items-center gap-6 lg:pt-10 cursor-pointer">
                    <!-- <button  class="bg-blue-700 hover:bg-opacity-40 w-11 h-11 border border-white rounded-1/2 flex items-center justify-center">
                        <img src="../assets/images/icons/leftArrow.png" alt="" class="w-3 h-2 object-cover"> 
                    </button>
                    <button  type="button" class="bg-blue-700 hover:bg-opacity-40 w-11 h-11 border border-white rounded-1/2 flex items-center justify-center">
                        <img src="../assets/images/icons/rightArrow.png" alt="" class="w-3 h-2 object-cover">
                    </button> -->
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script setup>
import {computed, reactive, ref} from 'vue'
defineProps({
    image:{
        type:String,
    },
    title:{
        type:String
    },
    content:{
        type:String
    },
    number:{
        
    }

})


</script>
