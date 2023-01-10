<script setup>
const props = defineProps({
    balance: {
        type: String,
        default: '00.00'
    }
})
</script>

<template>
    <div class="balance">
        <div class="title">
            <span>
               CURRENT BALANCE
            </span>
        </div>
        <div class="content">
            <div class="icon">
               <img src="@/assets/icons/balance/wallet.svg" alt="">
            </div>
            <div class="detail">
                <span class="balance-amount">
                    ${{ props.balance }}
                </span>
                <span class="total-expense">
                    Total Expense
                </span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.balance{
    width: 100%;
    padding: 1.4375rem 2.5rem;
    border-radius: 1.25rem;
    background: #FFC248;
    background-image: url('../../assets/icons/balance/card-side.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
    overflow: hidden;

    .title{
        span{
            font-size: 1.125rem;
            letter-spacing: 0.0625rem;
            color: #130F26;
        }
    }

    .content{
        margin-top: 1.5625rem;
        @include flex(flex-start,center,row);
        .icon{
            img{
                width: 4.0625rem;
                user-select: none;
                position: none;
            }
        }

        .detail{
            margin-left: 0.9375rem;
            @include flex(flex-start,center,column);
            .balance-amount{
                font-size: 2.25rem;
                color: #130F26;
                font-weight: 43.75rem;
            }
            .total-expense{
                margin-top: 5px;
                font-size: 1rem;
            }

        }
    }

    


}
</style>