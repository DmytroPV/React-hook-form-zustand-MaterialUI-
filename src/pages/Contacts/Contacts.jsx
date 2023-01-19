import React from "react"

import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import Copyright from '../../components/CopyrightBlockBottom'

const cards = [1, 2, 3]
const theme = createTheme()

const Contacts = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <main>
                    <Box
                        sx={{
                            bgcolor: 'background.paper',
                            pt: 11,
                            pb: 2,
                        }}
                    >
                        <Container maxWidth="sm">
                            <Typography
                                component="h4"
                                variant="h4"
                                align="center"
                                color="text.primary"
                                gutterBottom
                            >
                                Contacts
                            </Typography>
                            <Typography variant="h7" align="center" color="text.secondary" paragraph>
                                An arbitrary example of a contact page. For example,
                                each card is a contact of an individual worker.
                            </Typography>
                        </Container>
                    </Box>
                    <Container sx={{ py: 2 }} maxWidth="md">
                        <Grid container spacing={4}>
                            {cards.map((card) => (
                                <Grid item key={card} xs={12} sm={6} md={4}>
                                    <Card
                                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                    >
                                        <CardMedia
                                            component="img"
                                            image="https://source.unsplash.com/random"
                                            alt="random"
                                        />
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Heading
                                            </Typography>
                                            <Typography>
                                                This is a media card. You can use this section to describe the
                                                content.
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">Call</Button>
                                            <Button size="small">Write an email</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </main>
                <Box sx={{ bgcolor: 'background.paper', p: 1 }} component="footer">
                    <Copyright />
                </Box>
            </ThemeProvider>
        </>
    )
}

export default Contacts