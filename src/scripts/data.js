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
        }
    ])
    return{
        sidebar_items,
        card_themes
    }
}