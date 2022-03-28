<template>
    <div class="bg-[#4239C3] rounded-3xl text-white">
        <div class=" mt-10 ">
            <img :src="image" alt="" class="-mt-13  w-full h-full object-cover">
        </div>
        <div class="pt-10 pb-11 px-8 ">
            <div class="mb-10">
                <p class="text-2xl font-bold pb-5">{{title}}</p>
                <span class="text-base">{{content}}</span>
            </div>
            <div class="hover:bg-gray-50 hover:text-blue-800 border-4 rounded-[100px] inline-block ">
                <a class="block py-3 px-8" href="">Explore More</a>
            </div>
        </div>
    </div>
</template>
<script setup>
    defineProps({
        image:{
            type:String
        },
        title:{
            type:String
        },
        content:{
            type:String
        }

    })
</script>
