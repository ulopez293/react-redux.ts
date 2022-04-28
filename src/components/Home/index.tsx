import useGetData from '../../hooks/useGetData'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

const memberWallets: string = '/member/wallets'
const landing_benevits: string = '/member/landing_benevits'

function Home() {
    const [carteras]: any = useGetData(memberWallets)
    const [benevits]: any = useGetData(landing_benevits)
    let loadingLocked = benevits && benevits.hasOwnProperty('locked') && benevits.locked.length > 0
    let loadingUnlocked = benevits && benevits.hasOwnProperty('unlocked') && benevits.unlocked.length > 0
    console.log(carteras)
    console.log(benevits)

    const showBenevits = () => {
        if (carteras === null) return <h2>cargando...</h2>
        let showBenevits: any = []
        carteras.map((cartera: any, index: number) => {
            let htmlBenvitsLocked: any = []
            let htmlBenvitsUnlocked: any = []
            benevits.locked.map((benevit: any) => {
                if (cartera.id === benevit.wallet.id) {
                    htmlBenvitsLocked.push(
                        <Card sx={{ maxWidth: 400, height: 400, m:1, Width:400 }} key={benevit.id} >
                            <CardMedia
                                component="img"
                                height="280"
                                image={benevit.vector_full_path}
                                alt={benevit.name}
                            />
                            <CardActions sx={{textAlign: 'center', display: 'block', mt:4 }}>
                                <Button size="large" variant="contained">lo Quiero</Button>
                            </CardActions>
                        </Card>
                    )
                }
            })
            benevits.unlocked.map((benevit: any) => {
                if (cartera.id === benevit.wallet.id) {
                    htmlBenvitsUnlocked.push(
                        <Card sx={{ maxWidth: 400, height: 400, m:1 }} key={benevit.id}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={benevit.vector_full_path}
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
        })
        return (<>{showBenevits}</>)
    }

    return (
        <>
            {(loadingLocked && loadingUnlocked) ? showBenevits() : <h2>cargando...</h2>}
        </>
    )
}

export default Home