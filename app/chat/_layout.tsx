import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import ButtonComponent from "@/components/ButtonComponent";
import InputComponent from "@/components/InputComponent";
import CardComponent from "@/components/CardComponent";
import GradientBackgroundComponent from "@/components/GradientBackgroundComponent";
import { Link, router } from "expo-router";
import * as Linking from 'expo-linking';
import Header from "../header/_layout";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import SvgUserIcon from '@/assets/images/userIcon.svg';
import SvgWarningIcon from '@/assets/images/warning-s.svg';
import SvgAttachmentIcon from '@/assets/images/attachment.svg';



const conversationData = {
    "conversation": [
      {
        "id": "welcome",
        "message": "Hi! How can I assist you with your home today?",
        "options": [
          {
            "label": "Book maintenance",
            "nextStep": "maintenanceOptions"
          },
          {
            "label": "Report a Problem",
            "nextStep": "reportProblemOptions"
          },
          {
            "label": "Contact Billion Bricks",
            "nextStep": "contactOptions"
          },
          {
            "label": "Ask a Question",
            "nextStep": "questionOptions"
          }
        ]
      },
      {
        "id": "maintenanceOptions",
        "message": "Sure, I can help you schedule it. What type of maintenance are you looking for?",
        "options": [
          {
            "label": "Annual solar roof cleaning",
            "nextStep": "solarRoofCleaning"
          },
          {
            "label": "Septic Tank Cleaning",
            "nextStep": "septicTankCleaning"
          },
          {
            "label": "General Maintenance",
            "nextStep": "provideDetails"
          },
        ]
      },
      {
        "id": "solarRoofCleaning",
        "message": "The community price for cleaning the solar roof as for 2024 is XXXXX PHP.",
        "options": [
          {
            "label": "Contact provider by phone",
            "nextStep": "cleaningByPhone"
          },
          {
            "label": "Contact provider by message",
            "nextStep": "cleaningByMessage"
          },
        ]
      },
      {
        "id": "septicTankCleaning",
        "message": "The community price for cleaning the septic tank as for 2024 is XXXXX PHP.",
        "options": [
          {
            "label": "Contact provider by phone",
            "nextStep": "cleaningByPhone"
          },
          {
            "label": "Contact provider by message",
            "nextStep": "cleaningByMessage"
          },
        ]
      },
      {
        "id": "cleaningByPhone",
        "message": "Kindly contact XXXXXXXXXXX. Please remember to update the cleaning date in the app so we can remind you of your next schedule.",
      },
      {
        "id": "cleaningByMessage",
        "message": "Kindly contact XXXXXXXXXXX. Please remember to update the cleaning date in the app so we can remind you of your next schedule.",
      },
      {
        "id": "reportProblemOptions",
        "message": "I'm sorry to hear you're experiencing an issue. Is this problem related to any of the following areas?",
        "options": [
          {
            "label": "Roofing",
            "nextStep": "describeProblem"
          },
          {
            "label": "Plumbing",
            "nextStep": "describeProblem"
          },
          {
            "label": "Electrical",
            "nextStep": "describeProblem"
          },
          {
            "label": "Community",
            "nextStep": "describeProblem"
          },
          {
            "label": "Other",
            "nextStep": "describeProblem"
          }
        ]
      },
      {
        "id": "contactOptions",
        "message": "Thanks for contacting BB support! Could you let us know how we can help you?",
        "options": [
          {
            "label": "Customer support",
            "nextStep": "contactDetails"
          },
          {
            "label": "Share feedback",
            "nextStep": "feedbackDetails"
          },
          {
            "label": "Share an idea",
            "nextStep": "ideaDetails"
          },
          {
            "label": "Inquire on floor plan extension",
            "nextStep": "inquiryDetails"
          }
        ]
      },
      {
        "id": "questionOptions",
        "message": "What would you like to know more about?",
        "options": [
          {
            "label": "Tips on how to upkeep Sienna",
            "nextStep": "provideInformation"
          },
          {
            "label": "Learn more about Sienna",
            "nextStep": "provideInformation"
          },
          {
            "label": "Learn more about powerShade",
            "nextStep": "provideInformation"
          },
          {
            "label": "Understanding Your Bills",
            "nextStep": "provideInformation"
          },
          {
            "label": "Home Improvement Ideas",
            "nextStep": "provideInformation"
          },
          {
            "label": "Other",
            "nextStep": "provideInformation"
          }
        ]
      },
      {
        "id": "provideDetails",
        "message": "Please provide more details:",
        "inputRequired": true,
        "nextStep": "followUp"
      },
      {
        "id": "describeProblem",
        "message": "Can you please describe the problem?",
        "inputRequired": true,
        "nextStep": "followUp"
      },
      {
        "id": "contactDetails",
        "message": "Please describe your needs in more detail.",
        "inputRequired": true,
        "nextStep": "followUp"
      },
      {
        "id": "feedbackDetails",
        "message": "We value your insights! What would you like to provide feedback on?",
        "inputRequired": true,
        "nextStep": "followUp"
      },
      {
        "id": "ideaDetails",
        "message": "We'd love to hear your ideas! What did you have in mind?",
        "inputRequired": true,
        "nextStep": "followUp"
      },
      {
        "id": "inquiryDetails",
        "message": "Please write your inquiry here and we will return to you shortly.",
        "inputRequired": true,
        "nextStep": "followUp"
      },
      {
        "id": "provideInformation",
        "message": "Here is some information on [Selected Topic]. Do you have any other questions?",
        "options": [
          {
            "label": "Yes",
            "nextStep": "welcome"
          },
          {
            "label": "No",
            "nextStep": "endConversation"
          }
        ]
      },
      {
        "id": "followUp",
        "message": "Is there anything else I can help you with?",
        "options": [
          {
            "label": "Yes",
            "nextStep": "welcome"
          },
          {
            "label": "No",
            "nextStep": "endConversation"
          }
        ]
      },
      {
        "id": "endConversation",
        "message": "Thank you for using our service. Have a great day!",
        // "options": [
        //   {
        //     "label": "Restart",
        //     "nextStep": "welcome"
        //   }
        // ]
      }
    ]
  }
;

export default function Chat() {
    const [currentStep, setCurrentStep] = useState('welcome');
    const [chatHistory, setChatHistory] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [chatFlow, setChatFlow] = useState({});
    const inputRef = useRef(null);

    const currentStepData = conversationData.conversation.find(step => step.id === currentStep);

    const addMessageToHistory = (message, isUser = false) => {
        setChatHistory(prev => [...prev, { message, isUser }]);
    };

    useEffect(() => {
        if (currentStepData?.inputRequired) {
            inputRef.current.focus();
        }
    }, [currentStep])

    const handleOptionSelect = (option) => {
        addMessageToHistory(currentStepData.message, false);
        addMessageToHistory(option.label, true);
        setChatFlow({...chatFlow, [currentStep]: option.nextStep})
        setCurrentStep(option.nextStep);
        switch(option.nextStep) {
            case 'cleaningByPhone':
                setCurrentStep('followUp')
                Linking.openURL('tel:889665567')
                break;
            case 'cleaningByMessage':
                setCurrentStep('followUp')
                Linking.openURL('whatsapp://send?phone=889665567')
                break;
            
        }
    };

    const handleInputSubmit = () => {
        if (inputValue.trim()) {
            addMessageToHistory(currentStepData.message, false);
            addMessageToHistory(inputValue, true);
            addMessageToHistory(`Thanks for letting us know! We'll review your concerns and get back to you within [] hours. `, false);
            const nextStep = currentStepData.nextStep;
            setCurrentStep(nextStep);
            setInputValue('');
        }
    };

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <GradientBackgroundComponent>
                <Header />

                <View style={{ flexDirection: "column", height: "85%", backgroundColor: "#F7F7F7", marginHorizontal: 20, borderTopEndRadius: 20, borderTopLeftRadius: 20, padding: 20 }}>
                    <ScrollView>
                        <View>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={{ position: "relative", marginRight: 6 }}>
                                        <SvgUserIcon />
                                        <View style={styles.online}></View>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 16, color: "#0D172A" }}>Sienna</Text>
                                        <Text style={{ fontSize: 10, color: "#3EA95D" }}>Available</Text>
                                    </View>
                                </View>
                                <View>
                                    <SvgWarningIcon />
                                </View>
                            </View>

                            {chatHistory.map((item, index) => (
                                <View key={index} style={{ flexDirection: item.isUser ? "row-reverse" : "row" }}>
                                    <View style={item.isUser ? styles.rightContainer : styles.leftContainer}>
                                        <Text style={item.isUser ? styles.rightMessage : styles.leftMessage}>{item.message}</Text>
                                    </View>
                                </View>
                            ))}

                            <View style={styles.leftContainer}>
                                <Text style={styles.leftMessage}>{currentStepData.message}</Text>
                            </View>

                            {currentStepData.options && currentStepData.options.length > 0 && (
                                <View style={styles.leftContainer}>
                                    <View style={styles.leftMessage}>
                                        <Text>Select option:</Text>
                                        {currentStepData.options.map((option, index) => (
                                            <TouchableOpacity key={index} onPress={() => handleOptionSelect(option)}>
                                                <Text style={styles.options}>{option.label}</Text>
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                </View>
                            )}
                        </View>
                    </ScrollView>

                    {currentStepData.inputRequired && (
                        <View style={{ backgroundColor: "#E2E2DF", paddingHorizontal: 10, borderRadius: 37, flexDirection: "row", alignItems: "center" }}>
                            <TouchableOpacity>
                                <SvgAttachmentIcon />
                            </TouchableOpacity>
                            <TextInput
                                ref={inputRef}
                                style={{ width: "95%", padding: 10 }}
                                placeholder="Type your response here..."
                                value={inputValue}
                                onChangeText={setInputValue}
                                onSubmitEditing={handleInputSubmit}
                            />
                        </View>
                    )}
                </View>
            </GradientBackgroundComponent>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    options: {
        backgroundColor: "#F0F0F0",
        padding: 10,
        borderRadius: 8,
        fontSize: 14,
        marginTop: 10
    },
    rightContainer: {
        alignSelf: 'flex-end',
        flexDirection: "row",
        marginBottom: 10
    },
    leftContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        marginBottom: 10

    },
    leftMessage: {
        width: "100%",
        padding: 10,
        backgroundColor: "#DADADA",
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        borderBottomRightRadius: 16,
        fontSize: 14,
        marginTop: 10
    },
    rightMessage: {

        padding: 10,
        backgroundColor: "#96C8D3",
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16,
        fontSize: 14,
        marginTop: 10
    },
    online: {
        height: 8,
        width: 8,
        backgroundColor: "#3EA95D",
        borderRadius: 50,
        position: "absolute",
        right: 0,
        bottom: 0
    },

    title: {
        textAlign: "center",
        fontSize: 24,
        marginBottom: 20,
        color: "#595959",
    },



});
