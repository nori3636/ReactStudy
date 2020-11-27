import React, {useState} from 'react';
import Summary from './Summary';
import Detail from './Detail';
import {FeeClassification,AdmissionFeeCalculatorState} from './types';

// クラスの配列を作る
const AdmissionFeeCalculator: React.FC<AdmissionFeeCalculatorState>=props=>{
    const [adults, students, children, infants]  = useState(0);
        const adults: FeeClassification = {
            name: "大人",
            description: "",
            unitPrice: 1000,
            numOfPeople: 0,
            totalPrice: 0,
        };
        const students: FeeClassification = {
            name: "学生",
            description: "中学生",
            unitPrice: 700,
            numOfPeople: 0,
            totalPrice: 0,
        };
        const children: FeeClassification = {
            name: "子ども",
            description: "小学生",
            unitPrice: 300,
            numOfPeople: 0,
            totalPrice: 0,
        };
        const infants: FeeClassification = {
            name: "幼児",
            description: "未就学",
            unitPrice: 0,
            numOfPeople: 0,
            totalPrice: 0,
        };
        this.state = { feeClassifications: [adults, students, children, infants] };
    }

    // chengeイベントの処理
    chandleNumOfPeopleChange(idx: number, num: number) {
        const currentFC = state.feeClassifications[idx];
        const newTotalPrice = currentFC.unitPrice * num;
        // 今あるものをコピペ。ただしトータルは変更
        const newFC: FeeClassification =　Object.assign({}, currentFC, { numOfPeople: num, totalPrice: newTotalPrice });
        const feeClassifications = state.feeClassifications.slice();　//型宣言しなおしてる？
        feeClassifications[idx] = newFC;
        this.setState({ feeClassifications: feeClassifications });
    }
        const details = this.state.feeClassifications.map((fc, idx) => {
            return (
                <Detail key={idx.toString()} classification={fc} onNumOfPeopleChange={n => this.handleNumOfPeopleChange(idx, n)} />
            );
        });
        const numOfPeople = this.state.feeClassifications.map(fc => fc.numOfPeople).reduce((p, c) => p + c);
        const totalAmount = this.state.feeClassifications.map(fc => fc.totalPrice).reduce((p, c) => p + c);

        return (
            <>
                {details}
                <Summary numOfPeople={numOfPeople} totalAmount={totalAmount} />
            </>
        );
    }
}

export default AdmissionFeeCalculator;
