import ButtonComponent from "@/components/ButtonComponent";
import InputComponent from "@/components/InputComponent";
import { projectService } from '@/services/ProjectService'
import { Link, router } from "expo-router";
import { View, Text } from "react-native";
import { StyleSheet, ScrollView } from 'react-native';
import { GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";
import SvgLeftArrow from '@/assets/images/leftArrow.svg';
import SvgBurgerIcon from '@/assets/images/blackBurgur.svg';
import { StatusBar } from "expo-status-bar";
import { Picker } from "@react-native-picker/picker";
import { useEffect, useState } from "react";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { loanService } from "@/services/LoanService";
import { format } from "date-fns";

export default function LoanTrackerForm() {
    const [formValues, setFormValues] = useState<any>({ dateLoanStarted: new Date() });
    const [projects, setProjects] = useState<any[]>([]);
    const [showDatePicker, setShowDatePicker] = useState(false);

    useEffect(() => {
        projectService.get().then(res => {
            if (res) {
                setProjects(res)
            }
        }).catch(err => {
            console.log(err.response.data)
        })
        loanService.getLoan().then(res => {
            if (res.loan) {
                setFormValues(res.loan)
            }
        }).catch(err => {
            console.log(err.response.data)
        })
    }, [])

    const handleInput = (data: any) => {
        setFormValues({ ...formValues, [data.name]: data.value })
    }

    const handleDateChange = (e: any, selectedDate: any) => {
        const currentDate = selectedDate || formValues.dateLoanStarted;
        setShowDatePicker(false);
        handleInput({ name: 'dateLoanStarted', value: format(currentDate, 'yyyy-MM-dd') });
    };

    const handleSubmit = async () => {
        try {
            await loanService.updateLoan(formValues);
            router.back();
        } catch (error: any) {
            console.log(error.response.data)
        }
    };
    return (
        <GestureHandlerRootView style={{ height: "auto" }}>
            <StatusBar backgroundColor="#D1D1D1"></StatusBar>
            <View style={{ padding: 25, zIndex: 1, width: '100%', height: "100%", backgroundColor: "#F0F0F0" }}>

                <ScrollView  >
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                        <Link href="/homedata"   >
                            <View style={styles.circle}>
                                <SvgLeftArrow />
                            </View>
                        </Link>
                        <View>
                            <TouchableOpacity style={styles.button} >
                                <SvgBurgerIcon />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={styles.title}>Loan tracker</Text>
                    <Text style={{ color: "#5B6369" }}>
                        Answer a few questions to help us set up your mortgage tracker. This will ensure you get the most accurate and personalized information.
                    </Text>
                    <View>
                        <Text style={[styles.label, { fontWeight: 600, marginTop: 25, marginBottom: 16 }]}>General info</Text>

                        <Text style={styles.label}>Which project is your house at?</Text>
                        <View style={styles.pickerContainer}>
                            <Picker
                                style={styles.input}
                                selectedValue={formValues.projectId}
                                onValueChange={(itemValue) =>
                                    handleInput({ name: 'projectId', value: itemValue })
                                }>
                                <Picker.Item label="Select project" value="" color={styles.disabledItem.color} />
                                {
                                    projects.map(p =>
                                        <Picker.Item key={p.id} label={p.name} value={p.id} />
                                    )
                                }
                            </Picker>
                        </View>

                    </View>
                    <View>
                        <Text style={[styles.label, { fontWeight: 600, marginTop: 0, marginBottom: 16 }]}>Mortgage countdown</Text>
                        <View style={styles.flexBetween}>

                            <Text style={styles.label}>House buying price</Text>
                        </View>
                        <InputComponent placeholder=" " value={formValues.houseBuyingPrice} name="houseBuyingPrice" onInput={handleInput} keyboardType="numeric" />
                    </View>

                    <View>
                        <Text style={styles.label}>Down payment amount </Text>
                        <InputComponent placeholder="" value={formValues.downPaymentAmount} name="downPaymentAmount" onInput={handleInput} keyboardType="numeric" />
                    </View>
                    <View>
                        <Text style={styles.label}>Loan amount</Text>
                        <InputComponent placeholder="" value={formValues.loanAmount} name="loanAmount" onInput={handleInput} keyboardType="numeric" />
                    </View>
                    <View>
                        <Text style={styles.label}>Interest on loan</Text>
                        <InputComponent placeholder="" value={formValues.interestOnLoan} name="interestOnLoan" onInput={handleInput} keyboardType="numeric" />
                    </View>
                    <View>
                        <Text style={styles.label} >Annual rate of interest</Text>
                        <InputComponent placeholder="" value={formValues.annualRateOfInterest} name="annualRateOfInterest" onInput={handleInput} keyboardType="numeric" />
                    </View>
                    <View>
                        <Text style={styles.label} >Date loan started</Text>
                        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                            <View pointerEvents="none">
                                <InputComponent placeholder="" value={formValues.dateLoanStarted} editable={false} />
                            </View>
                        </TouchableOpacity>
                        {
                            showDatePicker && <RNDateTimePicker value={new Date(formValues.dateLoanStarted)} onChange={handleDateChange} />
                        }
                    </View>
                    <View>
                        <Text style={styles.label} >Period of loan (in months)
                        </Text>
                        <InputComponent placeholder="" value={`${formValues.periodOfLoan}`} name="periodOfLoan" onInput={handleInput} keyboardType="numeric" />
                    </View>
                    <View>
                        <Text style={styles.label} >Bank of loan
                        </Text>
                        <InputComponent placeholder="" value={formValues.bankOfLoan} name="bankOfLoan" onInput={handleInput} />
                    </View>
                    <TouchableOpacity>
                        <ButtonComponent title="Done" onPress={handleSubmit} />
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </GestureHandlerRootView>

    );
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: 'rgba(223, 223, 223, 1)',
        padding: 10,
        borderRadius: 10,
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
    },
    pickerContainer: {
        borderWidth: 0,
        borderRadius: 12,
        overflow: 'hidden',
        marginBottom: 14,
    },
    input: {
        width: "100%",
        backgroundColor: '#fff',
        borderWidth: 0,
        padding: 13,
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
        color: '#595959',
    },
    disabledItem: {
        color: 'gray',
    },
    circle: {
        width: 30,
        height: 30,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(223, 223, 223, 1)',
        padding: 5,
        borderRadius: 50,
    },
    flexBetween: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    label: {
        fontSize: 16,
        color: '#595959',
        paddingBottom: 5,
    },

    title: {
        textAlign: "left",
        fontSize: 24,
        marginBottom: 20,
        marginTop: 40,
        color: "#595959",
    },
    link: {
        color: "#6E90AC",
        fontSize: 12,
    }
});