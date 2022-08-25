
import { Box, Card, CardMedia, Divider, Grid, Icon, Paper, Typography } from "@mui/material"
import { ShopLayout } from "../../components/layouts"
import { LinkButton, TitleUi } from "../../components/ui"
import { useMediaQuery, useTheme } from "@mui/material";

import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CategoryIcon from '@mui/icons-material/Category';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const Nosotros = () => {

    const theme = useTheme();
    const subTitleSize = useMediaQuery(theme.breakpoints.up('sm')) ? 'h6' : 'subtitle2';
    const bodySize = useMediaQuery(theme.breakpoints.up('sm')) ? 18 : 12;
    const bodySizeOur = useMediaQuery(theme.breakpoints.up('sm')) ? 16 : 10;

  return (
    <ShopLayout title='Nosotros' pageDescription={'Información de la empresa Next Store Uniforms'} >
    

    <Grid container justifyContent='center' className='main-grid'>

        <Grid
        container
        sx={{ pt: {xs: 1} }} 
        display='flex' 
        justifyContent='center'
        className="home-grid"
        >
        <Grid container  sx={{ pt: 5 }} display='flex' justifyContent='center'>
            <Paper elevation={0} sx={{ textAlign: 'center'}}>
                <TitleUi title={"SOBRE NOSOTROS"} />
                <Typography variant={subTitleSize} color='text.secondary' fontWeight='600' sx={{ mt: 1}}>NEXT STORE UNIFORMS</Typography>
                <Divider sx={{ mt: 1, width: { xs: 180, sm: 305 }, height: 5, borderRadius: 90 }}/> 
            </Paper>

            <Grid container sx={{ 
                backgroundColor: '#F2F2F2', 
                width: '100%', 
                mt: 5, 
                borderBottomRightRadius: { sm: 0, md: 600}, 
                borderTopRightRadius: { sm: 0, md: 600}, 
                display: 'flex',
                alignItems: 'center',
            }}>
                <Grid item xs={12} md={6} sx={{ p: 5 }} display='flex' justifyContent='center'>
                    <Card sx={{ width: 700 }}>
                        <CardMedia
                            component='img'
                            alt='Sucursal'
                            image='/assets/images/aboutUs/building.webp'
                            sx={{ width: '100%', maxHeight: 440, padding: 1 }}
                        />
                    </Card>
                </Grid>

                <Grid item xs={12} md={6} sx={{ pr: { xs: 5, md: 20}, pl: 5, mb: { xs: 5, md: 0 } }}>
                <Typography fontSize={bodySize} color='text.secondary' fontWeight='500' align="justify">Somos una empresa originaria de la ciudad de Chihuahua, Chih., especializada en venta de uniformes de trabajo, industriales y empresariales, con mas de 30 años de experiencia, en los que el servicio al cliente y la calidad de nuestros productos siempre han sido la prioridad.</Typography>
                </Grid>
            </Grid>

            <Grid container sx={{ mt: 10, mb: {xs: 10, md: 0} , display: 'flex', alignItems: 'center', }} >
                <Grid item xs={12} md={6} sx={{ pr: 5, pl: 5, mb: { xs: 5, md: 0 } }}>
                  
                    <Typography variant={subTitleSize} fontWeight={800} color='text.secondary' >MISIÓN</Typography>
                    <Divider sx={{ mt: 1, mb: 1, width: { xs: 53, sm: 75 }, height: 5, borderRadius: 90 }}/> 
                    <Typography fontSize={bodySize} color='text.secondary' fontWeight='500' align="justify">En Next Store Uniforms nuestra misión es ofrecer productos de calidad, con diseños vanguardistas y a precios competitivos, que contribuyan a dar una imagen de profesionalismo, uniformidad y refinamiento a nuestros clientes.</Typography>
                </Grid>

                <Grid item xs={12} md={6}  sx={{ py: 5, backgroundColor: '#F2F089', width: '100%', borderTopLeftRadius: 600}} display='flex' justifyContent='center'>
                    <Card sx={{ width: 500 }}>
                        <CardMedia
                            component='img'
                            alt='Sucursal'
                            image='/assets/images/aboutUs/cliente1.webp'
                            sx={{ width: '100%', maxHeight: 'auto', padding: 1 }}
                        />
                    </Card>
                </Grid>
            </Grid>

            <Grid container sx={{ display: 'flex', alignItems: 'center',  }} direction='row-reverse'>
                <Grid item xs={12} md={6} sx={{ pr: 5, pl: 5, mb: { xs: 5, md: 0 } }}>
                    <Typography variant={subTitleSize} fontWeight={800} color='text.secondary' >VISIÓN</Typography>
                    <Divider sx={{ mt: 1, mb: 1, width: { xs: 53, sm: 75 }, height: 5, borderRadius: 90 }}/> 
                    <Typography fontSize={bodySize} color='text.secondary' fontWeight='500' align="justify">Nuestra visión es llegar a más personas, priorizando siempre el servicio al cliente y la oferta de productos de calidad mediante la actualización continua en marcas innovadoras y de prestigio.</Typography>
                </Grid>
                <Grid item xs={12} md={6}  sx={{ py: 5, backgroundColor: '#F2F089', width: '100%', borderTopRightRadius: 600}} display='flex' justifyContent='center'>
                    <Card sx={{ width: 500 }}>
                        <CardMedia
                            component='img'
                            alt='Sucursal'
                            image='/assets/images/aboutUs/cliente2.webp'
                            sx={{ width: '100%', maxHeight: 460, padding: 1 }}
                        />
                    </Card>
                </Grid>

            </Grid>

            <Paper elevation={2} sx={{ mt: 10, mx: { xs: 1, md: 5, xl: 0} }}>
                <Box display='flex' justifyContent='center'>

                
                <Grid container item md={9} spacing={0} sx={{ py: 5 }} >

                    <Grid item xs={12} sx={{ mb: 3 }}>
                        <Box display='flex' justifyContent='center'>
                            {/* <TitleUi title={"NUESTRAS VENTAJAS"} /> */}
                            <Typography variant={subTitleSize} fontWeight={800} color='text.secondary' >NUESTRAS VENTAJAS</Typography>
                        </Box>
                        <Box display='flex' justifyContent='center'>
                            <Divider sx={{ mt: 1, width: { xs: 180, sm: 210 }, height: 5, borderRadius: 90 }}/> 
                        </Box>
                    </Grid>

                    
                    <Grid  item xs={12} md={6} sx={{ textAlign: 'center', p: 1 }}>
                        

                        <StarIcon fontSize='large' color='info'/>


                        {/* <Typography  variant='h5'  color='text.secondary'>Ipsum et pariatur</Typography> */}
                        <Typography variant={subTitleSize} fontWeight={600} color='text.secondary' >Experiencia</Typography>
                        <Typography variant='body1' color='text.secondary'>Somos una empresa que ha servido a una base de clientes sólida hasta por más de 30 años.</Typography>

                    </Grid>

                    <Grid  item xs={12} md={6} sx={{ textAlign: 'center', p: 1 }}>
                        

                        <AttachMoneyIcon fontSize='large' color='info'/>


                        {/* <Typography  variant='h5'  color='text.secondary'>Ipsum et pariatur</Typography> */}
                        <Typography variant={subTitleSize} fontWeight={600} color='text.secondary' >Precio</Typography>

                        <Typography variant='body1' color='text.secondary'>Procuramos siempre ofrecerte los mejores productos a precios competitivos en ventas de menudeo o mayoreo.</Typography>

                    </Grid>

                    <Grid  item xs={12} md={6} sx={{ textAlign: 'center', p: 1 }}>
                        

                        <CategoryIcon fontSize='large' color='info'/>


                        {/* <Typography  variant='h5'  color='text.secondary'>Ipsum et pariatur</Typography> */}
                        <Typography variant={subTitleSize} fontWeight={600} color='text.secondary' >Variedad </Typography>

                        <Typography variant='body1' color='text.secondary'>Contamos con un amplio catálogo de productos de calidad para satisfacer las necesidades de nuestros clientes.</Typography>

                    </Grid>
                    <Grid  item xs={12} md={6} sx={{ textAlign: 'center', p: 1 }}>
                        

                        <SupportAgentIcon fontSize='large' color='info'/>


                        {/* <Typography  variant='h5'  color='text.secondary'>Ipsum et pariatur</Typography> */}
                        <Typography variant={subTitleSize} fontWeight={600} color='text.secondary' >Atención al cliente</Typography>

                        <Typography variant='body1' color='text.secondary'>La satisfacción del cliente es nuestra prioridad y la atención personalizada es nuestra especialidad.</Typography>

                    </Grid>
                    
                </Grid>
                </Box>
            </Paper>

        </Grid>
        </Grid>
        </Grid>
    
    </ShopLayout>
  )
}

export default Nosotros;