"use client"
import React, { useState, useEffect } from 'react'
import { Clock, FileText, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface HistoryItem {
  id: string
  template: string
  input: string
  output: string
  timestamp: string
}

function HistoryPage() {
  const [history, setHistory] = useState<HistoryItem[]>([])

  useEffect(() => {
    // Load history from localStorage
    const savedHistory = localStorage.getItem('ai-content-history')
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory))
    }
  }, [])

  const clearHistory = () => {
    localStorage.removeItem('ai-content-history')
    setHistory([])
  }

  const deleteItem = (id: string) => {
    const updatedHistory = history.filter(item => item.id !== id)
    setHistory(updatedHistory)
    localStorage.setItem('ai-content-history', JSON.stringify(updatedHistory))
  }

  return (
    <div className='p-5'>
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-3xl font-bold'>Content Generation History</h1>
        {history.length > 0 && (
          <Button onClick={clearHistory} variant="destructive">
            <Trash2 className='h-4 w-4 mr-2' />
            Clear All
          </Button>
        )}
      </div>

      {history.length === 0 ? (
        <div className='text-center py-20'>
          <FileText className='h-16 w-16 mx-auto text-gray-400 mb-4' />
          <h2 className='text-xl text-gray-600 mb-2'>No history yet</h2>
          <p className='text-gray-500'>Start generating content to see your history here</p>
        </div>
      ) : (
        <div className='space-y-4'>
          {history.map((item) => (
            <div key={item.id} className='border rounded-lg p-4 bg-white shadow-sm'>
              <div className='flex justify-between items-start mb-3'>
                <div className='flex items-center gap-2'>
                  <Clock className='h-4 w-4 text-gray-500' />
                  <span className='text-sm text-gray-500'>{item.timestamp}</span>
                </div>
                <Button 
                  onClick={() => deleteItem(item.id)} 
                  variant="ghost" 
                  size="sm"
                >
                  <Trash2 className='h-4 w-4' />
                </Button>
              </div>
              
              <h3 className='font-semibold text-lg mb-2'>{item.template}</h3>
              
              <div className='grid md:grid-cols-2 gap-4'>
                <div>
                  <h4 className='font-medium text-sm text-gray-700 mb-1'>Input:</h4>
                  <p className='text-sm bg-gray-50 p-2 rounded border'>{item.input}</p>
                </div>
                
                <div>
                  <h4 className='font-medium text-sm text-gray-700 mb-1'>Generated Content:</h4>
                  <div className='text-sm bg-gray-50 p-2 rounded border max-h-32 overflow-y-auto'>
                    {item.output}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default HistoryPage