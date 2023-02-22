<script setup>
import { nextTick } from "@vue/runtime-core"
import category from '@/assets/icons/quickactions/category.svg'
import car from '@/assets/icons/quickactions/car.svg'
import security from '@/assets/icons/quickactions/security.svg'
import video from '@/assets/icons/quickactions/video.svg'
import games from '@/assets/icons/quickactions/games.svg'
import docs from '@/assets/icons/quickactions/docs.svg'
import shop from '@/assets/icons/quickactions/shop.svg'
import travel from '@/assets/icons/quickactions/travel.svg'
import service from '@/assets/icons/quickactions/service.svg'


const props = defineProps({
    data: {
        type: Array,
        default: [],
    }
})

const getImgSrc = (key) => {
    let imgObj = props.data.filter(el => el.key === key)[0].src
    let url = new URL('/src/assets/icons/quickactions/' + imgObj + '.svg',import.meta.url)
    return url
}

</script>

<template>
    <div class="quick-actions">
        <div class="header">
            <div class="title">
                <span>Quick Actions</span>
            </div>
            <div class="add-btn">
                <span>+</span>
            </div>
        </div>
        <ul>
            <li 
                v-for="(a,ind) in props.data" 
                :key="ind"
                @mouseenter="a.hover = true"
                @mouseleave="a.hover = false"
                :style="{background: a.hover ? a.color : ''}"
            >
                <div class="icon">
                    <img v-if="a.key === 'category'" :src="category" alt="">
                    <img v-if="a.key === 'car'" :src="car" alt="">
                    <img v-if="a.key === 'security'" :src="security" alt="">
                    <img v-if="a.key === 'video'" :src="video" alt="">
                    <img v-if="a.key === 'games'" :src="games" alt="">
                    <img v-if="a.key === 'docs'" :src="docs" alt="">
                    <img v-if="a.key === 'shops'" :src="shop" alt="">
                    <img v-if="a.key === 'travel'" :src="travel" alt="">
                    <img v-if="a.key === 'service'" :src="service" alt="">
                    <!-- <img :src="getImgSrc(a.key)" alt=""> -->
                </div>
                <div class="title">
                    <span>
                        {{a.label}}
                    </span>
                </div>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.quick-actions{
    width: 100%;
    max-width: 34rem;
    padding: 2.375rem 1.9375rem;
    border-radius: 1.25rem;
    background: #FFFFFF;
    padding-bottom: 1.6875rem;
    border: 0.0625rem solid rgba(#D7D7D7,.3);

    .header{
        width: 100%;
        @include flex(space-between,center,row);
        .title{
            span{
                font-size: 1.4375rem;
                color: #130F26;
                font-weight: 500;
            }
        }
        .add-btn{
            width: 3.125rem;
            height: 3.125rem;
            border-radius: 50%;
            @include centerItem;
            overflow: hidden;
            cursor: pointer;
            background: #FFC248;
            
            span{
                color: #FFFFFF;
                font-size: 1.125rem;
                font-weight: 600;
            }
        }
    }

    ul{
        width: 100%;
        margin-top: 1.5rem;
        display: grid;
        grid-template-columns: 8.5rem 8.5rem 8.5rem;
        gap: 2rem;

        li{
            padding: 1.875rem 2.5rem;
            border-radius: 1.25rem;
            background: #F4F4F4;
            @include centerItem;
            transition: all .2s;
            cursor: pointer;

            img{
                width: 3.5rem;
                transition: all .2s;
            }

            &:hover{
                .title span{
                    color: #FFFFFF ;
                }
                img{
                    transform: scale(1.5);
                }
            }

            .title{
                margin-top: 1rem;
                span{
                    color: #452F02;
                    transition: all .2s;
                }
            }
        }
    }
}
</style>