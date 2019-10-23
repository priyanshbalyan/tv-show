import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const cardStyle = {
    width: 150,
    height:250
};

const Show = (props) => {
    const { showDetails } = props;

    return (
        <Card style={cardStyle}>
            <CardActionArea>
                <CardMedia
                style={{height: 180}}
                image={showDetails.image ? showDetails.image.medium : '-'}
                title={showDetails.name}
                />
                <CardContent>
                <Typography gutterBottom fontSize={8}>
                    {showDetails.name}
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default Show;