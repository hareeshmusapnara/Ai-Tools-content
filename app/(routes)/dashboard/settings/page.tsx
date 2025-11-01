"use client"
import React, { useState } from 'react'
import { UserProfile, useUser } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Trash2, Download, User, Key, Database } from 'lucide-react'

function SettingsPage() {
  const { user, isLoaded } = useUser()
  const [apiUsage, setApiUsage] = useState(0)

  if (!isLoaded) {
    return <div className='p-5'>Loading...</div>
  }

  if (!user) {
    return <div className='p-5'>Please sign in to access settings.</div>
  }

  const clearHistory = () => {
    localStorage.removeItem('ai-content-history')
    alert('History cleared successfully!')
  }

  const exportHistory = () => {
    const history = localStorage.getItem('ai-content-history')
    if (history) {
      const blob = new Blob([history], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'ai-content-history.json'
      a.click()
    }
  }

  return (
    <div className='p-5 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-bold mb-8'>Settings</h1>
      
      <div className='space-y-8'>
        {/* Account Settings */}
        <div className='bg-white rounded-lg shadow-sm border p-6'>
          <div className='flex items-center gap-2 mb-4'>
            <User className='h-5 w-5' />
            <h2 className='text-xl font-semibold'>Account Settings</h2>
          </div>
          <UserProfile routing="hash" />
        </div>

        {/* API Usage */}
        <div className='bg-white rounded-lg shadow-sm border p-6'>
          <div className='flex items-center gap-2 mb-4'>
            <Key className='h-5 w-5' />
            <h2 className='text-xl font-semibold'>API Usage</h2>
          </div>
          <div className='grid md:grid-cols-2 gap-4'>
            <div className='p-4 bg-gray-50 rounded-lg'>
              <h3 className='font-medium text-gray-700'>Current Usage</h3>
              <p className='text-2xl font-bold text-blue-600'>{apiUsage} requests</p>
              <p className='text-sm text-gray-500'>This month</p>
            </div>
            <div className='p-4 bg-gray-50 rounded-lg'>
              <h3 className='font-medium text-gray-700'>Model</h3>
              <p className='text-lg font-semibold'>NVIDIA Nemotron</p>
              <p className='text-sm text-gray-500'>Free tier</p>
            </div>
          </div>
        </div>

        {/* Data Management */}
        <div className='bg-white rounded-lg shadow-sm border p-6'>
          <div className='flex items-center gap-2 mb-4'>
            <Database className='h-5 w-5' />
            <h2 className='text-xl font-semibold'>Data Management</h2>
          </div>
          <div className='space-y-4'>
            <div className='flex justify-between items-center p-4 bg-gray-50 rounded-lg'>
              <div>
                <h3 className='font-medium'>Export History</h3>
                <p className='text-sm text-gray-600'>Download all your content generation history</p>
              </div>
              <Button onClick={exportHistory} variant="outline" suppressHydrationWarning>
                <Download className='h-4 w-4 mr-2' />
                Export
              </Button>
            </div>
            
            <div className='flex justify-between items-center p-4 bg-red-50 rounded-lg border border-red-200'>
              <div>
                <h3 className='font-medium text-red-800'>Clear History</h3>
                <p className='text-sm text-red-600'>Permanently delete all your content generation history</p>
              </div>
              <Button onClick={clearHistory} variant="destructive" suppressHydrationWarning>
                <Trash2 className='h-4 w-4 mr-2' />
                Clear All
              </Button>
            </div>
          </div>
        </div>

        {/* App Information */}
        <div className='bg-white rounded-lg shadow-sm border p-6'>
          <h2 className='text-xl font-semibold mb-4'>App Information</h2>
          <div className='grid md:grid-cols-2 gap-4 text-sm'>
            <div>
              <span className='font-medium'>Version:</span> 1.0.0
            </div>
            <div>
              <span className='font-medium'>Last Updated:</span> <span suppressHydrationWarning>{new Date().toLocaleDateString()}</span>
            </div>
            <div>
              <span className='font-medium'>AI Provider:</span> OpenRouter
            </div>
            <div>
              <span className='font-medium'>Model:</span> NVIDIA Nemotron Nano 12B
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage