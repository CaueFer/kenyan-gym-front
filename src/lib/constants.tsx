import { Plano } from "./interface";

const AULAS_INITIAL_VALUE = [
  "muay thai",
  "fitness",
  "mma",
  "bjj",
  "boxing",
  "recuperação",
];

const PLANOS_INITIAL_VALUE: Plano[] = [
  {
    title: "ALPHA S",
    price: 129.0,
    currency: "R$",
    perMonth: true,
    planInfos: {
      duration: {
        title: "Duração mínima do contrato",
        value: "24 meses",
      },
      registrationFee: {
        title: "Taxa de inscrição",
        value: 49.9,
      },
      extension: {
        title: "Extensão",
        value: "Ilimitado após 12 meses",
      },
      noticePeriod: {
        title: "Período de aviso prévio",
        value: "30 dias",
      },
      courseParticipations: {
        title: "Participações em cursos por mês",
        value: 4,
      },
      independentTraining: {
        title: "Treinamento independente",
        value: "Ilimitado*",
      },
      seminarDiscount: {
        title: "Desconto em seminários",
        value: "sim",
      },
    },
  },
  {
    title: "ALPHA M",
    price: 179.0,
    currency: "R$",
    perMonth: true,
    planInfos: {
      duration: {
        title: "Duração mínima do contrato",
        value: "24 meses",
      },
      registrationFee: {
        title: "Taxa de inscrição",
        value: 49.9,
      },
      extension: {
        title: "Extensão",
        value: "Ilimitado após 24 meses",
      },
      noticePeriod: {
        title: "Período de aviso prévio",
        value: "30 dias",
      },
      courseParticipations: {
        title: "Participações em cursos por mês",
        value: 8,
      },
      independentTraining: {
        title: "Treinamento independente",
        value: "Ilimitado*",
      },
      seminarDiscount: {
        title: "Desconto em seminários",
        value: "sim",
      },
    },
  },
  {
    title: "ALPHA L",
    price: 209.0,
    currency: "R$",
    perMonth: true,
    planInfos: {
      duration: {
        title: "Duração mínima do contrato",
        value: "24 meses",
      },
      registrationFee: {
        title: "Taxa de inscrição",
        value: 49.9,
      },
      extension: {
        title: "Extensão",
        value: "Ilimitado após 24 meses",
      },
      noticePeriod: {
        title: "Período de aviso prévio",
        value: "30 dias",
      },
      courseParticipations: {
        title: "Participações em cursos por mês",
        value: 12,
      },
      independentTraining: {
        title: "Treinamento independente",
        value: "Ilimitado*",
      },
      seminarDiscount: {
        title: "Desconto em seminários",
        value: "sim",
      },
    },
    bestSeller: true,
  },
  {
    title: "ALPHA ULTRA",
    price: 259.0,
    currency: "R$",
    perMonth: true,
    planInfos: {
      duration: {
        title: "Duração mínima do contrato",
        value: "24 meses",
      },
      registrationFee: {
        title: "Taxa de inscrição",
        value: 49.9,
      },
      extension: {
        title: "Extensão",
        value: "Ilimitado após 24 meses",
      },
      noticePeriod: {
        title: "Período de aviso prévio",
        value: "30 dias",
      },
      courseParticipations: {
        title: "Participações em cursos por mês",
        value: "Ilimitado",
      },
      independentTraining: {
        title: "Treinamento independente",
        value: "Ilimitado*",
      },
      seminarDiscount: {
        title: "Desconto em seminários",
        value: "sim",
      },
    },
  },
];

export const Constants = {
  AULAS_INITIAL_VALUE,
  PLANOS_INITIAL_VALUE,
};
