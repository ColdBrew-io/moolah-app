import React, { useEffect } from "react";
import SummaryCard from "../Components/SummaryCard";
import { ThemeProvider } from '@mui/material/styles';
import { themeDark } from "../Theme/Theme";

import { Link } from 'react-router-dom';
import { Box } from "@mui/system";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";

import Axios from "axios";

interface props {
    budgetType: String;
    budgetValue: Number;
    savingsGoal: Number;
    repeatGoal: Boolean;
    result: Boolean;
}
export let summaryProps: props =
{
    budgetType: "Essentials",
    budgetValue: 0,
    savingsGoal: 0,
    repeatGoal: false,
    result: false
};

export const SummaryPage: React.FC = () => {

    const [mbudgetType, setBudgetType] = React.useState<String>("");
    const [mbudgetValue, setBudgetValue] = React.useState<Number>(0);
    const [msavingsGoal, setSavingsGoal] = React.useState<Number>(0);
    const [mrepeatGoal, setRepeatGoal] = React.useState<Boolean>(false);

    const InputChangeSetBudgetType = async function (event: any) {
        await setBudgetType(event.target.value);

    };
    const InputChangeSetBudgetValue = async function (event: any) {
        await setBudgetValue(event.target.value);
    };
    const InputChangeSetSavingsGoal = async function (event: any) {
        await setSavingsGoal(event.target.value);
    };
    const InputChangeSetRepeatGoal = async function (event: any) {
        await setRepeatGoal(event.target.checked);
    };

    useEffect(() => {
        summaryProps = {
            budgetType: mbudgetType,
            budgetValue: mbudgetValue,
            savingsGoal: msavingsGoal,
            repeatGoal: mrepeatGoal,
            result: false
        };
    }, [summaryProps]);

    //on button press - send to server
    const sendToServer = () => {
        Axios.post(`https://moolah-app-backend.herokuapp.com/budgets`, {
            budget_type: mbudgetType,
            budget_amount: mbudgetValue,
            saving_goal: msavingsGoal,
            repeat_budget: mrepeatGoal
        }).then(response => {
            console.log(response);
        });
    }

    return (
        <div>
            <ThemeProvider theme={themeDark}>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    style={{ minHeight: '100vh' }}
                >
                    <Typography variant="h4" component="h1"
                        gutterBottom fontFamily='jost' fontWeight='bold'>
                        One Last Thing...
                    </Typography>
                    <SummaryCard
                        budgetType={summaryProps.budgetType}
                        budgetValue={summaryProps.budgetValue}
                        savingsGoal={summaryProps.savingsGoal}
                        repeatGoal={summaryProps.repeatGoal}
                        result={summaryProps.result}

                        InputChangeSetBudgetTypeEvent={InputChangeSetBudgetType}
                        InputChangeSetBudgetValueEvent={InputChangeSetBudgetValue}
                        InputChangeSetSavingsGoalEvent={InputChangeSetSavingsGoal}
                        InputChangeSetRepeatGoalEvent={InputChangeSetRepeatGoal}
                    >
                    </SummaryCard>

                    <Box m={1} pt={2}>
                        <Button variant="contained" onClick={sendToServer}>I'm all set!</Button>
                    </Box>
                    <Link to="/">
                        <Button variant="text">Back to Home</Button>
                    </Link>
                    <Link to="/Information">
                        <Button variant="text">See information</Button>
                    </Link>
                </Grid>
            </ThemeProvider>
        </div>
    );
}

export default SummaryPage;