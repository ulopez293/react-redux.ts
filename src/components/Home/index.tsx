import useGetData from '../../hooks/useGetData'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

import Skeleton from '@mui/material/Skeleton'
import Box from '@mui/material/Box'

const memberWallets: string = '/member/wallets'
const landing_benevits: string = '/member/landing_benevits'

function Home() {
    const [carteras]: any = useGetData(memberWallets)
    const [benevits]: any = useGetData(landing_benevits)
    let loadingLocked = benevits && benevits.hasOwnProperty('locked') && benevits.locked.length > 0
    let loadingUnlocked = benevits && benevits.hasOwnProperty('unlocked') && benevits.unlocked.length > 0

    const showBenevits = () => {
        let showBenevits: any = []
        carteras.map((cartera: any, index: number) => {
            let htmlBenvitsLocked: any = []
            let htmlBenvitsUnlocked: any = []
            benevits.locked.map((benevit: any) => {
                if (cartera.id === benevit.wallet.id) {
                    htmlBenvitsLocked.push(
                        <Card sx={{ maxWidth: 400, height: 400, m: 1, Width: 400 }} key={benevit.id} >
                            <CardMedia
                                component="img"
                                height="280"
                                image={benevit.vector_full_path}
                                alt={benevit.name}
                            />
                            <CardActions sx={{ textAlign: 'center', display: 'block', mt: 4 }}>
                                <Button size="large" variant="contained">lo Quiero</Button>
                            </CardActions>
                        </Card>
                    )
                }
                return 0
            })
            benevits.unlocked.map((benevit: any) => {
                if (cartera.id === benevit.wallet.id) {
                    htmlBenvitsUnlocked.push(
                        <Card sx={{ maxWidth: 400, height: 400, m: 1 }} key={benevit.id}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={benevit.ally.mini_logo_full_path}
                                alt={benevit.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {benevit.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {benevit.description}
                                </Typography>
                                <Typography variant="h5" color="black">
                                    {benevit.name}
                                </Typography>
                                <Typography variant="body2" color="black">
                                    {benevit.expiration_date}
                                </Typography>
                            </CardContent>
                        </Card>
                    )
                }
                return 0
            })
            let htmlCartera = (
                <div key={index}>
                    <h1>{cartera.name}</h1>
                    <Grid container padding={2} margin={2} direction="row" alignItems="flex-start">
                        {htmlBenvitsLocked}
                        {htmlBenvitsUnlocked}
                    </Grid>
                </div>
            )
            showBenevits.push(htmlCartera)
            return 0
        })
        return (<>{showBenevits}</>)
    }

    return (
        <>
            {(loadingLocked && loadingUnlocked && carteras !== null) ? showBenevits() : [...Array(3)].map((x, i) =>
                <Grid key={i} container wrap="nowrap">
                    {[...Array(5)].map((x, id) =>
                        <Box key={id} sx={{ width: 210, marginRight: 10, my: 5 }}>
                            <Skeleton variant="rectangular" width={250} height={250} />
                            <Box sx={{ pt: 0.5 }}>
                                <Skeleton />
                                <Skeleton width="60%" />
                            </Box>
                        </Box>
                    )}
                </Grid>
            )}
        </>
    )
}

export default Home