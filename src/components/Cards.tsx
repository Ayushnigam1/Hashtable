import React from 'react'
import Router from 'next/router'
import { Paper, Button } from '@mantine/core';

const Cards = ({ title, url }: { title: string, url?: string }) => {
    return (
        <>
            <Paper className='flex flex-col justify-between border-gray-100 dark:border-0 border items-start bg-white dark:bg-slate-700 min-h-[200px]' p='lg' shadow={'md'} radius="md">
                <h4 className='text-xl text-gray-700 font-semibold dark:text-white'>{title}</h4>
                <a className='px-3 py-2 dark:text-white text-gray-700 text-sm rounded-xl dark:bg-slate-800 bg-slate-300' href={`./${url}`}>
                    Read {title}
                </a>
            </Paper>
        </>
    )
}

export default Cards
