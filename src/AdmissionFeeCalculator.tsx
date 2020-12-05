import React, {useState} from 'react';
import Summary from './Summary';
import Detail from './Detail';
import {FeeClassification} from './types';

    const adults: FeeClassification = {
          name: "大人",
          description: "",
          unitPrice: 1000,
          numOfPeople: 0,
          totalPrice: 0,
        };
        const students: FeeClassification = {
          name: "学生",
          description: "中学生・高校生",
          unitPrice: 700,
          numOfPeople: 0,
          totalPrice: 0,
        };
        const children: FeeClassification = {
          name: "子ども",
          description: "小校生",
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

// クラスの配列を作る
const AdmissionFeeCalculator: React.FC = ()=>{

    // constructor(props: {}) {
    //     super(props);
    //     const adults: FeeClassification = {
    //       name: "大人",
    //       description: "",
    //       unitPrice: 1000,
    //       numOfPeople: 0,
    //       totalPrice: 0,
    //     };
    //     const students: FeeClassification = {
    //       name: "学生",
    //       description: "中学生・高校生",
    //       unitPrice: 700,
    //       numOfPeople: 0,
    //       totalPrice: 0,
    //     };
    //     const children: FeeClassification = {
    //       name: "子ども",
    //       description: "小校生",
    //       unitPrice: 300,
    //       numOfPeople: 0,
    //       totalPrice: 0,
    //     };

    //     const infants: FeeClassification = {
    //       name: "幼児",
    //       description: "未就学",
    //       unitPrice: 0,
    //       numOfPeople: 0,
    //       totalPrice: 0,
    //     };
    //     this.state = { feeClassifications: [adults, students, children, infants] };
    // http://js.studio-kingdom.com/react/component_api/set_state
    //   }
      


      //   // 人数と合計額以外は既存の値をコピー
      //   const newFC: FeeClassification =
      //     Object.assign({}, currentFC, { numOfPeople: num, totalPrice: newTotalPrice });
      //   // 新たな配列を生成
      //   const feeClassifications = this.state.feeClassifications.slice();
      //   feeClassifications[idx] = newFC;
    
      //   // stateの更新
      //   setpeople( people);
      // }
    
      // render() {
      const [feeClassifications, setFeeClassifications] = useState<FeeClassification[]>([adults, students, children, infants]);
      
        const handleNumOfPeopleChange = (idx: number, num: number)=> {
          const currentFC = feeClassifications[idx];
          const newTotalPrice = currentFC.unitPrice * num;
          const newFC: FeeClassification =
          Object.assign({}, currentFC, { numOfPeople: num, totalPrice: newTotalPrice });// 新規json{}を用意して、複製
          // obj9 {... obj1}
          const newfeeClassifications = [...feeClassifications];
          newfeeClassifications[idx] = newFC;
          setFeeClassifications(newfeeClassifications);
        }
      // const details = feeClassifications.map((fc, idx) => {
      //   return (
      //       <Detail key={idx.toString()} classification={fc}
      //         onNumOfPeopleChange={n => handleNumOfPeopleChange(idx, n)} />
      //   );
      // });
      //   const numOfPeople = feeClassifications.map(fc => fc.numOfPeople).reduce((p, c) => p + c);
      //   const totalAmount = feeClassifications.map(fc => fc.totalPrice).reduce((p, c) => p + c);


    return (
        <>
             {feeClassifications.map((fc, idx) =>(
                <Detail key={idx.toString()} classification={fc} onNumOfPeopleChange={n => handleNumOfPeopleChange(idx, n)} />
             ))}
            <Summary numOfPeople={feeClassifications.map(fc => fc.numOfPeople).reduce((p, c) => p + c)} totalAmount={feeClassifications.map(fc => fc.totalPrice).reduce((p, c) => p + c)} />
        </>
    );
}
// reduce（初期値,　

export default AdmissionFeeCalculator;
