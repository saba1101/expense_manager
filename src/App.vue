<script setup>
import globalData from "@/scripts/data.js"
import Sidebar from "@/components/Layout/Sidebar.vue"
import Balance from '@/components/Preview/Balance.vue'
import Card from '@/components/Preview/Card.vue'
import SpendChart from '@/components/Preview/SpendChart.vue'
import QuickActions from '@/components/Preview/QuickActions.vue'
import DynamicsBlock from '@/components/Preview/DynamicsBlock.vue'
import Header from '@/components/Layout/Header.vue'
import Customize from '@/components/Customization/Customize.vue'
import { nextTick, onMounted, ref } from "@vue/runtime-core"

const global = globalData()
const activities = global.activities.value
const last_month_activities = global.last_month_activities.value
const customizeUserActive = ref(false)
const loadHeader = ref(true)
const userCardTheme = ref(null)

const checkConfig = () => {
  let confData = ['userName','userAvatar','userCardTheme']
  confData.forEach(f => {
    if(window.localStorage.getItem(f)){
      customizeUserActive.value = false
      userCardTheme.value = window.localStorage.getItem('userCardTheme')
    }
    else{
      customizeUserActive.value = true
    }
    loadHeader.value = false
    nextTick(() => {
      loadHeader.value = true
    })
  })
}

onMounted(() => {
  checkConfig()
})


</script>

<template>
  <Customize v-if="customizeUserActive" @saved="checkConfig" />
  <Header v-if="loadHeader" style="position: sticky; z-index: 20;top: 0; right: 0; width: 100%" />
  <div class="global_content_wrapper">
    <div class="sidebar_placeholder">
      <Sidebar
        :data="global.sidebar_items.value"
        style="position: fixed; top: 0;left: 0; width: 7.5625rem; z-index: 25;"
      />
    </div>
    <div class="preview_placeholder">
      <div class="title title_margin">
        <span>Expence Manager</span>
      </div>
      <Balance :balance="'1302.00'" class="balance_block"/>
      <div class="title_card title_margin">
        <span>ATM CARD</span>
      </div>
      <Card class="card_block" :theme="userCardTheme ? userCardTheme : 'orange'" :balance="'552.00'"/>
      <div class="title_activity title_margin">
        <span>LATEST ACTIVITY</span>
      </div>
      <ul class="activities">
        <li v-for="(a,ind) in activities" :key="ind">
          <div class="left">
            <div class="activity_icon">
              <img src="@/assets/icons/key.svg" alt="">
            </div>
            <div class="activity_title">
              <span>{{ a.title }}</span>
              <span class="status">{{ a.status }}</span>
            </div>
          </div>
          <div class="right">
            <span>
              {{ a.discount }}
            </span>
          </div>
        </li>
      </ul>
    </div>
    <div class="content_placeholder">
      <div class="top_content">
        <div class="left_side">
          <div class="spendchart">
            <SpendChart :total="4554" class="spendchart_block" />
            <!-- <DynamicsBlock class="dynamics_block" :percentage="'+ 20%'" :label="'Spend This Week'" :amount="'$554.00'" :dynamicType="'margin'"/> -->
          </div>
          <div class="dynamics">
            <DynamicsBlock class="dynamics_block" :percentage="'+ 20%'" :label="'Spend This Week'" :amount="'$4554.00'" :dynamicType="'chart'"/>
            <DynamicsBlock class="dynamics_block" :percentage="'+ 13.54%'" :label="'Total Cashback'" :amount="'$314.00'" :dynamicType="'items'"/>
          </div>
        </div>
        <div class="right_side">
          <QuickActions :data="global.quick_actions.value"/>
        </div>
      </div>
      <div class="bottom_content">
        <div class="last_month_activities">
          <div class="label_activity">
            <span>
              Last Month Activities
            </span>
          </div>
          <ul>
            <li class="column_names">
              <div class="col_name" v-for="(col,ind) in last_month_activities.cols" :key="ind" >
                <span>
                  {{ col }}
                </span>
              </div>
            </li>
            <li class="column_data" v-for="(d,ind) in last_month_activities.data" :key="ind" >
              <div class="data_title">
                <span>{{ d.title }}</span>
              </div>
              <div class="data_status">
                <span>{{ d.status }}</span>
              </div>
              <div class="data_date">
                <span>{{ d.date }}</span>
              </div>
              <div class="data_amount">
                <span>{{ d.amount }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

*{
  &::-webkit-scrollbar {
    display: block !important;
    width: 0.375rem;
  }

  &::-webkit-scrollbar-thumb{
    background: #FFC248;
    border-radius: 0.375rem;
  }
}

.global_content_wrapper{
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 7.5625rem 30rem auto;

  .sidebar_placeholder{

  }

  .preview_placeholder{
    height: 100vh;
    background: darken($color: #FFFBF3, $amount: 2%) ;
    border-right: 0.0625rem solid rgba(#3d3d3d,.1);
    z-index: 99;
    padding-top: 3.125rem;

    .title_margin{
      margin-left: 1.875rem;
      margin-top: 2.5rem;
    }

    .title{
      margin-left: 1.875rem;
      margin-top: -0.3125rem;
      span{
        font-size: 1.375rem;
        color: #452F02;
      }
    }
    .balance_block{
      height: 11.75rem;
    }
    .balance_block,.card_block{
      width: 26.5rem;
      margin: auto;
      margin-top: 1.5625rem;
    }

    .title_card{
      span{
        color: #EB001B;
        font-size: 1rem;
      }
    }
    .title_activity{
      padding-bottom: 0.9375rem;
      border-bottom: 0.0625rem solid #CECECE;
      span{
        font-size: 1rem;
        color: #EB001B;
        font-weight: 400;
        letter-spacing: 0.0625rem;
      }
    }

    .activities{
      width: 100%;
      height: 15.625rem;
      overflow: auto;
      padding: 0 1.5625rem;
      @include flex(flex-start,flex-start,column);

      li{
        width: 100%;
        @include flex(space-between,center,row);
        padding-top: 2.1875rem;

        .left{
          @include flex(flex-start,flex-start,row);

          .activity_icon{
            img{
              width: 2.8125rem;
            }
          }
          .activity_title{
            margin-left: 0.9375rem;

            span{
              display: block;
              font-size: 1rem;
              color: #452F02;
              &.status{
                color: #22D03E !important;
                margin-top: 0.3125rem;
              }
            }
          }
        }
        .right{
          span{
            color: #EB001B;
            font-size: 1.25rem;
          }
        }
      }
    }
  }

  .content_placeholder{
    height: 100vh;
    overflow: auto;
    padding-left: 2.8125rem;
    padding-top: 6rem;
    @include flex(flex-start,flex-start,column);
    .top_content{
      width: 32.5rem;
      gap: 2.8125rem;
      @include flex(flex-start,flex-start,row);

      .left_side{
        .dynamics{
          margin-top: 1.5625rem;
          @include flex(flex-start,flex-start,row);
          gap: 1.875rem;
        
          .dynamics_block{
            width: 21.875rem;
            height: 14rem;
          }
        }
      }
    }
    .bottom_content{
      width: 100%;
      padding-bottom: 5rem;
      .last_month_activities{
        .label_activity{
          margin-top: 0.9375rem;
          padding: 0.9375rem 0.9375rem;
          span{
            color: #130F26;
            font-size: 1.4375rem;
          }
        }

        ul{
          width: 100%;
          @include flex(flex-start,flex-start,column);
          
          li{
            width: 100%;
            @include flex(flex-start,flex-start,row);
            padding: 0.9375rem 0.9375rem;
            border-bottom: 0.0625rem solid rgba(#130F26,.1);
            cursor: default;
            transition: all .2s;

            &:first-child{
              background: rgba(#130F26,.1);
            }

            &:hover:not(&:first-child){
              background: rgba(#FFC248,.3);
            }

            & > div{
              width: 18.75rem;
            }
            &.column_names{
              position: sticky;
              top: -1.25rem;
              background: #FFC248;
              border-top-left-radius: 0.45rem;
              border-top-right-radius: 0.45rem;
              .col_name{
                span{
                  color: #ffffff;
                  font-size: 0.875rem;
                }
              }
            }

            &.column_data{
              .data_title{
                span{
                  font-size: 1.1875rem;
                  color: #452F02;
                }
              }
              .data_status{
                span{
                  color: #22D03E;
                }
              }
              .data_date,.data_amount{
                span{
                  color: #452F02;
                }
              }

            }
          }
        }
      }
    }
  }
}
</style>
