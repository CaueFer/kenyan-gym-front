export interface Plano {
  title: string;
  price: number;
  currency: string;
  perMonth: boolean;
  planInfos: {
    duration: {
      title: string;
      value: string;
    };
    registrationFee: {
      title: string;
      value: number;
    };
    extension: {
      title: string;
      value: string;
    };
    noticePeriod: {
      title: string;
      value: string;
    };
    courseParticipations: {
      title: string;
      value: number | string;
    };
    independentTraining: {
      title: string;
      value: string;
    };
    seminarDiscount: {
      title: string;
      value: string;
    };
  };
  bestSeller?: boolean;
}
