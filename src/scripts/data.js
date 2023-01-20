import { ref } from "vue"

export default function globalData() {
    const sidebar_items = ref([
        {
            title: 'Category',
            src: '1.svg'
        },
        {
            title: 'Popular',
            src: '2.svg'
        },
        {
            title: 'Docs',
            src: '3.svg'
        },
        {
            title: 'Charts',
            src: '4.svg'
        },
        {
            title: 'Tickets',
            src: '5.svg'
        },
        {
            title: 'Settings',
            src: '6.svg'
        }
    ])

    const user_avatars = ref([
        {
            src: '1',
            key: 'avatar_1',
        },
        {
            src: '2',
            key: 'avatar_2',
        },
        {
            src: '3',
            key: 'avatar_3',
        },
        {
            src: '4',
            key: 'avatar_4',
        },
        {
            src: '5',
            key: 'avatar_5',
        },
        {
            src: '6',
            key: 'avatar_6',
        },
    ])

    const card_themes = ref([
        {
            key: 'orange',
            css: `linear-gradient(-20deg, #fc6076 0%, #ff9a44 100%)`,
        },
        {
            key: 'dark_purple',
            css: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,
        },
        {
            key: 'light_blue',
            css: `linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)`,
        },
        {
            key: 'vine',
            css: `linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)`,
        },
        {
            key:'sun',
            css: `linear-gradient(to right, #f83600 0%, #f9d423 100%)`,
        },
        {
            key:'lime',
            css: `linear-gradient(to top, #0fd850 0%, #f9f047 100%)`,
        },
        {
            key: 'blue',
            css: `linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%)`,
        },
        {
            key: 'silver_blue',
            css: `linear-gradient(-225deg, #3d3d3d 0%, #22E1FF 48%, #3d3d3d 100%)`,
        }
    ])

    const quick_actions = ref([
        {
            key: 'category',
            src: 'category',
            color: '#FD4438',
            hover: false,
            label: 'Home',
        },
        {
            key: 'car',
            src: 'car',
            color: '#4807EA',
            hover: false,
            label: 'Gas',
        },
        {
            key: 'security',
            src: 'security',
            color: '#F2C94C',
            hover: false,
            label: 'Security',
        },
        {
            key: 'video',
            src: 'video',
            color: '#56CCF2',
            hover: false,
            label: 'Videos',
        },
        {
            key: 'games',
            src: 'games',
            color: '#F2994A',
            hover: false,
            label: 'Games',
        },
        {
            key: 'docs',
            src: 'docs',
            color: '#27AE60',
            hover: false,
            label: 'Papers',
        },
        {
            key: 'shops',
            src: 'shop',
            color: '#EF5DA8',
            label: 'Shops',
            hover: false,
        },
        {
            key: 'travel',
            src: 'travel',
            color: '#9B51E0',
            hover: false,
            label: 'Travel',
        },
        {
            key: 'service',
            src: 'service',
            color: '#219653',
            hover: false,
            label: 'Service',
        },
    ])

    const activities = ref([
        {
            title: 'Office Security Guard',
            status: 'Transaction Successful',
            discount: '-$277',
        },
        {
            title: 'Office Security Guard',
            status: 'Transaction Successful',
            discount: '-$1230',
        },
        {
            title: 'Office Security Guard',
            status: 'Transaction Successful',
            discount: '-$532',
        },
        {
            title: 'Office Security Guard',
            status: 'Transaction Successful',
            discount: '-$1500',
        },
        {
            title: 'Office Security Guard',
            status: 'Transaction Successful',
            discount: '-$350',
        },
        {
            title: 'Office Security Guard',
            status: 'Transaction Successful',
            discount: '-$200',
        },
    ])

    const last_month_activities = ref({
        cols: ['Categories Name','Transaction Status','Date','Amount'],
        data: [
            {
                title: 'Home Electricity Bill',
                status: 'Successfull',
                date: '27 / 10 /2023',
                amount: '$500',
            },
            {
                title: 'Car Services',
                status: 'Successfull',
                date: '2 / 11 /2023',
                amount: '$240',
            },
            {
                title: 'Festival Shopping',
                status: 'Successfull',
                date: '29 / 12 /2023',
                amount: '$620',
            },
            {
                title: 'Home Electricity Bill',
                status: 'Successfull',
                date: '27 / 10 /2023',
                amount: '$500',
            },
            {
                title: 'Car Services',
                status: 'Successfull',
                date: '2 / 11 /2023',
                amount: '$240',
            },
            {
                title: 'Festival Shopping',
                status: 'Successfull',
                date: '29 / 12 /2023',
                amount: '$620',
            },
        ]
    })
    return{
        sidebar_items,
        card_themes,
        quick_actions,
        user_avatars,
        activities,
        last_month_activities,
    }
}