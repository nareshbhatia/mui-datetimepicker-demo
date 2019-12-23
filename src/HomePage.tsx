import React from 'react';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { KeyboardDateTimePicker } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import moment from 'moment';
import 'moment-timezone';

const useStyles = makeStyles((theme: Theme) => ({
    formControl: {
        marginTop: theme.spacing(2),
        minWidth: 220
    },
    dateTimePicker: {
        width: 220
    },
    result: {
        marginTop: theme.spacing(4)
    }
}));

const InitialTz = 'America/New_York';
const InitialDate = '2020-01-01T09:00:00-05:00';

export const HomePage = () => {
    const classes = useStyles();
    const [tz, setTz] = React.useState(InitialTz);
    const [date, setDate] = React.useState(moment(InitialDate).tz(InitialTz));

    const handleTimezoneChange = (
        event: React.ChangeEvent<{ value: unknown }>
    ) => {
        const timezone = event.target.value as string;
        setTz(timezone);
        setDate(moment(date).tz(timezone));
    };

    const handleDateTimeChange = (date: MaterialUiPickersDate) => {
        if (date != null) {
            console.log(`${date.format('YYYY-MM-DD hh:mm A')} ${date.tz()}`);
            setDate(date);
        }
    };

    return (
        <Box p={2}>
            <Typography component="h1" variant="h5">
                DateTimePicker
            </Typography>

            <FormControl className={classes.formControl}>
                <InputLabel id="timezone-label">Timezone</InputLabel>
                <Select
                    labelId="timezone-label"
                    id="timezone-select"
                    value={tz}
                    onChange={handleTimezoneChange}
                >
                    {moment.tz.names().map(name => (
                        <MenuItem key={name} value={name}>
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <div className={classes.formControl}>
                {/* Redraw on timezone change otherwise interactive picker doesn't change */}
                <KeyboardDateTimePicker
                    key={`dateTime-${tz}`}
                    className={classes.dateTimePicker}
                    label="Start Time"
                    value={date}
                    format="YYYY-MM-DD hh:mm A"
                    onChange={handleDateTimeChange}
                    showTodayButton
                />
            </div>

            <Typography component="h2" variant="h6" className={classes.result}>
                Result
            </Typography>
            <Typography>
                {date.format('YYYY-MM-DD hh:mm A')} {date.tz()}
            </Typography>
        </Box>
    );
};
