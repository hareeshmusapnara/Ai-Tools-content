import { SidebarTrigger } from '@/components/ui/sidebar'
import { Search } from 'lucide-react'
import React from 'react'


function AppHeader() {
    return (
        <div className='p-5 shadow-sm border-b-2 flex justify-between items-center'>
        <div className='flex gap-2 items-center p-2 border rounded-md max-w-lg'>
            <Search/>
            <input type='text' placeholder='Search...' className='outline-none'/>
        </div>
        <div>
            <h2 className='bg-primary p-1 rounded-full text-xs text-white px-2 max-w-md'>Create And Optimize the Content</h2>
        </div>
        </div>
    )
}

export default AppHeader