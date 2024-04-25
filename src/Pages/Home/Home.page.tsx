import { Container, Box, Link, Paper, Stack, Typography } from '@mui/material/';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LoginIcon from '@mui/icons-material/Login';

import dnzLogo from '../../assets/dnzLogo_fbr.svg'

export const Home = () => {
  //const [count, setCount] = useState(0)

  return (
    <Container maxWidth='xl'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '60dvh',
        mx: 1.5,
        p: 2,
        textAlign: 'center',
      }}
    >
      <Box>
        <Paper elevation={3} square={false}
          sx={{
            paddingX: 9
          }}>
          <a href="http://www.dnzlivemarketing.com.br" target="_blank">
            <img src={dnzLogo} className="logo" alt="DNZ Live Marketing" />
          </a>
        </Paper>
      </Box>

      <Box
        sx={{
          my: 6
        }}
      >
        <Stack spacing={3} direction='row'
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            py: 4,
          }}>
          <Link href='https://wa.me/98888778?text=Fala Danza, tem café aí?' target='_blank' >
            <Paper elevation={1} square={false} >
              <WhatsAppIcon fontSize='small' sx={{ display: 'flex', color: '#9e9e9e' }} />
            </Paper>
          </Link>

          <Link href='https://www.instagram.com/dnzlivemarketing/' target='_blank'>
            <Paper elevation={1} square={false} >
              <InstagramIcon fontSize='small' sx={{ display: 'flex', color: '#9e9e9e' }} />
            </Paper>
          </Link>


          <Link href='https://www.facebook.com/dnzlivemarketing/' target='_blank'>
            <Paper elevation={1} square={false} >
              <FacebookIcon fontSize='small' sx={{ display: 'flex', color: '#9e9e9e' }} />
            </Paper>
          </Link>

          <Link href='https://www.twitter.com/agenciadnz/' target='_blank'>
            <Paper elevation={1} square={false} >
              <XIcon fontSize='small' sx={{ display: 'flex', color: '#9e9e9e' }} />
            </Paper>
          </Link>

          <Link href='https://www.linkedin.com/company/dnz-live-marketing/' target='_blank'>
            <Paper elevation={1} square={false} >
              <LinkedInIcon fontSize='small' sx={{ display: 'flex', color: '#9e9e9e' }} />
            </Paper>
          </Link>

          <Link href='#' >
            <Paper>
              <LoginIcon fontSize='small' sx={{ display: 'flex', color: '#ffca28' }} />
            </Paper>
          </Link>
        </Stack>
      </Box>

      <Box >
        <Typography variant='caption' sx={{ borderLeft: 2, borderColor: '#ffd740', color: '#9e9e9e', py: .5 }} >Há 7 anos fazendo diferente tudo que você já viu!</Typography>
      </Box >
    </Container >
  )
}