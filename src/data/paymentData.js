// src/data/paymentData.js
// Datos de métodos de pago — completar todos los campos marcados con TODO

export const paymentMethods = [
  {
    id: 1,
    icon: "bi-bank",
    name: "BanBif — Soles (PEN)",
    type: "Transferencia bancaria",
    details: {
      // TODO: Reemplazar con el nombre completo del titular de la cuenta
      "Titular": "Daniel Ibañez",
      // TODO: Reemplazar con el número de cuenta BanBif en soles
      "N° de cuenta": "008031199700",
      // TODO: Reemplazar con el CCI de la cuenta BanBif en soles
      "CCI": "03820110803119970002",
      "Moneda": "Soles (S/)"
    }
  },
  {
    id: 2,
    icon: "bi-bank2",
    name: "BanBif — Dólares (USD)",
    type: "Transferencia bancaria",
    details: {
      // TODO: Reemplazar con el nombre completo del titular de la cuenta
      "Titular": "Daniel Ibañez",
      // TODO: Reemplazar con el número de cuenta BanBif en dólares
      "N° de cuenta": "008033965045",
      // TODO: Reemplazar con el CCI de la cuenta BanBif en dólares
      "CCI": "03820120803396504509",
      "Moneda": "Dólares ($)"
    }
  },
  {
    id: 3,
    icon: "bi-phone",
    name: "Plin / Banbif",
    type: "Pago por celular",
    details: {
      // TODO: Reemplazar con el número de celular registrado en Plin (ej. +51 9XX XXX XXX)
      "Número": "932636771",
      // TODO: Reemplazar con el nombre que aparece en Plin
      "A nombre de": "Daniel Ibañez"
    }
  },
  {
    id: 4,
    icon: "bi-paypal",
    name: "PayPal",
    type: "Pago internacional",
    details: {
      // TODO: Reemplazar con el link de PayPal.me del equipo (ej. paypal.me/rifastarthack)
      "Link de pago": "https://paypal.me/DANIEIBANEZ",
      "Nota": "Ideal para pagos desde el extranjero"
    }
  }
];

export const contactAfterPayment = {
  // TODO: Reemplazar con el número de WhatsApp con código de país (ej. +51987654321)
  whatsapp: "+51932636771",
  // TODO: Reemplazar con el email del equipo (ej. rifastarthack@gmail.com)
  email: "latdanieiba@gmail.com",
  message:
    "Después de realizar tu pago, envíanos tu comprobante indicando: nombre completo, monto y servicio o cantidad de boletos."
};

// Datos del progreso de recaudación — actualizar conforme avance la campaña
export const fundraisingProgress = {
  // TODO: Actualizar 'raised' con el monto recaudado en soles conforme lleguen pagos
  raised: 0,
  goal: 40000,
  // TODO: Actualizar 'supporters' con la cantidad real de personas que han apoyado
  supporters: 0
};
