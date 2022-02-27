import { useState } from 'react'
import type { NextPage } from 'next'
import { Text, Center, Flex } from '@chakra-ui/react'

import { Button } from '../components/Button'
import { Box } from '../components/Box'
import { imgflipAPI } from '../services/api'

interface Meme {
  url: string
  id: string
}

interface Response {
  data: {
    data: {
      memes: Meme[]
    }
  }
}

const Home: NextPage = () => {
  const [meme, setMeme] = useState<Meme | string | any>()
  const [memeID, setMemeID] = useState<string>()

  const random = () => Math.floor(Math.random() * (99 - 0)) + 0

  const num = random()

  async function loadData() {
    imgflipAPI.get('/get_memes').then((res: Response) => {
      setMeme(res.data.data.memes[num].url)
      setMemeID(res.data.data.memes[num].id)
    })
  }

  async function downloadImage() {
    const image = await fetch(meme)
    const imageBlog = await image.blob()
    const imageURL = URL.createObjectURL(imageBlog)

    const link = document.createElement('a')
    link.href = imageURL
    link.download = String(memeID)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Center flexDir="column" marginTop="75px">
      <Text
        background="linear-gradient(90.15deg, #8F00FF 26.7%, #0038FF 98.07%)"
        backgroundClip="text"
        fontWeight="bold"
        fontSize="40px"
      >
        Meme Generator
      </Text>

      <Text
        fontWeight="normal"
        fontSize="22px"
        color="white"
        textAlign="center"
        marginTop="50px"
        marginBottom="40px"
      >
        Your favorite website to have your diary <br />
        entretainment doses
      </Text>

      <Box imgURL={meme} />

      <Flex>
        <Button onClick={downloadImage}>
          <Flex alignItems="center">
            <img
              src="/icons/download.svg"
              alt="download"
              style={{ marginLeft: '25px' }}
            />
            <Text fontWeight="normal" fontSize="14px" marginLeft="15px">
              Download
            </Text>
          </Flex>
        </Button>

        <Button onClick={() => loadData()}>
          <Flex alignItems="center">
            <img
              src="/icons/refresh.svg"
              alt="download"
              style={{ marginLeft: '25px' }}
            />
            <Text fontWeight="normal" fontSize="14px" marginLeft="15px">
              Generate
            </Text>
          </Flex>
        </Button>
      </Flex>
    </Center>
  )
}

export default Home
