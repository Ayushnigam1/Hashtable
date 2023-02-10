import React from 'react'
import Router from 'next/router'
import { createStyles, Paper, Text, Title, Button } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    height: 300,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `Greycliff CF ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 28,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));




const Cards = ({className, title, subtitle, url}: { title: string, subtitle?: string, className?: string, url?: string}) => {
    const { classes } = useStyles();
    return (
        <>
<Paper
      shadow="md"
      p="xl"
      radius="md"
      
      className={`bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-80 hover:bg-gray-300 hover:shadow-2xl hover:opacity-100 ${classes.card}`}
    >
      <div>
        <Text className={classes.category} size="xs">
          {subtitle}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark" onClick={()=>{Router.push(`${url}`)}}>
        Read {title}
      </Button>
    </Paper>

        </>
    )
}

export default Cards
