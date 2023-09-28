import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



const Board = () => {


  return (
    <div className="flex gap-8  bg-[] ">
           <Card style={{ borderRadius:10,background: 'radial-gradient(circle, rgba(13,58,87,1) 65%, rgba(15,87,122,1) 92%)'}} className=' w-full  h-40   rounded-xl  ' >
                <CardContent className="space-y-5">
                    <Typography variant="h6" component="div">
                    </Typography>
                </CardContent>
            </Card>                   
        
    </div>
    
  )
}


export default Board