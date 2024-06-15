
import { Link, router, useFocusEffect } from "expo-router";
import { View, Text } from "react-native";
import { Image, StyleSheet } from 'react-native';
import { GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";
import { useCallback, useEffect, useState } from "react";
import * as Progress from 'react-native-progress';
import SvgSunWithEarth from '@/assets/images/sunWithEarth.svg';
import SvgLeftArrow from '@/assets/images/leftArrow.svg';
import SvgBurgerIcon from '@/assets/images/blackBurgur.svg';
import SvgPenIcon from '@/assets/images/pen.svg';
import { StatusBar } from "expo-status-bar";
import { loanService } from "@/services/LoanService";
import { addMonths, differenceInMonths, format, isAfter } from "date-fns";
import { AnimatedCircularProgress } from "react-native-circular-progress";

export default function MortgageData() {
    const [showNewComponent, setShowNewComponent] = useState(false);
    const [loanActive, setLoanActive] = useState(false);
    const [loanDetails, setLoanDetails] = useState<any>({});

    useFocusEffect(
        useCallback(() => {
            loanService.getLoan().then(res => {
                processData(res.loan)
            }).catch(err => {
                console.log(err.response.data)
            })
        }, [])
    );

    const calculateEmi = (principal: number, annualRate: number, periodOfLoanInMonths: number) => {
        const monthlyRate = annualRate / 12 / 100;
        return principal * monthlyRate * Math.pow(1 + monthlyRate, periodOfLoanInMonths) / (Math.pow(1 + monthlyRate, periodOfLoanInMonths) - 1);
    };

    const padZero = (num: number) => num.toString().padStart(2, '0');

    const processData = (loan: any) => {
        const {
            loanAmount,
            annualRateOfInterest,
            dateLoanStarted,
            periodOfLoan
        } = loan;

        const currentDate = new Date();
        const dateLoanStart = new Date(dateLoanStarted);
        const periodOfLoanInMonths = Number(periodOfLoan);
        const dateLoanEnd = addMonths(dateLoanStart, periodOfLoanInMonths);
        const monthsElapsed = differenceInMonths(currentDate, dateLoanStart);
        const nextEmiDate = addMonths(dateLoanStart, monthsElapsed + 1);

        const emi = calculateEmi(loanAmount, annualRateOfInterest, periodOfLoanInMonths);

        let remainingPrincipal = loanAmount;
        let interestPaid = 0;
        let principalPaid = 0;

        for (let i = 0; i < monthsElapsed; i++) {
            const interestForMonth = remainingPrincipal * (annualRateOfInterest / 12 / 100);
            interestPaid += interestForMonth;
            const principalForMonth = emi - interestForMonth;
            principalPaid += principalForMonth;
            remainingPrincipal -= principalForMonth;
        }

        const totalMonthsRemaining = differenceInMonths(dateLoanEnd, currentDate);
        const yearsRemaining = Math.floor(totalMonthsRemaining / 12);
        const monthsRemaining = totalMonthsRemaining % 12;

        if (dateLoanStarted && isAfter(dateLoanEnd, currentDate)) {
            setLoanActive(true)
        }
        setLoanDetails({
            ...loan,
            dateLoanStarted: format(dateLoanStart, 'yyyy-MM-dd'),
            dateLoanEnd: format(dateLoanEnd, 'MMMM yyyy'),
            timeRemaining: {
                years: padZero(yearsRemaining),
                months: padZero(monthsRemaining)
            },
            emiAmount: emi.toFixed(2),
            nextEmiDate: format(nextEmiDate, 'MMMM yyyy'),
            principalPaid: principalPaid.toFixed(2),
            interestPaid: interestPaid.toFixed(2),
            remainingBalance: remainingPrincipal.toFixed(2),
            progress: Math.round((monthsElapsed / periodOfLoanInMonths * 100))
        });
    }

    const handleButtonClick = () => {
        setShowNewComponent(!showNewComponent);
    };

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <StatusBar backgroundColor="#D1D1D1"></StatusBar>

            <View style={{ backgroundColor: "#F0F0F0" }}>

                <View style={[styles.outerGap, styles.flexWithBetween]}>
                    <Link href="/homedata" >
                        <View style={styles.link}>
                            <SvgLeftArrow />
                        </View>
                    </Link>
                    <View>
                        <TouchableOpacity style={styles.button} onPress={handleButtonClick} >
                            <SvgBurgerIcon />
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={{ backgroundColor: "rgba(0,0,0,0)", margin: 20 }}>
                    <View style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                            <Text style={[styles.title, styles.font24]} >Loan tracker</Text>

                            <TouchableOpacity onPress={() => { router.push('loantracker') }} style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <View >
                                    <SvgPenIcon height={16} width={16} />
                                </View>
                                <Text style={{ fontSize: 12, color: "#595959", marginStart: 5 }} >Edit info</Text>
                            </TouchableOpacity>
                        </View>

                        {
                            loanActive ?
                                <View style={{ marginTop: 40, }}>
                                    <View style={{ backgroundColor: "#466488", borderRadius: 12, paddingTop: 17, paddingLeft: 21 }}>
                                        <View >
                                            <Text style={[styles.textWhite, styles.font16, { fontWeight: 500 }]}>Loan free countdown</Text>
                                            <Text style={[styles.textWhite, { paddingTop: 5 }]}>{loanDetails.dateLoanEnd}</Text>
                                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", }}>
                                                <View style={{ paddingBottom: 17 }}>

                                                    <Text style={[styles.textCenter, styles.textWhite]}>{loanDetails.timeRemaining?.years}</Text>
                                                    <Text style={[styles.textWhite, { marginTop: -10, textAlign: "center" }]} >Years</Text>
                                                </View>
                                                <View style={{ paddingBottom: 17 }}>
                                                    <Text style={[styles.textCenter, styles.textWhite]}>{loanDetails.timeRemaining?.months}</Text>
                                                    <Text style={[styles.textWhite, { marginTop: -10, textAlign: "center" }]}>months</Text>
                                                </View>
                                                <SvgSunWithEarth />
                                            </View>
                                        </View>
                                    </View>
                                    <View style={[styles.shadow, { backgroundColor: "#E8E0D4", borderRadius: 12, marginTop: 17, padding: 17 }]}>
                                        <View >
                                            <Text style={[styles.font16, { color: "#595959", fontWeight: 500 }]}>My next payment </Text>
                                            <Text style={[{ color: "#595959", paddingTop: 5 }]}>{loanDetails.nextEmiDate}</Text>
                                            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", }}>
                                                <View style={{ flexDirection: "row" }}>
                                                    <Text style={[styles.textCenter, { color: "#595959", paddingRight: 10 }]}>₱</Text>
                                                    <Text style={[styles.textCenter, { color: "#595959" }]}>{loanDetails.emiAmount}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={[styles.shadow, { backgroundColor: "#fff", borderRadius: 12, marginTop: 17, padding: 17 }]}>
                                        <View >
                                            <Text style={[styles.font16, { color: "#595959", fontWeight: 500, }]}>Payoff progress </Text>
                                            <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", }}>
                                                <View style={{ paddingBottom: 17 }}>
                                                    <AnimatedCircularProgress
                                                        size={120}
                                                        tintColor="#61859B"
                                                        backgroundColor="#E8E0D4"
                                                        width={15}
                                                        fill={loanDetails.progress}
                                                        rotation={0}
                                                    >
                                                        {
                                                            (fill) => (
                                                                <Text>
                                                                    {fill}%
                                                                </Text>
                                                            )
                                                        }
                                                    </AnimatedCircularProgress>

                                                </View>

                                                <View style={{ paddingBottom: 17 }}>
                                                    <View>
                                                        <Text style={[styles.balance]}>
                                                            Principal paid
                                                        </Text>
                                                        <Text style={[styles.amount, { color: "#6C955D" }]}>
                                                            ₱ {loanDetails.principalPaid}
                                                        </Text>
                                                    </View>
                                                    <View>
                                                        <Text style={[styles.balance]}>
                                                            Balance
                                                        </Text>
                                                        <Text style={[styles.amount, { color: "#BC5D54" }]}>
                                                            ₱ {loanDetails.emiAmount}
                                                        </Text>
                                                    </View>
                                                    <View>
                                                        <Text style={[styles.balance]}>
                                                            Interest paid
                                                        </Text>
                                                        <Text style={[styles.amount, { color: "#BC5D54" }]}>
                                                            ₱ {loanDetails.interestPaid}
                                                        </Text>
                                                    </View>
                                                </View>

                                            </View>
                                        </View>
                                    </View>
                                </View> :
                                <View style={{ marginTop: 40, }}>
                                    <View style={{ backgroundColor: "#466488", borderRadius: 12, paddingTop: 17, paddingLeft: 21 }}>
                                        <View >
                                            <Text style={[styles.textWhite, styles.font16, { fontWeight: 500 }]}>No Active Loan</Text>
                                            <Text style={[styles.textWhite, { paddingTop: 5 }]}>Edit info to update loan info</Text>
                                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", }}>
                                                <View style={{ paddingBottom: 17 }}>

                                                    <Text style={[styles.textCenter, styles.textWhite]}>00</Text>
                                                    <Text style={[styles.textWhite, { marginTop: -10, textAlign: "center" }]} >Years</Text>
                                                </View>
                                                <View style={{ paddingBottom: 17 }}>
                                                    <Text style={[styles.textCenter, styles.textWhite]}>00</Text>
                                                    <Text style={[styles.textWhite, { marginTop: -10, textAlign: "center" }]}>months</Text>
                                                </View>
                                                <SvgSunWithEarth />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                        }
                    </View>
                </View>

            </View>
        </GestureHandlerRootView>

    );
}
const styles = StyleSheet.create({

    shadow: {
        shadowColor: 'rgba(0, 0, 0, 0.07)',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 15,
    },
    amount: {
        marginBottom: 11,
        fontWeight: 700,
        fontSize: 18,
    },
    balance: {
        color: "rgba(91, 99, 105, 0.8)",
        fontSize: 14,
        fontWeight: 500,
    },
    textWhite: {
        color: "#fff",
    },
    textCenter: {
        fontSize: 40,
        fontWeight: 800,
        textAlign: "center",
    },
    flexWithBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    outerGap: {
        marginTop: 50,
        marginHorizontal: 20

    },
    link: {
        width: 30,
        height: 30,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(223, 223, 223, 1)',
        padding: 5,
        borderRadius: 50,
    },
    fontWeight600: {
        fontWeight: 600,
    },
    button: {
        backgroundColor: 'rgba(223, 223, 223, 1)',
        padding: 10,
        borderRadius: 10,
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
    },
    font16: {
        fontSize: 16
    },
    font24: {
        fontSize: 24,
    },
    title: {
        textAlign: "left",
        fontSize: 24,
        color: "#595959",
    },
});