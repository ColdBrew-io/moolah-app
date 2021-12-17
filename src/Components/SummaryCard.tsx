
import React from "react";

import Typography from '@mui/material/Typography';
import { TextField } from "@mui/material";
import { Grid } from "@mui/material";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import '../Global.css'

interface props
{
    budgetType: string;
    budgetValue: Number;
    savingsGoal: Number;
    repeatGoal: Boolean;
    result: Boolean;
}

const SummaryCard: React.FC<props> =
    ({ budgetType, budgetValue, savingsGoal, repeatGoal, result }: props) =>
    {
        //use states
        const [mbudgetType, setBudgetType] = React.useState<String>(budgetType);
        const [mbudgetValue, setBudgetValue] = React.useState<Number>(budgetValue);
        const [msavingsGoal, setSavingsGoal] = React.useState<Number>(savingsGoal);

        const InputChangeSetBudgetType = (event: any) => { setBudgetType(event.target.value); };
        const InputChangeSetBudgetValue = (event: any) => { setBudgetValue(event.target.value); };
        const InputChangeSetSavingsGoal = (event: any) => { setSavingsGoal(event.target.value); };


        const renderBudgetType = () =>
        {
            if (!result)
            {
                return (
                    <TextField
                        id="standard-required"
                        label="Enter Budget tag here"
                        variant="standard"
                        value={mbudgetType}
                        onChange={InputChangeSetBudgetType}
                    />)
            } else
            {
                return (<Typography>{mbudgetType}</Typography>)
            }
        }
        const renderBudget = () =>
        {
            if (!result)
            {
                return (
                    <TextField
                        id="standard-required"
                        label="Enter Budget here"
                        value={mbudgetValue}
                        variant="standard"
                        type="number"
                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                        onChange={InputChangeSetBudgetValue}
                    />)
            } else
            {
                return (<Typography>{mbudgetValue}</Typography>)
            }
        }
        const renderSavingsGoal = () =>
        {
            if (!result)
            {
                return (<TextField
                    id="standard-required"
                    label="Enter savings goal here"
                    value={msavingsGoal}
                    variant="standard"
                    type="number"
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    onChange={InputChangeSetSavingsGoal}
                />)
            } else
            {
                return (<Typography>{msavingsGoal}</Typography>)
            }
        }

        const renderBudgetCheckBox = () =>
        {
            if(!result)
            {
                return ( 
                <FormControlLabel control={<Checkbox defaultChecked />}
                    label="Repeat this budget every month?" />)
            }else{
                
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
