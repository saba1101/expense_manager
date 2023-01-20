<script setup>
import { ref } from 'vue';

const props = defineProps({
    total: {
        type: String,
        default: '550',
    }
})

const DaysCharge = ref([
    {
        title: 'Mo',
        charge: '20%',
        total: 1300,
    },
    {
        title: 'Tu',
        charge: '50%',
        total: 1100,
    },
    {
        title: 'We',
        charge: '37%',
        total: 900,
    },
    {
        title: 'Th',
        charge: '54%',
        total: 700,
    },
    {
        title: 'FR',
        charge: '30%',
        total: 500,
    },
    {
        title: 'Sa',
        charge: '80%',
        total: 300,
    },
    {
        title: 'Su',
        charge: '76%',
        total: 100,
    },
])

</script>

<template>
    <div class="spend-chart">
        <div class="top">
            <div class="left">
                <div class="title">
                    <span>
                        This Week Spend
                    </span>
                </div>
                <div class="charges">
                    <ul>
                        <li>
                            <img src="@/assets/icons/spendchart/gamepad.svg" alt="">
                        </li>
                        <li>
                            <img src="@/assets/icons/spendchart/car.svg" alt="">
                        </li>
                        <li>
                            <img src="@/assets/icons/spendchart/house.svg" alt="">
                        </li>
                    </ul>
                </div>
            </div>
            <div class="right">
                <div class="total-spend">
                    <span>${{ props.total }}</span>
                </div>
            </div>
        </div>
        <div class="bottom">
            <div class="chart-upscale">
                <ul>
                    <li v-for="(c,ind) in DaysCharge" :key="ind">
                        <span>{{ c.total }}</span>
                    </li>
                </ul>
            </div>
            <div class="chart-dynamics">
                <ul>
                    <li v-for="(c,ind) in DaysCharge" :key="ind">
                        <div :style="{height: c.charge}" class="dynamic-bar"></div>
                        <span>{{ c.title }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.spend-chart{
    width: 100%;
    background: #fff;
    padding: 1.25rem;
    border-radius: 1.25rem;
    
    .top{
        padding-bottom: 1.25rem;
        border-bottom: 0.0625rem solid #D7D7D7;
        @include flex(space-between,center,row);
        .left{
            .title{
                font-size: 1.4375rem;
                font-weight: 600;
                color: #130F26;
            }
            .charges{
                margin-top: 0.625rem;

                ul{
                    @include flex(flex-start,center,row);
                    gap: 0.625rem;

                    li{
                        width: 2rem;
                        height: 2rem;
                        border-radius: 50%;
                        overflow: hidden;
                        @include centerItem;
                        background: #FD4438;

                        &:nth-child(3){
                            background: #4807EA;
                        }

                        img{
                            width: 1.25rem;
                            object-fit: contain;
                            aspect-ratio: 3/2;
                            transform: scale(1.2);
                            user-select: none;
                            pointer-events: none;
                            
                        }
                    }
                }
            }
        }
        .right{
            .total-spend{
                background: rgba(#fff,.8);
                border-radius: 0.625rem;
                padding: 1rem 1.5rem;
                span{
                    font-size: 2.25rem;
                }
            }
        }
    }

    .bottom{
        margin-top: 2.1875rem;
        @include flex(flex-start,flex-end,row);

        .chart-upscale{
            ul{
                @include flex(flex-start,flex-start,column);
                gap: 1.5rem;
            }
        }

        .chart-dynamics{
            height: 17.5rem; //static
            margin-left: 2.1875rem;

            ul{
                height: 100%;
                @include flex(flex-start,flex-start,row);
                gap: 1.5rem;

                li{
                    height: 100%;
                    position: relative;
                    @include flex(flex-end,center,column);

                    &:nth-child(even){
                        .dynamic-bar{
                            background: #FD4438;
                        }
                    }

                    .dynamic-bar{
                        width: 1.9375rem;
                        background: #4807EA;
                        border-radius: 0.3125rem;
                        margin-bottom: 0.625rem;
                    }
                }
            }
        }
    }
}
</style>