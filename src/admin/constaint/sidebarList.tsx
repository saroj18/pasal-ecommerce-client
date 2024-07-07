import { BadgeDollarSign, BarChart4, Bell, DollarSignIcon, HandCoins, LayoutDashboard, Store, Truck, View } from "lucide-react";

export const generalSideBarList=[
    {
        name:'Dashboard',
        url:'dashboard',
        icon:<LayoutDashboard/>
    },
    {
        name:'Vendor',
        url:'vendor',
        icon:<Store />
    },
    {
        name:'Delivery',
        url:'delivery',
        icon:<Truck />
    },
    {
        name:'Offers',
        url:'offer',
        icon:<HandCoins />
    },
    {
        name:'Revenue',
        url:'revenue',
        icon:<DollarSignIcon />
    },
    {
        name:'Analytics',
        url:'/analytics',
        icon:<BarChart4 />
    },
    {
        name:'Approve Vendor',
        url:'/approve',
        icon:<View />
    },
    {
        name:'Notification',
        url:'/notification',
        icon:<Bell />
    },
]