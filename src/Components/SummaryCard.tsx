
import React from "react";

import Typography from '@mui/material/Typography';
import { TextField } from "@mui/material";
import { Grid } from "@mui/material";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import '../Global.css'
interface props {

    //data variables
    budgetType: String;
    budgetValue: Number;
    savingsGoal: Number;
    repeatGoal: Boolean;
    result: Boolean;

    //callback when textfield changes
    InputChangeSetBudgetTypeEvent: any;
    InputChangeSetBudgetValueEvent: any;
    InputChangeSetSavingsGoalEvent: any;
    InputChangeSetRepeatGoalEvent: any;

}
const SummaryCard: React.FC<props> =
    ({ budgetType,
        budgetValue,
        savingsGoal,
        repeatGoal,
        result,
        InputChangeSetBudgetTypeEvent,
        InputChangeSetBudgetValueEvent,
        InputChangeSetSavingsGoalEvent,
        InputChangeSetRepeatGoalEvent
    }: props) => {

        //use states
        const renderBudgetType = () => {
            if (!result) {
                return (
                    <TextField
                        id="standard-required"
                        label="Enter Budget tag here"
                        variant="standard"

                        onChange={InputChangeSetBudgetTypeEvent}
                    />)
            } else {
                return (<Typography>{budgetType}</Typography>)
            }
        }
        const renderBudget = () => {
            if (!result) {
                return (
                    <TextField
                        id="standard-required"
                        label="Enter Budget here"

                        variant="standard"
                        type="number"
                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                        onChange={InputChangeSetBudgetValueEvent}
                    />)
            } else {
                return (<Typography>{budgetValue}</Typography>)
            }
        }
        const renderSavingsGoal = () => {
            if (!result) {
                return (<TextField
                    id="standard-required"
                    label="Enter savings goal here"

                    variant="standard"
                    type="number"
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    onChange={InputChangeSetSavingsGoalEvent}
                />)
            } else {
                return (<Typography>{savingsGoal}</Typography>)
            }
        }

        const renderBudgetCheckBox = () => {
            if (!result) {
                return (
                    <FormControlLabel control={<Checkbox
                        defaultChecked={false}
                        onChange={InputChangeSetRepeatGoalEvent} />}
                        label="Repeat this budget every month?" />)
            } else {
                return (<Typography>{repeatGoal}</Typography>)
            }
        }

        return (
            <>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Grid style={{
                            alignItems: "center",
                            justifyContent: "center",
                            padding: '20px',
                            width: '40vw'
                        }}
                            container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={6}>
                                <Typography color="inherit">Budget Type:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                {renderBudgetType()}
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body1">Budget:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                {renderBudget()}
                            </Grid>
                            <Grid item xs={6}>
                                <Typography>Savings goal:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                {renderSavingsGoal()}
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
                {renderBudgetCheckBox()}
            </>
        );
    };

export default SummaryCard;
