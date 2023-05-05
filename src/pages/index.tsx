import DownloadIcon from '@mui/icons-material/Download'
import RefreshIcon from '@mui/icons-material/Refresh'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Canvg } from 'canvg'
import Head from 'next/head'
import Image from 'next/image'
import SeatsImage from 'public/seats.svg'
import { useEffect, useState } from 'react'

export default function Home() {
  const shuffleSeats = () => {
    let svgStr = SeatsImage as string
    ;[...Array(16).keys()]
      .map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value)
      .forEach((number, index) => {
        svgStr = svgStr.replace(
          new RegExp(`(<tspan.*>)${index + 1}(<\/tspan>)`),
          `$1${(number + 1).toString()}$2`,
        )
      })
    return `data:image/svg+xml;utf8,${svgStr}`
  }
  const [seats, setSeats] = useState<string>(shuffleSeats())

  const svgToJpg = (svgUrl: string) =>
    new Promise<string>((resolve) => {
      // use Image to get height and width
      // do not use new Image() to avoid conflicts with next/image
      const image = document.createElement('img')
      image.src = svgUrl

      image.onload = () => {
        const canvas = document.createElement('canvas')
        canvas.height = image.naturalHeight
        canvas.width = image.naturalWidth
        const context = canvas.getContext('2d')!

        // use Canvg to render svg to canvas
        Canvg.from(context, svgUrl)
          .then((v) => v.render())
          .then(() => resolve(canvas.toDataURL('image/jpeg')))
      }
    })

  const [jpgUrl, setJpgUrl] = useState<string>('')
  useEffect(() => {
    setJpgUrl('') // disable download button while converting
    svgToJpg(seats).then((url) => setJpgUrl(url))
  }, [seats])

  return (
    <>
      <Head>
        <title>Random Seats Generator</title>
        <link rel='shortcut icon' type='image/x-icon' href='favicon.ico' />
      </Head>
      <Container maxWidth='sm'>
        <Typography
          variant='h3'
          component='h1'
          gutterBottom
          alignItems='center'
        >
          Random Seats Generator
        </Typography>
        <Box sx={{ border: 3 }}>
          <Image
            src={seats}
            alt=''
            width={530}
            height={530}
            suppressHydrationWarning={true}
          />
        </Box>
        <Stack
          direction='row'
          spacing={2}
          justifyContent='center'
          alignItems='center'
          sx={{ margin: 2 }}
        >
          <Button
            variant='contained'
            startIcon=<RefreshIcon />
            onClick={() => setSeats(shuffleSeats())}
          >
            Shuffle
          </Button>
          <Button
            variant='contained'
            disabled={!jpgUrl}
            startIcon=<DownloadIcon />
            href={jpgUrl}
            download='seats.png'
          >
            Save
          </Button>
        </Stack>
      </Container>
    </>
  )
}
