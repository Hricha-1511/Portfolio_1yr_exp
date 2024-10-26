import React from 'react'
import img_experience from '../../assets/img_experience.png'

export default function Experience() {
  return (

    <section id='experience' className='relative overflow-hidden flex flex-col text-gray-600 body-font'>
        <div className='absolute top-[100px] left-64 inset-x-0 flex items-start justify-center'>
            <div className='h-96 w-96 bg-gradient-to-br from-[#ff910a] blur-2xl invisible opacity-40 rounded-full'></div>
            <div className='h-96 w-96 bg-gradient-to-r from-[#ffdb12] opacity-40 blur-2xl rounded-full'></div>
        </div>
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
            <div data-aos='fade-right' data-aos-delay='400' className='relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0'>
             <div className='md:h-[450px] h-[400px] md:w-[300px] w-[300px] md:right-36 bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400 absolute rounded-md transform rotate-3 -top-8 shadow-[0_0_40px_rgba(225,165,0,0.7)] z-0'></div>
            <img src={img_experience} className='object-cover md:w-[300px] md:h-[450px] object-center rounded relative z-10' alt="Experience" />
            </div>
        <div data-aos='fade-left' data-aos-delay='400' className='lg:flex-grow md:w-1/2 lg:pl-8 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center '>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-orange-500 '>Experience</h1>
            <h2 className='title-font font-bold text-white sm:text-2xl '>May 2024 - Oct 2024</h2>
            <p className='mb-8 text-white leading-relaxed text-justify'><br/><b>Machine Learning Engineer (FT): </b> As a Full time at TDI-India (Remote), I led a project to enhance the precision of a text2SQL model, developing a FastAPI backend and utilizing PostgreSQL for efficient data management in a specialized US market database. I engaged closely with clients to tailor solutions and improve product experiences. My research contributions included prompting techniques, Retrieval-Augmented Generation (RAG), and ambiguity resolution. I developed advanced AI products, such as an Autogen-based conversational system and an RAG-powered chatbot for PDF and image data extraction. Additionally, I created automation workflows using n8n and make.com, streamlining processes like property data handling, Google Scholar searches, and business operations on Odoo and other platforms.</p>
            <h2 className='title-font font-bold text-white sm:text-2xl '>Feb 2024 - Apr 2024</h2>
            <p className='mb-8 text-white leading-relaxed '><br/><b>Data Science Intern:</b> As an intern at TDI-India (Remote), I leveraged Autogen, LLM, and RAG technologies to enhance data analysis, delivering more efficient and accurate insights. I applied advanced mathematical concepts to improve the interpretative capabilities of these models, ensuring precise predictions and analyses. By combining mathematical techniques with AI methodologies, I tackled complex challenges, refined algorithms, and drove innovation in AI.</p>
            <h2 className='title-font font-bold text-white sm:text-2xl '>Nov 2023 - January 2024</h2>
            <p className='mb-8 text-white leading-relaxed '><br/><b>Data Science Intern:</b> As an Intern at Success Ladder Technology Pvt. Ltd., I developed a specialized Named Entity Recognition (NER) system for the vehicle domain using OpenAI's GPT model. I applied few-shot learning techniques to fine-tune the model and conducted thorough testing with real-world user queries. Additionally, I integrated the optimized model into Elasticsearch, enhancing its search and retrieval capabilities for vehicle-related data.</p>

        </div>
        </div>
    </section>

  )
}
