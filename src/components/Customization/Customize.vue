<script setup>
import globalData from '@/scripts/data.js'
import Card from '@/components/Preview/Card.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ref } from '@vue/reactivity';

const emit = defineEmits([
    'saved'
])

const cardThemes = ref(globalData().card_themes.value.map(el => ({...el,selected:false})))
const avatars = ref(globalData().user_avatars.value.map(el => ({...el,selected: false})))
const username = ref('')
const error = ref(false)

const setConfig = (key,conf) => {
    window.localStorage.setItem(key,conf)
}

const getImgSrc = (src) => {
    let url = new URL('../../assets/icons/avatars/' + src + '.png',import.meta.url).href
    return url
}

const select_avatar = (img) => {
    avatars.value.forEach(el => {
        if(el.key === img.key) el.selected = true
        else el.selected = false
    })
    setConfig('userAvatar',img.src)
}

const select_card_theme = (card) => {
    cardThemes.value.forEach(el => {
        if(el.key === card.key) el.selected = true
        else el.selected = false
    })
    setConfig('userCardTheme',card.key)
}

const save_username = () => {
    if(!username.value || username.value === ''){
        error.value = true
        return
    }
    else{
        error.value = false
        setConfig('userName',username.value)
        emit('saved')
    }
}



</script>

<template>
    <div class="customize-overlay">
        <div class="customize-popup">
            <ul class="username">
                <li>
                    <input v-model="username" type="text" placeholder="Enter Your Username" :class="[{'error':error}]">
                </li>
            </ul>
            <div class="label">
                <span>Choose Your Avatar</span>
            </div>
            <ul class="avatar">
                <li @click="select_avatar(a)" v-for="(a,ind) in avatars" :key="ind" :class="[{'selected':a.selected}]">
                    <img :src="getImgSrc(a.src)" alt="">
                </li>
            </ul>
            <div class="card_theme_label">
                <span>Choose Your Card Theme</span>
            </div>
            <swiper
                :slides-per-view="1"
                class="card_slides"
                :centered-slides="true"
                :loop="false"
                :pagination="{ clickable: false }"
                navigation
            >
                <swiper-slide v-for="(t,ind) in cardThemes" :key="ind">
                    <div @click="select_card_theme(t)" :class="['card']">
                        <Card :theme="t.key" :balance="'8935,00'" style="width: 26.5rem"/>
                        <div v-show="t.selected" class="selected-overlay">
                            <img src="@/assets/icons/checkmark.svg" alt="">
                        </div>                        
                    </div>
                </swiper-slide>
            </swiper>

            <div class="save" @click="save_username">
                <button>Save And Continue</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.customize-overlay{
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 250;
    backdrop-filter: blur(3.125rem);
    mask: linear-gradient(transparent, black 60%);
    @include centerItem;

    .customize-popup{
        width: 30rem;
        background: #ffffff;
        border-radius: 1.25rem;
        // overflow: auto;
        border: 0.0625rem solid rgba(#3d3d3d,.1);
        padding: 1.25rem;

        .card{
            cursor: grab;
            position: relative;
            .selected-overlay{
                position: absolute;
                width: 100%;
                height: 100%;
                background: rgba(#fff,.3);
                top: 0;
                left: 0;
                display: grid;
                place-items: center;

                img{
                    width: 3.4375rem;
                }
            }
        }

        .label{
            margin-top: 1.5625rem;
            margin-left: 0.3125rem;

            span{
                font-size: 1.25rem;
                color: #3d3d3d;
                opacity: .7;
            }
        }

        ul{
            width: 100%;

            &.username{
                li{
                    margin-top: 1.5625rem;
                    input{
                        width: 26.25rem;
                        height: 3rem;
                        padding: 0.625rem;
                        box-sizing: border-box;
                        outline: none;
                        border: 0.0625rem solid rgba(#3d3d3d,.2);
                        border-radius: 0.375rem;
                        color: rgba(#3d3d3d,.6);
                        font-size: 0.9375rem;
                        transition: all .2s;

                        &.error{
                            border: 0.0625rem solid indianred;
                        }

                        &::placeholder{
                            color: rgba(#3d3d3d,.5);
                        }

                        &:focus{
                            border: 0.0625rem solid #FFC248;
                        }
                    }
                }
            }

            &.avatar{
                margin-top: 0.9375rem;
                user-select: none;
                @include flex(flex-start,center,row);

                &:hover{
                    li{
                        opacity: .5;
                    }
                }

                li{
                    width: 2.1875rem;
                    height: 2.1875rem;
                    overflow: hidden;
                    margin-left: 1.5625rem;
                    transition: all .2s;
                    cursor: pointer;
                    display: grid;
                    place-items: center;
                    border-radius: 50%;

                    &.selected{
                        border: 0.3125rem solid lime;
                        transform: scale(1.4);
                    }

                    &:hover{
                        opacity: 1;
                        transform: translateY(-0.3125rem);
                        &.selected{
                            transform: scale(1.4);
                        }
                    }
                    &:first-child{
                        margin-left: 0;
                    }
                    img{
                        width: 100%;
                        object-fit: contain;
                    }
                }
            }
        }



        .card_theme_label{
            margin-top: 3.125rem;
            margin-left: 0.3125rem;
            span{
                font-size: 1.25rem;
                color: #3d3d3d;
                opacity: .7;
            }
        }

        .card_slides{
            margin-top: 0.9375rem;
        }



    }

    .save{
        width: 100%;
        margin-top: 2.1875rem;
        @include centerItem();
        
        button{
            cursor: pointer;
            width: 100%;
            padding: 0.625rem 2.1875rem;
            background: #FFC248;
            border-radius: 0.375rem;
            color: #fff;
            font-size: 0.9375rem;
        }
    }
}

::v-deep(.card_slides){
    .swiper-button-prev,.swiper-button-next {
        color: rgba(#ffffff,.7) !important;
    }
}
</style>