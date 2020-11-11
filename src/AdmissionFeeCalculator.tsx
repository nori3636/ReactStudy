import React from 'react';
import Summary from './Summary';
import Detail from './Detail';
import { AdmissionFeeCalculatorState } from './types';


type FeeClassification = {
    name: string;
    description: string;
    unitPrice: number;
    numOfPeople: number;
    totalPrice: number;
}
type DetailProps = {
    classification: FeeClassification;
}

class AdmissionFeeCalculator extends React.Component<{},AdmissionFeeCalculatorState>{
    private details: DetailProps[] = [
        {
            classification: {
                name: "大人",
                description: "",
                unitPrice: 1000,
                numOfPeople: 0,
                totalPrice: 0
            }
        },
        {
            classification: {
                name: "学生",
                description: "中学生・高校生",
                unitPrice: 700,
                numOfPeople: 0,
                totalPrice: 0,
            }
        },
        {
            classification: {
                    name: "子ども",
                    description: "小学生",
                    unitPrice: 300,
                    numOfPeople: 0,
                    totalPrice: 0,
            }
        },
        {
            classification: {
                name: "幼児",
                description: "未就学",
                unitPrice: 0,
                numOfPeople: 0,
                totalPrice: 0,
            }
        },
    ];

    render() {
        const detailsJsx = this.details.map((fc, idx) => {//イマイチ理解できてない
            return (
                <Detail key={idx.toString()} classification={fc.classification} />
            );
        });
        return (
            <>
                {detailsJsx}
                <Summary />
            </>
        );
    }
}

export default AdmissionFeeCalculator;
