import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Typography, Link } from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import * as _ from 'lodash';
import { useTheme } from '@material-ui/core/styles';

const ShowDialog = (props) => {
    let open = props.details ? true : false;
    const details = props.details ? props.details : {};
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Dialog
            open={open}
            onClose={props.close}
            fullScreen={fullScreen}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description">
            <DialogTitle>{details.name}</DialogTitle>
            <DialogContent>
                <Grid spacing={2} container>
                    <Grid key={1} item md={5}>
                        <img width={200} src={details.image ? details.image.medium : '-'} /><br/>
                        <Typography variant="overline"><Link href={details.officialSite}>Official Site</Link></Typography>
                    </Grid>
                    <Grid key={2} item md={7}>
                        <Grid container>
                            <Grid item xs={6}>
                                <Typography variant="overline">Network</Typography><br/>
                                <Typography variant="body2">{details.network ? details.network.name : '-'}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="overline">Status</Typography><br/>
                                <Typography variant="body2">{details.status}</Typography>
                            </Grid>
                        </Grid>
                        <br/>
                        <Grid container>
                            <Grid item xs={6}>
                                <Typography variant="overline">Runtime</Typography><br/>
                                <Typography variant="body2">{details.runtime + ' minutes'}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="overline">Type</Typography><br/>
                                <Typography variant="body2">{details.type}</Typography>
                            </Grid>
                        </Grid>
                        <br/>
                        <Grid container>
                            <Grid item xs={6}>
                                <Typography variant="overline">Schedule</Typography><br/>
                                <Typography variant="body2">{details.schedule ? details.schedule.time : '-'}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                            <Typography variant="overline">Language</Typography><br/>
                                <Typography variant="body2">{details.language}</Typography>
                            </Grid>
                        </Grid>
                        <br/>
                        <Typography variant="overline">Summary</Typography><br/>
                        <Typography variant="body2">{_.replace(details.summary, /(<([^>]+)>)/ig, '')}</Typography>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.close} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ShowDialog;