import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { template, input } = await request.json()

    if (!template || !input) {
      return NextResponse.json({ error: 'Template and input are required' }, { status: 400 })
    }

    const apiKey = process.env.OPENROUTER_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 })
    }

    const prompts: Record<string, string> = {
      'generate-blog-title': `Generate 5 catchy, SEO-friendly blog titles for: ${input}`,
      'blog-content-generation': `Write a comprehensive blog post about: ${input}. Include introduction, main points, and conclusion.`,
      'blog-topic-idea': `Generate 10 creative blog topic ideas related to: ${input}`,
      'youtube-seo-title': `Create 5 SEO-optimized YouTube video titles for: ${input}`,
      'youtube-description': `Write an engaging YouTube video description for: ${input}. Include hooks, key points, and call-to-action.`,
      'youtube-tag': `Generate 20 relevant YouTube tags/keywords for: ${input}`,
      'rewrite-article': `Rewrite this article to be plagiarism-free while maintaining the original meaning: ${input}`,
      'text-improver': `Improve this text for better clarity, engagement, and readability: ${input}`,
      'add-emoji-to-text': `Add relevant emojis to make this text more engaging: ${input}`,
      'instagram-post-generator': `Create an engaging Instagram post about: ${input}. Include caption and hashtags.`,
      'instagram-hash-tag-generator': `Generate 30 trending Instagram hashtags for: ${input}`,
      'instagram-post-idea-generator': `Generate 10 creative Instagram post/reel ideas for: ${input}`,
      'english-grammer-checker': `Check and correct grammar, spelling, and punctuation in: ${input}`,
      'write-code': `Write clean, well-commented code for: ${input}`,
      'explain-code': `Explain this code in simple terms: ${input}`,
      'code-bug-detector': `Analyze this code for bugs and provide fixes: ${input}`,
      'tagline-generator': `Generate 10 memorable taglines for: ${input}`,
      'product-description': `Write a compelling product description for: ${input}`
    }

    const prompt = prompts[template] || `Generate content for ${template}: ${input}`

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'HTTP-Referer': 'http://localhost:3000',
        'X-Title': 'AI Social Media Generator',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'nvidia/nemotron-nano-12b-v2-vl:free',
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 1000
      })
    })

    if (!response.ok) {
      console.error('OpenRouter API Error:', response.status, response.statusText)
      return NextResponse.json({ result: 'Content generation temporarily unavailable. Please try again.' })
    }

    const data = await response.json()
    const content = data.choices?.[0]?.message?.content || 'No content generated'

    return NextResponse.json({ result: content })
  } catch (error: any) {
    console.error('API Error:', error)
    return NextResponse.json({ 
      error: error.message || 'Failed to generate content' 
    }, { status: 500 })
  }
}