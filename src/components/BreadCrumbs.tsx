import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export const BreadCrumbs = () => {
    const router = useRouter()
    const [breadCrumb, setCrumbs] = useState<{ breadcrumb: string, href: string }[]>();

    useEffect(() => {
        if (router) {
            const linkPath = router.asPath.split('/');
            linkPath.shift();

            const pathArray = linkPath.map((path, i) => {
                return { breadcrumb: path.replace('_', ' '), href: '/' + linkPath.slice(0, i + 1).join('/') };
            });
            setCrumbs(pathArray)
        }
    }, [router])

    return (
        <div className='flex space-x-2 text-sm py-3'>
            {breadCrumb?.map((crumb, index) =>
                <React.Fragment key={index}>
                    {index > 0 ? <span className="text-slate-500 dark:text-gray-400">{'/'}</span> : ''}
                    <a
                        className='text-slate-500 font-semibold hover:text-slate-600 dark:text-gray-400 hover:dark:text-gray-300 capitalize'
                        href={crumb.href}>
                        {crumb.breadcrumb}
                    </a>
                </React.Fragment>
            )
            }
        </div >
    )
}
