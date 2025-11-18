import React from 'react'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import {  History, Home,  Inbox,  Settings,  } from "lucide-react"
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { UserButton } from '@clerk/nextjs'

const items = [
    {
        title: "Home",
        url: "/dashboard",
        icon: Home,
    },
    {
        title: "History",
        url: "/dashboard/history",
        icon: History,
    },
    {
        title: "Billing",
        url: "/dashboard/billing",
        icon: Inbox,
    },
   
    {
        title: "Settings",
        url: "/dashboard/settings",
        icon: Settings,
    },
]

export function AppSidebar() {
    const path = usePathname();
    return (
        <Sidebar>
            <SidebarHeader>
                
                <div className='p-4'>
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-lg">
                            <Image src="/contentai-logo.svg" alt="ContentAI Logo" width={24} height={24} />
                        </div>
                        <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            LathorAI
                        </div>
                    </div>
                    <h2 className='text-sm text-gray-400 text-center'>AI-Powered Content Creation</h2>
                    <hr  className='my-3 border'/>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>

                    <SidebarGroupContent>
                        <SidebarMenu className='mt-5'>
                            {items.map((item, index) => (
                                // <SidebarMenuItem key={item.title} className='p-2'>
                                //     <SidebarMenuButton asChild className=''>
                                <a href={item.url} key={index} className={`p-2 text-lg flex gap-2 items-center
                                 hover:bg-blue-100 rounded-lg ${path.includes(item.url) && 'bg-gray-200ß'}`}>
                                    <item.icon className='h-5 w-5' />
                                    <span>{item.title}</span>
                                </a>
                                //     </SidebarMenuButton>
                                // </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <div className='p-4 border-t'>
                    <div className='flex items-center justify-center mb-3'>
                        <UserButton afterSignOutUrl='/' appearance={{ elements: { avatarBox: 'w-10 h-10' } }} />
                    </div>
                    <h2 className='text-gray-400 text-xs text-center'>Copyright @Harishm00007</h2>
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}