import {Bell, BookHeart, DollarSign, HelpCircle, Layers, LayoutDashboard, LineChart, ListOrdered, MoveDiagonal, PersonStanding, Settings, ShoppingBasket, Star, Truck, User} from 'lucide-react'

export type listProps={
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
        name:'Delevery Person',
        url:'/dashboard/delevery-person',
        icon:<PersonStanding />
    },
    {
        name:'Customer',
        url:'/dashboard/customer',
        icon:<User />
    },
    {
        name:'Notification',
        url:'/dashboard/notification',
        icon:<Bell />
    }
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