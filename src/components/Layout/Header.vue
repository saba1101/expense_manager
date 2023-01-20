<script setup>
import { ref } from "@vue/reactivity"
import { onMounted, watch } from "@vue/runtime-core";

const getImgSrc = (src) => {
    let url = new URL('../../assets/icons/avatars/' + src + '.png',import.meta.url).href
    return url
}

const user_details = ref({
    avatarKey: null,
    userName: null,
})
const getUserDetails = () => {
    const lStore = window.localStorage
    if(
        lStore.getItem('userName') &&
        lStore.getItem('userCardTheme') && 
        lStore.getItem('userAvatar')
    ){
        user_details.value.avatarKey = lStore.getItem('userAvatar')
        user_details.value.userName= lStore.getItem('userName')
    }
}

onMounted(() => {
    getUserDetails()
})

</script>

<template>
    <div class="header">
        <div class="search-bar">
            <input type="text" placeholder="Search Expense..." />
            <img src="@/assets/icons/header/search.svg" alt="">
        </div>
        <div class="add-expense">
            <span>+ </span>
            <span>Add Expense</span>
        </div>
        <div class="notification">
            <img src="@/assets/icons/header/notification.svg" alt="">
        </div>
        <div class="stats">
            <img src="@/assets/icons/header/stats.svg" alt="">
        </div>
        <div class="avatar">
            <div class="avatar_placeholder">
                <img v-if="user_details.avatarKey" :src="getImgSrc(user_details.avatarKey ?? undefined)" alt="">
            </div>
            <div class="username">
                <span v-if="user_details.userName">{{ user_details.userName }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.header{
    @include flex(flex-end,center,row);
    gap: 1.5625rem;
    background: #FFFBF3;
    padding: 0.9375rem 1.5625rem;
    position: fixed !important;
    top: 0;
    right: 0;

    .search-bar{
        width: 25rem;
        height: 3rem;
        position: relative;
        background: #FFFFFF;
        border-radius: 1.25rem;
        border: 0.0625rem solid rgba(#BEBEBE,.3);

        img{
            width: 1.125rem;
            position: absolute;
            top: 50%;
            right: 0.9375rem;
            transform: translate(0,-50%);
            user-select: none;
            pointer-events: none;
            opacity: .5;
        }

        input{
            width: 100%;
            height: 100%;
            border: none;
            background: transparent;
            outline: none;
            font-size: 0.9375rem;
            color: #BEBEBE;
            padding: 0 1.25rem;
            font-weight: 400;


            &::placeholder{
                opacity: .3;
            }
        }
    }

    .add-expense{
        border-radius: 1.25rem;
        background: #FFC248;
        padding: 0.75rem 1.25rem;
        cursor: pointer;
        span{
            font-size: 1rem;
            color: #FFFFFF;
        }
    }

    .notification,.stats{
        cursor: pointer;
        img{
            width: 2.8125rem;
            pointer-events: none;
            user-select: none;
        }
    }

    .avatar{
        @include flex(flex-start,flex-start,row);
        .avatar_placeholder{
            cursor: pointer;
            width: 2.8125rem;
            height: 2.8125rem;
            border-radius: 50%;
            overflow: hidden;
            @include centerItem;

            img{
                width: 100%;
            }
        }
        .username{
            max-width: 6.25rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            margin-left: 0.625rem;
            margin-top: 0.3125rem;
            color: rgba(#3d3d3d,.8);
        }
    }
}

</style>