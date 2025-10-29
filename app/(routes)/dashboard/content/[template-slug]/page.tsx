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

  const [formData, setFormData] = useState<any>({})

  const handleInputChange = (event: any) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const GenerateAIContent = async (e: any) => {
    e.preventDefault()
    setIsLoading(true)
    
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
      setAiOutput(data.result)
      setIsLoading(false)
    } catch (error) {
      console.error('Error generating content:', error)
      setAiOutput('Error generating content. Please try again.')
      setIsLoading(false)
    }
  }

  return (
    <div className='p-5'>
      <div className='flex justify-center'>
        <div className='p-5 shadow-lg border rounded-lg bg-white'>
          {selectedTemplate && (
            <div>
              <div className='flex gap-4 items-center mb-5'>
                <Image src={selectedTemplate.icon} alt='icon' width={70} height={70} />
                <div>
                  <h2 className='font-bold text-3xl text-primary'>{selectedTemplate.name}</h2>
                  <p className='text-gray-500'>{selectedTemplate.desc}</p>
                </div>
              </div>

              <form className='mt-6' onSubmit={GenerateAIContent}>
                {selectedTemplate.form?.map((item, index) => (
                  <div className='my-2 flex flex-col gap-2 mb-7' key={index}>
                    <label className='font-bold'>{item.label}</label>
                    {item.field == 'input' ? (
                      <Input
                        name={item.name}
                        required={item?.required}
                        onChange={handleInputChange}
                      />
                    ) : item.field == 'textarea' ? (
                      <textarea
                        className='border rounded-lg px-3 py-2'
                        name={item.name}
                        required={item?.required}
                        onChange={handleInputChange}
                        rows={5}
                      />
                    ) : null}
                  </div>
                ))}
                <Button type="submit" className='w-full py-6' disabled={isLoading}>
                  {isLoading ? 'Generating...' : 'Generate Content'}
                </Button>
              </form>
            </div>
          )}
        </div>
      </div>

      {aiOutput && (
        <div className='my-10 p-5 border rounded-lg bg-gray-50'>
          <h3 className='font-bold text-lg mb-3'>Generated Content:</h3>
          <div dangerouslySetInnerHTML={{ __html: aiOutput }} />
        </div>
      )}
    </div>
  )
}

export default CreateNewContent