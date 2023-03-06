import * as React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/Typography";
import Durant from '../../../images/Durant.jpg';

export default function CardDisplay({ playerData }) {
    console.log(playerData);
    const employeList = playerData.data ? (
        playerData.data.map((emp) => {
            return (
                <React.Fragment key={emp.id}>
                    <div className='col-md-4'>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <img src={emp.avatar} style={{ width: '100%' }} />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {emp.first_name + " " + emp.last_name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore
                                        agna aliqua. Sapien et ligula ullamcorper malesuada
                                        proin libero nunc.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                    <br></br>
                </React.Fragment>
            );
        })
    ) : (
        <>no available data</>
    );

    return <>{employeList}</>;
}