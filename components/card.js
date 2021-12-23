import { LightBulbIcon, LinkIcon } from '@heroicons/react/outline'

export default function Card ({ name, url }) {
  return (
    <li className="bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
      <div className="flex justify-between">
        <h1>{name}</h1>
        <div className='flex'>
          <a href={url} target='_blank' title={`Visit the website for ${name}`}><LinkIcon className='h-5 w-5 text-black hover:text-gray-500 mr-3'/></a>
          <a href={`https://lighthouse-dot-webdotdevsite.appspot.com/lh/html?url=${url}`} target='_blank' title={`Visit the Lighthouse report for ${name}`}><LightBulbIcon className='h-5 w-5 text-black hover:text-gray-500'/></a>
        </div>
      </div>
    </li>
  )
}