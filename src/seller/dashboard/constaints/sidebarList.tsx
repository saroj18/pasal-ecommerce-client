import {BookHeart, DollarSign, HelpCircle, Layers, LayoutDashboard, LineChart, ListOrdered, MoveDiagonal, Settings, ShoppingBasket, Star, Truck, User} from 'lucide-react'

type listProps={
    name:string
    url:string
    icon:React.ReactNode
}

export const dashboardList:listProps[]=[
    {
        name:'Dashboard',
        url:'/dashboard',
        icon:<LayoutDashboard/>,
    },
    {
        name:'Product',
        url:'/dashboard/product',
        icon:<ShoppingBasket />
    },
    {
        name:'Inventory',
        url:'/dashboard/inventory',
        icon:<Layers />
    },
    {
        name:'Order',
        url:'/dashboard/order',
        icon:<ListOrdered />
    },
    {
        name:'Review',
        url:'/dashboard/review',
        icon:<Star />
    },
    {
        name:'Delevery',
        url:'/dashboard/delevery',
        icon:<Truck />
    },
    {
        name:'Payment',
        url:'/payment',
        icon:<DollarSign />
    },
    {
        name:'Analytics',
        url:'/dashboard/analytics',
        icon:<LineChart />
    },
    {
        name:'Others',
        url:'/other',
        icon:<BookHeart />
    },
]

export const accountList:listProps[]=[
    {
        name:'Setting',
        url:'/setting',
        icon:<Settings/>
    },
    {
        name:'Help',
        url:'/help',
        icon:<HelpCircle/>
    },
    {
        name:'Manage User',
        url:'/manageuser',
        icon:<MoveDiagonal/>
    },
]