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
        <link rel='icon' href='/favicon.ico' />
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
        <Box sx={{ bgcolor: 'grey.50', border: 1, borderRadius: 2 }}>
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
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='150 100 650 500'>
    <g stroke='#000' strokeWidth={2} fill='#FFF'>
      <path d='m589 596 52-30-40-69-52 30 40 69Zm132-53-30-52-70 40 30 52 70-40Zm69-40-30-52-69 40 30 52 69-40Zm-30-52-30-51-69 40 30 51 69-40Zm-69 40-30-51-70 40 30 51 70-40ZM169 469l52 30 40-69-52-30-40 69Zm112 87 30-52-70-40-30 52 70 40Zm69 40 30-52-69-40-30 52 69 40Zm30-52 30-52-69-40-30 52 69 40Zm-69-40 30-52-70-40-30 52 70 40ZM746 310l-30-52-69 40 30 52 69-40Zm-53-131-52 30 40 69 52-30-40-69Zm-40-69-52 30 40 69 52-30-40-69Zm-52 30-52 30 40 69 52-30-40-69Zm40 69-52 30 40 69 52-30-40-69ZM499 370v-60h-80v60h80Zm20-140h-60v80h60v-80Zm0-80h-60v80h60v-80Zm-60 0h-60v80h60v-80Zm0 80h-60v80h60v-80ZM239 350l30-52-70-40-30 52 70 40Zm87-111-52-30-40 69 52 30 40-69Zm40-69-52-30-40 69 52 30 40-69Zm-52-30-52-30-40 69 52 30 40-69Zm-40 69-52-30-40 69 52 30 40-69Z' />
    </g>
    <text transform='matrix(1.745 0 0 1.851 -421.892 -6.206)' x={390} y={97}>
      {seats[0]}
    </text>
    <text transform='matrix(1.745 0 0 1.851 -460.559 59.128)' x={390} y={97}>
      {seats[1]}
    </text>
    <text transform='matrix(1.745 0 0 1.851 -471.225 131.128)' x={390} y={97}>
      {seats[2]}
    </text>
    <text transform='matrix(1.745 0 0 1.851 -260.559 22.461)' x={390} y={97}>
      {seats[3]}
    </text>
    <text transform='matrix(1.745 0 0 1.851 -260.559 102.461)' x={390} y={97}>
      {seats[4]}
    </text>
    <text transform='matrix(1.745 0 0 1.851 -230.559 172.461)' x={390} y={97}>
      {seats[5]}
    </text>
    <text transform='matrix(1.745 0 0 1.851 -200.559 102.461)' x={390} y={97}>
      {seats[6]}
    </text>
    <text transform='matrix(1.745 0 0 1.851 -36.559 -6.206)' x={390} y={97}>
      {seats[7]}
    </text>
    <text transform='matrix(1.745 0 0 1.851 -3.226 59.128)' x={390} y={97}>
      {seats[8]}
    </text>
    <text transform='matrix(1.745 0 0 1.851 -5.226 134.461)' x={390} y={97}>
      {seats[9]}
    </text>
    <text transform='matrix(1.745 0 0 1.851 -485.892 284.461)' x={390} y={97}>
      {seats[10]}
    </text>
    <text transform='matrix(1.745 0 0 1.851 -441.893 341.794)' x={390} y={97}>
      {seats[11]}
    </text>
    <text transform='matrix(1.745 0 0 1.851 -370.56 378.461)' x={390} y={97}>
      {seats[12]}
    </text>
    <text transform='matrix(1.745 0 0 1.851 -105.892 372.46)' x={390} y={97}>
      {seats[13]}
    </text>
    <text transform='matrix(1.745 0 0 1.851 -30.559 367.795)' x={390} y={97}>
      {seats[14]}
    </text>
    <text transform='matrix(1.745 0 0 1.851 39.442 328.461)' x={390} y={97}>
      {seats[15]}
    </text>
  </svg>
)
