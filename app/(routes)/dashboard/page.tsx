"use client"
import SearchSection from '@/app/(routes)/dashboard/_components/SearchSection'
import React, { useState } from 'react'
import TemplateListSection from './_components/TemplateListSection'



function Dashboard() {
    const[userSearchInput, setUserSearchInput]= useState<string>();
    return (
        <div>

            <SearchSection onSearchInput={(value:string)=>setUserSearchInput(value)}/>
            <TemplateListSection userSearchInput={userSearchInput}/>
        </div>
    )
}

export default Dashboard