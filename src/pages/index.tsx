import RefreshIcon from '@mui/icons-material/Refresh'
import { Box, Button, Container, Stack, Typography } from '@mui/material'
import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [seats, setSeats] = useState<number[]>(
    [...Array(16).keys()].map((i) => i + 1),
  )
  const shuffleSeats = () =>
    seats
      .map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value)

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
        <Box sx={{ border: 1, borderRadius: 2 }}>
          {seatsImageComponent(seats)}
        </Box>
        <Stack justifyContent='center' alignItems='center' sx={{ margin: 2 }}>
          <Button
            variant='contained'
            startIcon=<RefreshIcon />
            onClick={() => setSeats(shuffleSeats())}
          >
            Shuffle
          </Button>
        </Stack>
      </Container>
    </>
  )
}

const seatsImageComponent = (seats: number[]) => (
  <svg
    width='550'
    height='550'
    viewBox='0 0 1200 1200'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect
      x='966.53'
      y='1138.64'
      width='117'
      height='177'
      transform='rotate(-120 966.53 1138.64)'
      stroke='black'
      strokeWidth='3'
    />
    <text fill='black' fontSize='50' fontWeight='bold'>
      <tspan x='955.778' y='901.826'>
        {seats[0]}
      </tspan>
    </text>
    <rect
      x='805.972'
      y='680.549'
      width='117'
      height='177'
      transform='rotate(-30 805.972 680.549)'
      stroke='black'
      strokeWidth='3'
    />
    <text fill='black' fontSize='50' fontWeight='bold'>
      <tspan x='978.816' y='1061.73'>
        {seats[1]}
      </tspan>
    </text>
    <rect
      x='895.972'
      y='836.434'
      width='117'
      height='177'
      transform='rotate(-30 895.972 836.434)'
      stroke='black'
      strokeWidth='3'
    />
    <text fill='black' fontSize='50' fontWeight='bold'>
      <tspan x='851.855' y='961.826'>
        {seats[2]}
      </tspan>
    </text>
    <rect
      x='792.049'
      y='896.434'
      width='117'
      height='177'
      transform='rotate(-30 792.049 896.434)'
      stroke='black'
      strokeWidth='3'
    />
    <text fill='black' fontSize='50' fontWeight='bold'>
      <tspan x='761.855' y='805.941'>
        {seats[3]}
      </tspan>
    </text>
    <rect
      x='702.049'
      y='740.549'
      width='117'
      height='177'
      transform='rotate(-30 702.049 740.549)'
      stroke='black'
      strokeWidth='3'
    />
    <text fill='black' fontSize='50' fontWeight='bold'>
      <tspan x='865.778' y='195.941'>
        {seats[4]}
      </tspan>
    </text>
    <rect
      x='966.53'
      y='588.643'
      width='117'
      height='177'
      transform='rotate(-120 966.53 588.643)'
      stroke='black'
      strokeWidth='3'
    />
    <text fill='black' fontSize='50' fontWeight='bold'>
      <tspan x='955.778' y='351.826'>
        {seats[5]}
      </tspan>
    </text>
    <rect
      x='805.972'
      y='130.549'
      width='117'
      height='177'
      transform='rotate(-30 805.972 130.549)'
      stroke='black'
      strokeWidth='3'
    />
    <text fill='black' fontSize='50' fontWeight='bold'>
      <tspan x='978.816' y='511.729'>
        {seats[6]}
      </tspan>
    </text>
    <rect
      x='895.972'
      y='286.434'
      width='117'
      height='177'
      transform='rotate(-30 895.972 286.434)'
      stroke='black'
      strokeWidth='3'
    />
    <text fill='black' fontSize='50' fontWeight='bold'>
      <tspan x='851.855' y='411.826'>
        {seats[7]}
      </tspan>
    </text>
    <rect
      x='792.049'
      y='346.434'
      width='117'
      height='177'
      transform='rotate(-30 792.049 346.434)'
      stroke='black'
      strokeWidth='3'
    />
    <rect
      x='702.049'
      y='190.549'
      width='117'
      height='177'
      transform='rotate(-30 702.049 190.549)'
      stroke='black'
      strokeWidth='3'
    />
    <text fill='black' fontSize='50' fontWeight='bold'>
      <tspan x='376.278' y='805.441'>
        {seats[8]}
      </tspan>
    </text>
    <rect
      x='88.0298'
      y='1050.14'
      width='117'
      height='177'
      transform='rotate(-60 88.0298 1050.14)'
      stroke='black'
      strokeWidth='3'
    />
    <text fill='black' fontSize='50' fontWeight='bold'>
      <tspan x='286.278' y='961.326'>
        {seats[9]}
      </tspan>
    </text>
    <rect
      x='404.472'
      y='682.049'
      width='117'
      height='177'
      transform='rotate(30 404.472 682.049)'
      stroke='black'
      strokeWidth='3'
    />
    <text fill='black' fontSize='50' fontWeight='bold'>
      <tspan x='159.316' y='1061.23'>
        {seats[10]}
      </tspan>
    </text>
    <rect
      x='314.472'
      y='837.934'
      width='117'
      height='177'
      transform='rotate(30 314.472 837.934)'
      stroke='black'
      strokeWidth='3'
    />
    <text fill='black' fontSize='50' fontWeight='bold'>
      <tspan x='182.355' y='901.326'>
        {seats[11]}
      </tspan>
    </text>
    <rect
      x='210.549'
      y='777.934'
      width='117'
      height='177'
      transform='rotate(30 210.549 777.934)'
      stroke='black'
      strokeWidth='3'
    />
    <rect
      x='300.549'
      y='622.049'
      width='117'
      height='177'
      transform='rotate(30 300.549 622.049)'
      stroke='black'
      strokeWidth='3'
    />
    <rect
      x='88.0298'
      y='500.143'
      width='117'
      height='177'
      transform='rotate(-60 88.0298 500.143)'
      stroke='black'
      strokeWidth='3'
    />
    <text fill='black' fontSize='50' fontWeight='bold'>
      <tspan x='286.278' y='411.326'>
        {seats[12]}
      </tspan>
    </text>
    <rect
      x='404.472'
      y='132.049'
      width='117'
      height='177'
      transform='rotate(30 404.472 132.049)'
      stroke='black'
      strokeWidth='3'
    />
    <text fill='black' fontSize='50' fontWeight='bold'>
      <tspan x='159.316' y='511.229'>
        {seats[13]}
      </tspan>
    </text>
    <rect
      x='314.472'
      y='287.934'
      width='117'
      height='177'
      transform='rotate(30 314.472 287.934)'
      stroke='black'
      strokeWidth='3'
    />
    <text fill='black' fontSize='50' fontWeight='bold'>
      <tspan x='182.355' y='351.326'>
        {seats[14]}
      </tspan>
    </text>
    <rect
      x='210.549'
      y='227.934'
      width='117'
      height='177'
      transform='rotate(30 210.549 227.934)'
      stroke='black'
      strokeWidth='3'
    />
    <text fill='black' fontSize='50' fontWeight='bold'>
      <tspan x='272.355' y='195.441'>
        {seats[15]}
      </tspan>
    </text>
    <rect
      x='300.549'
      y='72.049'
      width='117'
      height='177'
      transform='rotate(30 300.549 72.049)'
      stroke='black'
      strokeWidth='3'
    />
  </svg>
)
