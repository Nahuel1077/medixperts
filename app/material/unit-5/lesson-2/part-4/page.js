'use client'
import Aside from "../../../../components/aside";
import Class from "../../../../components/class";
import { useAuth } from "../../../../hooks/useAuth";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const lessonData = {
  id: "unit4-title",
  unitTitle: "Lesson 2 - Part 4: Healthcare Billing, Insurance & Payments",
  description: null,
  nextLesson: "/material/unit-5/lesson-3",
  prevLesson: "/material/unit-5/lesson-2/part-3",
  restart: "/material/unit-5",
  courseNumber: 5,
  currentStep: 3,
  totalSteps: 4,
};

export default function Lesson2() {
  const { user, loading } = useAuth();
  
  const medicalBilling = [
    {title:"Medical Billing (Facturación médica)"},
    {english: "Medical bill", español: "Factura médica"},
    {english: "Hospital bill", español: "Factura del hospital"},
    {english: "Estimate", español: "Presupuesto"},
    {english: "Statement", español: "Estado de cuenta"},
    {english: "Balance", español: "Saldo"},
    {english: "Outstanding balance", español: "Saldo pendiente"},
    {english: "Partial payment", español: "Pago parcial"},
    {english: "Full payment", español: "Pago completo"},
    {english: "Due date", español: "Fecha de vencimiento"},
    {english: "Late fee", español: "Cargo por pago atrasado / Recargo por mora"},
    {english: "Payment plan", español: "Plan de pagos"},
    {english: "Monthly Installment", español: "Cuota mensual"},
    {english: "Payment receipt", español: "Comprobante de pago"},
    {english: "Billing department", español: "Departamento de facturación"},
    {english: "Financial assistance / aid", español: "Asistencia financiera / Ayuda económica"},
    {english: "Charity care", español: "Programa de asistencia médica por caridad"},
    {english: "Itemized bill", español: "Factura detallada"},
  ]
  
  const healthInsurance = [
    {title:"Health Insurance (Seguro médico)"},
    {english: "Health insurance", español: "Seguro médico"},
    {english: "Insurance company", español: "Compañía de seguros"},
    {english: "Insurance card", español: "Tarjeta del seguro"},
    {english: "Insurance policy", español: "Póliza de seguro"},
    {english: "Insurance coverage", español: "Cobertura del seguro"},
    {english: "Covered service", español: "Servicio cubierto"},
    {english: "Referral", español: "Referencia / Remisión (médica)"},
    {english: "In-network provider", español: "Proveedor afiliado (a la red)"},
    {english: "Out-of-network provider", español: "Proveedor no afiliado (a la red)"},
    {english: "Authorization letter", español: "Carta de autorización"},
    {english: "Insurance claim", español: "Reclamo al seguro"},
    {english: "Claim number", español: "Número de reclamo"},
    {english: "Appeal", español: "Apelación"},
    {english: "Explanation of Benefits (EOB)", español: "Explicación de beneficios (EOB)"},
    {english: "Allowed amount", español: "Monto permitido"},
    {english: "Balance billing", español: "Facturación del saldo"},
  ]
  
  const financialResp = [
    {title: "Patient Financial Responsibility (Responsabilidad financiera del paciente)"},
    {english: "Copayment (copay)", español: "Copago"},
    {english: "Coinsurance", español: "Coseguro"},
    {english: "Deductible", español: "Deductible"},
    {english: "Out-of-pocket cost", español: "Gasto de bolsillo"},
    {english: "Out-of-pocket maximum", español: "Límite máximo de gastos de bolsillo"},
    {english: "Self-pay", español: "Pago particular"},
    {english: "Guarantor", español: "Responsable financiero"},
    {english: "Account number", español: "Número de cuenta"},
    {english: "Past due", español: "Pago vencido / Monto vencido"},
    {english: "Collections", español: "Cobranzas"},
    {english: "Payment arrangement", español: "Acuerdo de pago"},
    {english: "Reimbursement/Refund", español: "Reembolso"},
    {english: "Credit balance", español: "Saldo a favor"}
  ]

  if (loading) {return <div className="flex justify-center items-center h-screen">
    <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  };
  return (
    <div className="flex xl:flex-row flex-col bg-black min-h-screen">
      <Aside />
      <Class lessonData={lessonData}>
          <div className="flex flex-col items-center p-4 gap-14">
            <p>Below you will find some of the most common billing, insurance, and payment-related terms encountered during medical interpreting assignments. Becoming familiar with this vocabulary will help you confidently navigate conversations involving medical bills, insurance coverage, claims, and patient financial responsibility.</p>
            <table className="w-full max-w-2xl border-collapse border border-gray-300">
              <thead>
                <tr className="bg-blue-500">
                  <th colSpan={2} className="p-4 text-center border border-gray-300">
                    <h2 className="text-xl font-bold">{medicalBilling[0].title}</h2>
                  </th>
                </tr>
                <tr className="bg-gray-50">
                  <th className="p-3 border border-gray-300 text-left text-black">English</th>
                  <th className="p-3 border border-gray-300 text-left text-black">Español</th>
                </tr>
              </thead>
              <tbody>
                {medicalBilling.slice(1).map((item, index) => (
                  <tr key={index} className="hover:bg-gray-800">
                    <td className="p-3 border border-gray-300">{item.english}</td>
                    <td className="p-3 border border-gray-300 font-medium">{item.español}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            <table className="w-full max-w-2xl border-collapse border border-gray-300">
              <thead>
                <tr className="bg-blue-500">
                  <th colSpan={2} className="p-4 text-center border border-gray-300">
                    <h2 className="text-xl font-bold">{healthInsurance[0].title}</h2>
                  </th>
                </tr>
                <tr className="bg-gray-50">
                  <th className="p-3 border border-gray-300 text-left text-black">English</th>
                  <th className="p-3 border border-gray-300 text-left text-black">Español</th>
                </tr>
              </thead>
              <tbody>
                {healthInsurance.slice(1).map((item, index) => (
                  <tr key={index} className="hover:bg-gray-800">
                    <td className="p-3 border border-gray-300">{item.english}</td>
                    <td className="p-3 border border-gray-300 font-medium">{item.español}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <table className="w-full max-w-2xl border-collapse border border-gray-300">
              <thead>
                <tr className="bg-blue-500">
                  <th colSpan={2} className="p-4 text-center border border-gray-300">
                    <h2 className="text-xl font-bold">{financialResp[0].title}</h2>
                  </th>
                </tr>
                <tr className="bg-gray-50">
                  <th className="p-3 border border-gray-300 text-left text-black">English</th>
                  <th className="p-3 border border-gray-300 text-left text-black">Español</th>
                </tr>
              </thead>
              <tbody>
                {financialResp.slice(1).map((item, index) => (
                  <tr key={index} className="hover:bg-gray-800">
                    <td className="p-3 border border-gray-300">{item.english}</td>
                    <td className="p-3 border border-gray-300 font-medium">{item.español}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex flex-col gap-4 p-4 text-justify">
                <h1>Continue Expanding Your Knowledge</h1>
                <p>Remember that the purpose of this activity is to introduce some of the billing, insurance,
                and payment-related terminology most commonly encountered during medical
                interpreting assignments. The more familiar you become with healthcare billing,
                insurance coverage, payment processes, and patient financial responsibility, the more
                confidently and accurately you will be able to interpret these conversations in real
                healthcare settings.</p>
                <ul className="list-disc flex flex-col gap-2">
                    <Link href="https://www.cms.gov/medical-bill-rights/help/guides/health-insurance-terms" className='text-blue-500 hover:text-white hover:underline hover:decoration-white'>Health insurance terms you should know | CMS</Link>
                    <Link href="https://www.mayoclinic.org/billing-insurance/glossary" className='text-blue-500 hover:text-white hover:underline hover:decoration-white'>Glossary of billing and insurance terms - Mayo Clinic</Link>
                    <Link href="https://www.scripps.org/patients-and-visitors/billing/glossary" className='text-blue-500 hover:text-white hover:underline hover:decoration-white'>Medical Billing Glossary - Scripps Health</Link>
                    <Link href="https://www.cms.gov/" className='text-blue-500 hover:text-white hover:underline hover:decoration-white'>Home - Centers for Medicare & Medicaid Services | CMS</Link>
                    <Link href="https://www.healthcare.gov/" className='text-blue-500 hover:text-white hover:underline hover:decoration-white'>Welcome to the Health Insurance Marketplace | HealthCare.gov</Link>
                </ul>
            </div>            
        </div>
      </Class>
    </div>
  );
}