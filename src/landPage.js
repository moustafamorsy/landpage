import React from 'react'
import {  Stack , AppBar , Toolbar , Typography,  Grid , Card , CardContent , TextField , Button} from '@mui/material';
import Map from './map';
function landPage() {
  return (
    <div>
     <AppBar position='static'>

        <Toolbar>
           <Typography variant='h6' component="div" sx={{flexGrow : 1}}>
            Web Services
           </Typography>
           <Stack direction="row" spacing={2}>
      <Button color="inherit">Home</Button>
      <Button color="inherit">Pricing</Button>
      <Button color="inherit">About us</Button>
      <Button color="inherit">Contact us</Button>
           </Stack>
        </Toolbar>

     </AppBar>
  
<section style={{textAlign : "center", color :"white" , fontSize : "15px" ,marginTop : "100px"}}>
    <h2>Our Service</h2>

    <p>offers a cloud web hosting solution that provides businesses & organizations with a flexible, scalable, low-cost<br></br> way to deliver websites & applications.
</p>
</section>




<div style={{display : "flex" , justifyContent : "space-around" , marginTop : "100px"}}>


<Card style={{maxWidth : 500,  }}>
    <CardContent>
        <Typography gutterBottom variant='h5'>Contact US</Typography>
        <form>
        <Grid container spacing={1}>
    <Grid xs={12} sm={6} item>
  <TextField label="First Name" placeholder = " Enter first name " variant="outlined" fullWidth required/>
  </Grid>
  <Grid xs={12} sm={6} item>
  <TextField label="Last Name" placeholder = " Enter Last name " variant="outlined" fullWidth required/>
  </Grid>
  <Grid xs={12}  item>
  <TextField label="Email" placeholder = " Enter your email " variant="outlined" fullWidth required/>
  </Grid>
  <Grid xs={12}  item>
  <TextField label="Message" multiline rows={4} placeholder = " Enter your message " variant="outlined" fullWidth required/>
  </Grid>
  <Grid xs={12}  item>
   <Button type='submit' variant="contained" color="primary" fullWidth>Submit</Button>
   </Grid>
    </Grid>
    </form>
  </CardContent>
  
  </Card>
  </div>

  <h3 style={{textAlign : "center", color :"white" , fontSize : "30px" ,marginTop : "25px"  , textDecoration : "underline" ,}}> Our Location</h3>
  <Map />
  </div>
 
  )
}

export default landPage