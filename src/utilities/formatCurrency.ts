const CURRENCY_FORMATTER = new Intl.NumberFormat('de-DE', {
    style: 'currency', currency: 'EUR'
})

export function formatCurrency (price: number) {
    return CURRENCY_FORMATTER.format(price)
}