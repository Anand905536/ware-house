import React from 'react'
import { Box, Card, CardContent, Stack, Typography } from '@mui/material';

const ListingPage = () => {
    return (
        <Card sx={{ minWidth: 275}} >
            <CardContent >
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                </Typography>

                <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ListingPage