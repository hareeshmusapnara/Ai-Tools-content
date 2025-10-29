"use client"
import React, { useState } from 'react'
import Templates from '@/app/(data)/Templates'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface PROPS {
  params: {
    'template-slug': string
  }
}

function CreateNewContent(props: PROPS) {
  const selectedTemplate: TEMPLATE | undefined = Templates?.find((item) => item.slug == props.params['template-slug'])
  const [isLoading, setIsLoading] = useState(false)
  const [aiOutput, setAiOutput] = useState<string>('')
  const [analytics, setAnalytics] = useState<any>(null)

  const [formData, setFormData] = useState<any>({})

  const handleInputChange = (event: any) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const GenerateAIContent = async (e: any) => {
    e.preventDefault()
    setIsLoading(true)
    const startTime = Date.now()
    
    const selectedPrompt = selectedTemplate?.aiPrompt
    const finalAIPrompt = JSON.stringify(formData) + ", " + selectedPrompt
    
    try {
      const response = await fetch('/api/generate-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: finalAIPrompt }),
      })
      
      const data = await response.json()
      const endTime = Date.now()
      const generationTime = endTime - startTime
      
      setAiOutput(data.result)
      setAnalytics({
        wordCount: data.result.split(' ').length,
        charCount: data.result.length,
        generationTime: generationTime,
        template: selectedTemplate?.name,
        timestamp: new Date().toLocaleString()
      })
      setIsLoading(false)
    } catch (error) {
      console.error('Error generating content:', error)
      setAiOutput('Error generating content. Please try again.')
      setIsLoading(false)
    }
  }

  return (
    <div className='p-5'>
      {selectedTemplate && (
        <div>
          <div className='flex gap-4 items-center mb-5'>
            <Image src={selectedTemplate.icon} alt='icon' width={70} height={70} />
            <div>
              <h2 className='font-bold text-3xl text-primary'>{selectedTemplate.name}</h2>
              <p className='text-gray-500'>{selectedTemplate.desc}</p>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-5'>
            <div className='p-5 shadow-lg border rounded-lg bg-white'>
              <form onSubmit={GenerateAIContent}>
                {selectedTemplate.form?.map((item, index) => (
                  <div className='my-2 flex flex-col gap-2 mb-7' key={index}>
                    <label className='font-bold'>{item.label}</label>
                    {item.field == 'input' ? (
                      <Input
                        name={item.name}
                        required={item?.required}
                        onChange={handleInputChange}
                        className='h-12 text-lg'
                      />
                    ) : item.field == 'textarea' ? (
                      <textarea
                        className='border rounded-lg px-4 py-3 text-lg min-h-32'
                        name={item.name}
                        required={item?.required}
                        onChange={handleInputChange}
                        rows={8}
                      />
                    ) : null}
                  </div>
                ))}
                <Button type="submit" className='w-full py-6 text-lg' disabled={isLoading}>
                  {isLoading ? 'Generating...' : 'Generate Content'}
                </Button>
              </form>
            </div>

            <div className='p-5 border rounded-lg bg-gray-50'>
              <h3 className='font-bold text-lg mb-3'>Generated Content:</h3>
              {isLoading ? (
                <div className='flex items-center justify-center h-40'>
                  <div className='text-gray-500'>Generating content...</div>
                </div>
              ) : aiOutput ? (
                <div>
                  <div className='whitespace-pre-wrap text-sm mb-4'>{aiOutput}</div>
                  {analytics && (
                    <div className='border-t pt-4 mt-4'>
                      <h4 className='font-semibold mb-2'>Analytics:</h4>
                      <div className='grid grid-cols-2 gap-2 text-sm text-gray-600'>
                        <div>Words: {analytics.wordCount}</div>
                        <div>Characters: {analytics.charCount}</div>
                        <div>Time: {analytics.generationTime}ms</div>
                        <div>Generated: {analytics.timestamp}</div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className='text-gray-400 text-center h-40 flex items-center justify-center'>
                  Generated content will appear here
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CreateNewContent