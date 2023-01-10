<script setup>
import globalData  from '@/scripts/data.js'
const props = defineProps({
    cardHolder: {
        type: String,
        default: 'Name Lastname',
    },
    balance: {
        type: String,
        defautl: '00.00',
    },
    currency: {
        type: Object,
        default: {
            title: 'EUR',
            symbol: '€',
        },
    },
    theme: {
        type: String,
        default: "vine"
    }
})

const getThemeByKey = (key) => {
    return globalData().card_themes.value.find(el => el.key === key).css
}

</script>

<template>
    <div class="card" :style="{
        backgroundImage: getThemeByKey(props.theme)
    }">
        <div class="top">
            <div class="currency">
                <div class="mark">
                    <span>{{ props.currency.symbol }}</span>
                </div>
                <span> {{ props.currency.title }} </span>
            </div>
            <div class="icon">
                <img src="@/assets/icons/card/chip.svg" alt="">
            </div>
        </div>
        <div class="middle">
            <div class="amount">
                <span> {{ props.currency.symbol }} {{ props.balance }}</span>
            </div>
        </div>
        <div class="bottom">
            <div class="detail">
                <span>
                    CARD HOLDER
                    <span>
                        {{ props.cardHolder }}
                    </span>
                </span>
            </div>
            <div class="icon-mark">
                <img src="@/assets/icons/card/visa.svg" alt="">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card{
    width: 100%;
    height: 13.75rem;
    padding: 1.5rem;
    border-radius: 1.25rem;
    @include flex(flex-start,flex-start,column);

    img{
        user-select: none;
        pointer-events: none;
    }

    .top,.bottom{
        width: 100%;
        @include flex(space-between,center,row);
    }

    .top{
        .currency{
            @include flex(flex-start,center,row);
            gap: 0.625rem;
            .mark{
                border: 0.0625rem solid rgba(#333333,.6);
                padding: 0.3125rem 0.5rem;
                border-radius: 0.375rem;
                span{
                    color: #333333;
                    font-size: 1rem;
                }
            }
            span{
                font-size: 1rem;
                color: #333333;
            }
        }
        .icon{
            img{
                width: 3.125rem;
            }
        }
    }

    .middle{
        margin-top: 1.5625rem;
        .amount{
            span{
                font-size: 2.1875rem;
                color: #333333;
            }
        }
    }

    .bottom{
        margin-top: 1.25rem;

        .detail{
            span{
                font-size: 0.75rem;
                color: rgba(#333333,.7);

                span{
                    color: #333333;
                    font-size: 1rem;
                    letter-spacing: 0.0625rem;
                    margin-left: 0.625rem;
                }
            }
        }
        .icon-mark{
            img{
                width: 2.5rem;
            }
        }
    }
}
</style>