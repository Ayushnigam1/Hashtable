import React, { useState } from 'react'
import Tag from './Tag';
export const Tags = () => {
    const [tags, setTags] = useState<string[]>([]);

    const handleAdd = (tag: string) => {
        setTags([...tags, tag]);
    };

    const handleRemove = (tag: string) => {
        setTags(tags.filter((t) => t !== tag));
    };

    return (
        <>

        <div className='flex bg-slate-400'>
        {tags.map((tag) => (
          <Tag key={tag} tag={tag} onRemove={handleRemove} />
        ))}
   <input className='rounded m-2 pl-2 ' type="text" placeholder='Search here...' onKeyDown={(event:any) => {
        if (event.key === 'Enter') {
            console.log(event.target);
          handleAdd(event.target.value);
          event.target.value = '';
        }
          }
        } />
       
      </div>
      </>
  )

}
