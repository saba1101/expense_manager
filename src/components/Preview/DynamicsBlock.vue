<script setup>
import { ref } from "@vue/reactivity"

const props = defineProps({
    label: {
        type: String,
        default: '',
    },
    amount: {
        type: String,
        default: '',
    },
    dynamicType: {
        type: String,
        default: '',
    },
    percentage: String
})
const chartData = ref(['50%','90%','37%','44%','76%','34%','80%','67%','45%'])
const progressbarDynamic = ref('85%')

</script>

<template>
    <div class="dynamic-block">
        <div class="title">
           <span>{{ props.label }}</span>
        </div>
        <div class="dynamic">
            <span>{{ props.amount }}</span>
            <span 
                class="percentage"
                :style="{
                    color: props.percentage.split('')[0] === '+' ? '#22D03E' : '#FD3D00'
                }"
            >
                {{ props.percentage }}
            </span>
        </div>
        <div class="preview-progress">
            <div v-if="props.dynamicType === 'chart'" class="chart">
                <ul>
                    <li v-for="(d,ind) in chartData" :key="ind">
                        <div class="progress">
                            <div :style="{height: d}" class="progress-state"></div>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="items" v-if="props.dynamicType === 'items'">
                <ul>
                    <li @mouseenter="progressbarDynamic = '45%'" @mouseleave="progressbarDynamic = '95%'">
                        <img src="@/assets/icons/spendchart/car.svg" alt="">
                    </li>
                    <li @mouseenter="progressbarDynamic = '85%'" @mouseleave="progressbarDynamic = '95%'" >
                        <img src="@/assets/icons/spendchart/gamepad.svg" alt="">
                    </li>
                    <li @mouseenter="progressbarDynamic = '25%'" @mouseleave="progressbarDynamic = '95%'" >
                        <img src="@/assets/icons/spendchart/house.svg" alt="">
                    </li>
                </ul>
                <div class="progress-bar">
                    <div :style="{width: progressbarDynamic}" class="state"></div>
                </div>
            </div>

            <div class="trading" v-if="props.dynamicType === 'margin'">
                <div class="title">
                    <span>
                        {{ props.percentage.replace('+' || '-','') }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.dynamic-block{
    max-width: 15.625rem;
    padding: 1.5rem 1.25rem;
    border-radius: 1.25rem;
    background: #FFFFFF;
    .title{
        span{
            font-size: 0.875rem;
            color: #333333;
        }
    }

    .dynamic{
        margin-top: 0.875rem;
        
        span{
            color: #333333;
            font-weight: 600;
            font-size: 1.25rem;
            display: block;

            &.percentage{
                font-size: 0.875rem;
                margin-top: 0.5625rem;
                color: rgba(#333333,.6);
            }
        }
    }

    .preview-progress{
        margin-top: 2.4375rem;

        .chart{
            height: 3.75rem;

            ul{
                height: 100%;
                @include flex(space-between,flex-end,row);

                li{
                    height: 100%;

                    &:nth-child(even){
                        .progress-state{
                            background: #FD3D00 !important;
                            box-shadow: 0 0 1.25rem 1.25rem rgba(#FD3D00,.1) !important;
                        }
                    }
                    .progress{
                        width: 0.625rem;
                        height: 100%;
                        border-radius: 0.625rem;
                        background: #E0E0E0;
                        overflow: hidden;
                        @include flex(unset,flex-end,row);

                        .progress-state{
                            width: 100%;
                            background: #4807EA;
                            box-shadow: 0 0 1.25rem 1.25rem rgba(#4807EA,.1);
                            transition: all 1s;
                        }
                    }
                }
            }
        }

        .trading{
            margin-top: -1.25rem;
            @include centerItem;
            .title{
                width: 4.375rem;
                height: 4.375rem;
                border-radius: 50%;
                overflow: hidden;
                background: #3BE5B8;
                @include centerItem;

                span{
                    font-size: 1rem;
                    color: #FFFFFF;
                    font-weight: 900;
                }
            }
        }

        .items{
            width: 100%;
            .progress-bar{
                margin-top: 0.9375rem;
                width: 100%;
                height: 0.625rem;
                background: #E0E0E0;
                border-radius: 0.625rem;
                overflow: hidden;

                .state{
                    height: 100%;
                    background: #FFC248;
                    transition: all .2s
                }
            }

            ul{
                @include flex(flex-start,center,row);

                &:hover{
                    li{
                        margin-left: 0.3125rem;
                    }
                }

                li{
                    width: 2.1875rem;
                    height: 2.1875rem;
                    border-radius: 50%;
                    overflow: hidden;
                    @include centerItem;
                    background: #FD4438;
                    margin-left: -0.625rem;
                    transition: all .2s;
                    cursor: pointer;

                    &:hover{
                        transform: scale(1.1);
                        z-index: 5;
                    }

                    &:first-child{
                        margin-left: 0;
                    }

                    &:nth-child(even){
                        background: #4807EA !important;
                    }
                    img{
                        width: 1.25rem;
                        object-fit: contain;
                        pointer-events: none;
                        user-select: none;
                    }
                }
            }
        }
    }
}

</style>