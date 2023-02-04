export const TocLink = (props: { dic: { [key: string]: any } }) => {
    return (
        <>
            {props.dic != undefined ?
                <ol className="pl-4 ">
                    {
                        Object.keys(props.dic).map((key, index) => (
                            <>
                                <li className="capitalize py-1" key={index}>
                                    <a href={`#${key.replace(/-/g, '')}`}>{`${key.replace(/-/g, ' ')}`}</a>
                                </li>
                                <TocLink dic={props.dic[key]} />
                            </>
                        ))
                    }
                </ol> : ''}
        </>
    )
}
