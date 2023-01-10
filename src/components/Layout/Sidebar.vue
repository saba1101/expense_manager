<script setup>
const props = defineProps({
    data: {
        type: Array,
        default: [],
    }
})

</script>

<template>
    <div class="sidebar">
        <div class="logo">
            <img src="@/assets/icons/logo.svg" alt="">
        </div>
        <ul>
            <li v-for="(i,ind) in props.data" :key="ind">
                <div class="item_wrapper">
                    <img v-if="ind === 0" src="@/assets/icons/sidebar/1.svg" alt="">
                    <img v-if="ind === 1" src="@/assets/icons/sidebar/2.svg" alt="">
                    <img v-if="ind === 2" src="@/assets/icons/sidebar/3.svg" alt="">
                    <img v-if="ind === 3" src="@/assets/icons/sidebar/4.svg" alt="">
                    <img v-if="ind === 4" src="@/assets/icons/sidebar/5.svg" alt="">
                    <img v-if="ind === 5" src="@/assets/icons/sidebar/6.svg" alt="">
                </div>
            </li>
        </ul>
        <div class="logout">
            <img src="@/assets/icons/sidebar/logout.svg" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.sidebar{
    width: 100%;
    height: 100%;
    background: #FFFBF3;
    position: relative;
    .logo{
        padding: 1.3125rem 1.25rem;
        @include centerItem();
        img{
            width: 4.6875rem;
            pointer-events: none;
            user-select: none;
        }
    }

    .logout{
        width: 3.125rem;
        height: 3.125rem;
        border-radius: 50%;
        overflow: hidden;
        @include centerItem;
        background: #452F02;
        position: absolute;
        bottom: 1.25rem;
        left: 50%;
        transform: translate(-50%,0);
        cursor: pointer;
        
        img{
            width: 1.25rem;
        }
    }

    ul{
        @include flex(center,center,column);
        gap: 2.5rem;
        padding: 1.3125rem 1.25rem;
        margin-top: 2.8125rem;

        li{
            width: 1.875rem;
            height: 1.875rem;
            @include centerItem;
            cursor: pointer;
            position: relative;

            &::before{
                content: '';
                width: calc(100% + 1.875rem);
                height: calc(100% + 1.875rem);
                background: #FFC248;
                opacity: 0;
                position: absolute;
                top: 50%;
                left: 50%;
                border-radius: 50%;
                transition: .2s all;
                transform: translate(-50%,-50%);
                z-index: 5;
            }

            &:hover{
                &::before{
                    opacity: 1;
                }
                img{
                    filter: invert(1) brightness(5.5);
                }
            }

            &:first-child{
                &::before{
                    opacity: 1;
                }
                img{
                    filter: invert(1) brightness(5.5);
                }
            }

            .item_wrapper{
                z-index: 10;
                @include centerItem;

                img{
                    width: 1.4375rem;
                    transition: all .2s;
                    object-fit: contain;
                    user-select: none;
                }
            }
        }
    }

}
</style>