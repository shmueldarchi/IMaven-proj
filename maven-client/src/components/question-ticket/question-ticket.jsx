import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Car from '../../assets/Categories/Car.png';
import Laptop from '../../assets/Categories/Laptop.png';
import Medicine from '../../assets/Categories/Medicine.png';
import Renovation from '../../assets/Categories/Renovation.png';
import Sport from '../../assets/Categories/Sport.png';
import { Categories } from '../../models/categories.ts';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {updateCurrentView} from '../../features/view';
import {viewNames} from '../../models/view-names.ts'

function QuestionTicket(props) {
    const imgUrl = 'http://localhost:3000/src/assets/Categories/' + props.category + '.png';
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const imgCard = () => {
        switch (props.category) {

            case Categories.LAPTOP:
                return <CardMedia
                    component="img"
                    image={Laptop}
                    alt={props.category}
                />

                break;
            case Categories.CAR:
                return <CardMedia
                    component="img"
                    image={Car}
                    alt={props.category}
                />
                break;
            case Categories.SPORT:
                return <CardMedia
                    component="img"
                    image={Sport}
                    alt={props.category}
                />
                break;
            case Categories.MEDICINE:
                return <CardMedia
                    component="img"
                    image={Medicine}
                    alt={props.category}
                />
                break;
            case Categories.RENOVATION:
                return <CardMedia
                    component="img"
                    image={Renovation}
                    alt={props.category}
                />
                break;
            default:
                return 'blablabla'
                break;
        }
    }

    return (
        <Card sx={{ padding: '20px', borderRadius:"10px", boxShadow:"1px 1px 8px rgb(0 0 0 / 10%)" }} onClick={() => {
            navigate('/QuestionView', {
                state: {
                    id: props.id,
                }
            });
            dispatch(updateCurrentView({ viewName: viewNames.QUESTIONS }));
        }}>
            <CardActionArea>
                {imgCard()}
            </CardActionArea>
        </Card>)
}

export default QuestionTicket