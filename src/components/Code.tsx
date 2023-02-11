import { Tabs } from "@mantine/core"

export const Code = ({ tabs }: { tabs: { lang: string, code: any }[] }) => {
    return (
        <>
            <Tabs>
                <Tabs.List>
                    {
                        tabs.map((tab, index) => <Tabs.Tab value={tab.lang} key={index}>{tab.lang}</Tabs.Tab>)
                    }
                </Tabs.List>
                {
                    tabs.map((tab, index) => <Tabs.Panel value={tab.lang} key={index}>{tab.code}</Tabs.Panel>)
                }
            </Tabs>
        </>
    );
}
