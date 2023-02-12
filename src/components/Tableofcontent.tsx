import { Navbar } from '@mantine/core';
import { TailSwitch } from '@/components/Switch'
import Link from 'next/link';
import { useRouter } from 'next/router';

export function TableOfContents(props: { links: string[], section: string, hidden?: boolean }) {
    const router = useRouter()
    console.log(router.asPath)
    const items = props.links.map((item: string, index: number) => (
        <Link
            className={`px-6 py-4 capitalize ${router.asPath == `/${props.section}/${item}` ? 'text-sky-500 bg-gray-100 dark:bg-gray-800': 'text-gray-800 dark:text-gray-200'}`}
            href={`/${props.section}/${item}`}
            key={index}
        >
            {item.replace(/_/g, ' ')}
        </Link>
    ));

    return (
        <Navbar className={`sticky ${props.hidden ? 'max-xl:hidden': ''} left-0 top-0 max-w-[320px] w-full bg-white dark:bg-gray-800 dark:border-gray-600`}>
            <Navbar.Section className='p-6 flex justify-between'>
                    <a href="\" className="text-lg font-semibold text-gray-800 dark:text-white">
                        Hashtable
                    </a>
                <TailSwitch/>
            </Navbar.Section>
            <Navbar.Section className='flex flex-col'>
                {items}
            </Navbar.Section>
        </Navbar>
    );
}
