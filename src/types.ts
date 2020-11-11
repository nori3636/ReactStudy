type FeeClassification = {
    name: string;
    description: string;
    unitPrice: number;
    numOfPeople: number;
    totalPrice: number;
}
export type DetailProps = {
    classification: FeeClassification;
}

export type DetailsState ={
    numOfPeople:number;
}

export type DetailState = {
    numOfPeople: number;
}

export type AdmissionFeeCalculatorState = {
    feeClassfications: FeeClassification[];
}