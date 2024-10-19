'use client'

import { usePathname } from "next/navigation";
import { AccordionFAQPayment, AccordionFAQShipping, AccordionFAQGeneralTerms, AccordionFAQPrivacyPolicy, AccordionFAQCookiePolicy } from "./AccordionFAQ"

enum DataEnum {
    PAYMENTS = 'payments',
    SHIPPING_AND_RETURN = 'shipping-and-return',
    GENERAL_TERMS = 'general-terms',
    PRIVACY_POLICY = 'privacy-policy',
    COOKIE_POLICY = 'cookie-policy'
}

export default function DataPage() {
    const path = usePathname().split('/').pop();
    if (path === DataEnum.PAYMENTS) return <AccordionFAQPayment />
    if (path === DataEnum.SHIPPING_AND_RETURN) return <AccordionFAQShipping />
    if (path === DataEnum.GENERAL_TERMS) return <AccordionFAQGeneralTerms />
    if (path === DataEnum.PRIVACY_POLICY) return <AccordionFAQPrivacyPolicy />
    if (path === DataEnum.COOKIE_POLICY) return <AccordionFAQCookiePolicy />
}
